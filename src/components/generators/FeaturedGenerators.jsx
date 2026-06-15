import { featuredGenerators, strings, toSlug } from '../../data/generators';

const s = strings.en.featured;

export default function FeaturedGenerators() {
  return (
    <section
      style={{
        background: 'var(--color-light-bg)',
        padding: '60px 0',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div className="content-container">
        <h2 className="section-heading">{s.heading}</h2>
        <p className="section-subheading">{s.subheading}</p>

        <div className="featured-grid">
          {featuredGenerators.map((gen) => {
            const slug = toSlug(gen.name);
            return (
              <article key={slug}>
                <a
                  href={`/generators/${slug}`}
                  className="gen-card"
                  aria-label={gen.name}
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: 15,
                        color: 'var(--color-hero-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        lineHeight: 1.3,
                      }}
                    >
                      {gen.name}
                    </span>
                    <span className="cat-tag" style={{ flexShrink: 0 }}>
                      {gen.category}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: 'var(--color-body-text)',
                      lineHeight: 1.5,
                    }}
                  >
                    {gen.description}
                  </p>
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      color: 'var(--color-brand-purple)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Try it
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
