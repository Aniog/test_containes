import React from 'react';
import { ChevronDown } from './Icons.jsx';

const FAQ = ({ t, faqItems }) => (
  <section
    className="strk-section"
    aria-labelledby="faq-heading"
  >
    <div className="strk-container">
      <h2 className="strk-section__heading" id="faq-heading">
        {t('faq.heading')}
      </h2>
      <p className="strk-section__sub">&nbsp;</p>

      <div className="strk-faq__list">
        {faqItems.map((item, i) => {
          const expanded = i === 0;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;
          return (
            <div className="strk-faq__item" key={item.q}>
              <button
                type="button"
                className="strk-faq__btn"
                id={btnId}
                aria-expanded={expanded ? 'true' : 'false'}
                aria-controls={panelId}
              >
                <span>{item.q}</span>
                <ChevronDown className="strk-faq__icon" size={16} />
              </button>
              <div
                className="strk-faq__panel"
                id={panelId}
                role="region"
                aria-labelledby={btnId}
              >
                <div>
                  <div className="strk-faq__panel-inner">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FAQ;
