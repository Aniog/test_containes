import s from '../../data/strings.js';

const styles = {
  section: {
    background: '#fff',
    padding: '80px 20px',
    borderTop: '1px solid #E2E4E7',
    textAlign: 'center',
  },
  heading: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(28px, 3.5vw, 42px)',
    color: '#2E2E2F',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  sub: {
    fontSize: '16px',
    color: '#636972',
    marginBottom: '30px',
    marginTop: 0,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '44px',
    padding: '0 32px',
    borderRadius: '4px',
    border: 'none',
    background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
    color: '#ffffff',
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default function ClosingCTA() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{s.closingCta.heading}</h2>
      <p style={styles.sub}>{s.closingCta.sub}</p>
      <a
        href="/s/ai_site_builder"
        style={styles.btn}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {s.closingCta.cta}
      </a>
    </section>
  );
}
