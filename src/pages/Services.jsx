import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Clock, Truck, BarChart3,
  ArrowRight, CheckCircle2, FileText, Users, Factory, Package
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and connect you with vetted manufacturers matching your product specifications, quality standards, and budget.',
    details: [
      'Product-specific supplier search across our verified network',
      'Initial screening based on your requirements and standards',
      'Supplier comparison reports with pricing and capability analysis',
      'Factory visits and face-to-face meetings on your behalf',
    ],
    imgId: 'svc-source-a1b2c3',
    titleId: 'svc-source-title',
    descId: 'svc-source-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory legitimacy, production capacity, certifications, and business registration before you commit.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system (ISO) certification check',
      'Worker welfare and compliance evaluation',
      'Financial stability and trade history review',
    ],
    imgId: 'svc-verify-d4e5f6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to catch issues before your goods leave the factory.',
    details: [
      'Pre-production inspection (PPI) for materials and components',
      'During-production inspection (DPI) at key milestones',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Detailed photo and video documentation',
      'Lab testing coordination for certifications',
    ],
    imgId: 'svc-inspect-g7h8i9',
    titleId: 'svc-inspect-title',
    descId: 'svc-inspect-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout production, tracking timelines and resolving issues to keep your schedule on track.',
    details: [
      'Weekly production status updates with photos',
      'Milestone tracking against agreed timelines',
      'Early warning system for potential delays',
      'Direct intervention when production issues arise',
      'Coordination of engineering and design changes',
    ],
    imgId: 'svc-follow-j1k2l3',
    titleId: 'svc-follow-title',
    descId: 'svc-follow-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Sea freight, air freight, and express shipping options',
      'Consolidation of multiple supplier shipments',
      'Customs documentation and compliance preparation',
      'Real-time shipment tracking and status updates',
      'Warehouse and fulfillment coordination in China',
    ],
    imgId: 'svc-ship-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: BarChart3,
    title: 'Price Negotiation',
    desc: 'Leverage our local expertise and supplier relationships to negotiate competitive pricing without compromising quality.',
    details: [
      'Multi-supplier competitive bidding',
      'Detailed cost breakdown analysis',
      'Volume discount and payment term negotiation',
      'Raw material price trend monitoring',
      'Total landed cost calculation and optimization',
    ],
    imgId: 'svc-negot-p7q8r9',
    titleId: 'svc-negot-title',
    descId: 'svc-negot-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Our Services</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive sourcing support from supplier discovery to delivery. Each service can be engaged individually or as part of a full-service package.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((s, i) => (
              <div key={s.title} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h2 id={s.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">{s.title}</h2>
                  <p id={s.descId} className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                    <img
                      alt={s.title}
                      data-strk-img-id={s.imgId}
                      data-strk-img={`[${s.descId}] [${s.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Need a Specific Service?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Each service is available individually or as part of a complete sourcing package. Tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
