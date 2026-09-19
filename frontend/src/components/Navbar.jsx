import React from 'react';
import { ShieldCheck, Cpu, Mic, Database, Activity, Sparkles, Snowflake, Network } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: Activity },
    { id: 'privacy', label: 'Privacy Guard', icon: ShieldCheck },
    { id: 'profiler', label: 'NPU Benchmarker', icon: Cpu },
    { id: 'context', label: 'Task Context Graph', icon: Network },
    { id: 'thermal', label: 'SnapCooler (Thermal)', icon: Snowflake },
    { id: 'voice', label: 'Voice Assistant', icon: Mic },
    { id: 'knowledge', label: 'Knowledge Base', icon: Database },
  ];

  return (
    <nav className="bg-[#131B2E] border-b border-gray-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-400 flex items-center justify-center shadow-lg shadow-red-900/30">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight text-white">SnapGuardian <span className="text-red-500 font-mono">AI</span></span>
            <span className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Snapdragon X NPU
            </span>
          </div>
          <p className="text-xs text-gray-400">Qualcomm AI Hub Engine for HP Omnibook PCs</p>
        </div>
      </div>

      <div className="flex space-x-1 bg-[#0B0F19] p-1.5 rounded-xl border border-gray-800 overflow-x-auto max-w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/20'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
