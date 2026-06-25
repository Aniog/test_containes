import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Package, ArrowRight, CheckCircle, Globe
} from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify verified Chinese suppliers that match your product specifications, target price, minimum order quantity, and delivery requirements. Our network spans all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Shortlist of 3–5 verified candidates',
      'Initial price and MOQ comparison',
      'Communication in English on your behalf',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to an order, we conduct a thorough on-site factory audit. We verify business registration, production capacity, equipment, workforce, certifications, and compliance with your standards. You receive a detailed audit report with photos.',
    features: [
      'Business license and registration check',
      'On-site factory visit and inspection',
      'Production capacity assessment',
      'Certification and compliance review',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-full-img-d4e5f6',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our quality inspectors conduct pre-shipment and in-line inspections following AQL (Acceptable Quality Limit) standards. We check product dimensions, functionality, appearance, labeling, and packaging against your specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'Once production begins, we act as your on-the-ground representative. We visit the factory regularly, monitor progress against your timeline, flag any issues early, and send you regular status updates so you are never left in the dark.',
    features: [
      'Regular factory visits during production',
      'Weekly progress reports',
      'Early issue identification and resolution',
      'Timeline and milestone tracking',
      'Direct communication with factory management',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with licensed freight forwarders to arrange sea or air freight, handle all export documentation, and track your shipment from China to your destination. We work with your customs broker or can recommend one.',
    features: [
      'Sea freight (FCL and LCL) and air freight',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own brand with Chinese manufacturing',
    desc: 'We support businesses looking to develop private label products or OEM manufacturing arrangements. From product design and sampling to custom packaging and branding, we manage the full development process with your chosen factory.',
    features: [
      'OEM factory identification',
      'Product development and sampling',
      'Custom packaging and branding',
      'Intellectual property guidance',
      'Certification support (CE, FCC, etc.)',
    ],
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-full-img-p7q8r9',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#93c5fd' }}>
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We cover every stage of the sourcing process — from finding suppliers to delivering goods — so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e8f0fb' }}>
                      <Icon className="w-6 h-6" style={{ color: '#1a4f8a' }} />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#0d2b4e' }}>{svc.title}</h2>
                    <p className="font-medium mb-4" style={{ color: '#1a4f8a' }}>{svc.subtitle}</p>
                    <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1a4f8a' }} />
                          <span className="text-slate-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                      style={{ backgroundColor: '#1a4f8a' }}
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={svc.imgId}
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

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing challenge and we will recommend the right approach for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: '#c0392b' }}
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
