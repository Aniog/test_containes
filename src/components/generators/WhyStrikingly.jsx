import React from 'react';
import { LightningIcon, MobileIcon, FreeIcon } from './Icons.jsx';

const WhyStrikingly = ({ t }) => (
  <section
    className="strk-section"
    aria-labelledby="why-heading"
  >
    <div className="strk-container">
      <h2 className="strk-section__heading" id="why-heading">
        {t('why.heading')}
      </h2>
      <p className="strk-section__sub">&nbsp;</p>

      <div className="strk-why__grid">
        <article className="strk-why__cell">
          <div className="strk-why__icon" aria-hidden="true">
            <LightningIcon size={20} />
          </div>
          <h3 className="strk-why__title">{t('why.cell1Title')}</h3>
          <p className="strk-why__body">{t('why.cell1Body')}</p>
        </article>
        <article className="strk-why__cell">
          <div className="strk-why__icon" aria-hidden="true">
            <MobileIcon size={20} />
          </div>
          <h3 className="strk-why__title">{t('why.cell2Title')}</h3>
          <p className="strk-why__body">{t('why.cell2Body')}</p>
        </article>
        <article className="strk-why__cell">
          <div className="strk-why__icon" aria-hidden="true">
            <FreeIcon size={20} />
          </div>
          <h3 className="strk-why__title">{t('why.cell3Title')}</h3>
          <p className="strk-why__body">{t('why.cell3Body')}</p>
        </article>
      </div>
    </div>
  </section>
);

export default WhyStrikingly;
