import React from 'react';
import { strings } from '@/lib/strings.en';
import { Zap, Smartphone, DollarSign } from 'lucide-react';

const WhyStrikingly = () => {
  const { en } = strings;
  
  const getIcon = (index) => {
    const icons = [
      <Zap className="w-8 h-8 text-[#8159BB]" />,
      <Smartphone className="w-8 h-8 text-[#8159BB]" />,
      <DollarSign className="w-8 h-8 text-[#8159BB]" />
    ];
    return icons[index];
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 border-t border-subtle-divider">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl mb-12 text-center">{en.whyStrikingly.heading}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {en.whyStrikingly.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                {getIcon(index)}
              </div>
              <h3 className="text-lg text-heading-text mb-2 font-heading">{item.title}</h3>
              <p className="text-[#636972] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
