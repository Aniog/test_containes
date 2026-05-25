import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTASection from '@/components/home/CTASection';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    description: 'We search our network of verified Chinese manufacturers to find suppliers that match your product specifications, target price, MOQ, and quality requirements. You receive a detailed comparison report with 3–5 shortlisted options.',
    features: ['Product spec matching', 'Price benchmarking', 'MOQ negotiation', 'Supplier comparison report'],
    imgId: 'svc-img-1a2b',
    titleId: 'svc-title-1',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    description: 'Before you place an order, our team visits the factory in person to verify their capabilities, certifications, workforce, and production environment. We provide a detailed audit report with photos.',
    features: ['On-site factory visit', 'Certification verification', 'Production capacity check', 'Photo & video report'],
    imgId: 'svc-img-2c3d',
    titleId: 'svc-title-2',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    description: 'We conduct inspections at multiple stages: during production, pre-shipment, and at container loading. All inspections follow AQL standards and your custom checklist.',
    features: ['During-production inspection', 'Pre-shipment inspection', 'Container loading check', 'AQL-based sampling'],
    imgId: 'svc-img-3e4f',
    titleId: 'svc-title-3',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    description: 'We act as your eyes and ears on the factory floor. Our team monitors production milestones, communicates with the factory daily, and sends you regular progress updates.',
    features: ['Production milestone tracking', 'Daily factory communication', 'Issue escalation', 'Weekly progress reports'],
    imgId: 'svc-img-4g5h',
    titleId: 'svc-title-4',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'We coordinate with trusted freight forwarders for sea freight, air freight, and express delivery. We prepare all export documents and ensure smooth customs clearance.',
    features: ['Sea & air freight options', 'Export documentation', 'Freight forwarder coordination', 'Shipment tracking'],
    imgId: 'svc-img-5i6j',
    titleId: 'svc-title-5',
  },
  {
    icon: Package,
    title: 'Private Label & OEM Development',
    description: 'We help you develop custom products from scratch or adapt existing designs for private label. This includes packaging design coordination, branding, and compliance labeling.',
    features: ['Product development support', 'Custom packaging coordination', 'Brand & label compliance', 'Sample management'],
    imgId: 'svc-img-6k7l',
    titleId: 'svc-title-6',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier identification to final delivery.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-text-secondary text-sm">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-bg-surface h-64 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
