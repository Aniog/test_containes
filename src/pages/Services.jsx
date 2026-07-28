import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Globe,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify qualified Chinese manufacturers that match your product specifications, target price, MOQ, and delivery requirements. Our sourcing process draws on an established network of vetted factories across key manufacturing hubs in China.',
    points: [
      'Product specification analysis',
      'Supplier database research and outreach',
      'Shortlist of 3–5 qualified manufacturers',
      'Comparative pricing and capability overview',
      'Communication in English throughout',
    ],
    imgId: 'svc-detail-sourcing-img-c1d2e3',
    titleId: 'svc-detail-sourcing-title',
    descId: 'svc-detail-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you\'re buying from before you pay',
    desc: 'Before you commit to a supplier, we conduct an on-site factory audit to verify their legitimacy, production capacity, quality management systems, and working conditions. You receive a detailed audit report with photos.',
    points: [
      'Business license and registration check',
      'On-site factory visit and assessment',
      'Production capacity and equipment review',
      'Quality management system evaluation',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-detail-factory-img-f4g5h6',
    titleId: 'svc-detail-factory-title',
    descId: 'svc-detail-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct pre-shipment and in-line quality checks against your agreed specifications. We use standardized inspection checklists and provide a full report with pass/fail results and photographic evidence.',
    points: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Measurement, function, and appearance checks',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-detail-qc-img-i7j8k9',
    titleId: 'svc-detail-qc-title',
    descId: 'svc-detail-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed without being on the ground',
    desc: 'We act as your eyes and ears in China throughout the production cycle. Regular updates, milestone tracking, and proactive communication with the factory keep your order on schedule and within spec.',
    points: [
      'Production schedule monitoring',
      'Regular status updates to the buyer',
      'Issue identification and resolution',
      'Material and component verification',
      'Pre-production sample review',
    ],
    imgId: 'svc-detail-prod-img-l1m2n3',
    titleId: 'svc-detail-prod-title',
    descId: 'svc-detail-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate freight forwarding, customs documentation, and logistics so your goods move efficiently from the factory to your destination. We work with trusted freight partners for sea, air, and express shipments.',
    points: [
      'Freight forwarder coordination',
      'Export customs documentation',
      'Sea freight, air freight, and express options',
      'Cargo consolidation (LCL) available',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-detail-ship-img-o4p5q6',
    titleId: 'svc-detail-ship-title',
    descId: 'svc-detail-ship-desc',
  },
  {
    id: 'trade-compliance',
    icon: Globe,
    title: 'Trade Compliance Support',
    subtitle: 'Navigate regulations with confidence',
    desc: 'We help ensure your products meet the import regulations, labeling requirements, and certification standards of your target market. We advise on common compliance requirements and connect you with testing labs when needed.',
    points: [
      'CE, FCC, RoHS, and other certification guidance',
      'Product labeling and packaging requirements',
      'Import regulation advisory',
      'Connection to accredited testing laboratories',
      'Documentation review and preparation',
    ],
    imgId: 'svc-detail-trade-img-r7s8t9',
    titleId: 'svc-detail-trade-title',
    descId: 'svc-detail-trade-desc',
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
      <section style={{ background: "linear-gradient(135deg, #0F2A5C 0%, #1A4B8C 100%)" }} className="text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              China Sourcing Services
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Comprehensive support for every stage of the China sourcing process —
              from finding suppliers to delivering goods to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1A4B8C]" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
                    {svc.title}
                  </h2>
                  <p className="text-[#1A4B8C] font-medium mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#1A4B8C] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-500 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Contact us and describe your sourcing challenge. We'll recommend the right approach and provide a transparent quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
