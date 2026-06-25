import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist verified suppliers that match your product specifications, MOQ, and budget requirements.',
    imgId: 'svc-img-sourcing-a1b2',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits covering production capacity, certifications, workforce, and compliance standards.',
    imgId: 'svc-img-factory-c3d4',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections to ensure goods meet your standards.',
    imgId: 'svc-img-qc-e5f6',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site monitoring to keep your production on schedule and within spec.',
    imgId: 'svc-img-prod-g7h8',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    imgId: 'svc-img-ship-i9j0',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to delivering goods to your door — we manage the entire sourcing process on your behalf."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#1a4f8a] rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={service.titleId} className="text-lg font-bold text-[#0d2340] mb-2">{service.title}</h3>
                  <p id={service.descId} className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {services.slice(3).map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#1a4f8a] rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={service.titleId} className="text-lg font-bold text-[#0d2340] mb-2">{service.title}</h3>
                  <p id={service.descId} className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
