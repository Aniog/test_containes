import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    num: "01",
    title: "Request for Quote",
    desc: "Tell us about your target product, specifications, and estimated quantities."
  },
  {
    num: "02",
    title: "Sourcing & Quoting",
    desc: "We search our databank and the market to find top 3 factories and provide detailed quotes."
  },
  {
    num: "03",
    title: "Sample Verification",
    desc: "We collect samples, review them, and send them to you for final approval."
  },
  {
    num: "04",
    title: "Production Management",
    desc: "Order placement and constant follow-up to ensure timelines are met."
  },
  {
    num: "05",
    title: "Quality Inspection",
    desc: "Our QC team visits the factory to perform rigorous pre-shipment inspections."
  },
  {
    num: "06",
    title: "Shipping Coordination",
    desc: "Consolidation and delivery to your destination by sea, air, or express."
  }
];

const ProcessSteps = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-amber-500 font-bold text-lg uppercase tracking-wider mb-3">Simple & Professional</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8">
              How Our China Sourcing Process Works
            </h3>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 font-bold text-lg">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-800">
              <img 
                data-strk-img-id="process-img-88"
                data-strk-img="China export business office team working"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                alt="Our Process"
                className="w-full"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
