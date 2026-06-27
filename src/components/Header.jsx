import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold tracking-tight text-hero-line1 uppercase">
            Strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
