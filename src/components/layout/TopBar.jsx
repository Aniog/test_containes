import React from 'react';

const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E4E7]">
      <div className="container-custom h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <span className="text-[20px] font-bold text-[#4B5056] font-['Josefin_Sans'] tracking-tight">
              strikingly <span className="ai-gradient-text">AI</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
