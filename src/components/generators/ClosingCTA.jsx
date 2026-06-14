import React from 'react';

const ClosingCTA = ({ t }) => (
  <section
    className="strk-section strk-section--closing strk-closing"
    aria-labelledby="closing-heading"
  >
    <div className="strk-container">
      <h2
        className="strk-closing__title"
        id="closing-heading"
      >
        {t('closing.heading')}
      </h2>
      <p className="strk-closing__sub">{t('closing.sub')}</p>
      <a
        className="strk-btn strk-btn--gradient strk-btn--lg"
        href="/s/ai_site_builder"
        style={{ minWidth: 240 }}
      >
        {t('closing.cta')}
      </a>
    </div>
  </section>
);

export default ClosingCTA;
