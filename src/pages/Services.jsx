import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Globe,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    titleId: 'svc-pg-sourcing-title',
    descId: 'svc-pg-sourcing-desc',
    imgId: 'svc-pg-sourcing-img-a1b2c3',
    description: 'Finding the right supplier is the foundation of a successful import. We research, shortlist, and evaluate manufacturers that match your product specifications, quality standards, MOQ, and target price.',
    features: [
      'Product specification analysis',
      'Manufacturer database research',
      'Shortlist of 3–5 verified suppliers',
      'Initial price and MOQ comparison',
      'Communication in Chinese on your behalf',
    ],
  },
  {
    id: 'factory',
    icon: Factory,
    title: 'Factory Verification & Audit',
    titleId: 'svc-pg-factory-title',
    descId: 'svc-pg-factory-desc',
    imgId: 'svc-pg-factory-img-d4e5f6',
    description: 'Before placing an order, we conduct on-site factory audits to verify production capacity, quality management systems, certifications, and working conditions.',
    features: [
      'On-site factory visit and assessment',
      'Production capacity verification',
      'Quality management system review',
      'Certification and licence checks',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    titleId: 'svc-pg-qc-title',
    descId: 'svc-pg-qc-desc',
    imgId: 'svc-pg-qc-img-g7h8i9',
    description: 'Our inspectors check your goods against your specifications at the factory before shipment. We catch defects early, saving you from costly returns and customer complaints.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Measurement and function testing',
      'Detailed inspection report within 24 hours',
    ],
  },
  {
    id: 'production',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    titleId: 'svc-pg-prod-title',
    descId: 'svc-pg-prod-desc',
    imgId: 'svc-pg-prod-img-j1k2l3',
    description: 'We act as your eyes and ears on the ground, monitoring production progress from raw material procurement to finished goods, keeping you updated throughout.',
    features: [
      'Regular production status updates',
      'Raw material and component checks',
      'Timeline and milestone tracking',
      'Issue escalation and resolution',
      'Photo and video documentation',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    titleId: 'svc-pg-ship-title',
    descId: 'svc-pg-ship-desc',
    imgId: 'svc-pg-ship-img-m4n5o6',
    description: 'We coordinate freight booking, customs documentation, and delivery tracking to ensure your goods arrive on time and in compliance with import regulations.',
    features: [
      'Sea freight and air freight booking',
      'Export customs documentation',
      'Cargo insurance arrangement',
      'Delivery tracking and updates',
      'Coordination with your freight forwarder',
    ],
  },
  {
    id: 'compliance',
    icon: Globe,
    title: 'Trade Compliance Support',
    titleId: 'svc-pg-comp-title',
    descId: 'svc-pg-comp-desc',
    imgId: 'svc-pg-comp-img-p7q8r9',
    description: 'We help you navigate import regulations, product certifications, and labelling requirements for your target market, reducing the risk of customs delays or rejections.',
    features: [
      'CE, FCC, RoHS certification guidance',
      'Product labelling requirements',
      'HS code classification support',
      'Import duty and tariff information',
      'Country-specific compliance advice',
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
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Service China Sourcing Support
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              We provide end-to-end sourcing services for overseas buyers — from finding the right
              supplier to getting goods delivered to your warehouse.
            </p>
            <Link
              to="/contact"
              className="bg-china-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.description}</p>
                    <ul className="flex flex-col gap-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 h-64 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
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
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your product and sourcing goals. We will recommend the right approach for your situation.
          </p>
          <Link
            to="/contact"
            className="bg-china-red hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
