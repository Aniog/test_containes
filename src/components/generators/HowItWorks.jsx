import s from '../../data/strings.js';

const steps = [
  { num: 1, title: s.howStep1Title, body: s.howStep1Body },
  { num: 2, title: s.howStep2Title, body: s.howStep2Body },
  { num: 3, title: s.howStep3Title, body: s.howStep3Body },
];

function Step({ num, title, body }) {
  return (
    <div className="flex flex-col items-center text-center gap-4" style={{ flex: 1 }}>
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{
          width: 48,
          height: 48,
          background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
          fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          color: '#ffffff',
        }}
        aria-hidden="true"
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#4B5056',
            marginBottom: 8,
          }}
        >
          {title}
        </div>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            color: '#636972',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-light-bg" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="content-container">
        <h2
          className="section-heading text-center m-0 mb-10"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
        >
          {s.howHeading}
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-8">
          {steps.map((step, i) => (
            <Step key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
