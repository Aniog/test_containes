import { categories } from './data'
import { categoryThumbnails } from './Illustrations'
import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"

export default function BrowseByCategory() {
  return (
    <section className="py-10" style={{ backgroundColor: '#fff' }}>
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
            {t.categoryHeading}
          </h2>
          <p className="m-0" style={{ color: '#636972', fontSize: '14px' }}>
            {t.categorySubheading}
          </p>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators${cat.anchor}`}
              className="generator-card block no-underline bg-white p-5"
              style={{
                border: '1px solid #C6C9CD',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
              aria-label={`Browse ${cat.name} generators`}
            >
              {/* Category illustration */}
              <div className="mb-3" style={{ lineHeight: 0 }}>
                {categoryThumbnails[cat.id]}
              </div>

              <p
                className="m-0 mb-1 uppercase"
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#2E2E2F',
                  letterSpacing: '0.06em',
                }}
              >
                {cat.name}
              </p>

              <p
                className="m-0"
                style={{ color: '#636972', fontSize: '13px', lineHeight: 1.5 }}
              >
                {cat.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-3 flex items-center gap-1"
                style={{ color: '#8159BB', fontSize: '13px' }}
              >
                <span
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Browse
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="#8159BB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
