import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
    imgId: 'svc-img-sourcing-g7h8i9',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'Our team conducts on-site factory audits to verify production capacity, certifications, working conditions, and compliance.',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
    imgId: 'svc-img-factory-j1k2l3',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections and in-line checks ensure your products meet agreed specifications before they leave the factory.',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
    imgId: 'svc-img-qc-m4n5o6',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order progress, communicate with suppliers, and flag issues early so your timeline stays on track.',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
    imgId: 'svc-img-prod-p7q8r9',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From freight booking to customs documentation, we coordinate logistics to get your goods delivered on time and on budget.',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
    imgId: 'svc-img-ship-s1t2u3',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="section-title mt-2">End-to-End Sourcing Services</h2>
          <p className="section-subtitle">
            From finding the right supplier to delivering goods to your door — we manage every step of the China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="card-base p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-bg-alt rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 id={svc.titleId} className="text-lg font-bold text-brand-blue mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-auto pt-2">
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="card-base p-6 bg-brand-blue flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Need a Custom Sourcing Plan?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Tell us what you need and we'll put together a tailored sourcing strategy for your business.
              </p>
            </div>
            <Link to="/contact" className="mt-6 flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
