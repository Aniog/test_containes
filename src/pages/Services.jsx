import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, Zap, Truck, DollarSign,
  ArrowRight, CheckCircle, FileText, Package
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
    imgId: 'svc-img-sourcing-a1b2c3',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, budget, and quality requirements. Our sourcing team has deep knowledge of China\'s manufacturing hubs — from Guangdong to Zhejiang — and maintains an active network of pre-vetted suppliers across dozens of industries.',
    features: [
      'Product specification analysis',
      'Supplier identification from verified databases',
      'Initial supplier screening and shortlisting',
      'RFQ management and quote comparison',
      'Sample coordination and evaluation',
    ],
  },
  {
    id: 'factory-verification',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
    imgId: 'svc-img-factory-d4e5f6',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, our team conducts on-site factory audits to verify production capacity, equipment, workforce, certifications, and compliance with your standards. We provide a detailed audit report with photos so you can make an informed decision.',
    features: [
      'On-site factory visits and audits',
      'Business license and certification verification',
      'Production capacity assessment',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
    imgId: 'svc-img-qc-g7h8i9',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our local QC inspectors conduct pre-shipment, during-production, and container loading inspections based on your product specifications and AQL standards. You receive a comprehensive inspection report with photos and pass/fail results before goods are shipped.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'AQL-based sampling and defect classification',
      'Detailed inspection report within 24 hours',
    ],
  },
  {
    id: 'production-followup',
    titleId: 'svc-title-production',
    descId: 'svc-desc-production',
    imgId: 'svc-img-production-j1k2l3',
    icon: Zap,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We monitor your order from raw material procurement through to finished goods. Regular factory visits and progress reports keep you informed and allow us to identify and resolve issues before they become costly delays.',
    features: [
      'Production schedule monitoring',
      'Regular factory visits and updates',
      'Raw material and component checks',
      'Issue identification and resolution',
      'Weekly progress reports',
    ],
  },
  {
    id: 'shipping-coordination',
    titleId: 'svc-title-shipping',
    descId: 'svc-desc-shipping',
    imgId: 'svc-img-shipping-m4n5o6',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Smooth logistics from factory to your door',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage customs clearance to ensure your goods arrive on time and in compliance with import regulations in your destination country.',
    features: [
      'Freight forwarder coordination (FCL/LCL/Air)',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance guidance',
      'Delivery tracking and updates',
    ],
  },
  {
    id: 'price-negotiation',
    titleId: 'svc-title-price',
    descId: 'svc-desc-price',
    imgId: 'svc-img-price-p7q8r9',
    icon: DollarSign,
    title: 'Price Negotiation',
    subtitle: 'Get competitive pricing with local expertise',
    desc: 'Our team negotiates directly with factories on your behalf, leveraging local market knowledge and relationships to secure competitive unit prices, favorable payment terms, and reasonable MOQs.',
    features: [
      'Market price benchmarking',
      'Direct factory price negotiation',
      'Payment terms negotiation',
      'MOQ reduction strategies',
      'Total landed cost analysis',
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
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            End-to-End China Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We manage every stage of the sourcing process so you can focus on your business, not on chasing factories.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, idx) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">{svc.subtitle}</p>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
