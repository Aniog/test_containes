import React from 'react';

const HowItWorks = ({ t }) => (
  <section
    className="strk-section strk-how"
    aria-labelledby="how-heading"
  >
    <div className="strk-container">
      <h2 className="strk-section__heading" id="how-heading">
        {t('howItWorks.heading')}
      </h2>
      <p className="strk-section__sub">&nbsp;</p>

      <div className="strk-how__grid">
        <article className="strk-how__step">
          <div className="strk-how__num" aria-hidden="true">1</div>
          <h3 className="strk-how__title">{t('howItWorks.step1Title')}</h3>
          <p className="strk-how__body">{t('howItWorks.step1Body')}</p>
        </article>
        <article className="strk-how__step">
          <div className="strk-how__num" aria-hidden="true">2</div>
          <h3 className="strk-how__title">{t('howItWorks.step2Title')}</h3>
          <p className="strk-how__body">{t('howItWorks.step2Body')}</p>
        </article>
        <article className="strk-how__step">
          <div className="strk-how__num" aria-hidden="true">3</div>
          <h3 className="strk-how__title">{t('howItWorks.step3Title')}</h3>
          <p className="strk-how__body">{t('howItWorks.step3Body')}</p>
        </article>
      </div>
    </div>
  </section>
);

export default HowItWorks;
