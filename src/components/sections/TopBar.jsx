import React from 'react'

export default function TopBar() {
  return (
    <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E4E7', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', height: 56 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }} aria-label="Strikingly Home">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="url(#logo-grad)"/>
            <path d="M8 9H20M8 14H16M8 19H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7671FF"/>
                <stop offset="1" stopColor="#CB0C9F"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', color: '#2E2E2F', letterSpacing: 0.5 }}>
            Strikingly <span className="ai-gradient-text" style={{ WebkitTextFillColor: 'transparent' }}>AI</span>
          </span>
        </a>
      </div>
    </header>
  )
}
