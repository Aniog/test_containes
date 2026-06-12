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
    desc: 'We identify and shortlist qualified manufacturers from our verified network and trade databases, matched to your product specs and budget.',
    imgId: 'svc-img-sourcing-a1b2',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, equipment, workforce, and compliance before you commit.',
    imgId: 'svc-img-factory-c3d4',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet specifications.',
    imgId: 'svc-img-qc-e5f6',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order progress, communicate with factories in Chinese, and flag issues before they become costly problems.',
    imgId: 'svc-img-prod-g7h8',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your cargo is ready for on-time departure.',
    imgId: 'svc-img-ship-i9j0',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
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
        <div className="text-center mb-12">
          <span className="inline-block bg-light-blue text-navy text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            End-to-End Sourcing Support
          </h2>
          <p className="text-body-text text-lg max-w-2xl mx-auto">
            From finding the right supplier to getting goods to your door — we manage every step of the China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow duration-200 group">
                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-200">
                  <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-dark-text mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-body-text text-sm leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-navy rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Need a Custom Sourcing Plan?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Every sourcing project is different. Tell us your requirements and we'll put together a tailored plan.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
