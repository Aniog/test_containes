import s from '../../data/strings.js';

export default function ClosingCTA() {
  return (
    <section
      className="bg-white text-center"
      style={{ paddingTop: 70, paddingBottom: 70 }}
    >
      <div className="content-container" style={{ maxWidth: 600 }}>
        <h2
          className="section-heading m-0 mb-4"
          style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#2E2E2F' }}
        >
          {s.closingHeading}
        </h2>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 15,
            color: '#636972',
            marginBottom: 32,
            lineHeight: 1.6,
          }}
        >
          {s.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="btn-primary btn-primary-lg"
        >
          {s.closingCTA}
        </a>
      </div>
    </section>
  );
}
