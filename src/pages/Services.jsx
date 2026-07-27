import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck,
  Headphones, FileText, Package, ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and verified databases to find manufacturers that match your exact product specifications, quality standards, and budget.',
    features: ['Product matching', 'Price comparison', 'MOQ negotiation', 'Sample arrangement'],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-m4n5o6',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify their legitimacy, production capabilities, certifications, and working conditions before you place an order.',
    features: ['On-site audit', 'License verification', 'Capacity assessment', 'Photo documentation'],
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
    imgId: 'svc-verification-img-p7q8r9',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspections at every production stage — from initial samples to pre-shipment checks — following international AQL standards.',
    features: ['Pre-production inspection', 'During production check', 'Pre-shipment inspection', 'Container loading supervision'],
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
    imgId: 'svc-inspection-img-s1t2u3',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Regular factory visits and progress reports keep you informed about production status, timeline adherence, and any issues that arise.',
    features: ['Weekly progress reports', 'Timeline tracking', 'Issue escalation', 'Photo/video updates'],
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-production-img-v4w5x6',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight management including booking, documentation, customs clearance, and delivery coordination to your warehouse.',
    features: ['Freight booking', 'Customs documentation', 'Shipment tracking', 'Door-to-door delivery'],
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-shipping-img-y7z8a9',
  },
  {
    id: 'ongoing-support',
    icon: Headphones,
    title: 'Dedicated Account Management',
    desc: 'A single point of contact who understands your business, manages supplier relationships, and resolves issues proactively.',
    features: ['Dedicated manager', 'Supplier communication', 'Issue resolution', 'Long-term planning'],
    titleId: 'svc-support-title',
    descId: 'svc-support-desc',
    imgId: 'svc-support-img-b1c2d3',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier identification to doorstep delivery.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl overflow-hidden h-64 md:h-80">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl font-bold text-brand-navy">
                      {service.title}
                    </h2>
                  </div>
                  <p id={service.descId} className="text-brand-muted leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-sm text-brand-dark">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Need Help Sourcing from China?
          </h2>
          <p className="text-brand-muted mb-8">
            Tell us about your project and get a customized sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
