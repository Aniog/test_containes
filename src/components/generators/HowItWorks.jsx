import React from 'react';
import { t } from '../../data/generatorsData';
import { StepNumber } from './Icons';

const steps = [
  { titleKey: 'step1Title', descKey: 'step1Desc' },
  { titleKey: 'step2Title', descKey: 'step2Desc' },
  { titleKey: 'step3Title', descKey: 'step3Desc' },
];

const HowItWorks = () => (
  <section className="py-10 md:py-16 bg-light-bg">
    <div className="max-w-content mx-auto px-5">
      <h2 className="section-heading text-center mb-10">{t('howItWorksHeading')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <StepNumber number={index + 1} className="mb-4" />
            <h3 className="font-heading text-heading-darker text-sm mb-2">
              {t(step.titleKey)}
            </h3>
            <p className="text-body-gray text-sm max-w-xs">
              {t(step.descKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
