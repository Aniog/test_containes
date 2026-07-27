import React, { useEffect, useRef } from 'react';
import { FileText, Factory, Search, Wrench, PackageCheck, Ship, ArrowDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'step-1',
      title: '1. Project Consultation & Quotation',
      desc: 'You provide us with your product specifications, target pricing, and quantities. We analyze the feasibility and provide a transparent quote for our sourcing services.',
      icon: FileText,
      imgId: 'how-it-works-1-1a2b',
      imgContext: 'business meeting laptop discussion office'
    },
    {
      id: 'step-2',
      title: '2. Supplier Sourcing & Selection',
      desc: 'Our local team contacts potential manufacturers, verifies their credentials, and negotiates pricing. We present you with a shortlist of the top pre-vetted options.',
      icon: Factory,
      imgId: 'how-it-works-2-3c4d',
      imgContext: 'factory manager discussion sourcing china'
    },
    {
      id: 'step-3',
      title: '3. Sample Development & Approval',
      desc: 'We coordinate the creation of physical samples according to your specifications. We inspect the samples locally before sending them to you for final approval, saving time and money.',
      icon: Search,
      imgId: 'how-it-works-3-5e6f',
      imgContext: 'product sample inspection quality'
    },
    {
      id: 'step-4',
      title: '4. Order Placement & Production Monitoring',
      desc: 'Once samples are approved, we draft a secure contract and place the PO. We maintain constant communication with the factory to ensure production stays on schedule.',
      icon: Wrench,
      imgId: 'how-it-works-4-7g8h',
      imgContext: 'manufacturing production line machinery'
    },
    {
      id: 'step-5',
      title: '5. Pre-Shipment Quality Control',
      desc: 'Before the final payment is released and goods are shipped, our inspectors perform a rigorous AQL inspection on the finished batch to guarantee quality.',
      icon: PackageCheck,
      imgId: 'how-it-works-5-9i0j',
      imgContext: 'quality control inspector clipboard warehouse'
    },
    {
      id: 'step-6',
      title: '6. Shipping & Customs Clearance',
      desc: 'We arrange the most cost-effective freight (sea/air), handle the export paperwork, and ensure your goods arrive smoothly at your designated destination or Amazon FBA center.',
      icon: Ship,
      imgId: 'how-it-works-6-1k2l',
      imgContext: 'cargo ship logistics containers port'
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            How It Works
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            A proven, step-by-step process that eliminates risk and ensures you get exactly what you ordered.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const titleId = `step-title-${index}`;
              const descId = `step-desc-${index}`;

              return (
                <div key={step.id} className="relative">
                  {/* Connector Line (except for last item) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute left-[3.25rem] top-24 bottom-[-4rem] w-0.5 bg-blue-200" />
                  )}

                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:flex md:items-start gap-8 z-10 relative">
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white border-4 border-white shadow-md">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h2 id={titleId} className="text-2xl font-bold text-slate-900">{step.title}</h2>
                      <p id={descId} className="mt-2 text-lg text-slate-600">{step.desc}</p>
                    </div>

                    <div className="mt-6 md:mt-0 flex-shrink-0  w-full md:w-48 lg:w-64 h-32 md:h-auto rounded-lg overflow-hidden border border-slate-100">
                        <img 
                            alt={step.title}
                            className="w-full h-full object-cover"
                            data-strk-img-id={step.imgId}
                            data-strk-img={`[${descId}] [${titleId}] ${step.imgContext}`}
                            data-strk-img-ratio="16x9"
                            data-strk-img-width="400"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
             <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full mb-6">
                <ArrowDown className="w-8 h-8 text-green-600" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Start Your Risk-Free Sourcing Journey Today</h3>
             <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                Submit Your Requirements
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
