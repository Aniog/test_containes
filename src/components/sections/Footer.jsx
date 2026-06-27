import React from 'react';
import { t } from '../../data/strings.js';

const wrap = {
  background: 'var(--color-light-bg)',
  borderTop: '1px solid var(--color-divider)',
  paddingBlock: 50,
};

const grid = {
  display: 'grid',
  gridTemplateColumns: '1.5fr repeat(4, 1fr)',
  gap: 30,
};

const responsiveStyle = `
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .footer-brand {
      grid-column: span 2;
    }
  }
  @media (max-width: 540px) {
    .footer-grid {
      grid-template-columns: 1fr !important;
    }
    .footer-brand {
      grid-column: span 1;
    }
  }
`;

const colHead = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 13,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
  marginBottom: 12,
  letterSpacing: '0.04em',
};

const linkList = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: 'var(--color-body)',
  textDecoration: 'none',
  fontSize: 13,
};

const brand = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  color: 'var(--color-body)',
  fontSize: 13,
};

const brandTitle = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 18,
  color: 'var(--color-heading-strong)',
  letterSpacing: '0.01em',
};

const copyrightRow = {
  marginTop: 30,
  paddingTop: 20,
  borderTop: '1px solid var(--color-divider)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 10,
  color: 'var(--color-body)',
  fontSize: 12,
};

export default function Footer() {
  return (
    <footer style={wrap}>
      <div className="container">
        <div className="footer-grid" style={grid}>
          <div className="footer-brand" style={brand}>
            <span style={brandTitle}>
              <span aria-hidden="true" style={{ display: 'inline-flex' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 4h6v6H5V4zm0 10h6v6H5v-6zm10-10h4v4h-4V4zm0 6h4v4h-4v-4zm0 6h4v4h-4v-4zm-4-2h2v2h-2v-2z"
                    fill="#8159BB"
                  />
                </svg>
              </span>
              <span>
                <span>strikingly</span>
                <span
                  style={{
                    marginLeft: 4,
                    backgroundImage: 'linear-gradient(90deg, var(--color-ai-blue) 0%, var(--color-ai-pink) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                  }}
                >AI</span>
              </span>
            </span>
            <p>{t.footer.tagline}</p>
          </div>
          {t.footer.columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <div style={colHead}>{col.heading}</div>
              <ul style={linkList}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} style={linkStyle}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div style={copyrightRow}>
          <span>{t.footer.copyright}</span>
          <span>Made with AI</span>
        </div>
      </div>
      <style>{responsiveStyle}</style>
    </footer>
  );
}
