import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    desc: 'Tell us about your product needs, target price, and specifications.',
  },
  {
    number: '02',
    title: 'Sourcing & Quotation',
    desc: 'We shortlist 3-5 verified suppliers and provide a detailed comparison.',
  },
  {
    number: '03',
    title: 'Sampling',
    desc: 'We arrange samples for your approval, ensuring quality meets your standards.',
  },
  {
    number: '04',
    title: 'Production & QC',
    desc: 'Order is placed. We monitor production and perform strict quality inspections.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    desc: 'We coordinate the most cost-effective shipping to your final destination.',
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Proven 5-Step Sourcing Process
          </h3>
          <p className="text-lg text-slate-600">
            Simple, transparent, and designed to save you time and money while minimizing risk.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 italic leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
