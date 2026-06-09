import React from 'react';
import { whyStrikinglyFeatures, strings } from '../data/generators';
import { FeatureIcon } from './Icons';

const s = strings.en;
const featureIcons = ['speed', 'mobile', 'free'];

export default function WhyStrikingly() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <h2 className="text-[22px] md:text-[28px] text-heading-gray text-center mb-[30px]">
          {s.whyStrikinglyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {whyStrikinglyFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-[16px]">
                <FeatureIcon type={featureIcons[i]} />
              </div>
              <h3 className="text-[14px] text-heading-gray mb-[8px] tracking-wide">
                {feature.title}
              </h3>
              <p className="text-body-gray text-[13px] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
