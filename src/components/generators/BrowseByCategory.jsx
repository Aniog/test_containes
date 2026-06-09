import { categories } from '../../data/generators.js';
import s from '../../data/strings.js';

const styles = {
  section: {
    background: '#fff',
    padding: '60px 20px',
    borderTop: '1px solid #E2E4E7',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeading: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(22px, 2.5vw, 30px)',
    color: '#4B5056',
    textTransform: 'uppercase',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  card: {
    background: '#fff',
    border: '1px solid #C6C9CD',
    borderRadius: '3px',
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardName: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '15px',
    color: '#2E2E2F',
    textTransform: 'uppercase',
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: '13px',
    color: '#636972',
    lineHeight: 1.5,
  },
  arrow: {
    color: '#8159BB',
    flexShrink: 0,
  },
};

const categoryIcons = {
  websites: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#EDE8F7" />
      <rect x="8" y="10" width="20" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M8 14h20" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="11" cy="12" r="1" fill="#8159BB" />
      <circle cx="14" cy="12" r="1" fill="#8159BB" />
    </svg>
  ),
  'landing-pages': (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#EDE8F7" />
      <rect x="8" y="8" width="20" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M12 14h12M12 18h8M14 22h8" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  portfolios: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#EDE8F7" />
      <rect x="8" y="12" width="10" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="20" y="8" width="8" height="8" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="20" y="18" width="8" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  blogs: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#EDE8F7" />
      <path d="M10 12h16M10 16h16M10 20h10" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M23 24h2M24 23v2" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  stores: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#EDE8F7" />
      <path d="M10 14h16l-2 10H12L10 14z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M8 14l2-4h16l2 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="27" r="1.5" fill="#8159BB" />
      <circle cx="21" cy="27" r="1.5" fill="#8159BB" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#EDE8F7" />
      <rect x="12" y="8" width="12" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M15 13h6M15 17h6M15 21h4" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>{s.browseByCategory.heading}</h2>
        <div style={styles.grid} className="category-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
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

function CategoryCard({ cat }) {
  return (
    <article>
      <a
        href={`/generators${cat.anchor}`}
        style={styles.card}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
          e.currentTarget.style.borderColor = '#8159BB';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = '#C6C9CD';
        }}
      >
        <div>{categoryIcons[cat.id]}</div>
        <div style={styles.cardTop}>
          <span style={styles.cardName}>{cat.name}</span>
          <ArrowIcon />
        </div>
        <p style={{ ...styles.cardDesc, margin: 0 }}>{cat.description}</p>
      </a>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={styles.arrow}>
      <path d="M4 9h10M10 5l4 4-4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
