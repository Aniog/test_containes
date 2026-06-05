import { strings } from '../../data/generatorsData';

const s = strings.en.closingCta;

export default function ClosingCTA() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        paddingTop: 70,
        paddingBottom: 70,
        borderTop: '1px solid #E2E4E7',
        textAlign: 'center',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 600, padding: '0 20px' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(26px, 3vw, 38px)',
            color: '#2E2E2F',
            margin: 0,
            marginBottom: 14,
          }}
        >
          {s.heading}
        </h2>
        <p
          style={{
            fontSize: 15,
            color: '#636972',
            lineHeight: 1.6,
            marginBottom: 30,
          }}
        >
          {s.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="btn btn-gradient btn-lg"
          style={{ display: 'inline-flex' }}
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
