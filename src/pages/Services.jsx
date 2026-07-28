import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship,
  Users, FileText, Package, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We research, identify, and shortlist qualified Chinese suppliers based on your product specifications, target price, MOQ, certifications, and delivery requirements. Our database includes thousands of verified manufacturers across major industrial regions.',
    features: ['Product-specific supplier research', 'Multi-supplier comparison reports', 'Background and license verification', 'Sample coordination'],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-3a7c9d',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'Our team conducts on-site factory audits to verify production capacity, business legitimacy, quality management systems, working conditions, and export experience. We provide detailed audit reports with photos and recommendations.',
    features: ['On-site facility inspection', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation'],
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    imgId: 'svc-audit-img-8e2b4f',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'We perform inspections at every stage of production — from initial production check to pre-shipment inspection. Our QC team follows AQL sampling standards and provides detailed reports with photos of any defects found.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-5d1a8c',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'We stay in regular contact with your supplier throughout the production cycle. Our team tracks progress against agreed timelines, flags potential delays early, and ensures your specifications are being followed.',
    features: ['Weekly production updates', 'Timeline tracking', 'Specification compliance checks', 'Issue escalation and resolution'],
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-production-img-2f6e9a',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We coordinate the entire shipping process from factory to your warehouse. This includes freight booking, export documentation, customs clearance support, and delivery tracking for both sea and air freight.',
    features: ['Freight forwarder coordination', 'Export documentation', 'Customs clearance support', 'Real-time shipment tracking'],
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-shipping-img-7b3d2e',
  },
  {
    id: 'negotiation-support',
    icon: Users,
    title: 'Negotiation & Contract Support',
    desc: 'We leverage our local market knowledge and supplier relationships to negotiate better pricing, favorable payment terms, and reasonable MOQ reductions. We also help structure supplier agreements to protect your interests.',
    features: ['Price benchmarking', 'Payment term negotiation', 'MOQ reduction strategies', 'Contract review and structuring'],
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
    imgId: 'svc-negotiation-img-4c8a1f',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Complete China Sourcing Services
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From supplier identification to final delivery — we provide hands-on support at every stage of your China sourcing journey.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl aspect-video object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p id={service.descId} className="text-slate-600 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Need Help Sourcing from China?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Tell us about your project and get a customized sourcing plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
