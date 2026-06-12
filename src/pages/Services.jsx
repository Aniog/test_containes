import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Package, ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, MOQ, target price, and quality requirements. Our network spans 20+ manufacturing hubs across China.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      '3–5 qualified supplier shortlist',
      'Comparative supplier report',
    ],
    imgId: 'svc-img-sourcing-4a2b1c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you place an order, we visit the factory in person. Our audit covers business registration, production capacity, workforce, equipment, certifications, and compliance with your standards.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Certification checks (ISO, CE, RoHS, etc.)',
      'Workforce and equipment review',
      'Detailed written audit report',
    ],
    imgId: 'svc-img-verify-5c3d2e',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our inspectors perform pre-production, during-production, and pre-shipment inspections using internationally recognized AQL standards. You receive a full photo and video report.',
    features: [
      'Pre-production material check',
      'During-production inspection (DUPRO)',
      'Pre-shipment final inspection (PSI)',
      'AQL sampling methodology',
      'Photo and video inspection report',
    ],
    imgId: 'svc-img-qc-6d4e3f',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every production milestone',
    desc: 'We act as your eyes and ears on the factory floor. Regular progress updates, milestone tracking, and proactive issue resolution keep your production on schedule.',
    features: [
      'Production schedule monitoring',
      'Weekly progress reports',
      'Issue escalation and resolution',
      'Sample approval coordination',
      'Delivery timeline management',
    ],
    imgId: 'svc-img-prod-7e5f4a',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs clearance support, and track your shipment to delivery.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-img-ship-8f6a5b',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your brand with Chinese manufacturing',
    desc: 'We support custom product development, private label branding, and OEM manufacturing. From packaging design to product customization, we manage the full development cycle.',
    features: [
      'Product design and customization',
      'Packaging and label design support',
      'OEM manufacturer matching',
      'Sample development management',
      'Brand compliance verification',
    ],
    imgId: 'svc-img-oem-9a7b6c',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-[#1A3C6E] py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-hero-bg-1a2b3c"
          data-strk-bg="China factory manufacturing quality control"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E] via-[#1A3C6E]/90 to-[#1A3C6E]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full-Cycle China Sourcing Services
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            From supplier research to final delivery — we manage every step so you can focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-[#EBF2FA] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1A3C6E]" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">{svc.title}</h2>
                    <p className="text-[#C0392B] font-semibold text-sm mb-4">{svc.subtitle}</p>
                    <p id={svc.descId} className="text-[#475569] leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-[#475569]">
                          <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#15305A] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                    >
                      Enquire About This Service <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`relative rounded-2xl overflow-hidden min-h-[320px] bg-[#EBF2FA] ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Contact us and we'll recommend the right combination of services for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Talk to a Sourcing Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
