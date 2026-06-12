import strings from '../../data/strings';

const s = strings.en.closingCta;

export default function ClosingCTA() {
  return (
    <section
      aria-labelledby="closing-cta-heading"
      style={{ background: '#ffffff', paddingBlock: 70, textAlign: 'center' }}
    >
      <hr className="section-divider" />
      <div className="content-wrap" style={{ paddingTop: 70 }}>
        <h2
          id="closing-cta-heading"
          className="font-heading"
          style={{
            color: '#4B5056',
            fontSize: 'clamp(26px, 3vw, 40px)',
            marginBottom: 12,
          }}
        >
          {s.heading}
        </h2>
        <p
          style={{
            color: '#636972',
            fontSize: 16,
            lineHeight: 1.6,
            marginBottom: 30,
            marginTop: 0,
          }}
        >
          {s.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="btn-gradient"
          style={{ height: 44, padding: '0 28px', fontSize: 14 }}
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
