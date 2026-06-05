import { categoryCards, strings } from '../../data/generatorsData';

const s = strings.en.byCategory;

// Small category illustrations — one per category
const CategoryIllustration = ({ slug }) => {
  const illustrations = {
    websites: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#EDE8F5" />
        <rect x="4" y="8" width="40" height="10" rx="4" fill="#8159BB" opacity="0.2" />
        <circle cx="12" cy="13" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="19" cy="13" r="2" fill="#8159BB" opacity="0.5" />
        <rect x="10" y="24" width="28" height="4" rx="2" fill="#C6C9CD" />
        <rect x="10" y="32" width="18" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    'landing-pages': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#EDE8F5" />
        <rect x="14" y="14" width="20" height="6" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="16" y="24" width="16" height="3" rx="1.5" fill="#C6C9CD" />
        <rect x="16" y="30" width="16" height="7" rx="3" fill="url(#lp-grad)" opacity="0.7" />
        <defs>
          <linearGradient id="lp-grad" x1="16" y1="30" x2="32" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7671FF" />
            <stop offset="1" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="18" height="14" rx="3" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="10" width="18" height="14" rx="3" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="4" y="28" width="18" height="10" rx="3" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="28" width="18" height="10" rx="3" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="13" cy="17" r="3" fill="#8159BB" opacity="0.4" />
        <circle cx="35" cy="17" r="3" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    blogs: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="4" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="16" width="24" height="4" rx="2" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="24" width="24" height="2.5" rx="1.25" fill="#C6C9CD" />
        <rect x="12" y="29" width="18" height="2.5" rx="1.25" fill="#C6C9CD" />
        <rect x="12" y="34" width="20" height="2.5" rx="1.25" fill="#E2E4E7" />
      </svg>
    ),
    stores: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14h32l-3 14H11L8 14z" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 14l-2-6H4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="34" r="3" fill="#8159BB" opacity="0.5" />
        <circle cx="32" cy="34" r="3" fill="#8159BB" opacity="0.5" />
        <rect x="18" y="20" width="12" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="4" width="20" height="40" rx="6" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="24" cy="44" r="2" fill="#8159BB" opacity="0.4" />
        <rect x="18" y="12" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.3" />
        <rect x="18" y="20" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.2" />
        <rect x="18" y="28" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
  };
  return illustrations[slug] || null;
};

// Arrow icon
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 9h10M10 5l4 4-4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BrowseByCategory() {
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 20px' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            margin: 0,
            marginBottom: 30,
          }}
        >
          {s.heading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="cat-grid"
        >
          {categoryCards.map((cat) => (
            <article key={cat.slug}>
              <a
                href={`/generators${cat.anchor}`}
                className="gen-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 4 }}>
                  <CategoryIllustration slug={cat.slug} />
                </div>
                <span
                  className="font-heading"
                  style={{ fontSize: 14, color: '#2E2E2F' }}
                >
                  {cat.name}
                </span>
                <span style={{ fontSize: 13, color: '#636972', flex: 1 }}>
                  {cat.desc}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    color: '#8159BB',
                    fontSize: 13,
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  Browse
                  <ArrowRight />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cat-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .cat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
