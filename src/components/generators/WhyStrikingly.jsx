import s from '../../data/strings.js';

const featureIcons = [
  // Lightning bolt - Live in seconds
  <svg key="live" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect width="40" height="40" rx="10" fill="#EDE8F7" />
    <path d="M22 10l-8 12h7l-3 8 8-12h-7l3-8z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
  </svg>,
  // Mobile phone - Mobile by default
  <svg key="mobile" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect width="40" height="40" rx="10" fill="#EDE8F7" />
    <rect x="14" y="9" width="12" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="27" r="1.2" fill="#8159BB" />
    <path d="M17 12h6" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,
  // Tag/price - Free to start
  <svg key="free" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect width="40" height="40" rx="10" fill="#EDE8F7" />
    <path d="M12 20l8-8h8v8l-8 8-8-8z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <circle cx="26" cy="14" r="1.5" fill="#8159BB" />
  </svg>,
];

const styles = {
  section: {
    background: '#F4F6F8',
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
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  cell: {
    background: '#fff',
    border: '1px solid #E2E4E7',
    borderRadius: '3px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cellTitle: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '15px',
    color: '#2E2E2F',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    margin: 0,
  },
  cellBody: {
    fontSize: '14px',
    color: '#636972',
    lineHeight: 1.6,
    margin: 0,
  },
};

export default function WhyStrikingly() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>{s.whyStrikingly.heading}</h2>
        <div style={styles.grid} className="why-grid">
          {s.whyStrikingly.items.map((item, i) => (
            <div key={item.title} style={styles.cell}>
              {featureIcons[i]}
              <p style={styles.cellTitle}>{item.title}</p>
              <p style={styles.cellBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
