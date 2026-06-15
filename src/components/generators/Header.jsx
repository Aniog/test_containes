import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 h-[60px] flex items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[#2E2E2F] font-heading font-bold text-xl uppercase tracking-tight">strikingly</span>
          <span className="bg-brand-purple text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">AI</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
