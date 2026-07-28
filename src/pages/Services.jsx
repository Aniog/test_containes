import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Ship,
  ArrowRight,
  CheckCircle,
  FileText,
  Phone,
  Mail,
} from 'lucide-react';

const ServicesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and evaluate manufacturers that match your product requirements, budget, and quality standards.',
      details: [
        'Market research and supplier identification',
        'Initial screening based on your criteria',
        'Capability and capacity assessment',
        'Price negotiation and comparison',
        'Shortlist presentation with recommendations',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to verify business licenses, production capacity, quality systems, and working conditions.',
      details: [
        'Business license and registration verification',
        'Production facility inspection',
        'Quality management system review',
        'Worker conditions assessment',
        'Detailed audit report with photos',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
      details: [
        'Pre-production material inspection',
        'During-production quality checks',
        'Pre-shipment final inspection',
        'Container loading supervision',
        'Comprehensive inspection reports',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Production Monitoring',
      description: 'Regular updates and factory visits to track production progress and address issues before they become problems.',
      details: [
        'Production schedule tracking',
        'Regular progress updates with photos',
        'Issue identification and resolution',
        'Timeline management and alerts',
        'Factory communication on your behalf',
      ],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including customs documentation, freight forwarding, and delivery tracking.',
      details: [
        'Freight forwarding arrangement',
        'Customs documentation preparation',
        'Export and import clearance support',
        'Shipment tracking and updates',
        'Warehouse coordination if needed',
      ],
    },
    {
      icon: FileText,
      title: 'Sample Management',
      description: 'We coordinate sample requests, evaluate quality, and ship samples to you for approval before mass production.',
      details: [
        'Sample request coordination with factories',
        'Sample quality evaluation',
        'Sample shipping to your address',
        'Feedback communication with suppliers',
        'Sample approval before production',
      ],
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300">
              Comprehensive sourcing support from supplier discovery to product delivery. Every service is designed to reduce risk and ensure quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="card-default">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="heading-3 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Need Help Sourcing from China?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We will assess your needs and recommend the right services for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="btn-secondary">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
