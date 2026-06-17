import React from 'react';

const reasons = [
  {
    stat: '98%',
    label: 'Customer retention',
    text: 'Nearly every shop that buys an ARTITECT machine comes back when they need another.'
  },
  {
    stat: '16',
    label: 'Years average machine age',
    text: 'Our oldest active machines are still producing clean bends daily in shops around the world.'
  },
  {
    stat: '4.9',
    label: 'Average support rating',
    text: 'From installation training to emergency parts, our customers consistently rate us at the top.'
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-brand-gold font-semibold mb-3">WHY ARTITECT</div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-[-1.5px] text-brand-dark leading-none mb-6">
              Not just another machine builder.
            </h2>
            <div className="text-lg text-brand-slate space-y-5">
              <p>
                We could build cheaper folders. We choose not to. Every decision we make — from frame thickness to control software — is made with the long-term success of your shop in mind.
              </p>
              <p>
                When you buy an ARTITECT machine, you are not just buying steel and hydraulics. You are buying a partner who cares whether your tenthousandth bend is as perfect as your first.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div key={i} className="card p-8 flex gap-6">
                <div className="font-serif text-6xl text-brand-gold tracking-tighter leading-none pt-1">{reason.stat}</div>
                <div>
                  <div className="font-semibold text-brand-dark text-lg mb-1">{reason.label}</div>
                  <p className="text-brand-slate">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-slate-200 text-center">
          <div className="text-sm uppercase tracking-[3px] text-brand-gold mb-3">TRUSTED BY</div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xl font-serif text-brand-dark/70 tracking-tight">
            <div>Aerospace Fabricators</div>
            <div>Architectural Metal</div>
            <div>HVAC Specialists</div>
            <div>Precision Job Shops</div>
            <div>Custom Builders</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;