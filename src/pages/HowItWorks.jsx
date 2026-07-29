import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const detailedSteps = [
  {
    title: 'Requirement Analysis',
    desc: 'You provide us with detailed product specifications, target pricing, quantities, and quality standards. We review and clarify any technical details to ensure we are aligned with your vision.',
    imageQuery: 'business meeting laptop discussion office'
  },
  {
    title: 'Supplier Identification & Vetting',
    desc: 'We scan our existing network and search industrial databases to find manufacturers. We filter out trading companies disguised as factories and narrow it down to the top 3-5 candidates.',
    imageQuery: 'chinese factory building production line exterior'
  },
  {
    title: 'Quotation & Comparison',
    desc: 'We request quotes based on your specs. We compile a comprehensive comparison report covering price, lead times, factory certifications, and sample costs.',
    imageQuery: 'document appraisal analysis comparison paperwork'
  },
  {
    title: 'Prototyping & Sampling',
    desc: 'We oversee the production of samples. Once ready, we inspect them in our office first before shipping them to you for final approval.',
    imageQuery: 'product prototype sample inspection desk'
  },
  {
    title: 'Quality Control & Production',
    desc: 'After deposit, production begins. We conduct in-process or final pre-shipment inspections following ISO standards to ensure the batch is defect-free.',
    imageQuery: 'quality control inspector worker checking products'
  },
  {
    title: 'Logistics & Doorstep Delivery',
    desc: 'We handle the booking of containers or air freight, prepare export documents, and manage customs clearance at both ends if required.',
    imageQuery: 'cargo ship container port logistics shipping'
  }
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-page">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Working Process</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A transparent and systematic approach to sourcing from China. We stay by your side from the first inquiry to final delivery.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-24">
            {detailedSteps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:items-center gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-6 shadow-lg shadow-blue-100">
                    {i + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                      <span className="text-slate-700">Dedicated project manager assigned</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                      <span className="text-slate-700">Transparent communication at every step</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl border-8 border-white">
                    <div className="aspect-[4/3] bg-slate-200">
                       <img 
                        data-strk-img-id={`hiw-img-${i}`}
                        data-strk-img={`[hiw-title-${i}] ${step.imageQuery}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="hidden" id={`hiw-title-${i}`}>{step.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Start Your Journey Today</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-700">
              <h3 className="text-xl font-bold mb-4">I have a product in mind</h3>
              <p className="text-slate-400 mb-6 font-medium">Get a custom quote for your specific product now.</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition-colors uppercase tracking-wide text-sm">
                Get a Quote
              </button>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-700">
              <h3 className="text-xl font-bold mb-4">I'm just exploring</h3>
              <p className="text-slate-400 mb-6 font-medium">Download our free China Sourcing Guide for beginners.</p>
              <button className="w-full bg-transparent border-2 border-slate-600 hover:border-slate-400 py-3 rounded-lg font-bold transition-colors uppercase tracking-wide text-sm">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
