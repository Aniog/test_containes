import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description: 'We research China\'s manufacturing landscape to identify suppliers that match your product specifications, quality standards, MOQ, and budget. You receive a detailed shortlist with supplier profiles, pricing, and our recommendation.',
    features: [
      'Market research across all major manufacturing regions',
      'Supplier shortlist with detailed profiles',
      'Price benchmarking and negotiation support',
      'Communication in English and Chinese',
      'NDA protection for your product designs',
    ],
    imgId: 'svc-sourcing-img-1a2b3c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re really dealing with',
    description: 'Before you commit to a supplier, we verify their business registration, export history, certifications, and production capacity. On-site audits include facility inspection, worker conditions, and equipment assessment.',
    features: [
      'Business license and registration verification',
      'On-site factory visit and photo report',
      'Production capacity assessment',
      'Certification and compliance check',
      'Detailed audit report with risk rating',
    ],
    imgId: 'svc-audit-img-4d5e6f',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    description: 'Our trained QC inspectors conduct inspections at key production stages using your specifications and internationally recognized sampling standards (AQL). You receive a detailed inspection report with photos.',
    features: [
      'Pre-production inspection (materials & components)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling methodology',
      'Detailed photo report within 24 hours',
    ],
    imgId: 'svc-qc-img-7g8h9i',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production cycle',
    description: 'We act as your eyes and ears on the ground. Our team monitors production progress, communicates with the factory on your behalf, and escalates issues before they become costly problems.',
    features: [
      'Regular production status updates',
      'On-site visits at critical milestones',
      'Issue escalation and resolution',
      'Timeline management and delay prevention',
      'Bilingual communication with factory',
    ],
    imgId: 'svc-followup-img-1j2k3l',
    titleId: 'svc-followup-title',
    descId: 'svc-followup-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered on time',
    description: 'We coordinate with freight forwarders, prepare export documentation, and ensure your shipment is properly packed, labeled, and dispatched. We work with both sea freight and air freight partners.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Packing and labeling supervision',
      'Shipment tracking and updates',
      'Customs clearance support',
    ],
    imgId: 'svc-shipping-img-4m5n6o',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
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
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Services
          </span>
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            China Sourcing Services for Global Buyers
          </h1>
          <p id="services-page-subtitle" className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            From supplier discovery to final delivery, we provide end-to-end sourcing support so you can import from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                      {service.title}
                    </h2>
                    <p className="text-brand-blue font-medium mb-4">{service.subtitle}</p>
                    <p id={service.descId} className="text-brand-mid leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-brand-mid">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-subtitle] [services-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-brand-mid mb-8">
            Contact us and we'll recommend the right combination of services based on your sourcing situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Talk to a Sourcing Specialist <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
