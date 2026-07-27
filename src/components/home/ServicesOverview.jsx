import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'sourcing',
      title: 'Supplier Sourcing',
      desc: 'We find and vet capable manufacturers in China that meet your exact specifications, quality standards, and target pricing.',
      icon: Search,
      imgId: 'service-img-sourcing-7a2b9c',
      imgContext: 'business meeting chinese factory trade show negotiation'
    },
    {
      id: 'verification',
      title: 'Factory Verification',
      desc: 'Avoid scams and middlemen. We conduct on-site factory audits to verify production capacity, certifications, and working conditions.',
      icon: ShieldCheck,
      imgId: 'service-img-audit-8c3d0e',
      imgContext: 'factory audit inspector clipboard manufacturing plant'
    },
    {
      id: 'qc',
      title: 'Quality Inspection',
      desc: 'Pre-shipment and during-production inspections. We identify defects before they leave China, ensuring you get exactly what you paid for.',
      icon: ClipboardCheck,
      imgId: 'service-img-qc-9d4e1f',
      imgContext: 'quality control inspector checking products factory'
    },
    {
      id: 'shipping',
      title: 'Shipping & Logistics',
      desc: 'From warehouse to your door. We consolidate shipments, handle customs documentation, and negotiate competitive freight rates.',
      icon: Package,
      imgId: 'service-img-shipping-0e5f2a',
      imgContext: 'cargo shipping containers logistics warehouse forklift'
    }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">End-to-End Sourcing Services</h2>
          <p id="services-subtitle" className="mt-4 text-lg text-slate-600">
            We handle the complexities of manufacturing in China so you can focus on selling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const titleId = `service-${service.id}-title`;
            const descId = `service-${service.id}-desc`;
            
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${descId}] [${titleId}] ${service.imgContext} [services-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 id={titleId} className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p id={descId} className="text-slate-600 mb-6 flex-grow">
                    {service.desc}
                  </p>
                  <Link to={`/services#${service.id}`} className="text-blue-600 font-medium hover:text-blue-800 mt-auto inline-flex items-center">
                    Learn more <Search className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
