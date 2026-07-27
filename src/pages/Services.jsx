import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description: 'We identify, evaluate, and shortlist suppliers across China that match your product requirements, quality standards, and budget. Our team searches our verified network of 500+ suppliers and conducts initial screening before presenting options.',
    details: [
      'Product-specific supplier matching',
      'Initial capability assessment',
      'Price comparison across multiple suppliers',
      'Communication facilitation with suppliers',
      'Sample arrangement and evaluation',
    ],
    imgId: 'services-sourcing-e1f2g3',
    titleId: 'services-sourcing-title',
    descId: 'services-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Confirm the factory is real, capable, and legitimate',
    description: 'We conduct on-site factory audits to verify business licenses, production capacity, quality management systems, and real manufacturing capabilities. This ensures you work with actual manufacturers — not trading companies claiming to be factories.',
    details: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system evaluation',
      'Worker conditions and environmental compliance',
      'Export license and certification verification',
    ],
    imgId: 'services-verification-h4i5j6',
    titleId: 'services-verification-title',
    descId: 'services-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure your products meet agreed specifications',
    description: 'Our quality inspections follow international AQL standards. We check product appearance, dimensions, functionality, packaging, and labeling at every critical stage — before, during, and after production.',
    details: [
      'Pre-production inspection (PP inspection)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL-based sampling methodology',
      'Detailed reports with photos and measurements',
    ],
    imgId: 'services-inspection-k7l8m9',
    titleId: 'services-inspection-title',
    descId: 'services-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    subtitle: 'Stay informed and on schedule',
    description: 'We monitor production progress with regular on-site visits and status updates. This helps prevent delays, ensures material procurement is on track, and keeps you informed throughout the manufacturing process.',
    details: [
      'Regular production status updates',
      'Material procurement monitoring',
      'Timeline adherence tracking',
      'Early warning for potential delays',
      'Coordination between buyer and factory',
    ],
    imgId: 'services-production-n1o2p3',
    titleId: 'services-production-title',
    descId: 'services-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    subtitle: 'From factory to your warehouse, hassle-free',
    description: 'We handle end-to-end logistics coordination — freight booking, customs documentation, insurance arrangement, and delivery tracking. Whether by sea, air, or express, we ensure your goods arrive on time and with proper documentation.',
    details: [
      'Freight booking (sea, air, express)',
      'Customs documentation preparation',
      'Insurance arrangement',
      'Shipment tracking and status updates',
      'FCL and LCL coordination',
    ],
    imgId: 'services-shipping-q4r5s6',
    titleId: 'services-shipping-title',
    descId: 'services-shipping-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="bg-navy-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive China sourcing support — from finding suppliers to delivering quality products at your door.
          </p>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section key={service.title} className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-navy-700" />
                </div>
                <h2 id={service.titleId} className="text-3xl font-bold text-slate-900 tracking-tight">{service.title}</h2>
                <p className="text-amber-500 font-semibold mt-1">{service.subtitle}</p>
                <p id={service.descId} className="mt-4 text-slate-600 leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      </div>
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start Sourcing from China?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us what you need. We will find the right supplier and manage the entire process for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors mt-8"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
