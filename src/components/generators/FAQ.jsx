import React from 'react';

export default function FAQ({ s }) {
  return (
    <section className="strk-section strk-section-soft" aria-labelledby="faq-heading">
      <div className="strk-container">
        <header className="strk-section-head">
          <h2 id="faq-heading" className="strk-h2">
            {s.faq.heading}
          </h2>
          <p className="strk-section-sub">{s.faq.sub}</p>
        </header>
        <div className="strk-faq-list">
          {s.faq.items.map((item, idx) => {
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-button-${idx}`;
            return (
              <details
                key={item.q}
                className="strk-faq-item"
                open={idx === 0}
                data-faq-item
              >
                <summary
                  id={btnId}
                  className="strk-faq-question"
                  aria-expanded={idx === 0 ? 'true' : 'false'}
                  aria-controls={panelId}
                >
                  <span className="strk-faq-q-text">{item.q}</span>
                  <span className="strk-faq-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div
                  id={panelId}
                  className="strk-faq-answer"
                  role="region"
                  aria-labelledby={btnId}
                >
                  <p>{item.a}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
