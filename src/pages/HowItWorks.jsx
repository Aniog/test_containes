import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ClipboardList, Search, PenTool, CheckSquare, Ship } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    { title: 'Inquiry', icon: ClipboardList, desc: 'Tell us about your product requirements, target price, and quantity.' },
    { title: 'Sourcing & Quoting', icon: Search, desc: 'We find the best suppliers and provide you with detailed quotes within 48 hours.' },
    { title: 'Sampling', icon: PenTool, desc: 'We arrange samples for your approval, ensuring all specifications are met.' },
    { title: 'Production', icon: CheckSquare, desc: 'We monitor the production process and perform quality inspections.' },
    { title: 'Shipping', icon: Ship, desc: 'Final QC, consolidation, and coordination of international shipping.' }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-400">A clear, transparent, and efficient way to source products from China.</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')] bg-cover"></div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2"></div>
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-right md:pr-12 last:md:pr-0 first:md:pr-12 pb-12 md:pb-0">
                  <div className={`flex justify-center md:justify-end mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">{i + 1}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-lg">{step.desc}</p>
                </div>
                <div className="w-20 h-20 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center z-10 shrink-0">
                   <step.icon className="w-10 h-10 text-accent" />
                </div>
                <div className="flex-1 w-full">
                   <img 
                    data-strk-img-id={`step-img-${i}`}
                    data-strk-img={`step ${i+1} sourcing process ${step.title}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="rounded-2xl shadow-lg w-full"
                   />
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
