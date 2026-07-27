import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Ship, Target, Factory, FileCheck, PackageCheck } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: '1. Initial Inquiry & Consultation',
      description: 'You share your product requirements, target price, and estimated volume. Our experts review the feasibility and provide initial advice.',
      icon: Target,
      imgId: 'step-inquiry-img-101'
    },
    {
      title: '2. Supplier Identification',
      description: 'We search our network and reach out to new factories. We shortlist 3-5 potential suppliers who meet your criteria.',
      icon: Search,
      imgId: 'step-sourcing-img-102'
    },
    {
      title: '3. Sample Development',
      description: 'We coordinate sample production and consolidate them in our warehouse for a single international shipment to you.',
      icon: Factory,
      imgId: 'step-sample-img-103'
    },
    {
      title: '4. Factory Audit & Verification',
      description: 'Once you approve a sample, we perform a deep-dive on-site audit of the chosen factory to ensure they are a legitimate manufacturer.',
      icon: ShieldCheck,
      imgId: 'step-audit-img-104'
    },
    {
      title: '5. Order Placement & Production Monitoring',
      description: 'We manage the contract negotiation and monitor the production schedule to prevent delays and misunderstandings.',
      icon: FileCheck,
      imgId: 'step-production-img-105'
    },
    {
      title: '6. Quality Control Inspection',
      description: 'Our QC team checks the mass production against your standards. If issues are found, they are resolved on-site before shipment.',
      icon: ClipboardCheck,
      imgId: 'step-qc-img-106'
    },
    {
      title: '7. Shipping & Logistics',
      description: 'We coordinate the final shipment, manage export documentation, and ensure you have everything needed for customs clearance.',
      icon: Ship,
      imgId: 'step-shipping-img-107'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="howitworks-title" className="text-4xl md:text-5xl font-bold text-slate-900">Our Professional Sourcing Process</h1>
          <p id="howitworks-subtitle" className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Transparency at every stage. We act as your eyes and ears on the ground in China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                      {index + 1}
                    </div>
                    <h2 id={`step-title-${index}`} className="text-2xl md:text-3xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p id={`step-desc-${index}`} className="text-slate-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-3">
                    <step.icon className="h-6 w-6 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Dedicated Project Support</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[step-desc-${index}] [step-title-${index}] China sourcing process factory inspection warehouse`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={step.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-blue-400 font-bold text-4xl mb-2">100%</div>
              <p className="text-slate-400 text-sm">Transparency in Every Quote</p>
            </div>
            <div>
              <div className="text-blue-400 font-bold text-4xl mb-2">0</div>
              <p className="text-slate-400 text-sm">Hidden Commissions</p>
            </div>
            <div>
              <div className="text-blue-400 font-bold text-4xl mb-2">24/7</div>
              <p className="text-slate-400 text-sm">Real-time Project Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Start Your Sourcing Journey Today</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Ready to find your next reliable supplier in China?
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
