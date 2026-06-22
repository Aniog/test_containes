import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { ClipboardList, Search, Handshake, PenTool, SearchCheck, Truck } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  { id: 1, title: "Inquiry & Consultation", description: "You tell us your product specifications, target price, and volume. We discuss your needs and assess feasibility.", icon: ClipboardList },
  { id: 2, title: "Supplier Sourcing", description: "We identify and shortlist 3-5 qualified manufacturers, comparing prices and assessing their capabilities.", icon: Search },
  { id: 3, title: "Sample Evaluation", description: "We arrange samples from the shortlisted factories, consolidate them, and send them to you for final approval.", icon: SearchCheck },
  { id: 4, title: "Contract & Production", description: "Once a supplier is chosen, we draft a secure bilingual contract. The factory begins mass production.", icon: PenTool },
  { id: 5, title: "Quality Inspection", description: "Our team visits the factory during and post-production to perform rigorous AQL quality checks.", icon: Handshake },
  { id: 6, title: "Shipping & Delivery", description: "We handle all logistics, customs, and shipping arrangements to deliver the goods to your warehouse.", icon: Truck }
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" id="how-title">Our 6-Step Sourcing Process</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600" id="how-desc">
            A transparent and systematic approach to secure your supply chain from China.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <div className="relative border-l-4 border-blue-200 ml-4 lg:ml-8 space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative pl-8 lg:pl-12 pb-8">
                {/* Timeline dot */}
                <div className="absolute left-[-26px] top-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 ring-8 ring-slate-50">
                  <span className="text-white font-bold">{step.id}</span>
                </div>
                
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm ring-1 ring-slate-200">
                   <div className="flex items-center gap-4 mb-4">
                     <step.icon className="h-8 w-8 text-blue-500" />
                     <h3 className="text-2xl font-bold text-slate-900" id={`step-title-${step.id}`}>{step.title}</h3>
                   </div>
                   <p className="text-lg text-slate-600 mb-6" id={`step-desc-${step.id}`}>{step.description}</p>
                   {/* Optional image placeholder for some steps */}
                   {(index === 1 || index === 4) && (
                     <div className="aspect-[21/9] w-full mt-6 rounded-xl overflow-hidden bg-slate-100">
                        <img
                          data-strk-img-id={`process-img-${step.id}`}
                          data-strk-img={`[step-title-${step.id}] [step-desc-${step.id}]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="800"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                     </div>
                   )}
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