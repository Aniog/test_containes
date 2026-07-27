import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      step: "01",
      title: "Inquiry & Consultation",
      desc: "Tell us what you need. We discuss your specifications, budget, and timeline to understand your project fully."
    },
    {
      step: "02",
      title: "Supplier Sourcing",
      desc: "We match your requirements with our pre-vetted factory network or scout for new potential manufacturers."
    },
    {
      step: "03",
      title: "Sampling & Negotiation",
      desc: "We arrange samples to verify quality and negotiate the best possible pricing and terms on your behalf."
    },
    {
      step: "04",
      title: "Production Monitoring",
      desc: "Once you approve the sample, mass production begins. We keep you updated with progress reports."
    },
    {
      step: "05",
      title: "Quality Inspection",
      desc: "Our QC team inspects the goods during and after production to ensure they meet your standards."
    },
    {
      step: "06",
      title: "Shipping & Delivery",
      desc: "We handle the logistics, export customs, and coordinate shipping to your final destination."
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="hiw-title">A Transparent, 6-Step Process</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="hiw-subtitle">
            We simplify your China sourcing journey. Here is exactly how we work with you from start to finish.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-5xl mx-auto px-4">
        <div className="space-y-12">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start opacity-100 relative">
              {i !== steps.length - 1 && (
                 <div className="hidden md:block absolute left-8 top-16 bottom-[-3rem] w-0.5 bg-slate-200"></div>
              )}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 relative z-10">
                {s.step}
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Take the First Step?</h2>
          <p className="text-lg text-slate-600 mb-8">Send us your product specifications and let's get started.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit an Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;