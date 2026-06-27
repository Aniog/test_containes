import { strings, featuredGenerators } from '../../data/generators';

const s = strings.en;

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function FeaturedGenerators() {
  return (
    <section
      style={{
        background: '#F4F6F8',
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
            margin: '0 0 8px',
            letterSpacing: '0.02em',
          }}
        >
          {s.featuredHeading}
        </h2>
        <p
          style={{
            fontSize: 14,
            color: '#636972',
            margin: '0 0 30px',
            fontFamily: 'var(--font-body)',
          }}
        >
          {s.featuredSubheading}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          className="featured-grid"
        >
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                aria-label={gen.name}
                style={{ display: 'block', textDecoration: 'none', height: '100%' }}
              >
                <div
                  className="strk-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <span className="strk-tag" style={{ alignSelf: 'flex-start' }}>
                    {gen.category}
                  </span>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#2E2E2F',
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {gen.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#636972',
                      margin: 0,
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-body)',
                      flexGrow: 1,
                    }}
                  >
                    {gen.description}
                  </p>
                  <span
                    style={{
                      fontSize: 12,
                      color: '#8159BB',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    Try it
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
