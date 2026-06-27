import React from 'react';

const TopBar = ({ logo }) => (
  <header className="w-full bg-white border-b border-[#E2E4E7]" style={{ borderBottomWidth: '1px' }}>
    <div className="max-w-[1200px] mx-auto px-5 h-[56px] flex items-center">
      <a href="/" className="flex items-center gap-2" aria-label="Strikingly AI Home">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect width="28" height="28" rx="6" fill="#8159BB" />
          <path d="M8 8h12v3H14.5v9h-3V11H8V8z" fill="white" />
        </svg>
        <span className="font-heading text-[16px] font-bold uppercase text-[#2E2E2F] tracking-wide">
          {logo}
        </span>
      </a>
    </div>
  </header>
);

export default TopBar;
