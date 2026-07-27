import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify manufacturers that match your product specifications, target price, MOQ, and quality requirements. Our team has established relationships with factories across Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Multi-supplier shortlisting',
      'Price benchmarking',
      'MOQ and lead time negotiation',
      'Supplier communication in Chinese',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Confirm legitimacy before you commit',
    desc: 'Before you place an order, we conduct on-site factory audits to verify business licenses, production capacity, equipment, workforce, and compliance. This protects you from dealing with trading companies posing as manufacturers or factories that cannot deliver.',
    features: [
      'Business license verification',
      'On-site factory visit and audit',
      'Production capacity assessment',
      'Worker and equipment review',
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
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our inspectors conduct pre-shipment and in-line quality checks against your product specifications and AQL standards. We provide detailed inspection reports with photos and clear pass/fail results so you can make informed decisions before goods are shipped.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling and defect classification',
      'Measurement and function testing',
      'Detailed photo report within 24 hours',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every production milestone',
    desc: 'We act as your on-the-ground project manager, monitoring production progress, communicating with the factory, and flagging issues before they become costly delays. You receive regular updates without having to chase the supplier yourself.',
    features: [
      'Production schedule tracking',
      'Regular milestone updates',
      'Issue escalation and resolution',
      'Raw material and component checks',
      'Pre-production sample approval',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered on time',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics process from factory gate to your destination port or warehouse. We work with both FCL and LCL shipments and can arrange door-to-door delivery.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'FCL and LCL shipment management',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'private-label-oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    desc: 'We help you develop private label and OEM products from concept to finished goods. This includes finding the right factory, managing sample development, approving packaging design, and overseeing production of your branded products.',
    features: [
      'OEM factory identification',
      'Sample development management',
      'Packaging and branding coordination',
      'IP and NDA support',
      'First-order production oversight',
    ],
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-full-img-p7q8r9',
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
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Full-Service China Sourcing Support
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From finding the right supplier to delivering goods to your door, we provide every service you need to source from China safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map(({ id, icon: Icon, title, subtitle, desc, features, titleId, descId, imgId }, index) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy-800" />
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                  <p className="text-gold-600 font-medium mb-4">{subtitle}</p>
                  <p id={descId} className="text-gray-500 leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden bg-gray-100 h-72 lg:h-80 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
