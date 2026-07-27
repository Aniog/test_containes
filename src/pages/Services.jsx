import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Package, Truck, Tag,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory for your product',
    description:
      'We research and identify verified Chinese manufacturers that match your product specifications, quality standards, MOQ, and budget. You receive a shortlist of 3–5 qualified suppliers with detailed profiles.',
    features: [
      'Product specification analysis',
      'Factory database search + trade show contacts',
      'Supplier profile reports with certifications',
      'Price comparison and negotiation support',
      'Sample coordination',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'audit',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re buying from',
    description:
      'Before you place an order, we verify the factory\'s legitimacy, production capacity, and quality systems through on-site audits or document-based verification.',
    features: [
      'Business license and registration check',
      'On-site factory visit and photos',
      'Production capacity assessment',
      'Quality management system review',
      'Certification verification (ISO, CE, etc.)',
    ],
    imgId: 'svc-audit-img-d4e5f6',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach you',
    description:
      'Our local QC inspectors check your goods at key production milestones using your specifications and AQL standards. You receive a detailed report with photos before shipment is approved.',
    features: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling and defect classification',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production',
    icon: Package,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    description:
      'We act as your eyes and ears on the factory floor, monitoring production milestones, communicating with the supplier, and escalating issues before they cause delays.',
    features: [
      'Production schedule tracking',
      'Regular status updates with photos',
      'Issue escalation and resolution',
      'Packaging and labeling verification',
      'Final quantity and quality confirmation',
    ],
    imgId: 'svc-production-img-j0k1l2',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'From China to your warehouse',
    description:
      'We coordinate freight forwarding, customs documentation, and delivery to your destination. We work with licensed freight partners for sea, air, and express shipments.',
    features: [
      'Sea freight (FCL and LCL)',
      'Air freight and express courier',
      'Export documentation preparation',
      'Cargo consolidation',
      'Customs clearance coordination',
    ],
    imgId: 'svc-shipping-img-m3n4o5',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'oem',
    icon: Tag,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    description:
      'From product concept to branded packaging, we help you develop private label and OEM products with reliable Chinese manufacturers — managing design, sampling, and production.',
    features: [
      'Product design and specification development',
      'OEM factory identification',
      'Prototype and sample management',
      'Branding and packaging coordination',
      'Compliance and certification support',
    ],
    imgId: 'svc-oem-img-p6q7r8',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We provide end-to-end sourcing support — from finding the right supplier to delivering
            goods to your door. Every service is designed to reduce risk and save you time.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-brand-blue">{svc.subtitle}</span>
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {svc.title}
                  </h2>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-md ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
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
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-600 mb-6">
            Contact us and we'll help you figure out the right approach for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
