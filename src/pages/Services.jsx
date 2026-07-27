import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Headphones,
  ArrowRight, CheckCircle2, FileText, Users, BarChart3
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified Chinese manufacturers that match your product specifications, quality standards, and budget.',
    features: ['Market research & supplier mapping', 'RFQ management & price comparison', 'Background checks & trade history review', 'Sample coordination'],
    imgId: 'svc-sourcing-img-3a7b1c',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to verify production capacity, certifications, working conditions, and business legitimacy before you commit.',
    features: ['On-site facility inspection', 'Business license verification', 'Production capacity assessment', 'Social compliance audit'],
    imgId: 'svc-audit-img-4b8c2d',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspections at every stage of production to ensure your products meet specifications and quality standards.',
    features: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    imgId: 'svc-qc-img-5c9d3e',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and detailed progress reports to keep your order on schedule and within specifications.',
    features: ['Weekly progress reports with photos', 'Timeline tracking & milestone alerts', 'Issue identification & resolution', 'Direct factory communication'],
    imgId: 'svc-production-img-6d0e4f',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination from factory to your warehouse, including customs documentation and consolidation.',
    features: ['Sea, air & rail freight options', 'Customs documentation support', 'Cargo consolidation', 'Door-to-door delivery coordination'],
    imgId: 'svc-shipping-img-7e1f5a',
  },
  {
    id: 'ongoing-support',
    icon: Headphones,
    title: 'Ongoing Account Management',
    desc: 'A dedicated bilingual account manager handles all supplier communication, negotiation, and issue resolution.',
    features: ['Dedicated project manager', 'Bilingual communication support', 'Price negotiation & contract review', 'Dispute resolution assistance'],
    imgId: 'svc-support-img-8f2a6b',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-white/80">
              Comprehensive China sourcing solutions designed to reduce risk, save time, and ensure quality for international buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h2>
                  <p id={`svc-${service.id}-desc`} className="text-neutral-600 text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[svc-${service.id}-desc] [svc-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Every project is different. Tell us your requirements and we will create a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
