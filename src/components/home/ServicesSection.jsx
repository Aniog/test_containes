import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Package, Ship, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We find and shortlist qualified manufacturers that match your product specifications, volume requirements, and budget.',
    imgId: 'service-sourcing-8f2a01',
    titleId: 'service-title-sourcing',
    descId: 'service-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify production capabilities, certifications, quality systems, and compliance with international standards.',
    imgId: 'service-factory-8f2a02',
    titleId: 'service-title-factory',
    descId: 'service-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet exact specifications.',
    imgId: 'service-qc-8f2a03',
    titleId: 'service-title-qc',
    descId: 'service-desc-qc',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to keep your production on schedule and address issues before they escalate.',
    imgId: 'service-production-8f2a04',
    titleId: 'service-title-production',
    descId: 'service-desc-production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking.',
    imgId: 'service-shipping-8f2a05',
    titleId: 'service-title-shipping',
    descId: 'service-desc-shipping',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 id="services-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Our Sourcing Services
          </h2>
          <p id="services-section-subtitle" className="mt-4 text-lg text-slate-600">
            Comprehensive China sourcing solutions to manage your supply chain from factory to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div
                data-strk-bg-id={service.imgId}
                data-strk-bg={`[${service.descId}] [${service.titleId}] [services-section-subtitle] [services-section-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              >
                <div className="aspect-[16/9] bg-slate-100" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 id={service.titleId} className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p id={service.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}