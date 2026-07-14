import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers from our verified network and trade databases, matching your product specs and budget.',
    imgId: 'svc-sourcing-img-3a1b2c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits covering production capacity, certifications, workforce, and compliance — before you place any order.',
    imgId: 'svc-factory-img-4d5e6f',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet specifications.',
    imgId: 'svc-qc-img-7g8h9i',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse — sea, air, or express.',
    imgId: 'svc-shipping-img-1j2k3l',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
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
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
          <h2 id="services-section-title" className="text-neutral-900 text-3xl md:text-4xl font-bold">
            End-to-End Sourcing Services
          </h2>
          <p id="services-section-subtitle" className="text-neutral-500 text-lg mt-4 max-w-2xl mx-auto">
            From finding the right factory to delivering goods to your door, we manage every step of the China sourcing process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-section-subtitle] [services-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={svc.titleId} className="text-neutral-900 font-semibold text-base mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-neutral-500 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
