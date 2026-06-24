import { strings } from '@/data/generators';

const s = strings.en.howItWorks;

export default function HowItWorks() {
  return (
    <section style={{ padding: '60px 20px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 50px', textAlign: 'center' }}
        >
          {s.heading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40,
            position: 'relative',
          }}
          className="how-grid"
        >
          {s.steps.map((step) => (
            <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
              {/* Numbered circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--ai-from), var(--ai-to))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                }}
                aria-hidden="true"
              >
                {step.num}
              </div>
              <strong
                className="font-heading"
                style={{ fontSize: 14, color: 'var(--hero-heading)', letterSpacing: '0.04em' }}
              >
                {step.title}
              </strong>
              <p style={{ fontSize: 14, color: 'var(--body-text)', lineHeight: 1.6, margin: 0 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .how-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
      `}</style>
    </section>
  );
}

