import React from 'react';
import { Cpu, ShieldCheck, Zap, Lock, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Dashboard({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/60 via-[#131B2E] to-[#131B2E] border border-red-900/30 p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full text-xs font-semibold text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Snapdragon® AI Lab Challenge</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            On-Device Zero-Cloud Intelligence Engine
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            SnapGuardian AI runs 100% on-device on Qualcomm Snapdragon Hexagon NPUs (45 TOPS), providing real-time screen privacy protection, offline voice intelligence, and instant semantic search with zero cloud battery drain or network lag.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold text-sm transition shadow-lg shadow-red-950/50 flex items-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Launch Privacy Guard</span>
            </button>
            <button
              onClick={() => onNavigate('profiler')}
              className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 rounded-xl font-semibold text-sm transition flex items-center space-x-2"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Run NPU Benchmark</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-gray-400">NPU Capacity</span>
            <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><Cpu className="w-4 h-4" /></div>
          </div>
          <div className="text-2xl font-bold text-white">45 TOPS</div>
          <div className="text-xs text-gray-400 mt-1 flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3 h-3" /> Hexagon NPU Active
          </div>
        </div>

        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-gray-400">DirectML Latency</span>
            <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Zap className="w-4 h-4" /></div>
          </div>
          <div className="text-2xl font-bold text-white">1.8 ms</div>
          <div className="text-xs text-emerald-400 mt-1">3.8x faster than CPU</div>
        </div>

        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-gray-400">Energy Savings</span>
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Activity className="w-4 h-4" /></div>
          </div>
          <div className="text-2xl font-bold text-white">85.8%</div>
          <div className="text-xs text-gray-400 mt-1">1.2W NPU vs 8.5W CPU TDP</div>
        </div>

        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-gray-400">Data Privacy</span>
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Lock className="w-4 h-4" /></div>
          </div>
          <div className="text-2xl font-bold text-white">100% Local</div>
          <div className="text-xs text-gray-400 mt-1">Zero cloud telemetry</div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-white mb-2">Real-Time PII Obfuscation</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Scans active screen buffers and live audio streams for confidential credentials, API keys, and personal info, obscuring them instantly before external transmission.
          </p>
          <button onClick={() => onNavigate('privacy')} className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1">
            Explore Privacy Guard &rarr;
          </button>
        </div>

        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-white mb-2">Qualcomm AI Hub Profiler</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Compare model performance across CPU and Hexagon NPU execution providers in real-time, measuring frames per second, latency, and power metrics.
          </p>
          <button onClick={() => onNavigate('profiler')} className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            Open NPU Profiler &rarr;
          </button>
        </div>

        <div className="bg-[#131B2E] border border-gray-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-white mb-2">Zero-Cloud Knowledge Base</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Index and query your sensitive local code, design specs, and documents completely offline using MiniLM INT8 ONNX embeddings accelerated by DirectML.
          </p>
          <button onClick={() => onNavigate('knowledge')} className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
            Access Knowledge Base &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
