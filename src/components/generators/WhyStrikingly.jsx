import React from 'react';
import { strings } from '../../constants/strings';
import { Zap, Smartphone, Sparkles } from 'lucide-react';

const WhyStrikingly = () => {
  const { whyStrikingly } = strings.en;

  const icons = [<Zap />, <Smartphone />, <Sparkles />];

  return (
    <section className="bg-white py-[60px] md:py-[80px] border-t border-[#E2E4E7]">
      <div className="container-custom">
        <div className="text-center mb-[50px]">
          <h2 className="text-[26px] md:text-[32px] text-[#4B5056]">{whyStrikingly.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyStrikingly.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-5 text-[#8159BB]">
                {React.cloneElement(icons[idx], { size: 40, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-[14px] font-bold text-[#4B5056] mb-3 uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-[#636972] text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
