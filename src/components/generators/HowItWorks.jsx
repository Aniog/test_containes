import strings from '../../data/strings';

const s = strings.en.howItWorks;

function StepCircle({ number }) {
  return (
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
        marginBottom: 16,
      }}
      aria-hidden="true"
    >
      <span
        className="font-heading"
        style={{ color: '#ffffff', fontSize: 20, lineHeight: 1 }}
      >
        {number}
      </span>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      style={{ background: '#ffffff', paddingBlock: 60 }}
    >
      <hr className="section-divider" />
      <div className="content-wrap" style={{ paddingTop: 60 }}>
        <h2
          id="how-it-works-heading"
          className="font-heading"
          style={{ color: '#4B5056', fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 40 }}
        >
          {s.heading}
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 30,
          }}
        >
          {s.steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <StepCircle number={step.number} />
              <span
                className="font-heading"
                style={{ fontSize: 14, color: '#4B5056', marginBottom: 8 }}
              >
                {step.title}
              </span>
              <p style={{ color: '#636972', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
