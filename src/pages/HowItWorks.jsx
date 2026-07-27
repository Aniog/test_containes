import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: "step-1",
      number: "01",
      title: "Submit Your Request",
      desc: "Fill out our inquiry form with your product specifications, target price, desired quantities, and any reference images or CAD files. The more detailed, the better.",
    },
    {
      id: "step-2",
      number: "02",
      title: "Supplier Sourcing & Filtering",
      desc: "Within 48-72 hours, our team will source multiple qualified factories. We filter them based on experience, certifications, and capabilities, negotiating on your behalf.",
    },
    {
      id: "step-3",
      number: "03",
      title: "Quotation & Sample Processing",
      desc: "We provide you with clear, transparent quotes. Once a factory is selected, we arrange for sample production. We consolidate samples from different factories and ship them to you in one package.",
    },
    {
      id: "step-4",
      number: "04",
      title: "Order Placement & Production Follow-up",
      desc: "After sample approval, you place the main order. We draft a robust contract (in Chinese and English) to protect you. We monitor the production timeline, keeping you updated regularly to prevent delays.",
    },
    {
      id: "step-5",
      number: "05",
      title: "Quality Inspection",
      desc: "Before the final payment is made to the factory, our inspectors visit the facility to conduct a rigorous Pre-Shipment Inspection (PSI). We send you a detailed report with photos and videos for your approval.",
    },
    {
      id: "step-6",
      number: "06",
      title: "Shipping & Logistics",
      desc: "We handle the complex logistics. From booking containers, coordinating inland transport, managing customs clearance, to final delivery at your destination, we ensure a smooth transit.",
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            How We Work Together
          </h1>
          <p id="hiw-subtitle" className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Our established 6-step process ensures transparency, minimizes risk, and delivers exactly what you ordered.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                {/* Connecting Line (hidden on the last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-[-3rem] w-0.5 bg-slate-200"></div>
                )}
                
                <div className="flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 id={`hiw-step-title-${step.number}`} className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                  <p id={`hiw-step-desc-${step.number}`} className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Additional info snippet could go here */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-lg text-slate-600 mb-8">
            We don't hide our fees in the product cost. We act as your employee on the ground. We charge a reasonable service fee based on the order value—meaning our incentives are aligned with getting you the best factory-direct price.
          </p>
           <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;