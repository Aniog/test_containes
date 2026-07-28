import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Package, Ship, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right factory for your product',
    desc: 'We research and identify qualified Chinese manufacturers that match your product specifications, quality standards, volume requirements, and budget. Our sourcing process includes market research, supplier shortlisting, capability assessment, and price negotiation.',
    deliverables: ['Supplier shortlist with detailed profiles', 'Factory capability assessment', 'Price comparison and negotiation', 'Initial sample coordination'],
    imgId: 'svc-page-sourcing-e1f2a1',
    titleId: 'svc-page-title-sourcing',
    subtitleId: 'svc-page-subtitle-sourcing',
    descId: 'svc-page-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know your supplier before you commit',
    desc: 'We conduct comprehensive on-site factory audits to verify production capabilities, quality management systems, certifications, and compliance. Our audit reports include detailed findings, photos, and risk assessments so you can make an informed decision.',
    deliverables: ['On-site factory audit report', 'Production capacity verification', 'Quality system assessment', 'Certification and compliance check'],
    imgId: 'svc-page-factory-e1f2a2',
    titleId: 'svc-page-title-factory',
    subtitleId: 'svc-page-subtitle-factory',
    descId: 'svc-page-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure your products meet specifications',
    desc: 'We implement multi-stage quality control: pre-production inspection to verify raw materials and initial samples, in-line inspection during production to catch issues early, and pre-shipment inspection to confirm final quality before shipping.',
    deliverables: ['Pre-production sample review', 'In-line inspection reports', 'Pre-shipment inspection (AQL standard)', 'Detailed QC reports with photos'],
    imgId: 'svc-page-qc-e1f2a3',
    titleId: 'svc-page-title-qc',
    subtitleId: 'svc-page-subtitle-qc',
    descId: 'svc-page-desc-qc',
  },
  {
    icon: Package,
    title: 'Production Follow-up & Management',
    subtitle: 'Keep your production on track',
    desc: 'Our team monitors production progress through regular factory visits and communication. We track milestones, identify potential delays, and proactively resolve issues before they impact your timeline. You receive weekly progress reports with photos and data.',
    deliverables: ['Weekly production progress reports', 'Milestone tracking and updates', 'Issue identification and resolution', 'Production timeline management'],
    imgId: 'svc-page-production-e1f2a4',
    titleId: 'svc-page-title-production',
    subtitleId: 'svc-page-subtitle-production',
    descId: 'svc-page-desc-production',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'End-to-end delivery management',
    desc: 'We handle the entire logistics process: factory-to-port transport, freight booking (sea or air), customs documentation, and shipment tracking. We work with major freight forwarders to secure competitive rates and ensure timely delivery.',
    deliverables: ['Freight booking and rate negotiation', 'Export documentation preparation', 'Customs clearance support', 'Shipment tracking until delivery'],
    imgId: 'svc-page-shipping-e1f2a5',
    titleId: 'svc-page-title-shipping',
    subtitleId: 'svc-page-subtitle-shipping',
    descId: 'svc-page-desc-shipping',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Sourcing Services
            </h1>
            <p id="services-page-subtitle" className="mt-4 text-lg text-slate-600">
              Comprehensive China sourcing solutions covering every stage of your supply chain — from supplier identification to final delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-10 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div
                    data-strk-bg-id={service.imgId}
                    data-strk-bg={`[${service.descId}] [${service.subtitleId}] [${service.titleId}] [services-page-subtitle] [services-page-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="700"
                  >
                    <div className="aspect-[4/3] rounded-xl bg-slate-200 overflow-hidden" />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  <p id={service.subtitleId} className="mt-1 text-brand-orange font-medium">{service.subtitle}</p>
                  <p id={service.descId} className="mt-4 text-slate-600 leading-relaxed">{service.desc}</p>
                  <div className="mt-6 space-y-2.5">
                    {service.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start Sourcing?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Get a free consultation and quote. Tell us about your product, and we will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}