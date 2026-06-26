import React, { useEffect, useRef } from 'react';
import { ArrowDown, MessageSquare, Search, FileCheck, Factory, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('ImageHelper not available');
    }
  }, []);

  const steps = [
    {
      id: "step1",
      icon: <MessageSquare className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "1. Project Submission & Analysis",
      desc: "You submit your product specifications, target price, and quantity requirements through our inquiry form. Our team reviews your needs to ensure we are a good fit.",
      timeline: "1-2 Days",
      imgQuery: "business meeting analyzing product specifications office",
    },
    {
      id: "step2",
      icon: <Search className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "2. Supplier Match & Quotation",
      desc: "We contact 5-10 pre-vetted factories, negotiate the best terms, and present you with a consolidated quotation report highlighting the best 2-3 options.",
      timeline: "3-5 Days",
      imgQuery: "purchasing agent looking at supplier quotes spreadsheet laptop",
    },
    {
      id: "step3",
      icon: <FileCheck className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "3. Sample Making & Approval",
      desc: "We arrange for samples to be made. Instead of paying multiple international shipping fees, we collect all samples at our office, verify them against your specs, and send the best ones to you in a single package.",
      timeline: "7-14 Days",
      imgQuery: "inspecting product sample prototype close up",
    },
    {
      id: "step4",
      icon: <Factory className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "4. Mass Production & Quality Control",
      desc: "Once you approve the sample, you pay the 30% deposit. We draft a solid bilingual contract and monitor production closely. Before paying the final 70%, our inspectors perform a strict AQL quality check at the factory.",
      timeline: "20-40 Days",
      imgQuery: "mass production line factory workers manufacturing",
    },
    {
      id: "step5",
      icon: <Truck className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "5. Logistics & Global Delivery",
      desc: "We handle the export customs clearance in China and coordinate with freight forwarders to ship your goods by sea, air, or rail directly to your local address or Amazon FBA warehouse.",
      timeline: "Varies by destination",
      imgQuery: "logistics cargo containers shipping port transport",
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="hiw-title">
          How Our Sourcing Process Works
        </h1>
        <p className="text-xl text-slate-600" id="hiw-desc">
          We've refined our process over 10 years to minimize your risk, save you time, and ensure you get exactly what you pay for. Here is our step-by-step methodology.
        </p>
      </section>

      {/* Steps Timeline */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="space-y-16 relative">
          
          {/* Vertical Line for Desktop Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                
                {/* Desktop layout: alternating left/right */}
                {/* Content Left (or top on mobile) */}
                <div className={cn("md:w-1/2 w-full", isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:order-last")}>
                  <div className={cn("inline-block mb-4 p-4 bg-white rounded-full shadow-md border border-slate-100", isEven ? "md:mr-0" : "md:ml-0")}>
                    {step.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3" id={`step-title-${step.id}`}>
                    {step.title}
                  </h2>
                  <div className="inline-block bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-md text-sm mb-4">
                    Timeline: {step.timeline}
                  </div>
                  <p className="text-slate-600 leading-relaxed" id={`step-desc-${step.id}`}>
                    {step.desc}
                  </p>
                </div>

                {/* Center Node (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-sm z-20 items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Image Right (or bottom on mobile) */}
                <div className={cn("md:w-1/2 w-full", isEven ? "md:pl-12" : "md:pr-12 md:order-first")}>
                  <div className="rounded-xl overflow-hidden shadow-md aspect-video bg-slate-100">
                    <img 
                      data-strk-img-id={`visual-${step.id}`}
                      data-strk-img={`[step-title-${step.id}] ${step.imgQuery}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start Step 1?</h2>
        <Link 
          to="/contact" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg inline-flex items-center transition-colors"
        >
          Submit Your Project Now
        </Link>
      </section>

    </div>
  );
}