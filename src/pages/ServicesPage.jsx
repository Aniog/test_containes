import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  Shield,
  ClipboardCheck,
  Truck,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  FileText,
  Phone,
  Mail,
  Users,
  Building2,
  Globe2,
  Award,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product specifications, quality requirements, and budget.',
    features: [
      'Product-specific supplier matching',
      'Background checks and business license verification',
      'Production capacity assessment',
      'Competitive price negotiation',
      'Sample coordination and evaluation',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance.',
    features: [
      'Business license and registration verification',
      'Factory facility and equipment inspection',
      'Quality management system review',
      'Production capacity evaluation',
      'Social compliance and working conditions check',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards before they leave the factory.',
    features: [
      'Pre-production material checks',
      'During-production monitoring',
      'Pre-shipment final inspection',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Monitoring',
    description: 'Regular progress updates and factory visits to keep your production on schedule and address issues before they become problems.',
    features: [
      'Production schedule tracking',
      'Regular progress reports with photos',
      'Issue identification and resolution',
      'Timeline management and updates',
      'Factory communication on your behalf',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking to your destination.',
    features: [
      'Freight forwarding (sea and air)',
      'Customs documentation preparation',
      'Export and import clearance support',
      'Delivery tracking and updates',
      'Warehousing and consolidation services',
    ],
  },
  {
    icon: FileText,
    title: 'Contract & Payment Support',
    description: 'We help you navigate contracts, payment terms, and trade agreements to protect your interests throughout the sourcing process.',
    features: [
      'Contract review and negotiation support',
      'Secure payment arrangement guidance',
      'Trade term clarification (FOB, CIF, EXW)',
      'Dispute resolution assistance',
      'Intellectual property protection advice',
    ],
  },
];

const trustPoints = [
  { icon: Building2, value: '500+', label: 'Verified Factories' },
  { icon: Globe2, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '1,200+', label: 'Satisfied Clients' },
  { icon: Award, value: '12+', label: 'Years Experience' },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">Our Sourcing Services</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Comprehensive sourcing support from supplier discovery to final delivery. We handle every step so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{point.value}</div>
                <div className="text-sm text-slate-500">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="card">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="heading-3 text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Need Help Sourcing from China?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will recommend the right services for your situation. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="btn-secondary border-white text-white hover:bg-white/10 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
