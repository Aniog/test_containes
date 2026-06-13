import { featuredGenerators } from '@/data/generators';
import strings from '@/data/strings';
const s = strings.en;

export default function FeaturedGenerators() {
  return (
    <section
      id="featured-generators"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 20px',
      }}
    >
      <h2
        className="heading-font"
        style={{
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          color: '#4B5056',
          margin: '0 0 8px',
          textAlign: 'center',
        }}
      >
        {s.featuredHeading}
      </h2>
      <p
        style={{
          color: '#636972',
          fontSize: 14,
          textAlign: 'center',
          margin: '0 0 30px',
        }}
      >
        {s.featuredSub}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 20,
        }}
        className="featured-grid"
      >
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="generator-card"
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              padding: 20,
            }}
          >
            <div style={{ marginBottom: 10 }}>
              <span className="category-tag">{gen.category}</span>
            </div>
            <h3
              style={{
                fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: '#2E2E2F',
                margin: '0 0 6px',
                textTransform: 'uppercase',
                lineHeight: 1.3,
              }}
            >
              {gen.name}
            </h3>
            <p
              style={{
                color: '#636972',
                fontSize: 13,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {gen.description}
            </p>
          </a>
        ))}
      </div>

      <style>{`
        @media (min-width: 769px) {
          .featured-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) and (min-width: 481px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
