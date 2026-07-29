import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, ClipboardCheck, Factory, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import CTABanner from '@/components/layout/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify manufacturers that match your product specifications, quality requirements, MOQ, and target price. Our team leverages an established network of verified factories across China\'s major manufacturing regions.',
    features: [
      'Product specification analysis',
      'Supplier database search + trade show sourcing',
      'Initial supplier screening and shortlisting',
      'Supplier profile reports with key data',
      'Price comparison and negotiation support',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Shield,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'Before you place an order, we conduct thorough factory audits — either on-site or via video — to verify business legitimacy, production capabilities, certifications, and compliance with your standards.',
    features: [
      'Business license and registration verification',
      'On-site or video factory audit',
      'Production capacity assessment',
      'Certification and compliance review',
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
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our trained inspectors conduct pre-shipment, in-line, and final random inspections based on your product specifications and AQL standards. We provide detailed reports with photos and clear pass/fail results.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL-based sampling and testing',
      'Detailed inspection report with photos',
      'Defect classification and resolution support',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed without being on the ground',
    desc: 'We act as your local representative during production, communicating with factories in Chinese, tracking milestones, and flagging issues early. You receive regular updates without needing to travel to China.',
    features: [
      'Production schedule monitoring',
      'Regular factory communication in Chinese',
      'Milestone reporting and photo updates',
      'Early issue identification and escalation',
      'Delivery timeline management',
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
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage customs requirements to ensure your goods arrive on time and in compliance. We support sea freight, air freight, and express courier.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Sea, air, and express freight options',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own product line from China',
    desc: 'From product concept to branded packaging, we help you develop and manufacture your own product line. We manage the entire OEM process including design, tooling, sampling, and production.',
    features: [
      'Product design and specification development',
      'OEM factory identification and negotiation',
      'Tooling and mold management',
      'Sample development and approval',
      'Branded packaging and labeling coordination',
    ],
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-full-img-p7q8r9',
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
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            China Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We provide a complete range of sourcing services to help global buyers work confidently with Chinese manufacturers.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-20">
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
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className="text-brand-blue font-semibold text-sm">{svc.subtitle}</span>
                    <h2 id={svc.titleId} className="text-3xl font-bold text-brand-navy mt-2 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-brand-gray leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-gray">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg h-72 lg:h-96 bg-gray-100 ${!isEven ? 'lg:order-1' : ''}`}>
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

      <CTABanner />
    </div>
  );
};

export default Services;
