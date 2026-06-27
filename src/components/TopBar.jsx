import React from 'react'

export default function TopBar() {
  return (
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid var(--color-divider)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 56 }}>
        <a href="/" aria-label="Strikingly home" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <StrikinglyLogo />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 18,
              textTransform: 'uppercase',
              color: 'var(--color-heading-dark)',
              letterSpacing: '0.5px',
            }}
          >
            Strikingly <span style={{ color: 'var(--color-brand-purple)' }}>AI</span>
          </span>
        </a>
      </div>
    </header>
  )
}

function StrikinglyLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="url(#logo-grad)" />
      <path
        d="M8 10h12M8 14h8M8 18h10"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
