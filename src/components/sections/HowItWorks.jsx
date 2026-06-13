import strings from '@/data/strings';
const s = strings.en;

const steps = [
  {
    number: '1',
    title: s.step1Title,
    description: s.step1Desc,
  },
  {
    number: '2',
    title: s.step2Title,
    description: s.step2Desc,
  },
  {
    number: '3',
    title: s.step3Title,
    description: s.step3Desc,
  },
];

export default function HowItWorks() {
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
          {s.howHeading}
        </h2>

        <div
          style={{
            display: 'flex',
            gap: 30,
            justifyContent: 'center',
          }}
          className="steps-flex"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                flex: 1,
                maxWidth: 340,
                textAlign: 'center',
                position: 'relative',
              }}
              className="step-item"
            >
              {/* Numbered circle */}
              <div
                aria-hidden="true"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#8159BB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#FFFFFF',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                {step.number}
              </div>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="step-connector"
                  style={{
                    position: 'absolute',
                    top: 24,
                    left: 'calc(50% + 40px)',
                    width: 'calc(100% - 80px)',
                    height: 1,
                    background: '#C6C9CD',
                  }}
                />
              )}

              <h3
                className="heading-font"
                style={{
                  fontSize: 15,
                  color: '#2E2E2F',
                  margin: '0 0 8px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: '#636972',
                  fontSize: 14,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-flex {
            flex-direction: column !important;
            align-items: center !important;
          }
          .step-item {
            max-width: 400px !important;
          }
          .step-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
