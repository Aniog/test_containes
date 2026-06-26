import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '@/components/home/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    subtitle: 'Find the right factory for your product',
    desc: 'We research and identify suppliers that match your product specifications, target price, MOQ, and quality requirements. You receive a shortlist of verified, pre-screened factories with detailed profiles.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist with factory profiles',
      'Price comparison and negotiation support',
    ],
    imgId: 'svc-page-supplier-1a2b3c',
    titleId: 'svc-page-supplier-title',
    descId: 'svc-page-supplier-desc',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know who you\'re working with before you order',
    desc: 'Our team conducts on-site factory audits to assess production capacity, quality management systems, certifications, working conditions, and overall reliability. You receive a comprehensive audit report.',
    features: [
      'On-site factory visit',
      'Production capacity assessment',
      'Quality management system review',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-page-audit-4d5e6f',
    titleId: 'svc-page-audit-title',
    descId: 'svc-page-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'We conduct pre-shipment inspections, in-line production checks, and container loading supervision to ensure your products meet agreed specifications. Detailed inspection reports are provided.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'Container loading supervision',
      'AQL sampling standards',
      'Photo and video documentation',
    ],
    imgId: 'svc-page-qc-7g8h9i',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up & Monitoring',
    subtitle: 'Stay informed without being on the ground',
    desc: 'We act as your eyes and ears in China, monitoring production progress, communicating with factories, and flagging potential delays or quality issues before they escalate.',
    features: [
      'Regular production status updates',
      'Factory communication management',
      'Timeline tracking and delay alerts',
      'Issue escalation and resolution',
      'Weekly progress reports',
    ],
    imgId: 'svc-page-prod-0j1k2l',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory floor to your warehouse',
    desc: 'We coordinate with trusted freight forwarders to arrange sea or air freight, prepare export documentation, and track your shipment from China to your destination.',
    features: [
      'Freight forwarder coordination',
      'Sea and air freight options',
      'Export documentation preparation',
      'Shipment tracking and updates',
      'Consolidation for multiple orders',
    ],
    imgId: 'svc-page-ship-3m4n5o',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'consulting',
    icon: FileText,
    title: 'Sourcing Consulting',
    subtitle: 'Expert guidance for your China strategy',
    desc: 'For businesses building a long-term China sourcing strategy, we offer consulting services covering supplier diversification, risk management, cost optimization, and market entry.',
    features: [
      'Sourcing strategy development',
      'Supplier diversification planning',
      'Cost structure analysis',
      'Risk assessment and mitigation',
      'Market and pricing intelligence',
    ],
    imgId: 'svc-page-consult-6p7q8r',
    titleId: 'svc-page-consult-title',
    descId: 'svc-page-consult-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-[#a8b8cc] text-lg leading-relaxed">
              We offer a complete range of sourcing services to help you find reliable suppliers, ensure product quality, and manage your supply chain from China.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#f4f6f9] rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#e8621a]">{svc.subtitle}</span>
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#0d2340] mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-[#5a6a7e] leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#1a2332]">
                        <CheckCircle className="w-4 h-4 text-[#1a4f8a] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Request This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`rounded-2xl overflow-hidden h-72 md:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
