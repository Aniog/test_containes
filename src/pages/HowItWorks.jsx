import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Submit Requirements",
      description: "Send us your product specifications, target pricing, quantities, and quality standards. The more detailed, the better.",
      points: ["Technical drawings/specs", "Material requirements", "Target timeline"]
    },
    {
      number: "02",
      title: "Supplier Identification",
      description: "We leverage our local network to find 3-5 qualified manufacturers, skipping middlemen. We verify their credentials and request preliminary quotes.",
      points: ["Background checks", "Price negotiation", "Capacity verification"]
    },
    {
      number: "03",
      title: "Sample Processing",
      description: "We consolidate samples from multiple factories at our China office, perform initial checks, and send you the best ones for your approval.",
      points: ["Lower courier costs", "Weeds out bad suppliers early", "Feedback communication"]
    },
    {
      number: "04",
      title: "Order Placement & Contract",
      description: "Once you select a supplier, we draft bilingual manufacturing contracts to protect your IP and clearly define quality standards and penalties.",
      points: ["Clear terms & conditions", "Payment security", "IP protection protocols"]
    },
    {
      number: "05",
      title: "Production Monitoring",
      description: "We don't just wait for the completion date. We check in with the factory regularly to prevent delays and address issues early in the process.",
      points: ["Raw material checks", "Mid-production updates", "Delay prevention"]
    },
    {
      number: "06",
      title: "Quality Inspection",
      description: "Before final payment, our inspectors visit the factory to conduct rigorous Pre-Shipment Inspections based on agreed AQL standards.",
      points: ["Detailed photo/video reports", "Defect rate analysis", "Rework negotiation if needed"]
    },
    {
      number: "07",
      title: "Shipping & Logistics",
      description: "We arrange the most cost-effective freight (sea/air), handle customs documentation, and coordinate delivery to your final destination.",
      points: ["Freight forwarding", "Customs clearance", "Door-to-door delivery"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <section 
        className="relative bg-slate-900 py-16 md:py-24 overflow-hidden text-white"
      >
        <div 
          className="absolute inset-0 z-0 bg-slate-800"
          data-strk-bg-id="process-header-bg-22a1x"
          data-strk-bg="[process-page-desc] [process-page-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 id="process-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h1>
          <p id="process-page-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            A proven, step-by-step process that eliminates risk and guarantees results when importing from China.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 relative">
        {/* Connecting line for process steps */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-0.5 bg-slate-200 -transform-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-16 md:mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Center marker */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 shadow-sm items-center justify-center z-10 text-primary font-bold">
                  {step.number}
                </div>

                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="md:hidden text-6xl font-black text-slate-100 mb-2 leading-none">{step.number}</div>
                  <h3 id={`step-${index}-title`} className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p id={`step-${index}-desc`} className="text-slate-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className={`inline-flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual Placeholder */}
                <div className="flex-1 w-full relative p-8 rounded-2xl shadow-sm border border-slate-100 aspect-video flex flex-col justify-center items-center text-center overflow-hidden">
                   <img
                     alt={`Step ${step.number}`}
                     className="absolute inset-0 w-full h-full object-cover"
                     data-strk-img-id={`process-step-${index}`}
                     data-strk-img={`[step-${index}-desc] [step-${index}-title]`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   />
                   <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
                   <div className="text-white mb-4 z-20 relative">
                     <svg className="w-16 h-16 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     </svg>
                   </div>
                   <div className="text-lg text-white font-bold z-20 relative">Stage {step.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start the process?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Submit your requirements today and our sourcing experts will get back to you with a feasibility analysis and next steps.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Submit Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
