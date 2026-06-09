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
    marginBottom: '40px',
    textAlign: 'center',
  },
  stepsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '16px',
  },
  circle: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  circleNum: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '20px',
    color: '#fff',
  },
  stepTitle: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '15px',
    color: '#2E2E2F',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    margin: 0,
  },
  stepBody: {
    fontSize: '14px',
    color: '#636972',
    lineHeight: 1.6,
    margin: 0,
  },
};

export default function HowItWorks() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>{s.howItWorks.heading}</h2>
        <div style={styles.stepsRow} className="steps-row">
          {s.howItWorks.steps.map((step) => (
            <div key={step.number} style={styles.step}>
              <div style={styles.circle} aria-hidden="true">
                <span style={styles.circleNum}>{step.number}</span>
              </div>
              <p style={styles.stepTitle}>{step.title}</p>
              <p style={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .steps-row {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
