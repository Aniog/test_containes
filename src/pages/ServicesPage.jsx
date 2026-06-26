import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China that match your product requirements, quality standards, and budget.',
    details: [
      'Product-specific supplier research',
      'Initial supplier screening and shortlisting',
      'Request for quotation (RFQ) management',
      'Price negotiation and comparison',
      'Supplier capability assessment',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm that suppliers are legitimate, capable, and compliant with your requirements.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Working conditions and compliance checks',
      'Detailed audit reports with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional inspections at every stage of production to ensure your products meet specifications.',
    details: [
      'Pre-production sample inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling methodology',
    ],
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular monitoring and communication to keep your orders on schedule and address issues early.',
    details: [
      'Production timeline tracking',
      'Regular progress updates and photos',
      'Issue identification and resolution',
      'Material and component verification',
      'Delivery schedule management',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'Complete logistics support from factory pickup to delivery at your destination.',
    details: [
      'Freight forwarding (sea and air)',
      'Customs documentation preparation',
      'Export and import clearance support',
      'Cargo insurance arrangement',
      'Delivery tracking and coordination',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'We collect, evaluate, and ship product samples from multiple suppliers for your review.',
    details: [
      'Sample collection from multiple factories',
      'Initial quality and specification check',
      'Consolidated sample shipping',
      'Sample comparison reports',
      'Feedback communication with suppliers',
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
      <section className="bg-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive sourcing support to help you buy from China with confidence. From finding the right supplier to delivering products to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden aspect-video bg-gray-100"
                    data-strk-bg-id={`service-bg-${i + 1}`}
                    data-strk-bg={`[service-title-${i}] [service-desc-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <h3 id={`service-title-${i}`} className="sr-only">{service.title}</h3>
                  <p id={`service-desc-${i}`} className="sr-only">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Need Help Sourcing from China?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss your sourcing requirements. We'll provide a free, no-obligation quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
