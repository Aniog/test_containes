import React from 'react';

const TopBar = () => {
  return (
    <header className="w-full bg-[var(--bg-white)] border-b border-[var(--divider-subtle)] h-[60px] flex items-center px-5">
      <div className="container-custom w-full flex items-center gap-2">
        <a href="/" className="font-heading text-xl tracking-wide flex items-center gap-2 relative">
          <span className="font-bold lowercase" style={{ textTransform: 'lowercase' }}>strikingly</span>
          <span className="text-[10px] bg-gradient-ai text-white px-1.5 py-0.5 rounded-sm absolute -right-5 top-0 font-sans tracking-normal translate-x-full">AI</span>
        </a>
      </div>
    </header>
  );
};

export default TopBar;
