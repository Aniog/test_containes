import { strings } from '../../data/generators';

const { heading, items } = strings.en.whyStrikingly;

// Simple line icons for each benefit
const Icons = [
  // Lightning bolt — Live in Seconds
  <svg key="lightning" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M18 4L8 18h8l-2 10 14-16h-8l2-8z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>,
  // Mobile phone — Mobile by Default
  <svg key="mobile" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="25" r="1.5" fill="#8159BB" opacity="0.5" />
    <rect x="12" y="7" width="8" height="2" rx="1" fill="#C6C9CD" />
  </svg>,
  // Tag / price — Free to Start
  <svg key="tag" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M5 5h10l12 12-10 10L5 15V5z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="11" cy="11" r="2" fill="#8159BB" opacity="0.4" />
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 0',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div className="content-container">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-subheading">
          Built for speed, simplicity, and results.
        </p>

        <div className="why-grid">
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: '24px 20px',
                background: 'var(--color-light-bg)',
                borderRadius: 6,
                border: '1px solid var(--color-divider)',
              }}
            >
              <div>{Icons[i]}</div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-hero-heading)',
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: 'var(--color-body-text)',
                  lineHeight: 1.6,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
