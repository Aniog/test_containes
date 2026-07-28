import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { SectionHeader, CtaButton } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify qualified manufacturers from our verified network and fresh market searches. Every supplier is pre-screened for product fit, production capacity, and export experience.',
    features: [
      'Product-specific supplier research',
      'Minimum 3 qualified options provided',
      'Supplier background checks',
      'Price benchmarking',
      'Communication in Chinese on your behalf',
    ],
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their business registration, production capabilities, certifications, and working conditions.',
    features: [
      'Business license & registration check',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Facility photos and video walkthrough',
      'Written audit report delivered to you',
    ],
    imgId: 'svc-factory-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our trained QC inspectors check your goods against your specifications at multiple stages of production. We use internationally recognized inspection standards and provide detailed reports.',
    features: [
      'Pre-production inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Photo and video documentation',
    ],
    imgId: 'svc-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every stage',
    desc: 'We act as your eyes and ears on the ground. Our team monitors production progress, communicates with the factory in Chinese, and resolves issues before they become costly problems.',
    features: [
      'Regular production status updates',
      'Factory communication in Chinese',
      'Issue escalation and resolution',
      'Timeline management',
      'Photo updates at key milestones',
    ],
    imgId: 'svc-production-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and guide you through the logistics process to ensure your goods arrive on time and in full.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance guidance',
      'Sea, air, and express freight options',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-shipping-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    desc: 'From concept to finished product, we help you develop private label and OEM products with reliable Chinese manufacturers. We manage design, sampling, production, and packaging.',
    features: [
      'Product design and development',
      'Material and component sourcing',
      'Sample coordination and review',
      'Custom branding and packaging',
      'Full production management',
    ],
    imgId: 'svc-privatelabel-p7q8r9',
    titleId: 'svc-privatelabel-title',
    descId: 'svc-privatelabel-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-blue-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive sourcing support from supplier identification to final delivery — all managed by our China-based team.
          </p>
          <CtaButton variant="white" label="Get a Free Sourcing Quote" />
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-navy rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-red-china text-sm font-semibold uppercase tracking-wide">{svc.subtitle}</p>
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-blue-navy mb-3">{svc.title}</h2>
                  <p id={svc.descId} className="text-gray-600 mb-5 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-navy font-semibold text-sm hover:text-red-china transition-colors"
                  >
                    Enquire about this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden h-64 md:h-80 ${isEven ? '' : 'lg:order-1'}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-navy mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us and describe your sourcing challenge. We'll recommend the right approach for your situation.
          </p>
          <CtaButton label="Get a Free Sourcing Quote" />
        </div>
      </section>
    </div>
  );
};

export default Services;
