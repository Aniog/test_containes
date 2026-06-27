import { howItWorksSteps, strings } from '../../data/generators-data';

const s = strings.en;

function Step({ number, title, body }) {
  return (
    <div>
      <div className="hiw-number" aria-hidden="true">{number}</div>
      <h3 style={{ fontSize: '14px', marginBlockEnd: '10px', color: 'var(--clr-heading)' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: 'var(--clr-body)', lineHeight: '1.6' }}>{body}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="strk-section">
      <div className="strk-container">
        <h2 className="strk-section-heading">{s.hiwHeading}</h2>
        <div className="hiw-grid" style={{ marginBlockStart: '40px' }}>
          {howItWorksSteps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
