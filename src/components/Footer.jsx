import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl tracking-tight">CityShield</h3>
          <p className="text-gray-500 text-xs mt-2 max-w-xs">
            Leveraging AI to optimize city development across North Indian metropolitan areas.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-gray-400">
          <p className="font-semibold text-white">Contact Us</p>
          <p>Email: info@cityshield.com</p>
          <p>Phone: +1-800-123-4567</p>
          <div className="flex gap-4 mt-3">
            {/* Simple Text Links for Socials */}
            <a href="#" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[10px]">Facebook</a>
            <a href="#" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[10px]">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[10px]">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        © 2026 CityShield. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;