import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, ClipboardCheck, Factory, Ship,
  ArrowRight, CheckCircle, FileText, Phone, Mail
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable manufacturers that match your product requirements, budget, and quality standards.',
    details: [
      'Product-specific supplier matching',
      'Competitive quotation collection',
      'Supplier capability assessment',
      'Sample coordination and evaluation',
      'Price negotiation support',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance.',
    details: [
      'Business license verification',
      'On-site factory audit',
      'Production capacity evaluation',
      'Quality management system review',
      'Social compliance check',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    details: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular progress updates and on-site monitoring to keep your orders on schedule and resolve issues early.',
    details: [
      'Production schedule monitoring',
      'Regular progress updates',
      'Issue identification and resolution',
      'Timeline management',
      'Communication with factory management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation preparation',
      'Cargo insurance coordination',
      'Delivery tracking',
      'Port and warehouse coordination',
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
              Our Services
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Comprehensive Sourcing Services
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              From finding the right supplier to delivering goods to your warehouse, we provide
              end-to-end support for your China sourcing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                    <service.icon className="h-7 w-7 text-blue-700" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-3 text-lg text-slate-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl bg-slate-100 aspect-[4/3]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Contact us to discuss your requirements. We will provide a free, no-obligation quote
            tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-700" />
              <span>info@ssourcingchina.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-700" />
              <span>+86 755 8888 8888</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
