import { strings } from '../../data/generators';

const { steps } = strings.en.howItWorks;
const heading = strings.en.howItWorks.heading;

export default function HowItWorks() {
  return (
    <section
      style={{
        background: 'var(--color-light-bg)',
        padding: '60px 0',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div className="content-container">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-subheading">
          From idea to live site in three simple steps.
        </p>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Numbered circle */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'var(--gradient-ai)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#ffffff',
                    letterSpacing: '0.02em',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 14,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-hero-heading)',
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: 'var(--color-body-text)',
                    lineHeight: 1.6,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
