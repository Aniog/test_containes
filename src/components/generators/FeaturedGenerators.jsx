import { featuredGenerators, strings, toSlug } from '../../data/generatorsData.js';

const s = strings.en.featured;

const cardStyle = {
  background: '#ffffff',
  border: '1px solid #C6C9CD',
  borderRadius: 3,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  textDecoration: 'none',
  color: 'inherit',
  transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
};

export default function FeaturedGenerators() {
  return (
    <section
      aria-labelledby="featured-heading"
      style={{
        background: '#F4F6F8',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <div style={{ marginBottom: 40 }}>
          <h2
            id="featured-heading"
            style={{
              margin: '0 0 10px',
              fontFamily: '"Josefin Sans", Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              color: '#4B5056',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            {s.heading}
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: '"Open Sans", sans-serif',
              fontSize: 14,
              color: '#636972',
            }}
          >
            {s.subheading}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="featured-grid"
        >
          {featuredGenerators.map((gen) => (
            <a
              key={gen.name}
              href={`/generators/${toSlug(gen.name)}`}
              style={cardStyle}
              className="gen-card"
              aria-label={gen.name}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(129,89,187,0.12)';
                e.currentTarget.style.borderColor = '#8159BB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#C6C9CD';
              }}
            >
              {/* Category tag */}
              <span
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontFamily: '"Josefin Sans", Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#8159BB',
                  border: '1px solid #8159BB',
                  borderRadius: 3,
                  padding: '2px 6px',
                }}
              >
                {gen.category}
              </span>

              <strong
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#2E2E2F',
                  lineHeight: 1.4,
                }}
              >
                {gen.name}
              </strong>

              <span
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 13,
                  color: '#636972',
                  lineHeight: 1.5,
                }}
              >
                {gen.description}
              </span>
            </a>
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
