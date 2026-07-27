import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Clock, Truck, Package,
  ArrowRight, CheckCircle2, FileText, Camera, BarChart3,
  MessageSquare, Handshake
} from 'lucide-react';

const detailedServices = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturers for your products',
    desc: 'We identify and shortlist qualified suppliers from our verified network across China\'s key industrial regions. Our team evaluates each supplier based on your product requirements, target price, quality standards, and production capacity.',
    features: [
      'Product-specific supplier matching from 2,000+ verified factories',
      'Detailed supplier profiles with production capabilities and certifications',
      'Price comparison across multiple qualified suppliers',
      'Initial communication and negotiation support',
    ],
    imgId: 'svc-sourcing-v1w2x3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you\'re really working with',
    desc: 'Our on-site factory audits verify business licenses, production capacity, quality management systems, and real manufacturing capabilities. We distinguish real manufacturers from trading companies and uncover potential risks before you commit.',
    features: [
      'Business license and registration verification',
      'On-site production capacity and equipment assessment',
      'Quality management system (ISO, etc.) review',
      'Worker conditions and environmental compliance check',
      'Detailed audit report with photos and risk assessment',
    ],
    imgId: 'svc-verification-y4z5a6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they ship',
    desc: 'We perform inspections at multiple production stages following international AQL standards. Our inspectors check dimensions, appearance, functionality, packaging, and labeling to ensure your products meet specifications.',
    features: [
      'Pre-production inspection (material and component check)',
      'During-production inspection (in-line quality check)',
      'Pre-shipment inspection (final AQL-based inspection)',
      'Defect classification and corrective action tracking',
      'Photo-documented inspection reports within 24 hours',
    ],
    imgId: 'svc-inspection-b7c8d9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    subtitle: 'Keep your orders on schedule',
    desc: 'We monitor your orders throughout the production cycle, track milestones, and keep you informed of progress and any potential delays. Our team proactively identifies risks and works with factories to resolve issues before they impact your timeline.',
    features: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress reports with photos',
      'Early risk identification and mitigation',
      'Direct communication with factory production managers',
      'Delay recovery action plans',
    ],
    imgId: 'svc-production-e1f2g3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory floor to your door',
    desc: 'We coordinate the entire logistics chain — from freight booking to customs documentation and delivery. Whether you need sea freight, air cargo, or rail transport, we manage the process so your goods arrive on time and in compliance.',
    features: [
      'Sea, air, and rail freight booking and optimization',
      'Customs documentation and compliance preparation',
      'Import/export regulation guidance',
      'Door-to-door delivery coordination',
      'Real-time shipment tracking and status updates',
    ],
    imgId: 'svc-shipping-h4i5j6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: Package,
    title: 'Consolidation & Repacking',
    subtitle: 'Save on shipping and ensure compliance',
    desc: 'We combine shipments from multiple suppliers into optimized container loads, repackage products for market compliance, and handle labeling requirements. This reduces your per-unit shipping cost and ensures your goods meet destination market standards.',
    features: [
      'Multi-supplier shipment consolidation',
      'Container space optimization',
      'Repackaging for destination market compliance',
      'Label and barcode application',
      'Warehouse storage and staging services',
    ],
    imgId: 'svc-consolidation-k7l8m9',
    titleId: 'svc-consolidation-title',
    descId: 'svc-consolidation-desc',
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
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Full-Service China Sourcing Support</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            From finding suppliers to delivering goods, we provide end-to-end sourcing services that protect your investment and streamline your supply chain.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {detailedServices.map((svc, idx) => (
        <section key={svc.title} className={`py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-navy-800" />
                </div>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">{svc.title}</h2>
                <p id={svc.descId} className="text-brand-blue font-medium mb-4">{svc.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-3">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-lg overflow-hidden bg-slate-100 aspect-[4/3]">
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
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Get a free consultation and learn how our services can help you source better, reduce risk, and save money.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors no-underline">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
