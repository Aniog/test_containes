import { strings } from '../../data/generatorsData.js';
import { WhyIcon } from './Icons.jsx';

const s = strings.en.whyStrikingly;

export default function WhyStrikingly() {
  return (
    <section
      aria-labelledby="why-heading"
      style={{
        background: '#F4F6F8',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          id="why-heading"
          style={{
            margin: '0 0 40px',
            fontFamily: '"Josefin Sans", Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
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
          className="why-grid"
        >
          {s.items.map((item, i) => (
            <div
              key={item.title}
              style={{
                background: '#ffffff',
                border: '1px solid #E2E4E7',
                borderRadius: 3,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <WhyIcon index={i} />
              <strong
                style={{
                  fontFamily: '"Josefin Sans", Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#4B5056',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {item.title}
              </strong>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 14,
                  color: '#636972',
                  lineHeight: 1.6,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
