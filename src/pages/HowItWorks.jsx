import React from 'react';
import { Search, FileText, CheckCircle, Truck, Package } from 'lucide-react';

const steps = [
  {
    title: "Step 1: Consultation",
    desc: "We discuss your product specs, target price, and compliance needs to define the scope of search.",
    icon: FileText
  },
  {
    title: "Step 2: Sourcing & Vetting",
    desc: "We shortlist 5-10 factories, perform background checks, and negotiate terms on your behalf.",
    icon: Search
  },
  {
    title: "Step 3: Sampling",
    desc: "We coordinate sample creation and shipping, reviewing them locally before sending them to you.",
    icon: Package
  },
  {
    title: "Step 4: QC & Production",
    desc: "On-site inspections at 20%, 50%, and 80% marks ensure quality stays high throughout the run.",
    icon: CheckCircle
  },
  {
    title: "Step 5: Shipping",
    desc: "We handle container loading supervision and coordinate with forwarders for the best rates.",
    icon: Truck
  }
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Working Process</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A transparent, 5-step framework designed to eliminate guesswork and risk from your China supply chain.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative space-y-24">
            {/* The vertical connector line on desktop */}
            <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-blue-100 hidden lg:block" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white z-10 shrink-0 shadow-lg">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="lg:pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
