import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, Factory, Truck, CheckCircle } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'sourcing',
      title: 'Supplier Sourcing & Verification',
      descId: 'sourcing-desc',
      icon: <Search className="h-8 w-8 text-blue-600" />,
      content: 'We identify and evaluate potential suppliers based on your specific requirements. We don\'t just look online; we verify business licenses, export records, and industry reputation to ensure you are dealing with a legitimate manufacturer, not a trading company claiming to be one.',
      features: ['Requirements Analysis', 'Supplier Identification', 'Background Checks', 'Price Negotiation', 'Sample Procurement']
    },
    {
      id: 'audits',
      title: 'Factory Audits',
      descId: 'audits-desc',
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      content: 'Before placing a large order, our team visits the factory to assess their capabilities firsthand. We evaluate their production capacity, quality management systems (ISO standards), machinery, working conditions, and environmental compliance.',
      features: ['On-site Verification', 'Capacity Assessment', 'Quality System Review', 'Social Compliance Check', 'Detailed Audit Report']
    },
    {
      id: 'quality',
      title: 'Quality Inspection',
      descId: 'quality-desc',
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      content: 'We act as your independent quality control team on the ground. Using international AQL (Acceptable Quality Limit) standards, we identify defects before your goods leave China, saving you from costly returns and disappointed customers.',
      features: ['Pre-Production Inspection (PPI)', 'During Production Inspection (DPI)', 'Pre-Shipment Inspection (PSI)', 'Piece-by-Piece Inspection', 'Container Loading Check']
    },
    {
      id: 'production',
      title: 'Production Monitoring',
      descId: 'production-desc',
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      content: 'Delays are common in manufacturing. We constantly monitor your order\'s progress, maintaining close communication with the factory to ensure production stays on schedule and addressing any technical issues immediately.',
      features: ['Timeline Tracking', 'Material Status Verification', 'Issue Resolution', 'Regular Progress Reports', 'Urgent Intervention']
    },
    {
      id: 'shipping',
      title: 'Shipping & Logistics',
      descId: 'shipping-desc',
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      content: 'We handle the complex logistics of getting your goods from the factory floor to your destination. Whether you need sea freight (FCL/LCL), air freight, or express courier, we find the most cost-effective and reliable options.',
      features: ['Freight Forwarder Sourcing', 'Customs Documentation', 'Warehouse Consolidation', 'FBA Prep Services', 'Door-to-Door Delivery']
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sourcing Services</h1>
          <p id="page-subtitle" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive end-to-end solutions to manage your China supply chain efficiently and securely.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                   <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-slate-100">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[${service.descId}] [service-title-${service.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p id={service.descId} className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.content}
                  </p>
                  
                  <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wider text-sm">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
