import React from 'react'
import { strings } from '../../data/strings'

const s = strings.en

export default function Footer() {
  return (
    <footer style={{ background: '#F4F6F8', borderTop: '1px solid #E2E4E7', paddingBlock: '40px 30px' }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 30, marginBottom: 30 }}>
          {/* Logo */}
          <div>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginBottom: 10 }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)"/>
                <path d="M8 9H20M8 14H16M8 19H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7671FF"/>
                    <stop offset="1" stopColor="#CB0C9F"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#2E2E2F', textTransform: 'uppercase' }}>Strikingly</span>
            </a>
            <p style={{ fontSize: 13, color: '#636972', lineHeight: 1.6, maxWidth: 200 }}>
              Build beautiful websites with AI. No coding required.
            </p>
          </div>

          {/* Link columns */}
          {s.footerColumns.map((col, i) => (
            <div key={i}>
              <div style={{
                fontFamily: '"Josefin Sans", Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 12,
                textTransform: 'uppercase',
                color: '#4B5056',
                marginBottom: 12,
                letterSpacing: 0.5,
              }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} style={{ fontSize: 13, color: '#636972', textDecoration: 'none', transition: 'color 0.2s' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #E2E4E7', paddingTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#636972', margin: 0 }}>
            {s.footerCopyright(2026)}
          </p>
        </div>
      </div>
    </footer>
  )
}
