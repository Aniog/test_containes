import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, Clock, Truck, ShieldCheck,
  ArrowRight, CheckCircle
} from 'lucide-react';

const servicesData = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We research, identify, and shortlist qualified manufacturers that match your product specifications, target price, MOQ, and quality requirements.',
    features: ['Market research & supplier identification', 'RFQ management & price comparison', 'Supplier background checks', 'Sample coordination'],
    imgId: 'svc-sourcing-img-3a7f2d',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory visits to verify production capabilities, certifications, working conditions, and business legitimacy before you commit to an order.',
    features: ['On-site factory audit', 'Business license verification', 'Production capacity assessment', 'Certification & compliance check'],
    imgId: 'svc-factory-img-8b4e1c',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Systematic quality inspections at every stage of production to ensure your goods meet specifications before they leave the factory.',
    features: ['Pre-production inspection (PPI)', 'During-production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    imgId: 'svc-qc-img-5c9d3e',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of your production progress to ensure timelines are met, specifications are followed, and any issues are caught early.',
    features: ['Weekly production reports', 'Timeline tracking & alerts', 'Issue escalation & resolution', 'Photo & video updates'],
    imgId: 'svc-production-img-2f6a8b',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management from factory to your warehouse, including freight booking, customs documentation, and delivery tracking.',
    features: ['Freight forwarder selection', 'Customs documentation', 'Shipping insurance arrangement', 'Delivery tracking & updates'],
    imgId: 'svc-shipping-img-9e1c4d',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'negotiation',
    icon: ShieldCheck,
    title: 'Negotiation & Contract Support',
    desc: 'We negotiate pricing, payment terms, and production agreements to protect your interests and ensure fair terms as a foreign buyer.',
    features: ['Price negotiation', 'Payment term structuring', 'Contract review & drafting', 'Dispute resolution support'],
    imgId: 'svc-negotiation-img-7d3b5f',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
  },
];

const Services = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Comprehensive China sourcing support from supplier discovery to doorstep delivery. 
            Choose individual services or a full-package solution.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, idx) => (
              <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full lg:w-1/2">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-text mb-3">{service.title}</h2>
                  <p id={service.descId} className="text-brand-muted leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-brand-text text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-slate-300 mb-8">Tell us about your project and we'll create a tailored service package.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
