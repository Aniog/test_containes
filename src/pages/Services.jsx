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
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality requirements, and budget. Our sourcing team has deep knowledge across major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Manufacturer database search',
      'Shortlist of 3–5 qualified suppliers',
      'Initial supplier communication',
      'Price and MOQ comparison',
    ],
    imgId: 'svc-page-sourcing-img-a1b2',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, we conduct on-site factory audits to verify their business legitimacy, production capabilities, workforce, equipment, and compliance with international standards.',
    features: [
      'Business license and registration check',
      'On-site factory visit and photos',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with findings',
    ],
    imgId: 'svc-page-factory-img-c3d4',
    titleId: 'svc-page-factory-title',
    descId: 'svc-page-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our trained QC inspectors conduct pre-shipment, in-line, and final random inspections at the factory. We check against your specifications and international quality standards, providing detailed reports with photos.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    imgId: 'svc-page-qc-img-e5f6',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every stage of production',
    desc: 'We act as your eyes and ears on the ground in China. Our team monitors your order from raw material procurement through to finished goods, providing regular updates and flagging any issues early.',
    features: [
      'Production schedule tracking',
      'Raw material verification',
      'Weekly progress updates',
      'Issue escalation and resolution',
      'Pre-shipment readiness check',
    ],
    imgId: 'svc-page-prod-img-g7h8',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Reliable logistics from factory to your door',
    desc: 'We coordinate freight forwarding, customs documentation, and last-mile delivery. Whether you need sea freight, air freight, or express courier, we work with trusted logistics partners to get your goods delivered on time.',
    features: [
      'Freight forwarder selection',
      'Booking and documentation',
      'Customs clearance support',
      'Shipment tracking',
      'Delivery coordination',
    ],
    imgId: 'svc-page-ship-img-i9j0',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before placing your order',
    desc: 'We source product samples from multiple suppliers and ship them directly to you for evaluation. This allows you to compare quality, materials, and workmanship before committing to a full production order.',
    features: [
      'Multi-supplier sample sourcing',
      'Sample quality assessment',
      'Consolidated sample shipping',
      'Supplier comparison report',
      'Feedback communication to factories',
    ],
    imgId: 'svc-page-sample-img-k1l2',
    titleId: 'svc-page-sample-title',
    descId: 'svc-page-sample-desc',
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
      <section className="bg-navy-900 text-white py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Full-Service China Sourcing
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We provide end-to-end sourcing support so you can buy from China with confidence — from finding the right factory to delivering goods to your warehouse.
            </p>
            <Link to="/contact" className="btn-gold">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy-800" />
                    </div>
                    <p className="section-eyebrow mb-2">{svc.subtitle}</p>
                    <h2 id={svc.titleId} className="section-title mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      Inquire About This Service <ArrowRight className="inline w-4 h-4 ml-1" />
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
      <section className="bg-navy-800 py-16">
        <div className="container-xl text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your product and sourcing goals. We will recommend the right combination of services for your situation.
          </p>
          <Link to="/contact" className="btn-gold">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
