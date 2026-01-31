import React from 'react';

// 1. Add 'props' here
const Navbar = (props) => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 lg:px-16">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rotate-45 flex items-center justify-center">
          <div className="w-5 h-5 bg-white -rotate-45"></div>
        </div>
        <span className="text-2xl font-bold">CityShield</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">Urban Vitals</a>
        <a href="#">Policy Hub</a>
        <a href="#">About</a>
        {/* 2. Add onClick={props.onGetStarted} here */}
        <button 
          onClick={props.onGetStarted} 
          className="bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;