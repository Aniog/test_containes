import React, { useEffect, useRef } from 'react';
import { Search, ClipboardCheck, Settings, ShieldCheck, Truck, PackageCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: 'Consultation & Quoting',
      desc: 'Tell us your product requirements, target price, and volume. We provide a preliminary assessment and sourcing quote.',
      icon: Search
    },
    {
      title: 'Supplier Selection',
      desc: 'We identify and verify top-tier manufacturers, requesting samples to ensure they meet your quality standards.',
      icon: ClipboardCheck
    },
    {
      title: 'Sample Verification',
      desc: 'We consolidate samples from different suppliers and ship them to you for final approval before production begins.',
      icon: PackageCheck
    },
    {
      title: 'Order Placement',
      desc: 'We negotiate the best terms and handle contract signing with the supplier to protect your interests.',
      icon: Settings
    },
    {
      title: 'Production & QC',
      desc: 'Our team monitors the production line and performs final random inspections before the goods leave the factory.',
      icon: ShieldCheck
    },
    {
      title: 'Shipping & Delivery',
      desc: 'We coordinate freight, handle export documentation, and ensure your goods arrive safely at your destination.',
      icon: Truck
    }
  ];

  return (
    <div className="bg-slate-50 py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">How It Works</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our systematic approach ensures a smooth, transparent, and risk-free sourcing experience from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-12">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`inline-flex items-center justify-center p-3 bg-blue-600 rounded-lg text-white mb-6 ${index % 2 === 1 ? '' : 'lg:ml-auto'}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Step {index + 1}: {step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 border-4 border-white rounded-full items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>

                <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-start px-4 lg:px-12 mt-8 lg:mt-0">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 w-full max-w-md">
                    <img
                      data-strk-img-id={`step-img-${index}`}
                      data-strk-img={`${step.title} china sourcing process`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
