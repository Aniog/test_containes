import React from 'react';

export default function ClosingCTA({ s }) {
  return (
    <section className="strk-section strk-section-closing" aria-labelledby="closing-heading">
      <div className="strk-container strk-closing-inner">
        <h2 id="closing-heading" className="strk-h2">
          {s.closing.heading}
        </h2>
        <p className="strk-closing-sub">{s.closing.sub}</p>
        <a className="strk-btn strk-btn-primary strk-btn-lg" href="/s/ai_site_builder">
          {s.closing.cta}
        </a>
      </div>
    </section>
  );
}
