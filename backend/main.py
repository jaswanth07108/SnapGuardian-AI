import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional

from npu_engine import npu_engine
from pii_redactor import pii_engine
from voice_processor import voice_engine
from knowledge_base import knowledge_engine
from thermal_engine import thermal_engine
from context_engine import context_engine

app = FastAPI(
    title="SnapGuardian AI Unified Master API",
    description="Qualcomm AI Hub, Hexagon NPU Acceleration, PII Guard, Workflow Context Graph & Thermal Mitigation Engine for Snapdragon HP PCs",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PIIRequest(BaseModel):
    text: str

class SearchRequest(BaseModel):
    query: str
    top_k: Optional[int] = 2

class ThermalToggleRequest(BaseModel):
    enable: bool

class WorkflowAnalysisRequest(BaseModel):
    raw_log: str
    code_snippet: Optional[str] = ""
    active_app: Optional[str] = "VS Code"
    project_name: Optional[str] = "SnapGuardianAI"

@app.get("/api/info")
def get_app_info():
    return {
        "status": "ONLINE",
        "app_name": "SnapGuardian AI Master Platform",
        "target_hardware": "Qualcomm Snapdragon X Elite / X Plus (HP Omnibook Series)",
        "npu_tops": 45.0,
        "npu_status": "HARDWARE_ACCELERATED (DirectML / QNN EP)",
        "thermal_cooler_active": True,
        "qualcomm_ai_hub_ready": True,
        "workflow_context_graph_enabled": True
    }

@app.get("/api/npu/benchmark")
def get_npu_benchmark(model: str = "vision_pii", iterations: int = 50):
    return npu_engine.benchmark_inference(model_type=model, iterations=iterations)

@app.post("/api/privacy/redact")
def redact_pii_text(payload: PIIRequest):
    return pii_engine.scan_and_redact_text(payload.text)

@app.get("/api/privacy/simulate-frame")
def simulate_frame_redaction():
    return pii_engine.simulate_screen_frame_redaction()

@app.get("/api/voice/transcribe")
def transcribe_voice(duration: float = 5.0):
    return voice_engine.transcribe_audio_chunk(audio_duration_sec=duration)

@app.post("/api/voice/summary")
def summarize_meeting(payload: PIIRequest):
    return voice_engine.generate_executive_action_items(payload.text)

@app.post("/api/knowledge/search")
def search_local_docs(payload: SearchRequest):
    return knowledge_engine.search(payload.query, payload.top_k)

@app.get("/api/thermal/status")
def get_thermal_status():
    return thermal_engine.get_thermal_metrics()

@app.post("/api/thermal/offload")
def set_thermal_offload(payload: ThermalToggleRequest):
    return thermal_engine.toggle_offload(payload.enable)

@app.post("/api/context/analyze")
def analyze_workflow_context(payload: WorkflowAnalysisRequest):
    return context_engine.analyze_workflow(
        raw_log=payload.raw_log,
        code_snippet=payload.code_snippet,
        active_app=payload.active_app,
        project_name=payload.project_name
    )

# Serve Frontend Static Dist Assets
frontend_dist_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend", "dist"))
if os.path.exists(frontend_dist_path):
    app.mount("/assets", StaticFiles(directory=os.path.join(frontend_dist_path, "assets")), name="assets")

    @app.get("/{full_path:path}")
    def serve_frontend(full_path: str):
        file_path = os.path.join(frontend_dist_path, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(frontend_dist_path, "index.html"))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
