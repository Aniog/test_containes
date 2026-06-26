import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified suppliers that match your product specifications, MOQ, and budget requirements.',
    titleId: 'svc-supplier-title',
    descId: 'svc-supplier-desc',
    imgId: 'svc-img-supplier-9a1b2c',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to assess production capacity, certifications, working conditions, and reliability.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-img-factory-3d4e5f',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to ensure your products meet specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-img-qc-6g7h8i',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your production timeline, communicate with factories, and flag issues before they become problems.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-img-prod-9j0k1l',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders to arrange sea or air freight, handle documentation, and track shipments.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-img-ship-2m3n4o',
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
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
            End-to-End China Sourcing Services
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            From finding the right supplier to getting your goods delivered, we manage every step of the sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-xl border border-[#dde3ec] shadow-sm hover:shadow-md transition-shadow p-6 group"
              >
                <div className="w-12 h-12 bg-[#f4f6f9] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1a4f8a] transition-colors">
                  <Icon className="w-6 h-6 text-[#1a4f8a] group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-[#0d2340] mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-[#5a6a7e] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-[#1a4f8a] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a8d4ff] mb-3">Get Started</p>
              <h3 className="text-xl font-bold text-white mb-3">Need a Custom Sourcing Solution?</h3>
              <p className="text-[#a8b8cc] text-sm leading-relaxed mb-6">
                Tell us what you need and we'll put together a tailored sourcing plan at no cost.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:text-[#0d2340] transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
