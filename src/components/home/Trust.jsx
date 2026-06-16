import React from 'react';
import { ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: '3-Year Warranty',
    description: 'Every machine comes with a comprehensive 3-year warranty covering all major components.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Reliable worldwide delivery with professional installation and commissioning services.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support from our team of experienced engineers.',
  },
];

const Trust = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
