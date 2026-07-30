import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, minimum order quantity, and target price. Our network spans Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Multi-platform supplier research',
      'Shortlist of 3–5 qualified suppliers',
      'Initial price and MOQ comparison',
      'Communication in English on your behalf',
    ],
    imgId: 'svc-page-sourcing-img-a1b2',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Confirm the factory is real and capable',
    desc: 'Before you commit to an order, we visit the factory in person to verify its legitimacy, production capacity, equipment, workforce, and quality management systems. You receive a detailed audit report.',
    features: [
      'On-site factory visit and audit',
      'Business license and certification check',
      'Production capacity assessment',
      'Worker and equipment verification',
      'Written audit report with photos',
    ],
    imgId: 'svc-page-factory-img-c3d4',
    titleId: 'svc-page-factory-title',
    descId: 'svc-page-factory-desc',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections based on AQL standards. We check dimensions, materials, workmanship, labeling, and packaging against your approved sample.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL-based random sampling',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    imgId: 'svc-page-qc-img-e5f6',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the ground. Our team monitors production milestones, communicates with the factory, and escalates issues before they become costly problems.',
    features: [
      'Regular production status updates',
      'Factory communication management',
      'Issue escalation and resolution',
      'Material and component verification',
      'Timeline tracking and reporting',
    ],
    imgId: 'svc-page-prod-img-g7h8',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered on time',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment from the factory gate to your warehouse. We handle both sea and air freight.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea and air freight options',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-page-ship-img-i9j0',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'oem',
    icon: Package,
    title: 'Private Label / OEM',
    subtitle: 'Build your own branded product line',
    desc: 'From concept to finished product, we manage the full OEM process including product design, tooling, sampling, branded packaging, and compliance testing for your target market.',
    features: [
      'Product design and specification',
      'Tooling and mold management',
      'Sample procurement and review',
      'Branded packaging development',
      'Compliance and certification support',
    ],
    imgId: 'svc-page-oem-img-k1l2',
    titleId: 'svc-page-oem-title',
    descId: 'svc-page-oem-desc',
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
      {/* Header */}
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">China Sourcing Services</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Comprehensive support for overseas buyers at every stage of the China sourcing process.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={svc.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-1">{svc.subtitle}</p>
                  <h2 id={svc.titleId} className="text-2xl lg:text-3xl font-extrabold text-brand-navy mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-brand-muted leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-navy">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-navy transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-xl overflow-hidden aspect-[4/3] ${isEven ? 'lg:order-1' : ''}`}>
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
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your product and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded font-bold hover:bg-amber-600 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
