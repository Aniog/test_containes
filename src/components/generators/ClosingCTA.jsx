import React from 'react';
import strings from '@/data/strings.en.js';

export default function ClosingCTA() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBlockEnd: '12px' }}>
          {strings.closingHeading}
        </h2>
        <p style={{ color: 'var(--color-body)', fontSize: '16px', marginBlockEnd: '24px' }}>
          {strings.closingSub}
        </p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
          {strings.closingCTA}
        </a>
      </div>
    </section>
  );
}