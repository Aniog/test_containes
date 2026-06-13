import { categories } from '@/data/generators';
import strings from '@/data/strings';
const s = strings.en;

function CategoryCard({ category }) {
  return (
    <a
      href={`#${category.slug}`}
      className="generator-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textDecoration: 'none',
        color: 'inherit',
        padding: 24,
      }}
    >
      {/* Small category illustration */}
      <div
        aria-hidden="true"
        style={{
          width: 44,
          height: 44,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #E8DFF5, #D4C5EB)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="2" y="3" width="18" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
          <line x1="2" y1="8" x2="20" y2="8" stroke="#8159BB" strokeWidth="1" />
          <circle cx="6" cy="5.5" r="1" fill="#8159BB" />
          <circle cx="9.5" cy="5.5" r="1" fill="#8159BB" />
        </svg>
      </div>
      <h3
        className="heading-font"
        style={{
          fontSize: 15,
          color: '#2E2E2F',
          margin: '0 0 6px',
        }}
      >
        {category.name}
      </h3>
      <p
        style={{
          color: '#636972',
          fontSize: 13,
          margin: '0 0 14px',
          lineHeight: 1.5,
          flex: 1,
        }}
      >
        {category.description}
      </p>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          color: '#8159BB',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        Browse
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

export default function BrowseByCategory() {
  return (
    <section
      style={{
        background: '#F4F6F8',
        padding: '40px 20px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="heading-font"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 32px)',
            color: '#4B5056',
            margin: '0 0 30px',
            textAlign: 'center',
          }}
        >
          {s.browseHeading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 20,
          }}
          className="category-grid"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .category-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) and (min-width: 481px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .category-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
