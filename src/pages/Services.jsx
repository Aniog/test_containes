import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, Truck, Shield, FileText, Package, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    desc: 'We leverage our extensive database and on-the-ground network to find manufacturers that match your product specifications, quality standards, and budget requirements.',
    details: [
      'Product requirement analysis and feasibility assessment',
      'Supplier database search across 15+ industrial clusters',
      'Initial screening of 5-10 candidate factories',
      'Detailed supplier profiles with capability summaries',
      'Shortlist of 3-5 best-matched manufacturers',
    ],
    imgId: 'service-detail-sourcing-1a2b3c',
    titleId: 'svc-detail-title-sourcing',
    descId: 'svc-detail-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'On-site factory audits conducted by our experienced engineers to verify production capabilities, quality management systems, and business legitimacy.',
    details: [
      'Business license and export license verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Workforce skills and working conditions review',
      'Client reference checks and past performance',
    ],
    imgId: 'service-detail-factory-4d5e6f',
    titleId: 'svc-detail-title-factory',
    descId: 'svc-detail-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Comprehensive quality assurance services at every stage of production, from initial samples to final shipment, ensuring your products meet specifications.',
    details: [
      'Pre-production sample evaluation and approval',
      'In-line inspection during production (DUPRO)',
      'Pre-shipment final random inspection (FRI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
    imgId: 'service-detail-qc-7g8h9i',
    titleId: 'svc-detail-title-qc',
    descId: 'svc-detail-desc-qc',
  },
  {
    icon: Truck,
    title: 'Production Follow-up & Shipping',
    desc: 'We monitor production progress, coordinate logistics, handle documentation, and ensure your goods arrive on time and in perfect condition.',
    details: [
      'Weekly production status updates',
      'Production timeline monitoring and delay alerts',
      'Freight forwarding and shipping coordination',
      'Customs documentation preparation',
      'Door-to-door delivery tracking',
    ],
    imgId: 'service-detail-shipping-0j1k2l',
    titleId: 'svc-detail-title-shipping',
    descId: 'svc-detail-desc-shipping',
  },
  {
    icon: FileText,
    title: 'Product Development Support',
    desc: 'From design refinement to prototyping, we help you develop products that meet your market requirements and manufacturing feasibility.',
    details: [
      'Design for manufacturability (DFM) review',
      'Prototype development and iteration',
      'Material sourcing and cost optimization',
      'Packaging design and specification',
      'Compliance and certification support',
    ],
    imgId: 'service-detail-dev-3m4n5o',
    titleId: 'svc-detail-title-dev',
    descId: 'svc-detail-desc-dev',
  },
  {
    icon: Shield,
    title: 'Contract & Payment Protection',
    desc: 'We help structure contracts that protect your interests, with clear quality standards, delivery terms, and payment conditions.',
    details: [
      'Bilingual contract drafting and review',
      'Quality specification documentation',
      'Payment term negotiation (T/T, L/C, etc.)',
      'Intellectual property protection measures',
      'Dispute resolution support',
    ],
    imgId: 'service-detail-contract-6p7q8r',
    titleId: 'svc-detail-title-contract',
    descId: 'svc-detail-desc-contract',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <span id="services-hero-label">Our Services</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span id="services-hero-heading">Complete Sourcing Solutions for Global Buyers</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span id="services-hero-subtitle">
                Every service you need to source from China safely, efficiently, and cost-effectively.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div key={service.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="lg:w-1/2">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-hero-subtitle] [services-hero-heading]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl font-bold text-b2b-text">{service.title}</h2>
                  </div>
                  <p id={service.descId} className="text-b2b-text-medium leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-b2b-success shrink-0 mt-0.5" />
                        <span className="text-sm text-b2b-text-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-b2b-text-medium mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements and we'll provide a tailored sourcing solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}