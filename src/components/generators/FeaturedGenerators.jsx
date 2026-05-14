import { featuredGenerators } from './data'
import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"

export default function FeaturedGenerators() {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: '#F4F6F8', borderTop: '1px solid #E2E4E7' }}
    >
      <div className="max-w-content mx-auto px-5">
        <div className="mb-8">
          <h2
            className="m-0 mb-2 uppercase"
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              color: '#4B5056',
              lineHeight: 1.2,
            }}
          >
            {t.featuredHeading}
          </h2>
          <p className="m-0" style={{ color: '#636972', fontSize: '14px' }}>
            {t.featuredSubheading}
          </p>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            display: 'grid',
          }}
        >
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={gen.href}
                className="generator-card block no-underline bg-white p-5 h-full"
                style={{
                  border: '1px solid #C6C9CD',
                  borderRadius: '3px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  textDecoration: 'none',
                }}
                aria-label={gen.name}
              >
                {/* Category tag — shown here because this grid mixes categories */}
                <span
                  className="self-start uppercase"
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    border: '1px solid #8159BB',
                    color: '#8159BB',
                    borderRadius: '3px',
                    padding: '2px 6px',
                  }}
                >
                  {gen.category}
                </span>

                <p
                  className="m-0"
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#2E2E2F',
                    lineHeight: 1.3,
                  }}
                >
                  {gen.name}
                </p>

                <p
                  className="m-0"
                  style={{ color: '#636972', fontSize: '13px', lineHeight: 1.5 }}
                >
                  {gen.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
