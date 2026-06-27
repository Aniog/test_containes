import React from 'react';
import strings from '@/data/strings.en.js';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-hero-dark)', color: '#FFFFFF', paddingBlock: '40px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBlockEnd: '30px',
          }}
          className="footer-grid"
        >
          <div>
            <svg width="110" height="24" viewBox="0 0 110 24" aria-hidden="true" style={{ display: 'block', marginBlockEnd: '12px' }}>
              <text x="0" y="18" fontFamily="var(--font-heading)" fontWeight="700" fontSize="18" fill="#FFFFFF">
                strikingly
              </text>
              <text x="78" y="18" fontFamily="var(--font-heading)" fontWeight="700" fontSize="18" fill="#CB0C9F">
                AI
              </text>
            </svg>
            <p style={{ fontSize: '13px', opacity: 0.7, margin: 0 }}>
              {strings.footerCopyright}
            </p>
          </div>
          {[0, 1, 2].map((col) => (
            <div key={col}>
              <h4 style={{ fontSize: '13px', color: '#FFFFFF', marginBlockEnd: '12px', opacity: 0.6 }}>
                {['Product', 'Company', 'Resources'][col]}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {strings.footerLinks.slice(col * 2, col * 2 + 2).map((link) => (
                  <li key={link.label} style={{ marginBlockEnd: '8px' }}>
                    <a
                      href={link.href}
                      style={{ fontSize: '13px', color: '#FFFFFF', opacity: 0.7, textDecoration: 'none' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingBlockStart: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '12px', opacity: 0.5, margin: 0 }}>
            {strings.footerCopyright}
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {strings.footerLinks.slice(5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontSize: '12px', color: '#FFFFFF', opacity: 0.5, textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}