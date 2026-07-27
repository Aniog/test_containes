import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description: 'We research and identify qualified Chinese manufacturers that match your product specifications, quality requirements, MOQ, and budget. Our supplier database is built from years of on-site visits and trade show attendance — not just online directories.',
    features: [
      'Product specification review and supplier brief',
      'Research across verified supplier database and trade networks',
      'Shortlist of 3–5 qualified manufacturers with profiles',
      'Initial supplier communication and capability assessment',
      'Price and MOQ comparison report',
    ],
    imgId: 'svc-sourcing-img-3a7f2b',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re buying from before you commit',
    description: 'Before you place an order, we visit the factory in person to verify their business registration, production capacity, equipment, workforce, certifications, and compliance with your standards. We provide a detailed audit report with photos.',
    features: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Equipment and facility inspection',
      'Certification and compliance review (ISO, CE, etc.)',
      'Detailed audit report with photos and scoring',
    ],
    imgId: 'svc-audit-img-8c4d1e',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    description: 'Our inspectors conduct pre-shipment inspections, during-production checks, and container loading supervision following AQL sampling standards. You receive a full inspection report before approving shipment.',
    features: [
      'Pre-shipment inspection (PSI) following AQL standards',
      'During-production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'Product testing coordination with accredited labs',
      'Detailed inspection report with photos and defect classification',
    ],
    imgId: 'svc-qc-img-5e2a9f',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production cycle',
    description: 'Once your order is placed, we maintain regular contact with the factory, monitor production progress, and flag any issues early. You receive scheduled status updates so you always know where your order stands.',
    features: [
      'Production schedule review and milestone tracking',
      'Regular factory communication and status updates',
      'Early identification of delays or quality deviations',
      'Photo and video documentation of production progress',
      'Issue escalation and resolution support',
    ],
    imgId: 'svc-production-img-1b6c3d',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination port',
    description: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics process from the factory to your destination. We work with both sea freight and air freight depending on your timeline and budget.',
    features: [
      'Freight forwarder coordination (sea and air)',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance coordination',
      'Shipment tracking and delivery updates',
    ],
    imgId: 'svc-shipping-img-9d4f7a',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'oem',
    icon: Package,
    title: 'OEM & Private Label',
    subtitle: 'Custom products under your brand',
    description: 'We support buyers who want to develop custom products or private label existing ones. From initial design to mold development, packaging, and first production run, we manage the entire OEM process with vetted factories.',
    features: [
      'Product design and specification development',
      'Mold and tooling coordination',
      'Sample development and approval',
      'Packaging and labeling design support',
      'First production run management',
    ],
    imgId: 'svc-oem-img-6a1e4b',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            China Sourcing Services
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We provide end-to-end sourcing support for global buyers — from finding the right supplier to getting goods delivered to your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className="text-brand-orange text-xs font-semibold uppercase tracking-wide">{service.subtitle}</span>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-text mt-2 mb-4">{service.title}</h2>
                    <p id={service.descId} className="text-brand-muted leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                          <span className="text-brand-text text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="rounded-2xl overflow-hidden shadow-md bg-brand-gray h-72">
                      <img
                        alt={service.title}
                        data-strk-img-id={service.imgId}
                        data-strk-img={`[${service.descId}] [${service.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-muted mb-8">
            Contact us and describe your situation. We'll recommend the right combination of services for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
