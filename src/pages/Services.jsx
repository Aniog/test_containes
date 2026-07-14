import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Globe,
  ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified manufacturers from our network and China\'s major sourcing hubs — Guangzhou, Shenzhen, Yiwu, Ningbo, and beyond. Every supplier is pre-screened before we present them to you.',
    features: [
      'Product specification matching',
      'MOQ and pricing alignment',
      'Supplier background checks',
      'Multiple shortlisted options',
      'Comparative supplier reports',
    ],
    titleId: 'svc-full-sourcing-title',
    descId: 'svc-full-sourcing-desc',
    imgId: 'svc-full-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'We conduct on-site factory audits to verify production capabilities, workforce size, equipment, certifications, and quality management systems. You receive a detailed audit report with photos and findings.',
    features: [
      'On-site factory visits',
      'Certification verification (ISO, CE, etc.)',
      'Production capacity assessment',
      'Worker conditions review',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-full-factory-title',
    descId: 'svc-full-factory-desc',
    imgId: 'svc-full-factory-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    desc: 'Our inspectors follow AQL (Acceptable Quality Limit) standards to check products during and after production. We inspect dimensions, functionality, packaging, labeling, and appearance against your specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Defect classification reports',
      'Pass/fail recommendation',
    ],
    titleId: 'svc-full-qc-title',
    descId: 'svc-full-qc-desc',
    imgId: 'svc-full-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the ground. Our team monitors production milestones, communicates with the factory on your behalf, and flags any issues before they become costly problems.',
    features: [
      'Regular production status updates',
      'Milestone tracking and reporting',
      'Issue escalation and resolution',
      'Sample approval management',
      'Timeline adherence monitoring',
    ],
    titleId: 'svc-full-prod-title',
    descId: 'svc-full-prod-desc',
    imgId: 'svc-full-prod-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, arrange customs clearance support, and track your shipment from China to your destination port or warehouse.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'FCL and LCL shipping options',
      'Shipment tracking and updates',
      'Incoterms guidance (FOB, CIF, DDP)',
    ],
    titleId: 'svc-full-ship-title',
    descId: 'svc-full-ship-desc',
    imgId: 'svc-full-ship-img-m4n5o6',
  },
  {
    id: 'trade-compliance',
    icon: Globe,
    title: 'Trade Compliance Support',
    subtitle: 'Navigate import regulations with confidence',
    desc: 'We help you understand the regulatory requirements for your target market — including product certifications, labeling standards, import duties, and restricted materials — so your goods clear customs without delays.',
    features: [
      'Product certification guidance (CE, FCC, RoHS)',
      'Labeling and packaging compliance',
      'Import duty and tariff advice',
      'Restricted materials screening',
      'Country-specific regulation review',
    ],
    titleId: 'svc-full-trade-title',
    descId: 'svc-full-trade-desc',
    imgId: 'svc-full-trade-img-p7q8r9',
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
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We handle every stage of the sourcing process — from finding the right supplier to getting goods delivered to your door.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red-china text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-china-dark transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-slate-bg rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <span className="text-red-china text-sm font-semibold uppercase tracking-wider">{svc.subtitle}</span>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy mt-2 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-text-muted leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-text-main text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-bg ${!isEven ? 'lg:order-1' : ''}`} style={{ height: '300px' }}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Tell us about your product and sourcing situation. We'll recommend the right combination of services for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-china text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-red-china-dark transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
