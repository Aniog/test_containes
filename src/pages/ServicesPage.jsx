import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Building2, ClipboardCheck, Factory, Ship, FileText, Scale, Package } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product requirements, budget, and quality standards. Our team searches through our extensive network of verified suppliers to find the best match for your needs.',
    features: [
      'Product-specific supplier matching',
      'Multi-supplier comparison reports',
      'Price negotiation on your behalf',
      'MOQ and lead time verification',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Before you commit to any supplier, we conduct thorough on-site audits to verify their credentials, production capabilities, and business legitimacy. This protects you from trading companies posing as manufacturers.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance checks',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our experienced QC inspectors perform detailed product inspections at every stage of production. We check against your specifications and provide comprehensive reports with photos and measurements.',
    features: [
      'Pre-production inspection',
      'During-production checks',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Stay informed throughout the manufacturing process with regular factory visits and detailed progress reports. We catch issues early before they become costly problems.',
    features: [
      'Weekly production updates',
      'On-site progress verification',
      'Timeline tracking and alerts',
      'Issue resolution coordination',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle all logistics from the factory floor to your destination. Our team works with reliable freight forwarders to ensure smooth and cost-effective shipping.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Customs documentation preparation',
      'Cargo insurance arrangement',
      'Door-to-door delivery options',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate sample requests, evaluate quality against your standards, and arrange shipping to your location. This ensures you approve the product before committing to full production.',
    features: [
      'Sample request coordination',
      'Quality evaluation reports',
      'Sample shipping arrangement',
      'Revision feedback management',
    ],
  },
  {
    icon: Scale,
    title: 'Contract & Compliance',
    description: 'We help you draft clear manufacturing agreements, ensure regulatory compliance for your target market, and protect your intellectual property throughout the sourcing process.',
    features: [
      'Manufacturing agreement review',
      'Product compliance verification',
      'IP protection guidance',
      'Certification assistance (CE, FCC, RoHS)',
    ],
  },
  {
    icon: Package,
    title: 'Warehousing & Consolidation',
    description: 'If you source from multiple suppliers, we can consolidate your orders at our warehouse in China, perform final quality checks, and ship everything together to save on freight costs.',
    features: [
      'Multi-supplier order consolidation',
      'Final quality verification',
      'Custom packaging and labeling',
      'Inventory management support',
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
            <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Complete Sourcing Services from China
            </h1>
            <p id="services-hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8">
              From supplier discovery to final delivery, we provide end-to-end sourcing solutions tailored to your business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden border border-slate-200 shadow-lg"
                    data-strk-bg-id={`service-bg-${index}-a1b2c3`}
                    data-strk-bg={`[${service.title}] [services-hero-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                    style={{ minHeight: '280px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need Help Sourcing from China?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us what you need, and we will create a custom sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
