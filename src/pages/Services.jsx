import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText, Users, Handshake } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We search our network and major supplier databases to find manufacturers that match your exact product specifications, quality standards, and budget. You receive a shortlist of 3–5 vetted options with detailed comparison reports.',
    features: ['Product-specific supplier research', 'Price and capability comparison', 'Sample coordination', 'MOQ negotiation'],
    imgId: 'svc-page-sourcing-img-1a2b3c',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory-audit',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify business licenses, production capacity, quality management systems, certifications, and working conditions. You get a comprehensive audit report with photos and risk assessment.',
    features: ['On-site facility inspection', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation'],
    imgId: 'svc-page-audit-img-4d5e6f',
    titleId: 'svc-page-audit-title',
    descId: 'svc-page-audit-desc',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'We conduct inspections at every stage — initial production, during production, and pre-shipment. Each inspection includes AQL sampling, defect classification, and a detailed photo report sent within 24 hours.',
    features: ['Pre-production inspection', 'During-production checks', 'Pre-shipment final inspection', 'Container loading supervision'],
    imgId: 'svc-page-qc-img-7g8h9i',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-management',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order from confirmation to completion. Regular factory visits, progress photos, and timeline updates keep you informed without needing to be on the ground in China.',
    features: ['Weekly progress reports', 'Timeline management', 'Issue resolution', 'Change order coordination'],
    imgId: 'svc-page-production-img-j1k2l3',
    titleId: 'svc-page-production-title',
    descId: 'svc-page-production-desc',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We handle freight booking, customs documentation, consolidation, and door-to-door delivery coordination. Whether by sea, air, or rail, we find the most cost-effective route for your shipment.',
    features: ['Freight rate comparison', 'Customs documentation', 'Shipment consolidation', 'Door-to-door coordination'],
    imgId: 'svc-page-shipping-img-m4n5o6',
    titleId: 'svc-page-shipping-title',
    descId: 'svc-page-shipping-desc',
  },
  {
    id: 'negotiation',
    icon: Handshake,
    title: 'Price Negotiation & Contracts',
    desc: 'Leveraging local market knowledge and supplier relationships, we negotiate better pricing, payment terms, and contract conditions to protect your interests and maximize value.',
    features: ['Price benchmarking', 'Payment term negotiation', 'Contract review', 'Supplier relationship management'],
    imgId: 'svc-page-negotiation-img-p7q8r9',
    titleId: 'svc-page-negotiation-title',
    descId: 'svc-page-negotiation-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Our Sourcing Services"
        subtitle="Comprehensive support at every stage of your China sourcing journey — from supplier discovery to final delivery."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900">
                        {service.title}
                      </h2>
                    </div>
                    <p id={service.descId} className="text-neutral-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-neutral-700">
                          <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full rounded-xl shadow-sm"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;
