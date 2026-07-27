import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Search, Shield, Truck, FileCheck, Users, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: "supplier-sourcing",
      title: "Supplier Identification & Vetting",
      description: "We don't just find suppliers on Alibaba. We use our local network to find reliable manufacturers that meet your specific standards for price, quality, and capacity.",
      features: ["Custom supplier list", "Price negotiation", "Sample collection & evaluation"],
      icon: <Search className="w-12 h-12 text-blue-600" />
    },
    {
      id: "factory-audit",
      title: "Factory Audit & Verification",
      description: "Verify factory legitimacy before you commit. We perform on-site visits to check licenses, production capacity, and manufacturing processes.",
      features: ["Document verification", "On-site photos & video", "Risk assessment report"],
      icon: <Users className="w-12 h-12 text-blue-600" />
    },
    {
      id: "quality-control",
      title: "Quality Control & Inspection",
      description: "Ensure you get exactly what you ordered. Our QC team performs inspections during production (DUPRO) and before shipping (PSI).",
      features: ["AQL standard checks", "Functionality testing", "Packaging & labeling inspection"],
      icon: <Shield className="w-12 h-12 text-blue-600" />
    },
    {
        id: "logistics",
        title: "Logistics & Shipping",
        description: "Door-to-door shipping coordination. We handle consolidation, warehouse storage, and all customs documentation.",
        features: ["LCL/FCL consolidation", "Customs clearance", "Amazon FBA prep"],
        icon: <Truck className="w-12 h-12 text-blue-600" />
      }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Providing end-to-end supply chain management for your business in China.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-24">
            {services.map((service, index) => (
              <div key={service.id} className={cn(
                "flex flex-col md:flex-row items-center gap-16",
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              )}>
                <div className="flex-1">
                  <div className="mb-6">{service.icon}</div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-navy-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-navy-800">
                        <CheckCircle className="text-green-600" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <img 
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[service-title-${service.id}] China factory process`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    className="rounded-2xl shadow-xl w-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                    alt={service.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
