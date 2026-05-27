import React from 'react';
import { t } from '../../data/generatorsData';

const ClosingCTA = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="max-w-content mx-auto px-5 text-center">
      <h2 className="font-heading text-heading-darker text-2xl md:text-3xl mb-3">
        {t('closingCtaHeading')}
      </h2>
      <p className="text-body-gray text-base mb-8 max-w-lg mx-auto">
        {t('closingCtaSub')}
      </p>
      <a
        href="/s/ai_site_builder"
        className="btn-primary btn-primary-big inline-block"
      >
        {t('closingCtaButton')}
      </a>
    </div>
  </section>
);

export default ClosingCTA;
