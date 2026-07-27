import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, FileText, Settings, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: "Tell Us Your Needs",
      desc: "Contact us with your product specifications, budget, and quantity requirements.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Sourcing & Samples",
      desc: "We find matching suppliers, negotiate prices, and send samples for your approval.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Factory Audit",
      desc: "We perform a thorough audit of the selected factory to ensure they can deliver.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Production & QC",
      desc: "We monitor production and perform final inspections before the goods leave the factory.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Shipping & Delivery",
      desc: "We handle logistics, customs, and international shipping to your destination.",
      icon: <Truck className="w-8 h-8" />
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="how-it-works-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">A transparent and systematic approach to sourcing from China.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 mb-16 last:mb-0 relative">
                {index !== steps.length - 1 && (
                  <div className="absolute top-16 left-8 bottom-0 w-0.5 bg-blue-100 -mb-16"></div>
                )}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center relative z-10 shadow-lg">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <h3 id={`step-title-${index}`} className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-12">See our process in action</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <img 
                    data-strk-img-id="process-action-1"
                    data-strk-img="China factory production line monitoring"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    className="rounded-xl shadow-lg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt="Production Line Monitoring"
                />
                <img 
                    data-strk-img-id="process-action-2"
                    data-strk-img="Sourcing agent inspecting products in warehouse"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    className="rounded-xl shadow-lg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt="Product Inspection"
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
