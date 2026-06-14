import React from 'react';

// Simple line icons
const Icons = {
  lightning: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M18 4L8 18h8l-2 10 14-18h-9l3-6H18z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  mobile: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="25" r="1.5" fill="#8159BB" fillOpacity="0.5"/>
      <rect x="12" y="7" width="8" height="2" rx="1" fill="#C6C9CD"/>
    </svg>
  ),
  free: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <path d="M16 10v12M12 14h6a2 2 0 010 4h-6" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const items = [
  {
    icon: 'lightning',
    title: 'Live in Seconds',
    body: 'Describe your site, we build it. No setup, no learning curve.',
  },
  {
    icon: 'mobile',
    title: 'Mobile by Default',
    body: 'Every generator produces responsive sites that work on any device.',
  },
  {
    icon: 'free',
    title: 'Free to Start',
    body: 'Generate, customize, and publish without a credit card.',
  },
];

const WhyStrikingly = () => (
  <section
    style={{
      background: '#ffffff',
      padding: '60px 20px',
      borderTop: '1px solid var(--color-divider)',
    }}
  >
    <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
      <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '8px' }}>
        Why Strikingly
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--color-body)',
          textAlign: 'center',
          margin: '0 0 50px',
        }}
      >
        Built for people who want a great site without the complexity.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}
        className="why-grid"
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '14px',
              padding: '30px 20px',
              border: '1px solid var(--color-divider)',
              borderRadius: '3px',
            }}
          >
            <div>{Icons[item.icon]}</div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '15px',
                textTransform: 'uppercase',
                color: 'var(--color-heading)',
                margin: 0,
                letterSpacing: '0.04em',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-body)',
                margin: 0,
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
      @media (max-width: 640px) {
        .why-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default WhyStrikingly;
