import { categories, strings } from '../../data/generatorsData.js';
import { CategoryIllustration, ArrowRightIcon } from './Icons.jsx';

const s = strings.en.browseByCategory;

const cardStyle = {
  background: '#ffffff',
  border: '1px solid #C6C9CD',
  borderRadius: 3,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  textDecoration: 'none',
  color: 'inherit',
  transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
};

export default function BrowseByCategory() {
  return (
    <section
      aria-labelledby="browse-heading"
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          id="browse-heading"
          style={{
            margin: '0 0 40px',
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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="category-grid"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.slug}`}
              style={cardStyle}
              className="gen-card"
              aria-label={`Browse ${cat.name} generators`}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(129,89,187,0.12)';
                e.currentTarget.style.borderColor = '#8159BB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#C6C9CD';
              }}
            >
              <CategoryIllustration categoryId={cat.id} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                <strong
                  style={{
                    fontFamily: '"Josefin Sans", Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#4B5056',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {cat.name}
                </strong>
                <span
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: 13,
                    color: '#636972',
                    lineHeight: 1.5,
                  }}
                >
                  {cat.description}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ArrowRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .category-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
