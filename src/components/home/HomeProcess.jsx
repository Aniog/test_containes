import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeProcess = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    { title: "Find", desc: "Source verified suppliers", id: "proc-find" },
    { title: "Verify", desc: "On-site factory audits", id: "proc-verify" },
    { title: "Inspect", desc: "Rigid quality control", id: "proc-inspect" },
    { title: "Ship", desc: "Safe global logistics", id: "proc-ship" }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12 italic">How We Protect Your Sourcing</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  alt={step.title}
                  data-strk-img-id={`proc-img-${idx}`}
                  data-strk-img={`[${step.id}] China sourcing office factory inspection`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-7xl font-black text-white/20 select-none">{idx + 1}</span>
                </div>
              </div>
              <h3 id={step.id} className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[40%] -right-4 translate-x-1/2 z-10 text-slate-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to="/how-it-works" className="text-primary font-bold hover:text-accent transition-colors flex items-center justify-center">
            Detailed Process Overview <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
