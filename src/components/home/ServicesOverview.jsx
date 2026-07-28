import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Factory, ClipboardCheck,BarChart3, Ship } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist pre-vetted manufacturers that match your product specifications, budget, and volume requirements.',
    imgId: 'service-sourcing-8a1b2c',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'On-site factory visits to verify certifications, production capacity, quality systems, and business licenses before you commit.',
    imgId: 'service-factory-9b2c3d',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    desc: 'Pre-production, during production, and pre-shipment inspections to ensure your products meet specifications and standards.',
    imgId: 'service-qc-0c3d4e',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'Weekly production status reports with photos and timelines, so you always know exactly where your order stands.',
    imgId: 'service-production-1d4e5f',
    titleId: 'svc-title-production',
    descId: 'svc-desc-production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Door-to-door logistics management including freight booking, customs documentation, and delivery scheduling.',
    imgId: 'service-shipping-2e5f6g',
    titleId: 'svc-title-shipping',
    descId: 'svc-desc-shipping',
  },
];

const ServicesOverview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="services-section-title" className="section-heading">Our Services</h2>
          <p id="services-section-subtitle" className="section-subheading">
            End-to-end sourcing solutions tailored for importers, e-commerce sellers, and brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-section-subtitle] [services-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <svc.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-navy-900 mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
