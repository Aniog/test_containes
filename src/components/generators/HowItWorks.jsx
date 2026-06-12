import { strings } from '../../data/generatorsData.js';
import { StepIcon } from './Icons.jsx';

const s = strings.en.howItWorks;

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          id="how-heading"
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
            gap: 40,
          }}
          className="steps-grid"
        >
          {s.steps.map((step) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <StepIcon number={step.number} />
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
                {step.title}
              </strong>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 14,
                  color: '#636972',
                  lineHeight: 1.6,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
