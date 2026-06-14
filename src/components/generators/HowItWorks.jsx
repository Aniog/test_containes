import React from 'react';

const steps = [
  {
    num: '1',
    title: 'Pick a Generator',
    body: 'Browse by category or search to find one that fits your goal.',
  },
  {
    num: '2',
    title: 'Describe Your Site',
    body: 'Tell our AI builder about your business in a sentence or two.',
  },
  {
    num: '3',
    title: 'Generate and Publish',
    body: 'Get a fully built site in seconds. Customize anything, then go live.',
  },
];

const HowItWorks = () => (
  <section
    style={{
      background: 'var(--color-surface)',
      padding: '60px 20px',
      borderTop: '1px solid var(--color-divider)',
    }}
  >
    <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
      <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '8px' }}>
        How It Works
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
        From idea to live site in three steps.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}
        className="steps-grid"
      >
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
            }}
          >
            {/* Numbered circle */}
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  color: 'var(--color-heading)',
                  margin: '0 0 8px',
                  letterSpacing: '0.04em',
                }}
              >
                {step.title}
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
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 640px) {
        .steps-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default HowItWorks;
