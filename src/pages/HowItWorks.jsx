import React, { useEffect, useRef } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    desc: 'You provide us with your product specifications, target pricing, quantities, and quality standards. We analyze the feasibility and provide a general assessment.',
  },
  {
    number: '02',
    title: 'Supplier Shortlisting',
    desc: 'We map out a list of 5-10 pre-vetted factories capable of manufacturing your product, negotiating preliminary quotes to ensure they fall within your target budget.',
  },
  {
    number: '03',
    title: 'Sample Development',
    desc: 'We consolidate samples from the top 2-3 factories, perform a basic quality check locally in China, and ship them to you in one package to save on international courier fees.',
  },
  {
    number: '04',
    title: 'Factory Audit & Contracting',
    desc: 'Once a factory is selected, we perform an on-site audit. If they pass, we help draft bilingual manufacturing contracts with clear penalty clauses for delays or defects.',
  },
  {
    number: '05',
    title: 'Production Follow-up',
    desc: 'We act as your local project manager, tracking production milestones, resolving communication issues, and providing you with regular status updates and photos.',
  },
  {
    number: '06',
    title: 'Quality Inspection',
    desc: 'Before shipping, our inspectors visit the factory to conduct a strict AQL inspection. Goods are only released for shipment once they pass your quality standards.',
  },
  {
    number: '07',
    title: 'Logistics & Delivery',
    desc: 'We arrange the most cost-effective freight (sea/air), handle export customs clearance, and track the shipment until it arrives safely at your destination.',
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 mix-blend-multiply opacity-20"
          data-strk-bg-id="howitworks-bg-001"
          data-strk-bg="[howitworks-title] supply chain planning factory meeting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="howitworks-title" className="text-4xl md:text-5xl font-bold text-white mb-6">How Our Sourcing Process Works</h1>
          <p className="text-xl text-blue-100">
            A transparent, 7-step proven methodology to get your products manufactured and shipped safely.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-slate-200 ml-4 md:ml-8 space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-16">
                {/* Timeline Dot */}
                <div className="absolute -left-[22px] md:-left-[26px] top-0 bg-orange-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-50 flex items-center justify-center font-bold text-lg md:text-xl shadow-sm">
                  {step.number}
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Step 1?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Send us your product requirements or specifications, and we will provide a free initial feasibility analysis.
          </p>
          <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-sm text-lg">
            Submit Your Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}