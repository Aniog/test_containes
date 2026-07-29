import React, { useEffect, useRef } from 'react';
import { Search, Calculator, ShieldCheck, Factory, Truck, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: 'Submit Inquiry',
      desc: 'Tell us about your product requirements, including specifications, quantities, and target pricing.',
      icon: Search
    },
    {
      title: 'Sourcing & Quoting',
      desc: 'We identify 3-5 top suppliers and provide you with a detailed quote including product costs and shipping estimates.',
      icon: Calculator
    },
    {
      title: 'Sample Processing',
      desc: 'We coordinate samples from selected manufacturers and ship them to you for approval.',
      icon: CheckCircle
    },
    {
      title: 'Factory Audit & Order',
      desc: 'We perform a background check on the chosen factory before you place the 30% deposit.',
      icon: ShieldCheck
    },
    {
      title: 'Production & QC',
      desc: 'We monitor production and perform a final 100% or AQL-based inspection before balance payment.',
      icon: Factory
    },
    {
      title: 'Shipping & Delivery',
      desc: 'We manage consolidation and shipping to your destination, handling all customs paperwork.',
      icon: Truck
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-width-container px-4 text-center">
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-extrabold mb-6">Our 6-Step Sourcing Process</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A transparent and proven workflow to ensure your products are manufactured to your exact standards and delivered on time.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-width-container px-4">
          <div className="relative">
            {/* Desktop Path Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/10 -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Step Number Circle */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full items-center justify-center font-bold text-xl z-20 shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6 ${index % 2 !== 0 ? 'lg:float-right lg:ml-6' : 'lg:mr-6'}`}>
                      <step.icon size={32} />
                    </div>
                    <div className={`clear-both ${index % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 w-full">
                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3] bg-slate-100">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                        data-strk-img-id={`hiw-step-${index}`}
                        data-strk-img={`[hiw-title] step ${index + 1} China sourcing journey factory office`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="max-width-container px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-8">Ready to take the first step?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Our sourcing experts are ready to help you find the perfect supplier for your project.</p>
          <button className="bg-secondary text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">Start Your Free Sourcing Inquiry</button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
