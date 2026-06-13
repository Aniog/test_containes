import { strings, FEATURED_GENERATORS } from '@/data/generators';

const s = strings.en.featured;

export default function FeaturedGenerators() {
  return (
    <section style={{ background: 'var(--light-bg)', padding: '60px 20px' }}>
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 8px' }}
        >
          {s.heading}
        </h2>
        <p style={{ color: 'var(--body-text)', margin: '0 0 30px', fontSize: 15 }}>
          {s.sub}
        </p>

        <div className="grid-3">
          {FEATURED_GENERATORS.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="gen-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%', boxSizing: 'border-box' }}
                aria-label={gen.name}
              >
                <span className="cat-tag" style={{ alignSelf: 'flex-start' }}>
                  {gen.category}
                </span>
                <strong
                  className="font-heading"
                  style={{ fontSize: 14, color: 'var(--hero-heading)', lineHeight: 1.3 }}
                >
                  {gen.name}
                </strong>
                <span style={{ fontSize: 13, color: 'var(--body-text)', lineHeight: 1.5 }}>
                  {gen.description}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
