import React from 'react';

const steps = [
  {
    number: "01",
    title: "Submit Requirements",
    desc: "Tell us what you need: product specs, target price, quantities, and necessary certifications."
  },
  {
    number: "02",
    title: "Supplier Matching",
    desc: "We scan our network and the market to find 3-5 verified factories that match your exact needs."
  },
  {
    number: "03",
    title: "Sampling & Auditing",
    desc: "We consolidate samples for your approval and conduct on-site audits of the chosen factory."
  },
  {
    number: "04",
    title: "Production Tracking",
    desc: "Once you place the order, we monitor production closely to ensure timelines are met without cutting corners."
  },
  {
    number: "05",
    title: "Quality Inspection",
    desc: "We perform strict pre-shipment inspections (AQL standards) and send you a detailed photo/video report."
  },
  {
    number: "06",
    title: "Shipping & Delivery",
    desc: "We handle customs, find the best freight rates (sea/air/express), and deliver to your warehouse."
  }
];

export default function HomeProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-slate-600">
            A proven, step-by-step methodology to source from China safely and efficiently.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-100" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 relative z-10">
                  <span className="text-xl font-bold text-slate-400 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
