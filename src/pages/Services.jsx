import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, Truck, ShieldCheck,
  Clock, CheckCircle, ArrowRight
} from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';
import SectionHeader from '../components/shared/SectionHeader';

const services = [
  {
    id: 'svc-sourcing',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    features: [
      'Search across verified supplier databases and trade shows',
      'Shortlist 3–5 qualified factories for your review',
      'Detailed supplier profiles with capabilities and certifications',
      'Initial price and MOQ comparison',
    ],
  },
  {
    id: 'svc-factory',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and working conditions.',
    features: [
      'Physical factory visit by our local team',
      'Verification of business licenses and certifications',
      'Assessment of production equipment and capacity',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'svc-qc',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections by our local QC team — with detailed photo reports.',
    features: [
      'Pre-production material inspection',
      'During-production (DUPRO) checks',
      'Pre-shipment final random inspection (AQL)',
      'Detailed inspection report within 24 hours',
    ],
  },
  {
    id: 'svc-production',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular updates on production progress, timeline adherence, and early issue detection before it becomes costly.',
    features: [
      'Weekly production status updates',
      'Timeline monitoring and delay alerts',
      'Direct communication with factory floor',
      'Issue escalation and resolution support',
    ],
  },
  {
    id: 'svc-shipping',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods ship on time.',
    features: [
      'Freight forwarder coordination (sea, air, express)',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and delivery updates',
    ],
  },
  {
    id: 'svc-compliance',
    titleId: 'svc-compliance-title',
    descId: 'svc-compliance-desc',
    icon: ShieldCheck,
    title: 'Compliance & Labeling',
    desc: 'Guidance on product compliance, CE/FCC/RoHS requirements, and correct labeling for your target market.',
    features: [
      'CE, FCC, RoHS, and other certification guidance',
      'Product labeling review for target markets',
      'Coordination with third-party testing labs',
      'Import regulation advisory',
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comprehensive support for every stage of the China sourcing process — from finding suppliers to delivering goods.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {svc.desc}
                    </p>
                    <ul className="space-y-3">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 h-64 lg:h-80 ${isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`${svc.id}-img-svc`}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
