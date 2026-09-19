import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PrivacyGuard from './components/PrivacyGuard';
import NpuProfiler from './components/NpuProfiler';
import WorkflowContext from './components/WorkflowContext';
import ThermalCooler from './components/ThermalCooler';
import VoiceAssistant from './components/VoiceAssistant';
import KnowledgeBase from './components/KnowledgeBase';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow max-w-7xl w-full mx-auto p-6 md:p-8">
        {activeTab === 'dashboard' && <Dashboard onNavigate={setActiveTab} />}
        {activeTab === 'privacy' && <PrivacyGuard />}
        {activeTab === 'profiler' && <NpuProfiler />}
        {activeTab === 'context' && <WorkflowContext />}
        {activeTab === 'thermal' && <ThermalCooler />}
        {activeTab === 'voice' && <VoiceAssistant />}
        {activeTab === 'knowledge' && <KnowledgeBase />}
      </main>

      <footer className="border-t border-gray-800 py-6 px-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
        <div>
          SnapGuardian AI &copy; 2026 — Designed for Qualcomm Snapdragon AI Lab Challenge
        </div>
        <div className="mt-2 md:mt-0 font-mono text-gray-400">
          Target Hardware: HP Omnibook Ultra / Omnibook 3 (Snapdragon X Elite / X Plus)
        </div>
      </footer>
    </div>
  );
}
