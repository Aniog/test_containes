import { strings } from '@/data/generators';

const s = strings.en.howItWorks;

const STEP_ICONS = [
  // Pick a generator
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.8" fill="none" />
    <path d="M18 18l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Describe your site
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="6" width="20" height="16" rx="3" stroke="white" strokeWidth="1.8" fill="none" />
    <path d="M8 11h12M8 15h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Generate and publish
  <svg key="3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 4l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 19l-6 4.5 2.5-7.5L4 11.5h7.5L14 4z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
  </svg>,
];

export default function HowItWorks() {
  return (
    <section style={{ padding: '60px 20px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 40px', textAlign: 'center' }}
        >
          {s.heading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40,
          }}
          className="how-grid"
        >
          {s.steps.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
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
                }}
              >
                {STEP_ICONS[i]}
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
