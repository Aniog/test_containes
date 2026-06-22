import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, TrendingUp, Truck, Package,
  ArrowRight, CheckCircle, FileText, Camera, BarChart2
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify qualified manufacturers across China that match your product specifications, quality standards, MOQ requirements, and budget. Our sourcing team has established relationships with factories across all major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Multi-supplier shortlisting (3–5 options)',
      'Price and MOQ comparison',
      'Initial supplier communication',
      'Recommendation report with pros and cons',
    ],
    imgId: 'svc-img-sourcing-d4e5f6',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Confirm a factory is legitimate before you commit',
    desc: 'Before placing an order, we conduct on-site factory audits to verify business licenses, production capacity, equipment, workforce, and compliance certifications. You receive a detailed audit report with photos.',
    features: [
      'Business license and registration check',
      'On-site facility inspection',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-img-audit-g7h8i9',
    titleId: 'svc-title-audit',
    descId: 'svc-desc-audit',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections based on AQL standards. We check product dimensions, functionality, packaging, labeling, and appearance against your approved samples.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL-based sampling methodology',
      'Inspection report with photos within 24 hours',
    ],
    imgId: 'svc-img-qc-j1k2l3',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the manufacturing process',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production schedules, communicates with factory management, and provides regular status updates so you always know where your order stands.',
    features: [
      'Production schedule monitoring',
      'Regular progress reports',
      'Issue identification and escalation',
      'Bilingual factory communication',
      'Delivery timeline management',
    ],
    imgId: 'svc-img-prod-m4n5o6',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Smooth logistics from factory to your door',
    desc: 'We coordinate with freight forwarders, prepare export documentation, arrange cargo consolidation, and ensure your goods are shipped on time. We work with both FCL and LCL shipments via sea, air, and express courier.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'FCL and LCL shipment management',
      'Cargo consolidation services',
      'Tracking and delivery updates',
    ],
    imgId: 'svc-img-ship-p7q8r9',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
  },
  {
    id: 'private-label-oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your brand with custom manufactured products',
    desc: 'From product design and prototyping to branded packaging and labeling, we manage the full OEM and private label process. We help you develop products that meet your brand standards and market requirements.',
    features: [
      'Product design and prototyping',
      'Custom packaging and labeling',
      'Brand compliance management',
      'Sample approval process',
      'Full OEM production management',
    ],
    imgId: 'svc-img-oem-s1t2u3',
    titleId: 'svc-title-oem',
    descId: 'svc-desc-oem',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Full-Service China Sourcing Solutions
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We provide end-to-end sourcing support so you can buy from China with confidence — from finding the right supplier to delivering goods to your warehouse.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="space-y-16">
            {services.map(({ id, icon: Icon, title, subtitle, desc, features, imgId, titleId, descId }, index) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">{subtitle}</p>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{title}</h2>
                  <p id={descId} className="text-brand-muted leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-dark">
                        <CheckCircle className="w-4 h-4 text-brand-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Enquire About This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
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
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Contact us for a free consultation. We'll assess your requirements and recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
