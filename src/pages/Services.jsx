import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, Zap, Truck, MessageSquare,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'svc-sourcing',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
    imgId: 'svc-img-sourcing-4a2b9c',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, minimum order quantity, and delivery timeline. Our supplier database covers thousands of factories across all major manufacturing hubs in China.',
    features: [
      'Product brief analysis and category mapping',
      'Supplier database search and outreach',
      'Initial qualification screening',
      'Comparative quote collection',
      'Shortlist report with factory profiles',
    ],
  },
  {
    id: 'svc-factory',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
    imgId: 'svc-img-factory-7d3e1f',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'Before you place an order, we conduct an on-site factory audit to verify the supplier is legitimate, capable, and compliant. This protects you from fraud, subcontracting, and quality failures.',
    features: [
      'Business license and registration check',
      'Production capacity and equipment review',
      'Worker conditions and safety assessment',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'svc-qc',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
    imgId: 'svc-img-qc-2c8f4a',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our trained QC inspectors conduct pre-shipment and in-line inspections against your product specifications and AQL standards. We provide detailed inspection reports with photos and pass/fail results.',
    features: [
      'Pre-production material inspection',
      'In-line production inspection',
      'Pre-shipment final inspection',
      'AQL sampling methodology',
      'Photo-documented inspection reports',
    ],
  },
  {
    id: 'svc-production',
    titleId: 'svc-title-production',
    descId: 'svc-desc-production',
    imgId: 'svc-img-production-9b1d6e',
    icon: Zap,
    title: 'Production Follow-up',
    subtitle: 'Stay informed without being on-site',
    desc: 'We act as your eyes and ears on the factory floor. Regular milestone updates, production photos, and proactive issue escalation keep your order on track and give you peace of mind.',
    features: [
      'Production schedule monitoring',
      'Weekly progress reports',
      'Issue identification and escalation',
      'Sample approval coordination',
      'Delivery date confirmation',
    ],
  },
  {
    id: 'svc-shipping',
    titleId: 'svc-title-shipping',
    descId: 'svc-desc-shipping',
    imgId: 'svc-img-shipping-5f7a3c',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with trusted freight forwarders to arrange sea freight, air freight, or express courier shipments. We handle all export documentation and ensure your goods are packed and labeled correctly.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Packing and labeling supervision',
      'Shipment tracking and updates',
    ],
  },
  {
    id: 'svc-comms',
    titleId: 'svc-title-comms',
    descId: 'svc-desc-comms',
    imgId: 'svc-img-comms-3e9b2d',
    icon: MessageSquare,
    title: 'Supplier Communication',
    subtitle: 'Eliminate language barriers and misunderstandings',
    desc: 'Our team is fluent in both Chinese and English. We handle all supplier communication, negotiation, and contract review on your behalf — ensuring your requirements are understood and agreed upon clearly.',
    features: [
      'Chinese-English translation and interpretation',
      'Price and terms negotiation',
      'Contract and PO review',
      'Dispute resolution support',
      'WeChat and email communication management',
    ],
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We cover every stage of the sourcing process — from finding the right supplier
              to getting your goods delivered. Each service can be used independently or as
              part of a complete sourcing package.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, index) => {
              const Icon = svc.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <p className="text-sm font-semibold text-china-red uppercase tracking-widest mb-2">
                      {svc.subtitle}
                    </p>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      Request This Service <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-gray-100 h-72 lg:h-96 ${!isEven ? 'lg:order-1' : ''}`}>
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
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Send us your product brief and we will recommend the right combination of services for your situation.
          </p>
          <Link to="/contact" className="btn-cta">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
