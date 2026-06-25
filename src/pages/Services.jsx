import { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified manufacturers that match your product specifications, MOQ requirements, and target price. Our sourcing covers both established trading companies and direct factories.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified suppliers',
      'Comparative pricing summary',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    tagline: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we conduct on-site factory audits to verify their capabilities, certifications, production capacity, and working conditions. We provide a detailed audit report with photos.',
    features: [
      'On-site factory visit',
      'Business license and certification check',
      'Production capacity assessment',
      'Quality management system review',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-audit-img-d4e5f6',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch problems before they reach your warehouse',
    desc: 'Our inspectors conduct pre-shipment, during-production, and container loading inspections. We check against your specifications and international standards, and provide a full inspection report.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Container loading supervision',
      'AQL sampling methodology',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    tagline: 'Stay informed throughout manufacturing',
    desc: 'We act as your on-the-ground project manager during production. Regular updates, milestone checks, and proactive communication keep your order on track and within specification.',
    features: [
      'Production schedule monitoring',
      'Weekly progress updates',
      'Material and component verification',
      'Issue escalation and resolution',
      'Pre-production sample approval',
    ],
    imgId: 'svc-prod-img-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your destination',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipments. We handle export documentation, customs declarations, and provide shipment tracking updates.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs declaration support',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
    imgId: 'svc-ship-img-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'negotiation',
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    tagline: 'Get better terms with local expertise',
    desc: 'Our team negotiates pricing, payment terms, lead times, and packaging requirements on your behalf. We leverage our local relationships and market knowledge to secure competitive terms.',
    features: [
      'Price benchmarking',
      'Payment term negotiation',
      'MOQ reduction discussions',
      'Lead time optimization',
      'Contract and NDA support',
    ],
    imgId: 'svc-neg-img-p7q8r9',
    titleId: 'svc-neg-title',
    descId: 'svc-neg-desc',
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
      <section className="bg-[#0d2b4e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Our Sourcing Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive support for every stage of the China sourcing process — from finding suppliers to delivering goods to your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1a4f8a]" />
                  </div>
                  <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">{svc.tagline}</span>
                  <h2 id={svc.titleId} className="text-3xl font-bold text-[#0d2b4e] mt-2 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Get Started"
            heading="Not Sure Which Service You Need?"
            subtext="Tell us about your sourcing project and we'll recommend the right combination of services for your situation."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
            <CTAButton to="/how-it-works" variant="secondary">See How It Works</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
