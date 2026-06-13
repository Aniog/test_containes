import { strings, CATEGORY_CARDS } from '@/data/generators';

const s = strings.en.browse;

// Simple category illustrations as inline SVGs
const CATEGORY_ICONS = {
  websites: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="4" y="8" width="40" height="10" rx="4" fill="#8159BB" fillOpacity="0.1" />
      <circle cx="11" cy="13" r="2.5" fill="#8159BB" fillOpacity="0.5" />
      <circle cx="19" cy="13" r="2.5" fill="#7671FF" fillOpacity="0.5" />
      <rect x="12" y="26" width="24" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.3" />
      <rect x="16" y="32" width="16" height="3" rx="1.5" fill="#636972" fillOpacity="0.25" />
    </svg>
  ),
  'landing-pages': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="12" y="12" width="24" height="8" rx="2" fill="#7671FF" fillOpacity="0.2" />
      <rect x="14" y="14" width="14" height="4" rx="1" fill="#7671FF" fillOpacity="0.5" />
      <rect x="12" y="24" width="24" height="3" rx="1.5" fill="#636972" fillOpacity="0.2" />
      <rect x="12" y="30" width="16" height="3" rx="1.5" fill="#636972" fillOpacity="0.15" />
      <rect x="16" y="36" width="16" height="5" rx="2.5" fill="#CB0C9F" fillOpacity="0.4" />
    </svg>
  ),
  portfolios: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="18" height="14" rx="2" stroke="#8159BB" strokeWidth="1.8" fill="#8159BB" fillOpacity="0.08" />
      <rect x="26" y="10" width="18" height="14" rx="2" stroke="#7671FF" strokeWidth="1.8" fill="#7671FF" fillOpacity="0.08" />
      <rect x="4" y="28" width="18" height="10" rx="2" stroke="#CB0C9F" strokeWidth="1.8" fill="#CB0C9F" fillOpacity="0.08" />
      <rect x="26" y="28" width="18" height="10" rx="2" stroke="#8159BB" strokeWidth="1.8" fill="#8159BB" fillOpacity="0.08" />
    </svg>
  ),
  blogs: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="14" y="14" width="20" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.5" />
      <rect x="14" y="20" width="20" height="2.5" rx="1.25" fill="#636972" fillOpacity="0.25" />
      <rect x="14" y="25" width="16" height="2.5" rx="1.25" fill="#636972" fillOpacity="0.2" />
      <rect x="14" y="30" width="18" height="2.5" rx="1.25" fill="#636972" fillOpacity="0.2" />
      <circle cx="36" cy="36" r="6" fill="#7671FF" fillOpacity="0.2" stroke="#7671FF" strokeWidth="1.5" />
      <path d="M34 36h4M36 34v4" stroke="#7671FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  stores: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 18h32l-3 18H11L8 18z" stroke="#8159BB" strokeWidth="1.8" fill="#8159BB" fillOpacity="0.08" />
      <path d="M16 18c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="38" r="2" fill="#8159BB" fillOpacity="0.5" />
      <circle cx="30" cy="38" r="2" fill="#8159BB" fillOpacity="0.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="6" width="20" height="36" rx="4" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="18" y="14" width="12" height="4" rx="2" fill="#8159BB" fillOpacity="0.4" />
      <rect x="18" y="21" width="12" height="4" rx="2" fill="#7671FF" fillOpacity="0.4" />
      <rect x="18" y="28" width="12" height="4" rx="2" fill="#CB0C9F" fillOpacity="0.4" />
      <circle cx="24" cy="10" r="2" fill="#8159BB" fillOpacity="0.5" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section style={{ padding: '60px 20px' }}>
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 30px' }}
        >
          {s.heading}
        </h2>

        <div className="grid-3">
          {CATEGORY_CARDS.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="gen-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                textDecoration: 'none',
              }}
              aria-label={`Browse ${cat.name} generators`}
            >
              <div>{CATEGORY_ICONS[cat.slug]}</div>
              <strong
                className="font-heading"
                style={{ fontSize: 14, color: 'var(--hero-heading)', letterSpacing: '0.04em' }}
              >
                {cat.name.toUpperCase()}
              </strong>
              <span style={{ fontSize: 13, color: 'var(--body-text)', lineHeight: 1.5, flex: 1 }}>
                {cat.description}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: 'var(--brand-purple)',
                  fontSize: 13,
                  fontWeight: 600,
                  marginTop: 'auto',
                }}
              >
                Browse
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
