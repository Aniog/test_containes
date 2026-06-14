import React from 'react';

const StrikinglyLogo = () => (
  <svg
    width="140"
    height="28"
    viewBox="0 0 140 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Lightning bolt mark */}
    <path d="M10 2L4 14h6l-2 12 12-16h-7l3-8H10z" fill="url(#logo-grad)" />
    <defs>
      <linearGradient id="logo-grad" x1="4" y1="2" x2="16" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
    {/* "strikingly" wordmark */}
    <text
      x="22"
      y="20"
      fontFamily="'Josefin Sans', Poppins, sans-serif"
      fontWeight="700"
      fontSize="16"
      fill="#2E2E2F"
      letterSpacing="0.5"
    >
      strikingly
    </text>
    {/* "AI" badge */}
    <rect x="108" y="6" width="24" height="14" rx="3" fill="url(#ai-badge-grad)" />
    <text
      x="120"
      y="17"
      fontFamily="'Josefin Sans', Poppins, sans-serif"
      fontWeight="700"
      fontSize="10"
      fill="#ffffff"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      AI
    </text>
    <defs>
      <linearGradient id="ai-badge-grad" x1="108" y1="6" x2="132" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

const TopBar = () => (
  <header
    style={{
      background: '#ffffff',
      borderBottom: '1px solid #E2E4E7',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}
  >
    <div
      style={{
        maxWidth: '1200px',
        marginInline: 'auto',
        padding: '0 20px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <a href="/" aria-label="Strikingly home">
        <StrikinglyLogo />
      </a>
    </div>
  </header>
);

export default TopBar;
