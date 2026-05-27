import React from 'react';
import { t } from '../../data/generatorsData';
import { FeatureIcon } from './Icons';

const features = [
  { titleKey: 'why1Title', descKey: 'why1Desc' },
  { titleKey: 'why2Title', descKey: 'why2Desc' },
  { titleKey: 'why3Title', descKey: 'why3Desc' },
];

const WhyStrikingly = () => (
  <section className="py-10 md:py-16">
    <div className="max-w-content mx-auto px-5">
      <h2 className="section-heading text-center mb-10">{t('whyStrikinglyHeading')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <FeatureIcon index={index} className="mb-4" />
            <h3 className="font-heading text-heading-darker text-sm mb-2">
              {t(feature.titleKey)}
            </h3>
            <p className="text-body-gray text-sm max-w-xs">
              {t(feature.descKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStrikingly;
