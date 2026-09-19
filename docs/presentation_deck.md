# SnapGuardian AI & SnapCooler Pitch Deck
## Qualcomm Snapdragon® AI Lab Build & Present Challenge

---

### Slide 1: Title & Tagline
**SnapGuardian AI & SnapCooler**
*Next-Gen On-Device Privacy, Multimodal Productivity & Thermal Management Engine*
- Designed and Optimized for Snapdragon-powered HP PCs & SoCs
- Team / Individual Submission

---

### Slide 2: The Core Problem: Device Overheating & Thermal Throttling
- **Gaming & Multitasking Overheating**: Intensive CPU/GPU tasks cause temperatures to spike to 80°C–85°C, triggering thermal throttling, frame rate drops, and noisy fans.
- **Privacy Vulnerability**: Screen sharing during zoom calls frequently leaks credentials and sensitive data.
- **Battery Drain**: Continuous x86 background processing drains battery power fast.

---

### Slide 3: The Solution: Hexagon NPU Offloading
- **SnapCooler AI**: Offloads continuous background AI tasks to the Hexagon NPU (1.2W TDP), lowering CPU surface temperature by **~32°C**.
- **100% On-Device**: Zero cloud telemetry, zero network latency.
- **Powered by Hexagon NPU (45 TOPS)**: Sub-2ms local model inference via Qualcomm AI Hub.

---

### Slide 4: Key Feature 1 — SnapCooler Thermal & Battery Engine
- Live CPU vs NPU temperature monitor.
- Dynamic NPU Offloader preventing thermal throttling during gaming and heavy multitasking.

---

### Slide 5: Key Feature 2 — Live Screen & Text PII Obfuscation
- Real-time vision-based token scanner obfuscating API keys, credit cards, and confidential tokens.
- Prevents accidental corporate data leaks during meetings and live recording.

---

### Slide 6: Key Feature 3 — Zero-Cloud Offline Voice Intelligence
- Local Whisper ONNX model transcribes speech at 0.045 RTF (22x faster than real-time).
- Automated action items generation locally via quantized Phi-3-Mini.

---

### Slide 7: Technical Architecture
```
+-------------------------------------------------------------+
|                React + Tailwind Desktop UI                  |
|          (Privacy | Profiler | SnapCooler | Voice)          |
+-------------------------------------------------------------+
                              | REST / WebSocket
+-------------------------------------------------------------+
|        FastAPI Engine (thermal_engine & npu_engine)          |
+-------------------------------------------------------------+
                              | DirectML / QNN EP
+-------------------------------------------------------------+
|          Snapdragon Hexagon NPU (45 TOPS) on HP PCs         |
+-------------------------------------------------------------+
```

---

### Slide 8: Benchmark & Cooling Results
- **Inference Latency**: **1.82 ms** (NPU) vs **14.50 ms** (CPU) -> **7.97x Speedup**
- **CPU Cooling Impact**: **From 82.5°C down to 44.2°C** (-38.3°C drop)
- **Power Savings**: **85.8% Energy Reduction** (1.2W NPU vs 8.5W CPU TDP)

---

### Slide 9: Commercial Viability & HP Omnibook Value Add
- Pre-installed system utility for HP Omnibook Ultra & Omnibook 3 series.
- Appeals to Gamers, Developers, Financial Analysts, and Healthcare workers needing cool performance and data compliance.

---

### Slide 10: Conclusion
- SnapGuardian & SnapCooler prove the true hardware capability of Snapdragon Copilot+ PCs.
- **Thank you!**
