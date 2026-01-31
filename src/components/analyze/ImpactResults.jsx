import React from 'react';

// 1. Add 'hideHeader = false' to the props
export default function ImpactResults({ projectName, hideHeader = false }) {
  const scores = [
    { label: "NOISE", score: 85, status: "High Risk - Alert", color: "text-red-500", border: "border-red-500" },
    { label: "TRAFFIC", score: 90, status: "Critical Congestion", color: "text-red-500", border: "border-red-500" },
    { label: "AIR QUALITY", score: 45, status: "Moderate Impact", color: "text-yellow-500", border: "border-yellow-500" },
    { label: "SAFETY", score: 15, status: "Low Risk - Safe", color: "text-green-500", border: "border-green-500" },
  ];

  return (
    // 2. Remove the inline height: '100vh' so it scrolls naturally within the parent container
    <div className="p-8 overflow-y-auto custom-scrollbar bg-[#0b1120]" style={{ width: '480px' }}>
      
      {/* 3. Wrap your header in this condition so it only shows when NOT scaling */}
      {!hideHeader && (
        <div className="mb-8">
          <p className="text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-1">
            Projects / {projectName || "Simulation"}
          </p>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Impact Results</h1>
          <p className="text-gray-400 text-sm italic">Based on projected construction data for Q3 2026.</p>
        </div>
      )}

      {/* Score Grid - Everything below this will scale in AnalyzePage */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {scores.map((s) => (
          <div key={s.label} className={`bg-white/5 border-t-4 ${s.border.replace('500', '500/50')} p-5 rounded-xl shadow-lg transition-all`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{s.label}</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black">{s.score}</span>
              <span className="text-xs text-gray-500">/100</span>
            </div>
            <p className={`text-[10px] font-bold mt-2 ${s.color}`}>{s.status}</p>
            <button className="text-[10px] text-blue-400 mt-2 hover:underline">Why this score? ▾</button>
          </div>
        ))}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl tracking-tight">Mitigation Recommendations</h3>
          <span className="bg-blue-600/10 text-blue-400 text-[9px] px-2 py-1 rounded font-bold border border-blue-500/20 uppercase">AI Recommended</span>
        </div>

        <div className="space-y-4">
          {[
            { title: "Install noise barriers", detail: "Install 3-meter acoustic fencing around the northern perimeter. Projected noise reduction: -12dB." },
            { title: "Reroute heavy vehicles", detail: "Shift logistics to Gate B between 10 PM and 5 AM." },
            { title: "Dust suppression schedule", detail: "Increase watering frequency to 4x daily during dry spells." },
            { title: "Restrict night-time operations", detail: "Limit high-impact drilling between 11 PM and 6 AM." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex justify-between items-center">
                <span className="text-base font-bold group-hover:text-blue-400 transition">{item.title}</span>
                <span className="text-gray-500 group-hover:translate-x-1 transition-transform">›</span>
              </div>
              {i === 0 && <p className="text-xs text-gray-400 mt-3 leading-relaxed">{item.detail}</p>}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-5 rounded-2xl mt-10 mb-4 flex items-center justify-center gap-3 transition shadow-xl">
        <span>📊</span> Export Full Impact Report
      </button>
    </div>
  );
}