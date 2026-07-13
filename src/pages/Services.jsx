import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileText, ArrowRight, CheckCircle,
} from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/shared/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description:
      'We research and identify qualified Chinese manufacturers that match your product specifications, target price, MOQ, and delivery requirements. Our supplier network spans all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Supplier database search and market research',
      'Shortlist of 3–5 qualified manufacturers',
      'Initial price and MOQ comparison',
      'Supplier communication in Chinese',
    ],
    imgId: 'svc-sourcing-img-3a1b2c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    description:
      'Before you commit to a supplier, we conduct an on-site factory audit to verify their business registration, production capacity, equipment, workforce, certifications, and compliance with your standards.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-factory-img-4b2c3d',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure goods meet your standards before shipment',
    description:
      'Our inspectors conduct pre-shipment inspections, during-production checks, and container loading supervision. We use internationally recognized inspection standards and provide detailed reports with photos.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'AQL sampling methodology',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-qc-img-5c3d4e',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production cycle',
    description:
      'We act as your eyes and ears at the factory. Our team monitors production milestones, communicates with the factory on your behalf, and resolves any issues before they become costly problems.',
    features: [
      'Production schedule tracking',
      'Regular milestone updates and photos',
      'Issue identification and resolution',
      'Supplier communication management',
      'Delivery timeline monitoring',
    ],
    imgId: 'svc-production-img-6d4e5f',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered on time',
    description:
      'We coordinate with freight forwarders, prepare all Chinese export documentation, and ensure your goods are shipped correctly and on schedule. We work with both FCL and LCL shipments.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'FCL and LCL shipment management',
      'Customs declaration support',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-shipping-img-7e5f6a',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'sourcing-consulting',
    icon: FileText,
    title: 'Sourcing Consulting',
    subtitle: 'Expert guidance for your China sourcing strategy',
    description:
      'Not sure where to start? Our consulting service helps you understand the Chinese market, identify the right sourcing regions, evaluate supplier options, and build a sustainable supply chain.',
    features: [
      'Market and supplier landscape analysis',
      'Sourcing region recommendations',
      'Cost structure and pricing guidance',
      'Supply chain risk assessment',
      'Ongoing sourcing strategy support',
    ],
    imgId: 'svc-consulting-img-8f6a7b',
    titleId: 'svc-consulting-title',
    descId: 'svc-consulting-desc',
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
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Professional China Sourcing Services
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              We provide end-to-end sourcing support for overseas buyers — from finding the right supplier
              to delivering goods to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest">
                    {service.subtitle}
                  </span>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p id={service.descId} className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-slate-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:,"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your project and we'll recommend the right approach for your situation."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
