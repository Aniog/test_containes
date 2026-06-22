import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Search, Shield, PackageSearch, PenTool as Tool, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const steps = [
    {
      id: 1,
      name: 'Initial Consultation',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      description: 'We start by understanding your exact product requirements, target price, quality standards, and timeline. You submit an inquiry, and one of our sourcing agents will contact you within 24 hours to discuss the details.',
    },
    {
      id: 2,
      name: 'Supplier Search & Shortlisting',
      icon: <Search className="w-6 h-6 text-white" />,
      description: 'Our team taps into our extensive network and databases to identify potential manufacturers. We filter out trading companies and narrow down the list to 3-5 verified factories that match your criteria.',
    },
    {
      id: 3,
      name: 'Sample Evaluation',
      icon: <PackageSearch className="w-6 h-6 text-white" />,
      description: 'We collect samples from the shortlisted factories, consolidate them in our China office, perform an initial quality check, and ship them to you in one package to save on international courier fees.',
    },
    {
      id: 4,
      name: 'Negotiation & Order Placement',
      icon: <Tool className="w-6 h-6 text-white" />,
      description: 'Once you select a sample, we negotiate the final price, minimum order quantity (MOQ), and production lead time on your behalf. We help draft a secure purchase agreement that protects your interests.',
    },
    {
      id: 5,
      name: 'Production Monitoring & QC',
      icon: <Shield className="w-6 h-6 text-white" />,
      description: 'We monitor the production process closely. Before the final balance is paid, our inspectors visit the factory to conduct a comprehensive Pre-Shipment Inspection (PSI) based on AQL standards.',
    },
    {
      id: 6,
      name: 'Shipping & Logistics',
      icon: <Ship className="w-6 h-6 text-white" />,
      description: 'After passing inspection, we coordinate the shipping. Whether it’s sea freight, air freight, or express courier, we find the most cost-effective and reliable shipping method and handle all export customs clearance.',
    }
  ];

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="hiw-bg-29e2f"
          data-strk-bg="[hiw-title] business people reviewing documents warehouse"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <h1 id="hiw-title" className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            A Transparent, Step-by-Step Sourcing Process
          </h1>
          <p className="text-xl text-slate-300">
            We've refined our sourcing methodology over 10 years to ensure every step of your import journey is secure, efficient, and cost-effective.
          </p>
        </div>
      </section>

      {/* Steps Pipeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-0 left-4 md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg z-10 shadow-lg border-4 border-slate-50">
                    {step.id}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 pr-4 md:px-12 py-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
                       {/* Arrow pointing to center line */}
                       <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-white border-y border-slate-200 transform -translate-y-1/2 rotate-45 ${index % 2 === 0 ? '-left-2 border-l' : '-right-2 border-r z-20'}`}></div>
                       
                       <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                          <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">{step.name}</h3>
                       </div>
                       <p className="text-slate-600 leading-relaxed">
                         {step.description}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready for Step 1?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today with your product details, and let's start the process of finding your perfect manufacturing partner in China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Submit an Inquiry <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;