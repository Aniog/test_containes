import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';
import CTABannerSection from '@/components/home/CTABannerSection';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    titleId: 'svc-pg-title-sourcing',
    descId: 'svc-pg-desc-sourcing',
    imgId: 'svc-pg-img-sourcing-a1b2c3',
    summary: 'We identify qualified manufacturers that match your product specs, MOQ, and budget.',
    details: [
      'Product specification analysis and supplier criteria definition',
      'Search across verified databases, trade shows, and our own network',
      'Initial screening of 10–20 candidates, shortlist of 3–5 qualified suppliers',
      'Supplier profile reports with contact details and initial assessment',
    ],
    desc: 'China factory supplier sourcing and shortlisting for global buyers',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    titleId: 'svc-pg-title-audit',
    descId: 'svc-pg-desc-audit',
    imgId: 'svc-pg-img-audit-b2c3d4',
    summary: 'On-site factory visits to verify legitimacy, capacity, and compliance before you commit.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Workforce size and management structure review',
      'Quality management system and certifications check',
      'Detailed audit report with photos and scoring',
    ],
    desc: 'On-site China factory audit and verification for importers',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Control Inspection',
    titleId: 'svc-pg-title-qc',
    descId: 'svc-pg-desc-qc',
    imgId: 'svc-pg-img-qc-c3d4e5',
    summary: 'Third-party QC inspections at key production milestones to protect your order quality.',
    details: [
      'Pre-production inspection (raw materials and components)',
      'During-production inspection (DUPRO) at 20–30% completion',
      'Pre-shipment inspection (PSI) before goods leave the factory',
      'Container loading supervision',
      'Detailed inspection report with photos, measurements, and pass/fail results',
    ],
    desc: 'Pre-shipment quality control inspection in China factories',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    titleId: 'svc-pg-title-production',
    descId: 'svc-pg-desc-production',
    imgId: 'svc-pg-img-production-d4e5f6',
    summary: 'Regular factory visits and progress reports to keep your production on track.',
    details: [
      'Weekly production status updates',
      'Factory visit reports with photos',
      'Early identification of delays or quality issues',
      'Direct communication with factory production managers',
      'Timeline management and escalation when needed',
    ],
    desc: 'Production monitoring and follow-up at China factories',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    titleId: 'svc-pg-title-shipping',
    descId: 'svc-pg-desc-shipping',
    imgId: 'svc-pg-img-shipping-e5f6a7',
    summary: 'We handle freight booking, export documentation, and logistics coordination.',
    details: [
      'Freight forwarder selection and booking (FCL, LCL, air freight)',
      'Export customs documentation preparation',
      'Cargo insurance coordination',
      'Shipment tracking and status updates',
      'Consolidation of multiple supplier orders',
    ],
    desc: 'China export shipping coordination and freight management',
  },
  {
    id: 'sourcing-consulting',
    icon: FileText,
    title: 'Sourcing Consulting',
    titleId: 'svc-pg-title-consulting',
    descId: 'svc-pg-desc-consulting',
    imgId: 'svc-pg-img-consulting-f6a7b8',
    summary: 'Strategic advice for buyers looking to optimize their China sourcing operations.',
    details: [
      'Supplier base review and risk assessment',
      'Cost benchmarking and price negotiation strategy',
      'Supply chain diversification planning',
      'Compliance and certification guidance',
      'Ongoing sourcing strategy support',
    ],
    desc: 'China sourcing strategy consulting for importers and brands',
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
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 bg-white/10 px-3 py-1 rounded-full">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            End-to-end sourcing support for global buyers — from finding the right supplier to delivering goods to your door.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Service</span>
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">{svc.title}</h2>
                    <p id={svc.descId} className="text-gray-500 leading-relaxed mb-6">{svc.summary}</p>
                    <ul className="space-y-2 mb-8">
                      {svc.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <CTAButton to="/contact" variant="primary">
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </CTAButton>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-md ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABannerSection />
    </div>
  );
}
