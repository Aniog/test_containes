import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    imgId: 'svc-page-img-ss001',
    titleId: 'svc-page-title-supplier-sourcing',
    descId: 'svc-page-desc-supplier-sourcing',
    description: 'We research and identify manufacturers across China that match your product specifications, target price, and minimum order quantity. You receive a shortlist of 3–5 verified suppliers with detailed profiles.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Comparative supplier profiles',
      'Price benchmarking',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Audit & Verification',
    imgId: 'svc-page-img-ss002',
    titleId: 'svc-page-title-factory-verification',
    descId: 'svc-page-desc-factory-verification',
    description: 'Before you commit to a supplier, we visit the factory in person to verify their business registration, production capacity, equipment, certifications, and working conditions.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Certification review (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Control & Inspection',
    imgId: 'svc-page-img-ss003',
    titleId: 'svc-page-title-quality-inspection',
    descId: 'svc-page-desc-quality-inspection',
    description: 'Our QC team conducts inspections at key stages of production to ensure your goods meet agreed specifications. We provide detailed reports with photos and defect classifications.',
    features: [
      'Pre-production inspection',
      'During-production check (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL sampling standards',
    ],
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    imgId: 'svc-page-img-ss004',
    titleId: 'svc-page-title-production-followup',
    descId: 'svc-page-desc-production-followup',
    description: 'We act as your eyes and ears on the ground during manufacturing. Regular factory visits and progress reports keep your order on track and flag issues before they become costly problems.',
    features: [
      'Production schedule monitoring',
      'Regular progress updates',
      'On-site factory visits',
      'Issue escalation and resolution',
      'Delivery timeline management',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    imgId: 'svc-page-img-ss005',
    titleId: 'svc-page-title-shipping-coordination',
    descId: 'svc-page-desc-shipping-coordination',
    description: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment from factory to destination port. We support sea freight, air freight, and express courier.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking',
      'FOB, CIF, and DDP terms',
    ],
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM Production',
    imgId: 'svc-page-img-ss006',
    titleId: 'svc-page-title-private-label',
    descId: 'svc-page-desc-private-label',
    description: 'We manage the full OEM and private label process — from product design and mold development to branded packaging and compliance testing — with trusted Chinese manufacturers.',
    features: [
      'Product design coordination',
      'Mold and tooling management',
      'Branded packaging sourcing',
      'Compliance and certification support',
      'Sample approval process',
    ],
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process so you don't have to.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
                      <img
                        alt={service.title}
                        data-strk-img-id={service.imgId}
                        data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="text-sm font-semibold text-brand-sky uppercase tracking-widest">Service {String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{service.title}</h2>
                    <p id={service.descId} className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span id="services-page-title" className="sr-only">China sourcing services supplier factory quality inspection shipping</span>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;
