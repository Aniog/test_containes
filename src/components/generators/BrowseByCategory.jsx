import React from 'react';
import { categories } from '../../data/generators';

// Simple line-art category illustrations
const CategoryIllustrations = {
  websites: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="4" y="8" width="40" height="10" rx="3" fill="#8159BB" fillOpacity="0.1" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="11" cy="13" r="2" fill="#8159BB" fillOpacity="0.5"/>
      <circle cx="18" cy="13" r="2" fill="#7671FF" fillOpacity="0.5"/>
      <circle cx="25" cy="13" r="2" fill="#CB0C9F" fillOpacity="0.4"/>
      <rect x="10" y="24" width="28" height="3" rx="1.5" fill="#C6C9CD"/>
      <rect x="10" y="31" width="20" height="3" rx="1.5" fill="#E2E4E7"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="36" height="40" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="6" y="4" width="36" height="14" rx="3" fill="url(#lp-grad)" fillOpacity="0.15"/>
      <defs>
        <linearGradient id="lp-grad" x1="6" y1="4" x2="42" y2="18">
          <stop stopColor="#7671FF"/>
          <stop offset="1" stopColor="#CB0C9F"/>
        </linearGradient>
      </defs>
      <rect x="12" y="9" width="24" height="4" rx="2" fill="#8159BB" fillOpacity="0.4"/>
      <rect x="14" y="22" width="20" height="3" rx="1.5" fill="#C6C9CD"/>
      <rect x="16" y="29" width="16" height="8" rx="3" fill="url(#lp-grad)" fillOpacity="0.6"/>
      <rect x="14" y="40" width="20" height="2" rx="1" fill="#E2E4E7"/>
    </svg>
  ),
  portfolios: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="18" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.08"/>
      <rect x="26" y="10" width="18" height="14" rx="2" stroke="#7671FF" strokeWidth="1.5" fill="#7671FF" fillOpacity="0.08"/>
      <rect x="4" y="28" width="18" height="10" rx="2" stroke="#CB0C9F" strokeWidth="1.5" fill="#CB0C9F" fillOpacity="0.08"/>
      <rect x="26" y="28" width="18" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.08"/>
      <circle cx="13" cy="17" r="3" fill="#8159BB" fillOpacity="0.3"/>
      <circle cx="35" cy="17" r="3" fill="#7671FF" fillOpacity="0.3"/>
    </svg>
  ),
  blogs: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="14" width="24" height="4" rx="2" fill="#8159BB" fillOpacity="0.4"/>
      <rect x="12" y="22" width="24" height="2.5" rx="1.25" fill="#C6C9CD"/>
      <rect x="12" y="27" width="20" height="2.5" rx="1.25" fill="#C6C9CD"/>
      <rect x="12" y="32" width="16" height="2.5" rx="1.25" fill="#E2E4E7"/>
    </svg>
  ),
  stores: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 14h32l-3 16H11L8 14z" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.08"/>
      <path d="M8 14l-2-6H4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="36" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <circle cx="32" cy="36" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <path d="M18 22h12M18 27h8" stroke="#C6C9CD" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="4" width="20" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="4" width="20" height="8" rx="4" fill="#8159BB" fillOpacity="0.1"/>
      <circle cx="24" cy="8" r="2" fill="#8159BB" fillOpacity="0.5"/>
      <rect x="18" y="16" width="12" height="5" rx="2.5" fill="url(#lib-grad)" fillOpacity="0.6"/>
      <rect x="18" y="24" width="12" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1" fill="none"/>
      <rect x="18" y="32" width="12" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1" fill="none"/>
      <defs>
        <linearGradient id="lib-grad" x1="18" y1="16" x2="30" y2="21">
          <stop stopColor="#7671FF"/>
          <stop offset="1" stopColor="#CB0C9F"/>
        </linearGradient>
      </defs>
    </svg>
  ),
};

// Arrow icon
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrowseByCategory = () => (
  <section
    style={{
      background: '#ffffff',
      padding: '60px 20px',
      borderTop: '1px solid var(--color-divider)',
    }}
  >
    <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
      <h2 className="section-heading">Browse by Category</h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--color-body)',
          margin: '0 0 40px',
        }}
      >
        Jump to the section that fits what you're building.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
        className="category-grid"
      >
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/generators${cat.hash}`}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            }}
            aria-label={`Browse ${cat.label} generators`}
          >
            <div>{CategoryIllustrations[cat.id]}</div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  color: 'var(--color-heading)',
                  marginBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                {cat.label}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--color-body)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {cat.desc}
              </p>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
              <ArrowRight />
            </div>
          </a>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .category-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 560px) {
        .category-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default BrowseByCategory;
