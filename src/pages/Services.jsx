import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, MOQ, and quality requirements. Our network spans multiple industries and regions across China.',
    features: [
      'Product specification analysis',
      'Supplier database research (Alibaba, Made-in-China, direct contacts)',
      'Initial supplier screening and background checks',
      'Shortlist of 3–5 qualified candidates',
      'Comparative quote collection',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'Before you place an order, we conduct thorough factory audits to verify production capacity, certifications, working conditions, and compliance with your standards. We provide a detailed audit report with photos.',
    features: [
      'Business license and registration verification',
      'On-site factory visit and capacity assessment',
      'Review of certifications (ISO, CE, BSCI, etc.)',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-full-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    desc: 'Our trained QC inspectors visit the factory during and after production to verify that goods meet your specifications. We check dimensions, materials, workmanship, packaging, and labeling.',
    features: [
      'Pre-production inspection (materials and components)',
      'During-production (inline) inspection',
      'Pre-shipment inspection (finished goods)',
      'AQL sampling standards',
      'Detailed inspection report with photos and pass/fail result',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the ground during production. Our team tracks milestones, communicates with the factory in Chinese, and escalates issues before they become costly problems.',
    features: [
      'Production schedule tracking',
      'Regular status updates to the buyer',
      'Issue escalation and resolution',
      'Milestone photo and video reports',
      'Coordination between buyer and factory',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and ensure your goods are shipped correctly and on time. We support both sea freight and air freight, and can arrange door-to-door delivery.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight and air freight options',
      'Cargo consolidation for smaller orders',
      'Shipment tracking and delivery updates',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'sample-management',
    icon: Package,
    title: 'Sample Management',
    subtitle: 'Evaluate quality before placing bulk orders',
    desc: 'We arrange product samples from multiple suppliers, consolidate them at our office, and ship them to your location. This saves you time and shipping costs when evaluating multiple options.',
    features: [
      'Sample requests from multiple suppliers',
      'Sample consolidation at our office',
      'Quality pre-check before forwarding',
      'International sample shipping',
      'Sample tracking and documentation',
    ],
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-full-img-p7q8r9',
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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Full-Service China Sourcing
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            We cover every stage of the sourcing process — from finding suppliers to delivering goods — so you can focus on your business.
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
                    <div className="w-12 h-12 bg-navy-light rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-2">{svc.title}</h2>
                    <p className="text-brand-red font-medium mb-4">{svc.subtitle}</p>
                    <p id={svc.descId} className="text-text-muted leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-text-dark">
                          <CheckCircle className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-md bg-gray-100 h-72 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
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
      <section className="py-16 bg-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-text-muted mb-8">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
