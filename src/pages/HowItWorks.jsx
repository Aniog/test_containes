import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PlayCircle, FileSearch, Handshake, CheckSquare, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: "step-1",
      number: "01",
      title: "Initial Consultation & Requirements",
      desc: "We start by understanding your exact needs. We discuss product specifications, target pricing, quantity, quality standards, and timelines. We review your tech packs, drawings, or reference samples.",
      icon: <FileSearch className="w-8 h-8 text-blue-600" />,
      imageQuery: "business meeting discussion planning project strategy office"
    },
    {
      id: "step-2",
      number: "02",
      title: "Supplier Sourcing & Quotation",
      desc: "Our team reaches out to our network and conducts new searches to find 3-5 factories capable of meeting your requirements. We negotiate prices, compare capabilities, and present you with a detailed comparative quotation.",
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      imageQuery: "chinese factory manager and buyer shaking hands quotation"
    },
    {
      id: "step-3",
      number: "03",
      title: "Sampling & Prototyping",
      desc: "Once you select a manufacturer, we arrange for samples to be made and sent to you. We review the samples against your specifications first before shipping them internationally to save time and freight costs.",
      icon: <PlayCircle className="w-8 h-8 text-blue-600" />,
      imageQuery: "examining product sample prototype manufacturing quality"
    },
    {
      id: "step-4",
      number: "04",
      title: "Production & Quality Control",
      desc: "After sample approval, mass production begins. We monitor the timeline closely. Crucially, our QC inspectors visit the factory to conduct pre-shipment inspections (AQL standards) to ensure every item meets your expectations.",
      icon: <CheckSquare className="w-8 h-8 text-blue-600" />,
      imageQuery: "quality control inspector working in factory checking products"
    },
    {
      id: "step-5",
      number: "05",
      title: "Logistics & Delivery",
      desc: "We coordinate the final stage: shipping. We help you choose between sea, air, or rail freight, handle customs export documentation in China, and ensure smooth handover to your freight forwarder or deliver straight to your door.",
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      imageQuery: "cargo ship shipping containers logistics ocean freight"
    }
  ];

  return (
    <div ref={containerRef} className="pt-8 pb-24 top-padding">
      <div className="bg-slate-900 py-20 mb-16 text-white text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6">
               How It Works
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
               A transparent, step-by-step process designed to eliminate risks and deliver exactly what you need, on time and on budget.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
         <div className="space-y-16">
            {steps.map((step, index) => (
               <div key={step.id} className="relative">
                  {/* Timeline connector */}
                  {index !== steps.length - 1 && (
                     <div className="hidden md:block absolute left-12 top-24 bottom-[-4rem] w-0.5 bg-blue-100 z-0"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                     {/* Number/Icon Column */}
                     <div className="flex-shrink-0 flex items-center md:flex-col gap-4 md:w-24">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white border-4 border-blue-50 flex items-center justify-center shadow-lg shadow-blue-900/5">
                           <span className="text-2xl md:text-3xl font-black text-blue-600">{step.number}</span>
                        </div>
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-50 text-blue-600 items-center justify-center mt-2">
                           {step.icon}
                        </div>
                     </div>

                     {/* Content Column */}
                     <div className="flex-grow bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{step.desc}</p>
                        
                        <div className="rounded-xl overflow-hidden h-64 md:h-80 bg-slate-100">
                           <img 
                              data-strk-img-id={`process-img-${step.id}`}
                              data-strk-img={step.imageQuery}
                              data-strk-img-ratio="16x9"
                              data-strk-img-width="800"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                              alt={step.title}
                              className="w-full h-full object-cover"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready to start step one?</h3>
            <Link to="/contact">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-bold">
                  Get Your Free Quote
               </Button>
            </Link>
         </div>
      </div>
    </div>
  );
}