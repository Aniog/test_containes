import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Users, ArrowRight,
  CheckCircle2, FileText, Camera, MessageSquare, BarChart3, Ship,
  Package, FileCheck
} from 'lucide-react';

const allServices = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturers for your products',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards. Our team conducts initial screenings to ensure each supplier meets your criteria before presenting options.',
    features: [
      'Database of 2,000+ verified suppliers across China',
      'Custom supplier search based on your specifications',
      'Price comparison from multiple qualified factories',
      'Supplier background checks and reference verification',
    ],
    imgId: 'service-sourcing-m1n2o3',
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Verify factory capabilities before you commit',
    desc: 'Our on-site factory audits verify business licenses, production capacity, quality management systems, and working conditions. We provide detailed audit reports with photos so you can make informed decisions about your supply chain.',
    features: [
      'On-site factory visits and capability assessment',
      'Business license and registration verification',
      'Production capacity and equipment evaluation',
      'Quality management system review (ISO, etc.)',
    ],
    imgId: 'service-verification-p4q5r6',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure your products meet agreed specifications',
    desc: 'We conduct inspections at three critical stages: pre-production, during-production, and pre-shipment. Each inspection includes detailed photo and video documentation, defect analysis, and clear pass/fail reports based on AQL standards.',
    features: [
      'Pre-production inspection (raw materials & components)',
      'During-production inspection (in-process quality checks)',
      'Pre-shipment inspection (final AQL-based inspection)',
      'Detailed reports with photos and video evidence',
    ],
    imgId: 'service-inspection-s7t8u9',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'End-to-end logistics from factory to your door',
    desc: 'We handle all aspects of shipping coordination including freight booking, carrier selection, customs documentation, and delivery tracking. Whether you need air freight, sea freight, or express delivery, we find the most cost-effective solution.',
    features: [
      'Air freight, sea freight, and express shipping options',
      'Customs documentation and compliance support',
      'Shipment consolidation for cost savings',
      'Real-time tracking and delivery confirmation',
    ],
    imgId: 'service-shipping-v0w1x2',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
  {
    icon: Users,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production process',
    desc: 'Our bilingual project managers monitor your production from order placement to completion. We provide regular updates with photos and videos, flag potential delays early, and work with factories to keep your timeline on track.',
    features: [
      'Dedicated bilingual project manager',
      'Weekly progress reports with photo evidence',
      'Early warning system for potential delays',
      'Direct communication with factory on your behalf',
    ],
    imgId: 'service-production-y3z4a5',
    titleId: 'service-production-title',
    descId: 'service-production-desc',
  },
  {
    icon: FileText,
    title: 'Order Management',
    subtitle: 'Streamlined order processing and documentation',
    desc: 'We manage the entire order process from purchase order creation to final delivery. This includes contract negotiation, payment term coordination, sample management, and complete documentation support.',
    features: [
      'Purchase order creation and management',
      'Contract and payment term negotiation',
      'Sample coordination and approval tracking',
      'Complete documentation and record keeping',
    ],
    imgId: 'service-order-b6c7d8',
    titleId: 'service-order-title',
    descId: 'service-order-desc',
  },
];

const ServiceCard = ({ service, index }) => (
  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
          <service.icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 id={service.titleId} className="text-xl md:text-2xl font-bold text-gray-900">{service.title}</h3>
          <p className="text-accent text-sm font-medium">{service.subtitle}</p>
        </div>
      </div>
      <p id={service.descId} className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
      <ul className="space-y-3">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={`rounded-xl overflow-hidden h-64 lg:h-80 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
      <img
        alt={service.title}
        data-strk-img-id={service.imgId}
        data-strk-img={`[${service.descId}] [${service.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Comprehensive China Sourcing Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From supplier discovery to delivered goods, we provide end-to-end sourcing support tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {allServices.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Every project is different. Tell us about your requirements and we will create a tailored sourcing plan for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
