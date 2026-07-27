import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    imgId: 'svc-img-ss001',
    titleId: 'svc-title-supplier-sourcing',
    descId: 'svc-desc-supplier-sourcing',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    imgId: 'svc-img-ss002',
    titleId: 'svc-title-factory-verification',
    descId: 'svc-desc-factory-verification',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet specifications.',
    imgId: 'svc-img-ss003',
    titleId: 'svc-title-quality-inspection',
    descId: 'svc-desc-quality-inspection',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site visits during manufacturing to keep your order on schedule and flag issues early.',
    imgId: 'svc-img-ss004',
    titleId: 'svc-title-production-followup',
    descId: 'svc-desc-production-followup',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle freight booking, customs documentation, and logistics coordination to get your goods delivered on time.',
    imgId: 'svc-img-ss005',
    titleId: 'svc-title-shipping-coordination',
    descId: 'svc-desc-shipping-coordination',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    description: 'From product design to branded packaging, we coordinate OEM and private label production with trusted Chinese factories.',
    imgId: 'svc-img-ss006',
    titleId: 'svc-title-private-label',
    descId: 'svc-desc-private-label',
  },
];

const ServicesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="End-to-End Sourcing Services"
          subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-section-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 id={service.titleId} className="text-lg font-bold text-neutral-900">{service.title}</h3>
                  </div>
                  <p id={service.descId} className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
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
            View All Services →
          </Link>
        </div>
      </div>
      <span id="services-section-title" className="sr-only">China sourcing services factory quality inspection shipping</span>
    </section>
  );
};

export default ServicesSection;
