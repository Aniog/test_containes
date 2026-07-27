import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, TrendingUp,
  FileText, Users, Repeat, ArrowRight
} from 'lucide-react';
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading.jsx';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'supplier-sourcing',
      icon: Search,
      title: 'Supplier Sourcing & Matching',
      description: 'We research, identify, and shortlist qualified Chinese suppliers based on your exact product specifications, quality standards, MOQ requirements, and budget constraints.',
      features: ['Market research & supplier database access', 'RFQ management with multiple suppliers', 'Price comparison & supplier ranking', 'Background checks on shortlisted factories'],
      imgId: 'svc-sourcing-a1b2c3',
    },
    {
      id: 'factory-verification',
      icon: ShieldCheck,
      title: 'Factory Verification & Audit',
      description: 'Our team conducts comprehensive on-site factory audits to verify legitimacy, assess production capabilities, and evaluate quality management systems.',
      features: ['Business license & export license verification', 'Production capacity assessment', 'Quality management system review', 'Social compliance & working conditions audit'],
      imgId: 'svc-factory-d4e5f6',
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Control & Inspection',
      description: 'Professional quality inspections at every stage of production, following international AQL standards to ensure your products meet specifications.',
      features: ['Pre-production inspection (PPI)', 'During-production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
      imgId: 'svc-qc-g7h8i9',
    },
    {
      id: 'production-followup',
      icon: Factory,
      title: 'Production Monitoring & Follow-up',
      description: 'Regular factory visits and detailed progress reports keep you informed about your order status, helping prevent delays and quality issues.',
      features: ['Weekly production progress reports', 'Photo & video documentation', 'Timeline tracking & delay alerts', 'Issue resolution & corrective actions'],
      imgId: 'svc-production-j1k2l3',
    },
    {
      id: 'shipping-logistics',
      icon: Ship,
      title: 'Shipping & Logistics Coordination',
      description: 'End-to-end logistics management from factory door to your warehouse, including freight booking, documentation, and customs support.',
      features: ['Sea, air, and rail freight options', 'Customs documentation preparation', 'Shipment tracking & status updates', 'Consolidation & warehousing services'],
      imgId: 'svc-shipping-m4n5o6',
    },
    {
      id: 'negotiation-support',
      icon: TrendingUp,
      title: 'Price Negotiation & Contract Support',
      description: 'Leverage our local market knowledge and supplier relationships to secure the best possible pricing, payment terms, and contractual protections.',
      features: ['Market price benchmarking', 'Payment terms negotiation', 'Contract review & drafting support', 'MOQ optimization strategies'],
      imgId: 'svc-negotiation-p7q8r9',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier identification to final delivery. Every service designed to protect your interests.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p id={`svc-${service.id}-desc`} className="text-neutral-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-success rounded-full" />
                        </div>
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] rounded-xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[svc-${service.id}-desc] [svc-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your product requirements and get a free, no-obligation sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
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
