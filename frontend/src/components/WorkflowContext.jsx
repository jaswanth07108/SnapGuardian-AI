import React, { useState } from 'react';

export default function WorkflowContext() {
  const [logInput, setLogInput] = useState("KeyError: 'DATABASE_URL' in app.py line 24\nTraceback (most recent call last):\n  File 'app.py', line 24, in init_db\n    url = os.environ['DATABASE_URL']");
  const [codeSnippet, setCodeSnippet] = useState("def init_db():\n    url = os.environ['DATABASE_URL']\n    return create_engine(url)");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/context/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          raw_log: logInput,
          code_snippet: codeSnippet,
          active_app: 'VS Code',
          project_name: 'SnapGuardianAI'
        })
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">🕸️</span>
              Developer Workflow & Task Context Graph
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              On-device context graph builder & proactive stack-trace analyzer running locally on Snapdragon Hexagon NPU.
            </p>
          </div>
          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono rounded-full">
            100% Offline Task Graph
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-2">Terminal Error / Log Stream</label>
            <textarea
              value={logInput}
              onChange={(e) => setLogInput(e.target.value)}
              rows={5}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-2">Active Code Snippet</label>
            <textarea
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
              rows={5}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm rounded-lg transition-all shadow-lg flex items-center gap-2"
        >
          {loading ? 'Building Graph...' : 'Build Context Graph & Analyze Root Cause'}
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              Proactive Root Cause & Recommendation
            </h3>
            
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm font-mono">
              <strong>Detected Event:</strong> {result.detected_event}
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
              <div className="text-xs text-slate-400 font-semibold uppercase">Root Cause Analysis</div>
              <p className="text-slate-200 text-sm">{result.root_cause_analysis}</p>
            </div>

            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg space-y-2">
              <div className="text-xs text-emerald-400 font-semibold uppercase">Proactive Recommended Fix</div>
              <p className="text-emerald-300 text-sm font-mono">{result.recommended_fix}</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-semibold text-white">Task Context Graph</h3>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-3">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Assistance Confidence:</span>
                <span className="text-indigo-400 font-bold font-mono">{result.assistance_confidence_score}%</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Graph Node Count:</span>
                <span className="text-white font-mono">{result.context_graph.node_count} nodes</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Sanitized PII Tokens:</span>
                <span className="text-emerald-400 font-mono">{result.pii_redactions_total} cleared</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-slate-400 font-semibold">Graph Nodes Topology</div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {result.context_graph.nodes.map((node, i) => (
                  <div key={i} className="px-3 py-1.5 bg-slate-950 rounded text-xs flex justify-between items-center border border-slate-800/80">
                    <span className="text-indigo-300 font-mono">{node.label}</span>
                    <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[10px] uppercase font-bold">{node.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
