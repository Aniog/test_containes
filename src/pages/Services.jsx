import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Settings, Truck } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const servicesList = [
    {
      title: 'Product Sourcing',
      icon: Search,
      desc: 'We identify factories that match your quality and price requirements. We don\'t just look on Alibaba; we use our local network to find the best manufacturers.',
      details: ['Supplier searching & shortlisting', 'Price negotiation', 'Sample consolidation', 'Detailed sourcing reports'],
      img: 'product sourcing manufacturer search'
    },
    {
      title: 'Supplier Verification & Audit',
      icon: ShieldCheck,
      desc: 'Don’t get scammed. We visit factories in person to verify their legal status, production capacity, and historical performance.',
      details: ['On-site factory audits', 'Legal document verification', 'Bank account verification', 'Previous client history check'],
      img: 'china factory audit verification'
    },
    {
      title: 'Quality Inspection',
      icon: ClipboardCheck,
      desc: 'Our QC team performs rigorous inspections based on AQL standards to ensure every unit meets your specifications before shipping.',
      details: ['Pre-production inspection', 'During production inspection', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
      img: 'quality control inspection AQL'
    },
    {
      title: 'Production Management',
      icon: Settings,
      desc: 'We follow up with factories daily to ensure production timelines are met and potential issues are resolved quickly.',
      details: ['Production schedule oversight', 'Communication bridge', 'Prototype development support', 'Labeling & Packaging compliance'],
      img: 'factory production management china'
    },
    {
      title: 'Logistics & Shipping',
      icon: Truck,
      desc: 'Consolidate multiple orders into one shipment to save costs. We handle export documents and coordinate with freight forwarders.',
      details: ['Free 2-week warehousing', 'Order consolidation', 'Export documentation', 'Door-to-door (DDP) options'],
      img: 'shipping container logistics china'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold mb-6">Expert Sourcing Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Complete end-to-end supply chain solutions to help you scale your business with quality Chinese manufacturing.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-32">
          {servicesList.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    data-strk-img-id={`service-img-${idx}`}
                    data-strk-img={`${service.img}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};

export default Services;
