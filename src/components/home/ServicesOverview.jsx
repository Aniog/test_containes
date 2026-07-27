import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ClipboardCheck, Eye, Factory, Ship, Headphones } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-id',
    icon: Search,
    title: 'Supplier Identification',
    desc: 'We search our verified network to find factories that match your product, volume, and budget requirements.',
    titleId: 'svc-title-supplier-id',
    descId: 'svc-desc-supplier-id',
    imgId: 'svc-img-supplier-id-8f2a',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering certifications, production capacity, quality systems, and compliance.',
    titleId: 'svc-title-factory-audit',
    descId: 'svc-desc-factory-audit',
    imgId: 'svc-img-factory-audit-9c3b',
  },
  {
    id: 'quality-control',
    icon: Eye,
    title: 'Quality Control',
    desc: 'Pre-shipment inspections, in-process checks, and lab testing to ensure your products meet specifications.',
    titleId: 'svc-title-quality-control',
    descId: 'svc-desc-quality-control',
    imgId: 'svc-img-quality-control-1d4e',
  },
  {
    id: 'production-follow',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports so you always know the status of your orders.',
    titleId: 'svc-title-production-follow',
    descId: 'svc-desc-production-follow',
    imgId: 'svc-img-production-follow-2e5f',
  },
  {
    id: 'shipping-coord',
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs clearance, and door-to-door delivery management for your cargo.',
    titleId: 'svc-title-shipping-coord',
    descId: 'svc-desc-shipping-coord',
    imgId: 'svc-img-shipping-coord-3f6a',
  },
  {
    id: 'dedicated-support',
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'A personal account manager fluent in English and Chinese, available throughout your sourcing journey.',
    titleId: 'svc-title-dedicated-support',
    descId: 'svc-desc-dedicated-support',
    imgId: 'svc-img-dedicated-support-4a7b',
  },
];

export default function ServicesOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">Our Sourcing Services</h2>
          <p className="section-subheading mx-auto">
            Comprehensive China sourcing solutions — from finding the right supplier to delivering finished goods to your warehouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <svc.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 id={svc.titleId} className="text-lg font-semibold text-brand-900 mb-2">
                {svc.title}
              </h3>
              <p id={svc.descId} className="text-sm text-slate-600 leading-relaxed mb-4">
                {svc.desc}
              </p>
              <div className="h-40 rounded-lg overflow-hidden bg-slate-100">
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
