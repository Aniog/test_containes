import React from 'react';
import { ClockIcon, SmartphoneIcon, DollarIcon } from './Icons';
import strings from '../../strings';

const s = strings.en;

const reasons = [
  { icon: <ClockIcon size={36} />, title: s.why1Title, desc: s.why1Desc },
  { icon: <SmartphoneIcon size={36} />, title: s.why2Title, desc: s.why2Desc },
  { icon: <DollarIcon size={36} />, title: s.why3Title, desc: s.why3Desc },
];

const WhyStrikingly = () => (
  <section className="py-[40px] bg-[var(--color-light-bg)]">
    <div className="content-container">
      <h2 className="text-[24px] md:text-[28px] text-[var(--color-heading-text)] text-center mb-[30px]">
        {s.whyTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {reasons.map((reason, i) => (
          <div key={i} className="text-center">
            <div className="inline-flex items-center justify-center mb-[15px]">
              {reason.icon}
            </div>
            <h3
              className="text-[14px] font-bold text-[var(--color-heading-text)] uppercase mb-[8px]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {reason.title}
            </h3>
            <p className="text-[14px] text-[var(--color-body-text)] leading-[1.6] max-w-[300px] mx-auto">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStrikingly;
