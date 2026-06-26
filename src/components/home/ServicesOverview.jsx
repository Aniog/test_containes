import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, PackageCheck, Ship, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers based on your product specifications, volume requirements, and budget.',
    imgId: 'svc-supplier-1a2b3c',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, equipment, and quality management systems.',
    imgId: 'svc-factory-4d5e6f',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-shipment inspections, in-process quality checks, and lab testing to ensure products meet your standards.',
    imgId: 'svc-qc-7g8h9i',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-Up',
    desc: 'Regular production status updates, milestone tracking, and proactive issue resolution throughout manufacturing.',
    imgId: 'svc-prod-0j1k2l',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including FCL, LCL, air freight, customs clearance, and door-to-door delivery.',
    imgId: 'svc-ship-3m4n5o',
  },
];

const ServicesOverview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Complete end-to-end sourcing solutions — from finding the right supplier to delivering finished goods to your warehouse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[svc-overview-title] [svc-subtitle-${service.imgId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 id={`svc-subtitle-${service.imgId}`} className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <span id="svc-overview-title" className="hidden">China sourcing services</span>
      </div>
    </section>
  );
};

export default ServicesOverview;
