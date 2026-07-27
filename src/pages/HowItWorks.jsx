import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      step: "01",
      title: "Inquiry & Requirement Analysis",
      desc: "Send us your product specs, target price, and annual volume. We review your project to ensure feasibility and set clear expectations.",
      id: "step-inquiry"
    },
    {
      step: "02",
      title: "Sourcing & Supplier Review",
      desc: "We screen dozens of suppliers and select the top 3-5 candidates. You receive a detailed report with pricing, factory profiles, and our recommendations.",
      id: "step-sourcing"
    },
    {
      step: "03",
      title: "Sampling & Negotiation",
      desc: "We handle sample orders, consolidate them into one shipment to save you costs, and negotiate final contracts, terms, and quality standards.",
      id: "step-sample"
    },
    {
      step: "04",
      title: "Production Monitoring",
      desc: "Once you place the order, we provide weekly updates. We manage timelines and address any production issues on-site before they escalate.",
      id: "step-prod"
    },
    {
      step: "05",
      title: "Inspection & QC",
      desc: "Our inspectors perform on-site checks based on AQL standards. You get a full PDF report with photos/videos. We only release payment when you approve.",
      id: "step-qc"
    },
    {
      step: "06",
      title: "Logistics Coordination",
      desc: "We arrange container loading and handle export documentation. Goods are shipped via your preferred method directly to your warehouse.",
      id: "step-ship"
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl font-extrabold text-primary mb-6 italic">Our Proven Sourcing Process</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We follow a standardized, transparent 6-step workflow designed to minimize risk and maximize efficiency for global buyers. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="flex space-x-6 relative">
              <div className="flex-shrink-0">
                <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </span>
                {idx < steps.length - 2 && <div className="hidden md:block absolute left-6 top-12 w-0.5 h-full bg-slate-200 -ml-px"></div>}
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full hover:shadow-md transition-shadow">
                <h3 id={step.id} className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{step.desc}</p>
                <div className="w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <img 
                    alt={step.title}
                    data-strk-img-id={`step-img-${idx}`}
                    data-strk-img={`[${step.id}] China sourcing office factory quality control`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-2xl p-10 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 italic">Ready to place your first inquiry?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">Get a response from our China sourcing experts within 24 business hours.</p>
              <Link to="/contact" className="btn-accent inline-flex items-center text-lg px-10">
                Get a Free Quote <ChevronRight size={20} className="ml-2" />
              </Link>
           </div>
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <CheckCircle2 size={300} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
