import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research China\'s manufacturing market to identify suppliers that match your product specifications, quality standards, MOQ, and target price. Our team contacts factories directly, requests quotes, and presents you with a shortlist of qualified options.',
    features: [
      'Market research across all major manufacturing regions',
      'Supplier shortlisting with pricing and lead time comparison',
      'Initial supplier communication in Chinese',
      'NDA and confidentiality management',
    ],
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their production capabilities, workforce, equipment, certifications, and compliance with your requirements. You receive a detailed audit report with photos and video.',
    features: [
      'On-site factory visits by our local agents',
      'Verification of business licences and certifications',
      'Assessment of production capacity and quality systems',
      'Photo and video documentation',
    ],
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch problems before they ship',
    desc: 'Our inspectors check your goods against your specifications at key stages of production. We follow AQL sampling standards and provide a full inspection report with pass/fail results, photos of defects, and recommendations.',
    features: [
      'Pre-production, during-production, and pre-shipment inspections',
      'AQL sampling and defect classification',
      'Detailed inspection reports with photos',
      'Container loading supervision',
    ],
    color: 'text-green-600',
    bg: 'bg-green-50',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We monitor your order from placement to completion, visiting the factory regularly and sending you progress updates. If issues arise — delays, material shortages, quality deviations — we flag them early so you can make informed decisions.',
    features: [
      'Regular factory visits during production',
      'Weekly progress reports with photos',
      'Early warning system for delays or issues',
      'Direct communication with factory management',
    ],
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    titleId: 'svc-followup-title',
    descId: 'svc-followup-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We work with trusted freight forwarders to arrange sea freight, air freight, or express courier shipments. We handle export documentation, customs declarations, and cargo tracking so your goods arrive on time and in compliance.',
    features: [
      'Sea freight (FCL and LCL), air freight, and express options',
      'Export documentation and customs clearance support',
      'Cargo tracking and delivery updates',
      'Consolidation of multiple supplier shipments',
    ],
    color: 'text-brand-sky',
    bg: 'bg-brand-sky/10',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
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
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            China Sourcing Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            We provide end-to-end sourcing support for overseas buyers — from finding the right supplier
            to delivering goods to your door.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${svc.color}`} />
                    </div>
                    <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">
                      {svc.subtitle}
                    </p>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-neutral-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-brand-sky transition-colors"
                    >
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={`svc-${svc.id}-img-4a8c`}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-72 object-cover"
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
