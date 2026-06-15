import { categories, strings } from '../../data/generators';

const s = strings.en.browseByCategory;

// Small category illustrations (inline SVG, one per category)
const CategoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="4" y="8" width="32" height="8" rx="4" fill="#8159BB" opacity="0.12" />
      <circle cx="10" cy="12" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="16" cy="12" r="2" fill="#7671FF" opacity="0.5" />
      <rect x="10" y="22" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="27" width="14" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="10" y="12" width="20" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="13" y="19" width="14" height="2" rx="1" fill="#C6C9CD" />
      <rect x="13" y="23" width="10" height="2" rx="1" fill="#C6C9CD" />
      <rect x="13" y="28" width="14" height="5" rx="2" fill="url(#lp-grad)" opacity="0.7" />
      <defs>
        <linearGradient id="lp-grad" x1="13" y1="28" x2="27" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" /><stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="14" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="22" y="10" width="14" height="9" rx="3" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <rect x="22" y="22" width="14" height="8" rx="3" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
      <rect x="6" y="12" width="10" height="10" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="6" y="24" width="10" height="4" rx="1" fill="#C6C9CD" opacity="0.5" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="10" y="12" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
      <rect x="10" y="18" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="22" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="26" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="30" width="12" height="2" rx="1" fill="#C6C9CD" opacity="0.5" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 14h24l-2 14H10L8 14z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M14 14l2-6h8l2 6" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="15" cy="32" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="25" cy="32" r="2" fill="#8159BB" opacity="0.5" />
      <rect x="16" y="20" width="8" height="5" rx="1" fill="#7671FF" opacity="0.2" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="12" y="4" width="16" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="14" y="8" width="12" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      <rect x="14" y="14" width="12" height="3" rx="1.5" fill="#7671FF" opacity="0.3" />
      <rect x="14" y="20" width="12" height="3" rx="1.5" fill="#CB0C9F" opacity="0.3" />
      <circle cx="20" cy="36" r="2" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 0',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div className="content-container">
        <h2 className="section-heading">{s.heading}</h2>
        <p className="section-subheading" style={{ marginBottom: 30 }}>
          Jump to the section that fits what you're building.
        </p>

        <div className="category-grid">
          {categories.map((cat) => (
            <article key={cat.id}>
              <a
                href={cat.href}
                className="gen-card"
                aria-label={`Browse ${cat.name} generators`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: '100%',
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  {CategoryIcons[cat.id]}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 14,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: 'var(--color-hero-heading)',
                      marginBottom: 6,
                    }}
                  >
                    {cat.name}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: 'var(--color-body-text)',
                      lineHeight: 1.5,
                    }}
                  >
                    {cat.description}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    color: 'var(--color-brand-purple)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
