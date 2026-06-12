import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Star,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, MOQ, and delivery requirements. Our supplier network spans all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist with profiles and pricing',
      'Negotiation support',
    ],
    titleId: 'svc-full-sourcing-title',
    descId: 'svc-full-sourcing-desc',
    imgId: 'svc-full-sourcing-img-aa1bb2',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we conduct thorough on-site or document-based factory audits. We verify business registration, production capacity, equipment, workforce, certifications, and quality management systems.',
    features: [
      'Business license verification',
      'On-site factory visit',
      'Production capacity assessment',
      'Certification review (ISO, CE, etc.)',
      'Detailed audit report',
    ],
    titleId: 'svc-full-factory-title',
    descId: 'svc-full-factory-desc',
    imgId: 'svc-full-factory-img-cc3dd4',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach you',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections following AQL international standards. We check product dimensions, functionality, appearance, labeling, and packaging against your specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    titleId: 'svc-full-qc-title',
    descId: 'svc-full-qc-desc',
    imgId: 'svc-full-qc-img-ee5ff6',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'We act as your eyes and ears on the ground. Our team visits the factory at key production milestones, provides regular status updates, and resolves issues before they cause delays or quality problems.',
    features: [
      'Production schedule monitoring',
      'Regular progress reports',
      'On-site milestone visits',
      'Issue escalation and resolution',
      'Pre-production sample review',
    ],
    titleId: 'svc-full-prod-title',
    descId: 'svc-full-prod-desc',
    imgId: 'svc-full-prod-img-gg7hh8',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory to your door',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle all export documentation, customs clearance support, and provide real-time shipment tracking.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-full-ship-title',
    descId: 'svc-full-ship-desc',
    imgId: 'svc-full-ship-img-ii9jj0',
  },
  {
    id: 'private-label',
    icon: Star,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    desc: 'We help you develop private label and OEM products from concept to finished goods. Our team manages product design, prototyping, tooling, branded packaging, and compliance testing.',
    features: [
      'Product concept and design support',
      'Prototype development',
      'Tooling and mold management',
      'Branded packaging design',
      'Compliance and certification support',
    ],
    titleId: 'svc-full-oem-title',
    descId: 'svc-full-oem-desc',
    imgId: 'svc-full-oem-img-kk1ll2',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We provide a complete range of sourcing, verification, quality control, and logistics services to help global buyers source from China with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`bg-white rounded-2xl border border-borderColor overflow-hidden shadow-sm flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
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
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{svc.subtitle}</span>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-textDark mb-3">{svc.title}</h2>
                <p id={svc.descId} className="text-textBody leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-textBody">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-red-100 text-lg mb-8">
            Contact us for a free consultation. We'll assess your needs and recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors shadow-lg"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
