import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory for your product',
    description: 'We research and identify manufacturers across China that match your product specifications, quality requirements, and budget. Our team has established relationships with factories in Guangdong, Zhejiang, Jiangsu, and other major manufacturing provinces.',
    features: [
      'Product specification analysis',
      'Factory database research',
      'Initial supplier screening',
      'Shortlist of 3–5 verified options',
      'Comparative pricing report',
    ],
    titleId: 'svc-detail-sourcing-title',
    descId: 'svc-detail-sourcing-desc',
    imgId: 'svc-detail-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from',
    description: 'Before you place an order, we conduct on-site factory audits to verify business licenses, production capacity, equipment, workforce, and compliance with international standards.',
    features: [
      'Business license verification',
      'On-site factory visit',
      'Production capacity assessment',
      'Worker conditions review',
      'Certification check (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-detail-factory-title',
    descId: 'svc-detail-factory-desc',
    imgId: 'svc-detail-factory-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they ship',
    description: 'Our inspectors conduct pre-shipment, in-line, and final random inspections based on AQL standards. We check dimensions, functionality, packaging, labeling, and compliance with your specifications.',
    features: [
      'Pre-production inspection',
      'In-line production inspection',
      'Pre-shipment final inspection',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    titleId: 'svc-detail-qc-title',
    descId: 'svc-detail-qc-desc',
    imgId: 'svc-detail-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    description: 'We act as your eyes and ears on the ground. Our team monitors production milestones, communicates with the factory in Chinese, resolves issues early, and sends you regular progress updates.',
    features: [
      'Production schedule tracking',
      'Regular photo and video updates',
      'Issue identification and resolution',
      'Chinese-language factory communication',
      'Milestone reporting',
    ],
    titleId: 'svc-detail-prod-title',
    descId: 'svc-detail-prod-desc',
    imgId: 'svc-detail-prod-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory to your warehouse',
    description: 'We coordinate with freight forwarders, prepare export documentation, manage customs clearance, and ensure your goods are delivered to your port or warehouse on time.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Sea, air, and express options',
      'Tracking and delivery updates',
    ],
    titleId: 'svc-detail-ship-title',
    descId: 'svc-detail-ship-desc',
    imgId: 'svc-detail-ship-img-m4n5o6',
  },
  {
    id: 'private-label-oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product',
    description: 'We help you develop custom-branded products from scratch or adapt existing factory designs. From packaging design to product customization, we manage the full OEM development process.',
    features: [
      'Product design and customization',
      'Packaging and branding development',
      'Sample development and approval',
      'OEM factory matching',
      'IP and trademark guidance',
    ],
    titleId: 'svc-detail-oem-title',
    descId: 'svc-detail-oem-desc',
    imgId: 'svc-detail-oem-img-p7q8r9',
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
      <section className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Sourcing Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive China sourcing support — from finding the right supplier to delivering goods to your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
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
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">{svc.subtitle}</span>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.description}</p>
                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Inquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`relative rounded-2xl overflow-hidden bg-slate-200 h-72 lg:h-96 ${!isEven ? 'lg:order-1' : ''}`}>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
