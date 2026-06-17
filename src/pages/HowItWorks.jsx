import React from 'react';
import { Search, ShieldCheck, Factory, Truck, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Sourcing Inquiry",
      desc: "Send us your product specifications, target price, and quantity. We'll analyze your project and confirm if we're a good fit.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Supplier Matching",
      desc: "We screen 10-20 potential factories, narrowing it down to the top 2-3 based on capability, price, and reputation.",
      icon: <Factory className="w-8 h-8" />
    },
    {
      title: "Sample Verification",
      desc: "We collect samples, inspect them in our office, and ship the best ones to you for final approval.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Mass Production",
      desc: "Once the deposit is paid, we monitor production to ensure the factory stays on schedule and follows your requirements.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Quality Inspection",
      desc: "Prior to final payment, our QC team visits the factory to perform a detailed inspection following AQL standards.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Shipping Coordination",
      desc: "We handle the final logistics, from booking containers to preparing customs documents for export.",
      icon: <Truck className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">A transparent, step-by-step approach to securing your supply chain in China. No hidden fees, just straightforward professional service.</p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2"></div>

            <div className="space-y-24">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className={`text-center lg:text-left ${i % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Circle Indicator */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-white shadow-xl shadow-blue-200 ring-8 ring-white">
                    {step.icon}
                    <div className="absolute -top-10 text-blue-700 font-black italic opacity-20 text-4xl leading-none">0{i+1}</div>
                  </div>

                  <div className="lg:w-1/2 hidden lg:block">
                    <div className="bg-slate-50 rounded-2xl aspect-[16/9] border border-slate-100 overflow-hidden shadow-inner">
                       <img
                          data-strk-img-id={`process-img-${i}`}
                          data-strk-img={`step ${i+1} ${step.title} china sourcing`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={step.title}
                          className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to experience a smoother sourcing journey?</h2>
            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-all">
               Get Your Free Strategy Consultation <ArrowRight className="w-5 h-5" />
            </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
