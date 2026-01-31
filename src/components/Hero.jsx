import React from 'react';

// 1. Add 'props' here
const Hero = (props) => {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 pt-20 max-w-4xl mx-auto">
      <div className="bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
        ● Next-Gen Civic Tech
      </div>
      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
        Predict <br /> Construction <br /> Impact <span className="text-blue-500">Before</span> It <br /> Happens
      </h1>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl">
        Leverage advanced AI and geospatial data to minimize urban disruption in North Indian metropolitan areas.
      </p>
      <div className="flex gap-4">
        {/* 2. Add onClick={props.onAnalyze} here */}
        <button 
          onClick={props.onAnalyze} 
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md font-bold transition"
        >
          Analyze Construction Impact
        </button>
      </div>
    </main>
  );
};

export default Hero;