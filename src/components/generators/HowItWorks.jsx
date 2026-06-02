import React from 'react';
import { strings } from '@/data/generators';

const s = strings.en;

export default function HowItWorks() {
  return (
    <section style={{ padding: '40px 0', background: '#F4F6F8' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          {s.howItWorks.heading}
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {s.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 280px',
                maxWidth: '360px',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#8159BB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  margin: '0 auto 16px',
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  marginBottom: '8px',
                  color: '#2E2E2F',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#636972',
                  lineHeight: 1.5,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
