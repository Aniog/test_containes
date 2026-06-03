
import React from 'react';
import strings from '@/data/strings.en.js';

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="/" className="topbar-logo" aria-label="Strikingly home">
          <svg
            className="topbar-logo-icon"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="url(#ai-grad-topbar)" />
            <text
              x="14"
              y="19"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="700"
              fontFamily="Josefin Sans, sans-serif"
            >
              S
            </text>
            <defs>
              <linearGradient id="ai-grad-topbar" x1="0" y1="0" x2="28" y2="28">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span className="topbar-logo-text">{strings.topBarLogo}</span>
        </a>
      </div>
    </header>
  );
};

export default TopBar;
