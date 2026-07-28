import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, MOQ, and delivery requirements. Our network spans all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Supplier database research and outreach',
      'Initial screening and shortlisting (3–5 suppliers)',
      'Quotation collection and comparison',
      'Supplier communication in Chinese',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'We conduct on-site factory audits to verify business legitimacy, production capabilities, workforce size, equipment, certifications, and compliance with international standards. You receive a detailed audit report with photos.',
    features: [
      'Business license and export record verification',
      'On-site factory visit and assessment',
      'Production capacity and equipment check',
      'Certification verification (ISO, CE, BSCI, etc.)',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-full-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our trained inspectors conduct pre-shipment and in-line quality checks against your product specifications and AQL standards. We identify defects, packaging issues, and labeling errors before goods are shipped.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling and defect classification',
      'Packaging and labeling verification',
      'Detailed inspection report within 24 hours',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every stage of production',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production milestones, communicates with factory managers, and escalates issues before they cause delays or quality failures.',
    features: [
      'Production schedule tracking',
      'Regular progress updates and photos',
      'Issue escalation and resolution',
      'Sample approval coordination',
      'Pre-production meeting facilitation',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and liaise with customs brokers to ensure your goods are shipped correctly and arrive on time. We handle both FCL and LCL shipments.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'FCL and LCL shipment management',
      'Delivery tracking and updates',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
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
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive China sourcing support from supplier identification to delivery.
              We handle every step so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-neutral-200 shadow-sm">
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                    {svc.title}
                  </h2>
                  <p className="text-brand-blue font-medium mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-neutral-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Tell us about your sourcing challenge and we will recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
