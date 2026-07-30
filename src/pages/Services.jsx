import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, minimum order quantities, and budget. Our sourcing team has direct relationships with factories across major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      '3–5 qualified supplier shortlist',
      'Comparative quotation report',
    ],
    imgId: 'srv-sourcing-img-a1b2c3',
    titleId: 'srv-sourcing-title',
    descId: 'srv-sourcing-desc',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit',
    subtitle: 'Verify before you commit',
    desc: 'Before placing an order, it\'s essential to verify that a factory is legitimate, capable, and compliant. Our auditors conduct thorough on-site assessments covering production capacity, quality management systems, certifications, and working conditions.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'srv-audit-img-d4e5f6',
    titleId: 'srv-audit-title',
    descId: 'srv-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they ship',
    desc: 'Our quality inspectors perform rigorous product checks at your factory before goods are loaded for shipment. We follow internationally recognized inspection standards and provide detailed reports with photographic evidence.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling methodology',
      'Detailed inspection report within 24h',
    ],
    imgId: 'srv-qc-img-g7h8i9',
    titleId: 'srv-qc-title',
    descId: 'srv-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'Once production begins, we act as your eyes and ears on the ground. Our team visits the factory regularly, monitors production milestones, and provides you with structured progress updates so you always know where your order stands.',
    features: [
      'Weekly production status reports',
      'Factory visit documentation',
      'Issue escalation and resolution',
      'Timeline management',
      'Photo and video updates',
    ],
    imgId: 'srv-prod-img-j1k2l3',
    titleId: 'srv-prod-title',
    descId: 'srv-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your door',
    desc: 'Navigating Chinese export logistics can be complex. We coordinate with licensed freight forwarders, prepare export documentation, and track your shipment from the factory to your destination port or warehouse.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea, air, and express options',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    imgId: 'srv-ship-img-m4n5o6',
    titleId: 'srv-ship-title',
    descId: 'srv-ship-desc',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before ordering',
    desc: 'Before committing to a bulk order, we arrange product samples from your shortlisted suppliers. We inspect samples against your specifications and ship them to you with a comparative evaluation report.',
    features: [
      'Sample request coordination',
      'Sample quality evaluation',
      'Comparative sample report',
      'International sample shipping',
      'Supplier feedback management',
    ],
    imgId: 'srv-sample-img-p7q8r9',
    titleId: 'srv-sample-title',
    descId: 'srv-sample-desc',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier identification to final delivery. We handle the complexity so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={svc.id} className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">{svc.subtitle}</p>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-muted leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-darktext">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CTAButton size="sm">Request This Service</CTAButton>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
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
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-red-100 mb-8">Tell us about your project and we'll recommend the right combination of services for your situation.</p>
          <CTAButton variant="secondary" size="lg">Get a Free Consultation</CTAButton>
        </div>
      </section>
    </div>
  );
}
