import { strings } from '../../data/generatorsData';

const s = strings.en.howItWorks;

export default function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: '#F4F6F8',
        paddingTop: 60,
        paddingBottom: 60,
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 20px' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            margin: 0,
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          {s.heading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
          }}
          className="hiw-grid"
        >
          {s.steps.map((step) => (
            <div
              key={step.num}
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
                  style={{ fontSize: 20, color: '#fff', lineHeight: 1 }}
                >
                  {step.num}
                </span>
              </div>

              <div>
                <p
                  className="font-heading"
                  style={{ fontSize: 14, color: '#2E2E2F', margin: 0, marginBottom: 8 }}
                >
                  {step.title}
                </p>
                <p style={{ fontSize: 14, color: '#636972', margin: 0, lineHeight: 1.6 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hiw-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
