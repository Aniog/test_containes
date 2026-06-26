import React from 'react';
import { Search, Shield, Zap, Package, Truck, Smile } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Discuss Requirements',
      desc: 'You send us your product specifications, target pricing, and quality standards.',
      icon: Search,
      id: 'step-1'
    },
    {
      title: 'Supplier Sourcing',
      desc: 'We identify 5-10 potential suppliers and provide you with a shortlist of the best 3.',
      icon: Zap,
      id: 'step-2'
    },
    {
      title: 'Sample Evaluation',
      desc: 'We collect and consolidate samples from different factories to save on international shipping costs.',
      icon: Package,
      id: 'step-3'
    },
    {
      title: 'Order Placement',
      desc: 'We handle the negotiation, contract signing, and payment coordination with the factory.',
      icon: Shield,
      id: 'step-4'
    },
    {
      title: 'Quality Inspection',
      desc: 'Our QC team visits the factory during and after production to ensure quality compliance.',
      icon: Shield,
      id: 'step-5'
    },
    {
      title: 'Shipping & Delivery',
      desc: 'We coordinate the logistics and delivery to your final destination, handling all paperwork.',
      icon: Truck,
      id: 'step-6'
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our systematic 6-step process ensures a smooth and risk-free sourcing experience.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2" />
          
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
                  <div className={`text-center lg:text-left ${idx % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-bold mb-4">
                      Step {idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-xl ring-8 ring-white">
                    <step.icon size={24} />
                  </div>
                </div>
                
                <div className="lg:w-1/2 hidden lg:block">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <img 
                      data-strk-img-id={`step-img-${step.id}`}
                      data-strk-img={`China sourcing process ${step.title}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="rounded-lg shadow-sm w-full h-48 object-cover"
                      alt={step.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smile className="mx-auto mb-8 text-brand-orange" size={64} />
          <h2 className="text-3xl font-bold mb-6">Simple, Transparent, and Professional</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We don't charge hidden fees or commissions from factories. You pay for our service, and we work exclusively for your interests.
          </p>
          <div className="inline-flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-100/60">
            <span>Fixed Fee Option</span>
            <span>Monthly Retainer</span>
            <span>Zero Commissions</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
