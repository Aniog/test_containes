import { strings, categories } from '../../data/generators';

const s = strings.en;

// Category illustrations — simple inline SVG per category
const categoryIllustrations = {
  websites: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="4" y="8" width="40" height="10" rx="4" fill="#8159BB" opacity="0.12" />
      <circle cx="12" cy="13" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="19" cy="13" r="2" fill="#7671FF" opacity="0.5" />
      <circle cx="26" cy="13" r="2" fill="#CB0C9F" opacity="0.4" />
      <rect x="10" y="24" width="28" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="30" width="20" height="3" rx="1.5" fill="#636972" opacity="0.2" />
    </svg>
  ),
  'landing-pages': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="8" y="6" width="32" height="14" rx="3" fill="#8159BB" opacity="0.1" />
      <rect x="13" y="11" width="22" height="4" rx="2" fill="#8159BB" opacity="0.4" />
      <rect x="13" y="24" width="22" height="3" rx="1.5" fill="#636972" opacity="0.25" />
      <rect x="13" y="30" width="16" height="3" rx="1.5" fill="#636972" opacity="0.2" />
      <rect x="16" y="36" width="16" height="5" rx="2.5" fill="url(#lp-grad)" />
      <defs>
        <linearGradient id="lp-grad" x1="16" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" /><stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="18" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="26" y="10" width="18" height="14" rx="2" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <rect x="4" y="28" width="18" height="10" rx="2" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
      <rect x="26" y="28" width="18" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="17" r="3" fill="#8159BB" opacity="0.2" />
      <circle cx="35" cy="17" r="3" fill="#7671FF" opacity="0.2" />
    </svg>
  ),
  blogs: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="12" y="14" width="24" height="4" rx="2" fill="#8159BB" opacity="0.4" />
      <rect x="12" y="21" width="24" height="2.5" rx="1.25" fill="#636972" opacity="0.25" />
      <rect x="12" y="26" width="18" height="2.5" rx="1.25" fill="#636972" opacity="0.2" />
      <rect x="12" y="31" width="20" height="2.5" rx="1.25" fill="#636972" opacity="0.2" />
    </svg>
  ),
  stores: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14h32l-3 14H11L8 14Z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M8 14l-2-6H4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="34" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="32" cy="34" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M14 20h4M22 20h4M30 20h4" stroke="#7671FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="4" width="20" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="14" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="18" y="22" width="12" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="18" y="29" width="12" height="4" rx="2" fill="#7671FF" opacity="0.25" />
      <rect x="18" y="36" width="12" height="4" rx="2" fill="#CB0C9F" opacity="0.2" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#4B5056',
            margin: '0 0 30px',
            letterSpacing: '0.02em',
          }}
        >
          {s.browseCategoryHeading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          className="category-grid"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.slug}`}
              aria-label={`Browse ${cat.name} generators`}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div
                className="strk-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: '100%',
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  {categoryIllustrations[cat.id]}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#2E2E2F',
                      margin: '0 0 6px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cat.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#636972',
                      margin: 0,
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {cat.description}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M4 9h10M10 5l4 4-4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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
}
