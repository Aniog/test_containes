import React from 'react'

const categories = [
  {
    slug: 'websites',
    name: 'WEBSITES',
    description: 'AI-built business and personal sites for any goal.',
    anchor: '#websites',
  },
  {
    slug: 'landing-pages',
    name: 'LANDING PAGES',
    description: 'Single-page sites built to convert visitors fast.',
    anchor: '#landing-pages',
  },
  {
    slug: 'portfolios',
    name: 'PORTFOLIOS',
    description: 'Showcase your work with a clean, focused site.',
    anchor: '#portfolios',
  },
  {
    slug: 'blogs',
    name: 'BLOGS',
    description: 'Publish-ready blogs with built-in SEO basics.',
    anchor: '#blogs',
  },
  {
    slug: 'stores',
    name: 'ONLINE STORES',
    description: 'Sell products online with payments built in.',
    anchor: '#stores',
  },
  {
    slug: 'link-in-bio',
    name: 'LINK-IN-BIO',
    description: 'One link, all your places. Made for creators.',
    anchor: '#link-in-bio',
  },
]

const icons = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="18" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M4 11h24" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="8" cy="8.5" r="1" fill="#8159BB" />
      <circle cx="11" cy="8.5" r="1" fill="#8159BB" />
      <path d="M8 15h8M8 18h12" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="3" stroke="#7671FF" strokeWidth="1.5" />
      <rect x="9" y="8" width="14" height="4" rx="1.5" fill="#7671FF" opacity="0.3" />
      <path d="M9 16h14M9 19h10" stroke="#7671FF" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="9" y="22" width="8" height="3" rx="1.5" fill="#7671FF" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="10" height="10" rx="2" stroke="#CB0C9F" strokeWidth="1.5" />
      <rect x="18" y="8" width="10" height="10" rx="2" stroke="#CB0C9F" strokeWidth="1.5" />
      <rect x="4" y="22" width="24" height="4" rx="2" stroke="#CB0C9F" strokeWidth="1.5" />
      <path d="M7 11l3 4 2-2 3 3" stroke="#CB0C9F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="3" stroke="#059669" strokeWidth="1.5" />
      <path d="M10 10h12M10 14h12M10 18h8M10 22h10" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 8h24l-2 18H6L4 8z" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 8V6a8 8 0 0116 0v2" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="1.5" fill="#D97706" />
      <circle cx="20" cy="16" r="1.5" fill="#D97706" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="10" r="5" stroke="#2563EB" strokeWidth="1.5" />
      <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 10h4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 8v4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

export default function BrowseByCategory() {
  return (
    <section
      style={{
        paddingBlock: '40px',
        background: 'var(--color-light-bg)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              color: 'var(--color-heading)',
              marginBottom: 10,
            }}
          >
            BROWSE BY CATEGORY
          </h2>
          <p style={{ color: 'var(--color-body-text)', fontSize: 15 }}>
            Find the right starting point for your project.
          </p>
        </div>

        <div
          className="category-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 20,
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .category-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          `}</style>
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={cat.anchor}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    background: 'var(--color-light-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {icons[cat.slug]}
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4l6 6-6 6" stroke="var(--color-brand-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--color-heading)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.5px',
                }}
              >
                {cat.name}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--color-body-text)', lineHeight: 1.5 }}>
                {cat.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
