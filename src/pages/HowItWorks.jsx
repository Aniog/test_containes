import React, { useEffect, useRef } from 'react';
import { FileText, Search, Settings, ShieldAlert, Truck, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 'step-1',
    icon: FileText,
    titleId: 'step-1-title',
    descId: 'step-1-desc',
    title: '1. Project Consultation & Requirements',
    desc: 'Everything starts with a detailed discussion about your product specifications, target pricing, quantities, and quality standards. You provide us with CAD files, tech packs, or reference samples. We assess feasibility and provide an initial consultation.',
  },
  {
    id: 'step-2',
    icon: Search,
    titleId: 'step-2-title',
    descId: 'step-2-desc',
    title: '2. Supplier Sourcing & Quotation',
    desc: 'Our sourcing agents find 3 to 5 highly capable, verified factories. We negotiate pricing on your behalf and present you with a detailed cost breakdown, including tooling costs, unit prices, and estimated shipping expenses.',
  },
  {
    id: 'step-3',
    icon: Settings,
    titleId: 'step-3-title',
    descId: 'step-3-desc',
    title: '3. Sampling & Prototyping',
    desc: 'Before mass production, we arrange for samples to be manufactured. We review the samples against your specifications, suggest improvements if necessary, and dispatch the final approved sample to you for sign-off.',
  },
  {
    id: 'step-4',
    icon: ShieldAlert,
    titleId: 'step-4-title',
    descId: 'step-4-desc',
    title: '4. Mass Production & Quality Control',
    desc: 'Once the sample is approved, we monitor the mass production process. Our QC team performs inspections during production (DPI) and pre-shipment inspections (PSI) to ensure every unit meets the agreed-upon standards.',
  },
  {
    id: 'step-5',
    icon: Truck,
    titleId: 'step-5-title',
    descId: 'step-5-desc',
    title: '5. Logistics & Delivery',
    desc: 'We handle the complexities of international shipping. Whether you need sea freight (FCL/LCL), air freight, or express courier, we coordinate the logistics, manage customs clearance, and deliver the goods to your warehouse.',
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-extrabold text-white mb-6">How Our Process Works</h1>
          <p id="hiw-desc" className="text-xl text-slate-300 max-w-2xl mx-auto">
            A proven, step-by-step methodology to source products safely, efficiently, and profitably from China.
          </p>
        </div>
      </section>

      {/* Main Process Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-blue-100 z-0"></div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.id} className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Icon / Number Indicator */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-4 border-white">
                      <step.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h2 id={step.titleId} className="text-xl font-bold text-slate-900">{step.title}</h2>
                    </div>
                    
                    <h2 id={`${step.titleId}-desktop`} className="hidden md:block text-2xl font-bold text-slate-900 mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed max-w-3xl mb-6">
                      {step.desc}
                    </p>

                    <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100">
                       <img
                          alt={step.title}
                          data-strk-img-id={`hiw-img-${step.id}`}
                          data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-title]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="800"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-auto object-cover max-h-64"
                        />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline to Launch */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Typical Project Timeline</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-2">1-2</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">Weeks</div>
                  <div className="text-xs text-slate-500">Sourcing & Quotation</div>
               </div>
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-2">2-4</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">Weeks</div>
                  <div className="text-xs text-slate-500">Sampling & Iteration</div>
               </div>
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-2">3-6</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">Weeks</div>
                  <div className="text-xs text-slate-500">Mass Production</div>
               </div>
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-2">3-5</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">Weeks</div>
                  <div className="text-xs text-slate-500">Shipping (Sea Freight)</div>
               </div>
            </div>
            <p className="mt-8 text-sm text-slate-500 text-left">
              * Timelines are estimates and vary significantly based on product complexity, raw material availability, factory schedules, and chosen shipping method.
            </p>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Start Your Sourcing Journey Today</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
               Submit Your Requirements
               <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
}
