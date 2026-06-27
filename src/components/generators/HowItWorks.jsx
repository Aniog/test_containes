import { strings } from '../../data/generators';

const s = strings.en;

export default function HowItWorks() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#4B5056',
            margin: '0 0 40px',
            letterSpacing: '0.02em',
            textAlign: 'center',
          }}
        >
          {s.howItWorksHeading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
          }}
          className="steps-grid"
        >
          {s.steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 16,
              }}
            >
              {/* Numbered circle */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Connector line (not on last) */}
              <div>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#2E2E2F',
                    margin: '0 0 8px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: '#636972',
                    margin: 0,
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
