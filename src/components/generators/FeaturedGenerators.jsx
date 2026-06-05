import { featuredGenerators, strings, toSlug } from '../../data/generatorsData';

const s = strings.en.featured;

export default function FeaturedGenerators() {
  return (
    <section
      style={{
        backgroundColor: '#F4F6F8',
        paddingTop: 60,
        paddingBottom: 60,
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 20px' }}>
        {/* Section heading */}
        <div style={{ marginBottom: 40 }}>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: '#4B5056', margin: 0 }}
          >
            {s.heading}
          </h2>
          <p style={{ fontSize: 14, color: '#636972', marginTop: 8, marginBottom: 0 }}>
            {s.sub}
          </p>
        </div>

        {/* 3×3 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="featured-grid"
        >
          {featuredGenerators.map((gen) => (
            <article key={gen.name}>
              <a
                href={`/generators/${toSlug(gen.name)}`}
                className="gen-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}
              >
                <span
                  className="font-heading"
                  style={{ fontSize: 14, color: '#2E2E2F', lineHeight: 1.3 }}
                >
                  {gen.name}
                </span>
                <span style={{ fontSize: 13, color: '#636972', flex: 1 }}>
                  {gen.desc}
                </span>
                <span className="cat-tag" style={{ alignSelf: 'flex-start' }}>
                  {gen.category}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
