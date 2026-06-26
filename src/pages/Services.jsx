import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Ship, Box, Factory } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'product-sourcing',
      title: 'Product Sourcing',
      description: 'We help you find the right factory for your product from thousands of potential suppliers in China. We compare prices, lead times, and quality to give you the best options.',
      icon: <Search className="w-12 h-12 text-primary" />,
      features: ['Supplier screening', 'Price negotiation', 'Sample development', 'Material consulting']
    },
    {
      id: 'factory-audit',
      title: 'Factory Audit',
      description: 'Dont trust a website profile. We visit factories in person to verify their production capacity, legal status, social compliance, and quality management systems.',
      icon: <Factory className="w-12 h-12 text-primary" />,
      features: ['On-site verification', 'Legal background check', 'Production capacity audit', 'CSR & Social compliance']
    },
    {
      id: 'quality-inspection',
      title: 'Quality Inspection',
      description: 'Ensure your products meet your specifications before they are shipped. We perform pre-production, during production, and pre-shipment inspections.',
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      features: ['Spec verification', 'Statistical sampling (AQL)', 'Defect analysis', 'Packaging & marking check']
    },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      description: 'We coordinate the movement of your goods from the factory to your warehouse. We handle customs documentation, freight forwarding, and local trucking.',
      icon: <Ship className="w-12 h-12 text-primary" />,
      features: ['Consolidation', 'Customs clearance', 'LCL/FCL freight coordination', 'Sea/Air/Express options']
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p id="services-page-desc" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional and transparent sourcing services designed to help you succeed in importing from China.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="mb-6">{service.icon}</div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-extrabold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <img 
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-title-${service.id}] China sourcing factory inspection logistics`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
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
      </section>

      {/* Trust Points */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="trust-title" className="text-3xl font-bold mb-4">Why Trust SSourcing China?</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-accent">Transparency</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We have no hidden commissions from suppliers. You pay the factory price directly, and pay us a clear service fee.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-accent">Independence</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We work for you, not the factories. Our loyalty is to your business goals and quality standards.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-accent">Speed</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Response times matter. We provide quotes and supplier lists within 48-72 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
