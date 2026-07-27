import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, BarChart3, Truck, HeadphonesIcon,
  ShieldCheck, FileText, Package, ArrowRight, CheckCircle, Camera
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right manufacturer for your product',
    description:
      'We leverage our extensive network of pre-vetted manufacturers, industry databases, and trade show connections to identify the best suppliers for your specific product requirements. Our team evaluates factories based on production capability, quality standards, certifications, export experience, and pricing competitiveness.',
    features: [
      'Product specification analysis',
      'Supplier database search across 20+ industries',
      'Initial supplier screening and qualification',
      'Comparative supplier shortlist with pros and cons',
      'Price benchmarking against market rates',
    ],
    imgId: 'service-sourcing-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audits',
    subtitle: 'Ensure your supplier is legitimate and capable',
    description:
      'Before you commit to any supplier, we conduct thorough on-site factory audits. Our inspectors visit the facility to verify business licenses, assess production capacity, review quality management systems, check working conditions, and confirm export capabilities. You receive a detailed audit report with photos and objective assessments.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, etc.)',
      'Social compliance and working conditions check',
      'Detailed audit report with photos and ratings',
    ],
    imgId: 'service-factory-b2c3d4',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Catch quality issues before they become your problem',
    description:
      'Quality control is at the heart of what we do. Our inspectors conduct multi-stage inspections throughout the production process — from initial pre-production checks to inline inspections during manufacturing and final pre-shipment inspections. We follow AQL (Acceptable Quality Level) standards and provide detailed photo reports.',
    features: [
      'Pre-production sample approval',
      'In-line production inspection (DUPRO)',
      'Pre-shipment final random inspection (FRI)',
      'Container loading supervision',
      'AQL-based sampling and defect classification',
    ],
    imgId: 'service-qc-d3e4f5',
  },
  {
    id: 'production-followup',
    icon: BarChart3,
    title: 'Production Follow-up & Monitoring',
    subtitle: 'Stay informed at every stage of manufacturing',
    description:
      'We provide regular production monitoring to ensure your order stays on schedule and meets specifications. Our team tracks production progress, identifies potential delays early, resolves issues with the factory, and provides you with weekly status reports including production photos and timeline updates.',
    features: [
      'Weekly production progress reports',
      'Timeline tracking and delay alerts',
      'On-site issue resolution with factory management',
      'Production photos and video updates',
      'Raw material and component verification',
    ],
    imgId: 'service-production-e4f5g6',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'Get your goods from factory to destination efficiently',
    description:
      'We coordinate the entire logistics process, from factory to final destination. Our team arranges freight forwarding, prepares shipping documentation, handles customs clearance requirements, and tracks your shipment until delivery. We work with trusted logistics partners to ensure competitive rates and reliable delivery.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Customs documentation preparation',
      'Container optimization and consolidation',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
    ],
    imgId: 'service-shipping-f5g6h7',
  },
  {
    id: 'ongoing-support',
    icon: HeadphonesIcon,
    title: 'Ongoing Sourcing Support',
    subtitle: 'A dedicated partner for your long-term sourcing needs',
    description:
      'Beyond individual projects, we serve as your ongoing sourcing partner in China. Your dedicated account manager understands your business needs and can help with new product sourcing, supplier relationship management, contract negotiation, and continuous improvement initiatives.',
    features: [
      'Dedicated bilingual account manager',
      'New product development and sourcing',
      'Supplier relationship management',
      'Contract and price renegotiation',
      'Continuous quality improvement programs',
    ],
    imgId: 'service-support-g6h7i8',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            End-to-end sourcing solutions that help you buy from China with confidence
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gold-500 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span id={`service-${service.id}-title`} className="hidden">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements and get a free consultation
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors shadow-sm"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}