import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import { Search, Factory, ClipboardCheck, TrendingUp, Truck, ShieldCheck, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'svc-sourcing',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-img-sourcing-a1b2c3',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget. Our sourcing process draws on an established network of factories across Guangdong, Zhejiang, Jiangsu, and other key manufacturing regions.',
    bullets: [
      'Product specification analysis',
      'Multi-source supplier research',
      'Shortlist of 3–5 qualified factories',
      'Supplier profile reports',
      'Initial price benchmarking',
    ],
  },
  {
    id: 'svc-factory',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-img-factory-d4e5f6',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit to a supplier, we conduct an on-site factory audit to verify their legitimacy, production capacity, certifications, and working conditions. This protects you from fraud and quality failures.',
    bullets: [
      'Business license and registration check',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'svc-qc',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-img-qc-g7h8i9',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Our inspectors conduct pre-shipment and in-line quality checks against your specifications. We catch defects before goods leave China, saving you the cost and delay of returns or rework after arrival.',
    bullets: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling standards',
      'Defect classification and reporting',
      'Photo and video documentation',
    ],
  },
  {
    id: 'svc-production',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-img-production-j1k2l3',
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw material procurement through to finished goods, keeping you informed at every stage. Regular updates mean no surprises and faster resolution of any issues.',
    bullets: [
      'Production schedule tracking',
      'Raw material verification',
      'Milestone progress reports',
      'Issue escalation and resolution',
      'Delivery timeline management',
    ],
  },
  {
    id: 'svc-shipping',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-img-shipping-m4n5o6',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle export documentation, packing lists, and commercial invoices to ensure a smooth customs clearance.',
    bullets: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Cargo tracking and updates',
      'Consolidation for multiple suppliers',
    ],
  },
  {
    id: 'svc-negotiation',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
    imgId: 'svc-img-negotiation-p7q8r9',
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    desc: 'Our team negotiates on your behalf using local market knowledge and established supplier relationships. We work to secure competitive pricing, favorable payment terms, and clear contractual commitments.',
    bullets: [
      'Price benchmarking and analysis',
      'Payment term negotiation',
      'MOQ reduction strategies',
      'Sample and tooling cost negotiation',
      'Contract review support',
    ],
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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive support for every stage of your China sourcing journey — from finding the right supplier to delivering goods to your warehouse.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden h-72 bg-gray-100 ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 mb-8">Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.</p>
          <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
