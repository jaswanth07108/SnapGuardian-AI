# Technical Architecture & Thermal Offload Blueprint
## SnapGuardian AI & SnapCooler on Snapdragon HP PCs

---

### 1. Thermal Management & NPU Offload Architecture

When running modern 3D games or heavy IDE build tasks, standard CPU/GPU cores operate near thermal limits (75°C–85°C). Running concurrent background AI models (such as screen vision monitors or voice transcribers) on the CPU causes severe thermal throttling.

```
+-----------------------------------------------------------------------------------+
|                        SnapCooler Dynamic Workload Allocator                      |
+-----------------------------------------------------------------------------------+
       |                                                               |
       | High CPU Heat Detected (>70°C)                               | NPU Offload Active
       v                                                               v
+--------------------------+                               +------------------------+
|   Standard CPU Execution |                               | Hexagon NPU Execution  |
|  - Temp: 82.5°C          |                               |  - Temp: 35.1°C        |
|  - TDP: 8.5W - 15.0W     |                               |  - TDP: 1.2W           |
|  - Fan: High Noise       |                               |  - Fan: Silent         |
+--------------------------+                               +------------------------+
```

---

### 2. Software & API Architecture

SnapGuardian AI integrates five core modules:
1. `npu_engine.py`: ONNX Runtime DirectML / QNN Execution Provider manager.
2. `thermal_engine.py`: Real-time SoC thermal telemetry and dynamic NPU task offloader.
3. `pii_redactor.py`: Real-time vision-based credential obfuscator.
4. `voice_processor.py`: Local Whisper STT and automated action items generator.
5. `knowledge_base.py`: MiniLM INT8 local vector semantic search.
