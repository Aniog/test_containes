import React from 'react';
import { strings } from '@/data/generators';
import { Zap, Smartphone, CreditCard } from 'lucide-react';

const s = strings.en;

const iconMap = {
  'LIVE IN SECONDS': Zap,
  'MOBILE BY DEFAULT': Smartphone,
  'FREE TO START': CreditCard,
};

export default function WhyStrikingly() {
  return (
    <section style={{ padding: '40px 0' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          {s.whyStrikingly.heading}
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {s.whyStrikingly.features.map((feat, idx) => {
            const Icon = iconMap[feat.title];
            return (
              <div
                key={idx}
                style={{
                  flex: '1 1 280px',
                  maxWidth: '360px',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                {Icon && (
                  <div style={{ marginBottom: '16px' }}>
                    <Icon size={32} color="#8159BB" strokeWidth={1.5} />
                  </div>
                )}
                <h3
                  style={{
                    fontSize: '16px',
                    marginBottom: '8px',
                    color: '#2E2E2F',
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#636972',
                    lineHeight: 1.5,
                  }}
                >
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
