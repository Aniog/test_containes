import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist qualified manufacturers based on your product specifications, target price, MOQ, and delivery requirements. Our network spans thousands of verified factories across China.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified candidates',
      'Supplier comparison report',
    ],
    titleId: 'svc-pg-sourcing-title',
    descId: 'svc-pg-sourcing-desc',
    imgId: 'svc-pg-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Confirm factory legitimacy before you commit',
    desc: 'Before you place an order, we visit the factory in person to verify business registration, production capacity, equipment, workforce, and quality management systems.',
    features: [
      'Business license verification',
      'On-site factory visit',
      'Production capacity assessment',
      'Quality management system review',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-pg-factory-title',
    descId: 'svc-pg-factory-desc',
    imgId: 'svc-pg-factory-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections based on AQL standards. We check product quality, packaging, labeling, and compliance with your specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Packaging and labeling check',
      'Detailed inspection report within 24 hours',
    ],
    titleId: 'svc-pg-qc-title',
    descId: 'svc-pg-qc-desc',
    imgId: 'svc-pg-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production milestones, communicates with the factory in Mandarin, and escalates issues before they cause delays.',
    features: [
      'Production schedule tracking',
      'Regular progress updates',
      'Issue identification and escalation',
      'Mandarin-language factory communication',
      'Pre-production sample approval',
    ],
    titleId: 'svc-pg-prod-title',
    descId: 'svc-pg-prod-desc',
    imgId: 'svc-pg-prod-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage customs clearance to ensure your goods arrive on time and without surprises.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Sea and air freight options',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-pg-ship-title',
    descId: 'svc-pg-ship-desc',
    imgId: 'svc-pg-ship-img-m4n5o6',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    desc: 'We help you develop custom-branded products with OEM factories. From design brief to finished product, we manage the entire development process including sampling, revisions, and bulk production.',
    features: [
      'OEM factory identification',
      'Product development support',
      'Sample management and revisions',
      'Branding and packaging coordination',
      'Bulk production oversight',
    ],
    titleId: 'svc-pg-oem-title',
    descId: 'svc-pg-oem-desc',
    imgId: 'svc-pg-oem-img-p7q8r9',
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Comprehensive sourcing support from supplier identification to final delivery. We handle the complexity so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map(({ id, icon: Icon, title, subtitle, desc, features, titleId, descId, imgId }, index) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
                  <p className="text-brand-red font-semibold text-sm mb-4">{subtitle}</p>
                  <p id={descId} className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-xl overflow-hidden bg-slate-200 aspect-video ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={title}
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing challenge and we'll recommend the right approach for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Talk to a Sourcing Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
