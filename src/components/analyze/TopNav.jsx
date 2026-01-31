import React from 'react';

export default function TopNav({ onBack, activeTab, setActiveTab }) {
  return (
    <nav className="h-20 border-b border-white/10 bg-[#0f172a] flex items-center justify-between px-8 z-30">
      <div className="flex items-center gap-12">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={onBack}
        >
          <div className="w-10 h-10 bg-blue-600 rotate-45 flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:bg-blue-500 transition-colors">
            <div className="w-5 h-5 bg-white -rotate-45"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            CityShield
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12 ml-6">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`text-lg font-bold transition pb-6 translate-y-[12px] ${
              activeTab === 'dashboard' 
              ? 'text-white border-b-4 border-blue-500' 
              : 'text-gray-500 hover:text-white'
            }`}
          >
            Dashboard
          </button>
          
          <button 
            onClick={() => setActiveTab('projects')}
            className={`text-lg font-bold transition pb-6 translate-y-[12px] ${
              activeTab === 'projects' 
              ? 'text-white border-b-4 border-blue-500' 
              : 'text-gray-500 hover:text-white'
            }`}
          >
            Projects
          </button>

          <button className="text-gray-500 hover:text-white text-lg font-bold transition">Predictions</button>
          <button className="text-gray-500 hover:text-white text-lg font-bold transition">Reports</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        <div className="relative hidden xl:block">
          <span className="absolute left-4 top-3.5 text-gray-500 text-lg">🔍</span>
          <input 
            type="text" 
            placeholder="Search city simulations..." 
            className="bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-blue-500 w-80 transition-all font-medium"
          />
        </div>
        
        <div className="flex items-center gap-6 border-l border-white/10 pl-8">
          <button className="text-gray-400 hover:text-white text-xl">🔔</button>
          <button className="text-gray-400 hover:text-white text-xl">⚙️</button>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 border-2 border-white/20 overflow-hidden">
             <img src="https://ui-avatars.com/api/?name=Analyzer&background=0D8ABC&color=fff" alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
}