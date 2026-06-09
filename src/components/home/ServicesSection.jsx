import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    titleId: 'svc-title-supplier-sourcing',
    descId: 'svc-desc-supplier-sourcing',
    imgId: 'svc-img-supplier-sourcing-4a1b2c',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, equipment, workforce, and compliance certifications.',
    titleId: 'svc-title-factory-verification',
    descId: 'svc-desc-factory-verification',
    imgId: 'svc-img-factory-verification-5b2c3d',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet agreed specifications.',
    titleId: 'svc-title-quality-inspection',
    descId: 'svc-desc-quality-inspection',
    imgId: 'svc-img-quality-inspection-6c3d4e',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to keep your production on schedule and flag issues before they escalate.',
    titleId: 'svc-title-production-followup',
    descId: 'svc-desc-production-followup',
    imgId: 'svc-img-production-followup-7d4e5f',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and logistics coordination to get your goods delivered on time.',
    titleId: 'svc-title-shipping-coordination',
    descId: 'svc-desc-shipping-coordination',
    imgId: 'svc-img-shipping-coordination-8e5f6a',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to delivering goods to your door — we manage the entire sourcing process so you don't have to."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-brand-blue text-white p-2 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={svc.titleId} className="text-lg font-semibold text-brand-navy mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-brand-blue rounded-xl p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-lg font-semibold mb-3">Ready to Start Sourcing?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Tell us what you need and we'll send you a free sourcing plan within 24 hours.
              </p>
            </div>
            <CTAButton to="/contact" variant="white" className="w-full justify-center">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </CTAButton>
          </div>
        </div>

        <div className="text-center mt-10">
          <CTAButton to="/services" variant="secondary">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
