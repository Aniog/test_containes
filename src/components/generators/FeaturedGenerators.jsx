import { featuredGenerators } from '../../data/generators.js';
import s from '../../data/strings.js';

const styles = {
  section: {
    background: '#F4F6F8',
    padding: '60px 20px',
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
    marginBottom: '8px',
  },
  subheading: {
    fontSize: '15px',
    color: '#636972',
    marginBottom: '30px',
    marginTop: 0,
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
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
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
    flex: 1,
  },
  tag: {
    display: 'inline-block',
    fontSize: '11px',
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    padding: '2px 6px',
    borderRadius: '3px',
    border: '1px solid #8159BB',
    color: '#8159BB',
    background: 'transparent',
    alignSelf: 'flex-start',
    marginTop: '4px',
  },
};

export default function FeaturedGenerators() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>{s.featured.heading}</h2>
        <p style={styles.subheading}>{s.featured.subheading}</p>
        <div style={styles.grid} className="featured-grid">
          {featuredGenerators.map((gen) => (
            <GeneratorCard key={gen.slug} gen={gen} />
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

function GeneratorCard({ gen }) {
  return (
    <article>
      <a
        href={`/generators/${gen.slug}`}
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
        <span style={styles.cardName}>{gen.name}</span>
        <span style={styles.cardDesc}>{gen.description}</span>
        <span style={styles.tag}>{gen.category}</span>
      </a>
    </article>
  );
}
