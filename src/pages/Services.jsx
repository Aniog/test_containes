import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipBoardCheck, Plane, FileCheck2, Handshake } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  const services = [
    {
      id: "supplier-verification",
      title: "Supplier Verification & Audit",
      description: "We physically visit factories to verify their legitimacy, production capacity, social compliance, and quality control systems before you place an order.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />
    },
    {
      id: "product-sourcing",
      title: "Product Sourcing & Negotiation",
      description: "Send us your product requirements. We tap into our extensive network to find the best manufacturers, negotiate prices, and arrange samples.",
      icon: <Search className="w-10 h-10 text-primary" />
    },
    {
      id: "sample-consolidation",
      title: "Sample Consolidation",
      description: "Instead of paying high shipping fees for multiple samples from different suppliers, we collect them in our office, inspect them, and ship them to you in one box.",
      icon: <Box className="w-10 h-10 text-primary" />
    },
    {
      id: "quality-control",
      title: "Quality Control & Inspection",
      description: "During Production (DUPRO) and Pre-Shipment Inspections (PSI) following strict AQL standards to ensure your goods meet your exact specifications.",
      icon: <FileCheck2 className="w-10 h-10 text-primary" />
    },
    {
      id: "production-follow-up",
      title: "Production Follow-up",
      description: "We act as your local project manager, communicating constantly with the factory to prevent delays and solve issues before they become problems.",
      icon: <ClipBoardCheck className="w-10 h-10 text-primary" />
    },
    {
      id: "shipping-logistics",
      title: "Shipping & Customs Clearance",
      description: "We handle the entire logistics process, including sea freight (FCL/LCL), air freight, express, export documents, and customs clearance.",
      icon: <Plane className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 id="services-header" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p id="services-subheader" className="text-xl text-slate-300">
            A complete A to Z solution for importing from China. Let us handle the complexities so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center border border-slate-100">
                  {service.icon}
                </div>
                <h3 id={`service-title-${service.id}`} className="text-2xl font-bold mb-4">{service.title}</h3>
                <p id={`service-desc-${service.id}`} className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                data-strk-img-id="services-detail-img"
                data-strk-img="[why-choose-us-title] team handshake sourcing agent"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Team Working with Suppliers"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 id="why-choose-us-title" className="text-3xl font-bold mb-6">Why Work With SSourcing China?</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Total Transparency</h4>
                    <p className="text-slate-600">No hidden kickbacks from factories. We charge a clear service fee so our interests align completely with yours.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Local Expertise</h4>
                    <p className="text-slate-600">Our Chinese team understands the unwritten rules of local business culture. We negotiate effectively in Mandarin.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Flexible Solutions</h4>
                    <p className="text-slate-600">Whether you need just an inspection or full A-to-Z sourcing, we can tailor our services to your specific needs and budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Needs Box icon, not imported previously
import { Box } from 'lucide-react';

export default Services;