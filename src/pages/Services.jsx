import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Search, Factory, CheckCircle, Truck, FileText, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const serviceCategories = [
    {
      title: "End-to-End Sourcing",
      desc: "For businesses looking for a complete hands-off solution in China.",
      image: "china factory warehouse sourcing",
      features: [
        "Supplier identification and vetting",
        "Price negotiation and sampling",
        "Production monitoring",
        "Final quality inspection",
        "Freight and logistics coordination"
      ],
      icon: <Globe className="w-12 h-12 text-primary" />
    },
    {
      title: "Quality Control & Inspection",
      desc: "Protect your brand with professional on-site inspections.",
      image: "quality control inspector china electronics",
      features: [
        "Pre-production inspection (PPI)",
        "During production inspection (DPI)",
        "Pre-shipment inspection (PSI)",
        "Container loading supervision (CLS)",
        "Detailed inspection reports with photos/videos"
      ],
      icon: <ShieldCheck className="w-12 h-12 text-primary" />
    },
    {
      title: "Supplier Verification",
      desc: "Don't get scammed. Know who you are really dealing with.",
      image: "china business license office verification",
      features: [
        "Company legal status check",
        "Bank account verification",
        "Business license and export permit audit",
        "Factory site visit and capacity assessment",
        "Scam prevention and risk reporting"
      ],
      icon: <Search className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      <section className="bg-slate-900 py-20 text-white mb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="china industrial warehouse robot"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Expertise you can trust. We provide localized solutions to solve global supply chain challenges.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {serviceCategories.map((service, index) => (
            <div key={service.title} className={cn(
              "flex flex-col lg:items-center gap-16",
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            )}>
              <div className="lg:w-1/2">
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                <ul className="space-y-4">
                  {service.features.map(feature => (
                    <li key={feature} className="flex gap-3 items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50">
                  <img
                    data-strk-img-id={`service-img-${index}`}
                    data-strk-img={service.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
