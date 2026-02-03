import React, { useState } from 'react';
import ChatbotIcon from "../chatbot/ChatbotIcon";


const Dashboard = ({ onCreateNew, projects }) => { // 1. Use the 'projects' prop
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempName, setTempName] = useState("");

  const handleNext = () => {
    if (tempName.trim()) {
      onCreateNew(tempName);
      setIsModalOpen(false);
    }
  };

  return (

    



    <div className="flex-1 p-6 overflow-y-auto bg-[#0b1120]">
      <div className="max-w-[75%] mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">Welcome back, Analyzer</h1>
            <p className="text-xl text-gray-400 font-medium">Manage your urban impact simulations and city vital reports.</p>
          </div>
              {/* Use ChatbotIcon here */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatbotIcon />
      </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-black text-lg py-4 px-8 rounded-xl flex items-center gap-3 shadow-xl shadow-blue-900/40 transition-all active:scale-95"
          >
            <span className="text-xl">+</span> New Analysis Project
          </button>
        </div>

        {/* Stats Section remains same... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: "Active Simulations", val: projects.length.toString(), color: "text-blue-400" },
            { label: "Reports Generated", val: "48", color: "text-purple-400" },
            { label: "Avg. AQI Impact", val: "Moderate", color: "text-yellow-400" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-all">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-4">{stat.label}</p>
              <p className={`text-4xl font-black ${stat.color} tracking-tighter`}>{stat.val}</p>
            </div>
          ))}
        </div>

        {/* Recent Projects Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl mb-10">
          <div className="p-10 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-bold text-2xl tracking-tight">Recent Projects</h3>
            <button className="text-blue-400 text-lg font-bold hover:text-blue-300 transition-colors">View All Reports</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 text-gray-500 uppercase text-xs font-black tracking-widest">
                <tr>
                  <th className="px-10 py-6">Project Name</th>
                  <th className="px-10 py-6">Date Created</th>
                  <th className="px-10 py-6">Status</th>
                  <th className="px-10 py-6">Impact Level</th>
                  <th className="px-10 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {/* 2. Map through the dynamic projects array */}
                {projects.map((proj, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-10 py-8 font-bold text-xl text-gray-100">{proj.name}</td>
                    <td className="px-10 py-8 text-lg text-gray-400 font-medium">{proj.date}</td>
                    <td className="px-10 py-8">
                      <span className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${
                        proj.status === 'Completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                        proj.status === 'Halted' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {proj.status}
                      </span>
                    </td>
                    <td className="px-10 py-8 font-bold text-lg text-gray-300">{proj.impact}</td>
                    <td className="px-10 py-8 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-blue-400 hover:text-blue-300 font-bold text-lg mr-6">Open</button>
                      <button className="text-gray-500 hover:text-red-400 font-bold text-lg">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal logic remains same... */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-white/10 p-10 rounded-3xl w-[500px] shadow-2xl">
            <h2 className="text-3xl font-bold mb-2">Project Name</h2>
            <p className="text-gray-400 mb-8">Give your simulation a clear title to identify it in your reports.</p>
            <input 
              autoFocus type="text" placeholder="e.g. Dwarka Expressway Phase 2" 
              value={tempName} onChange={(e) => setTempName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-lg text-white focus:border-blue-500 outline-none transition mb-8"
            />
            <div className="flex gap-4">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition">Cancel</button>
              <button onClick={handleNext} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
    

  );
};

export default Dashboard;