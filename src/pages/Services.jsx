import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui/SharedComponents';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We leverage our established network and research capabilities to identify manufacturers that match your exact specifications, quality standards, and budget. Every supplier we recommend has been pre-screened for legitimacy and production capability.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified factories',
      'Supplier profile reports',
    ],
    imgId: 'svc-sourcing-full-img-a1b2',
    titleId: 'svc-sourcing-full-title',
    descId: 'svc-sourcing-full-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Confirm what you see is what you get',
    desc: 'Before you place an order, our team visits the factory in person to verify its existence, capacity, equipment, workforce, and certifications. We provide a detailed audit report with photos and findings.',
    features: [
      'On-site factory visit',
      'Business license verification',
      'Production capacity assessment',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-factory-full-img-c3d4',
    titleId: 'svc-factory-full-title',
    descId: 'svc-factory-full-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections following AQL standards or your custom checklist. We identify defects, packaging issues, and specification deviations before goods leave the factory.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Custom inspection checklists',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-qc-full-img-e5f6',
    titleId: 'svc-qc-full-title',
    descId: 'svc-qc-full-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every production stage',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production milestones, communicates with the factory on your behalf, and provides regular status updates so you always know where your order stands.',
    features: [
      'Production milestone tracking',
      'Factory communication management',
      'Weekly progress reports',
      'Issue escalation and resolution',
      'Pre-production sample approval',
    ],
    imgId: 'svc-prod-full-img-g7h8',
    titleId: 'svc-prod-full-title',
    descId: 'svc-prod-full-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, customs brokers, and logistics providers to ensure your goods are shipped efficiently and arrive on time. We handle documentation, booking, and tracking.',
    features: [
      'Freight forwarder coordination',
      'Shipping documentation preparation',
      'Customs clearance support',
      'Sea, air, and express options',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-ship-full-img-i9j0',
    titleId: 'svc-ship-full-title',
    descId: 'svc-ship-full-desc',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before committing to bulk orders',
    desc: 'We source product samples from multiple suppliers, consolidate them, and ship them to you for evaluation. This reduces your risk and helps you make informed decisions before placing large orders.',
    features: [
      'Multi-supplier sample sourcing',
      'Sample consolidation and shipping',
      'Sample quality assessment',
      'Supplier comparison report',
      'Negotiation of sample costs',
    ],
    imgId: 'svc-sample-full-img-k1l2',
    titleId: 'svc-sample-full-title',
    descId: 'svc-sample-full-desc',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">Our Services</Badge>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide a complete range of sourcing, verification, quality control, and logistics services to help you import from China with confidence.
            </p>
          </div>
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
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">{svc.subtitle}</p>
                    <h2 id={svc.titleId} className="text-brand-navy text-3xl font-bold mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={svc.title}
                      className="w-full h-72 lg:h-80 object-cover"
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us for a free consultation. We will assess your situation and recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
