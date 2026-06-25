import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';
import CTASection from '../components/home/CTASection';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    description: 'We identify qualified suppliers from our verified network and across major Chinese B2B platforms. Each supplier is pre-screened for legitimacy, production capacity, and product fit before being presented to you.',
    features: [
      'Product specification matching',
      'MOQ and pricing negotiation',
      'Supplier background checks',
      '3–5 shortlisted options per inquiry',
    ],
    imgId: 'svc-page-sourcing-a1b2',
    titleId: 'svc-page-title-sourcing',
    descId: 'svc-page-desc-sourcing',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    description: 'Before you commit to a supplier, we conduct a thorough on-site or document-based audit to verify their legitimacy, capabilities, and compliance with your requirements.',
    features: [
      'Business license & export license verification',
      'Production capacity assessment',
      'ISO and product certification review',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-page-factory-c3d4',
    titleId: 'svc-page-title-factory',
    descId: 'svc-page-desc-factory',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Our in-house QC inspectors conduct checks at critical stages of production to ensure your goods meet specifications before they leave China.',
    features: [
      'Pre-production material inspection',
      'During-production (DUPRO) checks',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
    imgId: 'svc-page-qc-e5f6',
    titleId: 'svc-page-title-qc',
    descId: 'svc-page-desc-qc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up & Monitoring',
    description: 'We act as your eyes and ears on the factory floor, providing regular updates and proactively resolving issues before they become costly problems.',
    features: [
      'Weekly production status reports',
      'On-site factory visits',
      'Issue escalation and resolution',
      'Timeline management',
    ],
    imgId: 'svc-page-prod-g7h8',
    titleId: 'svc-page-title-prod',
    descId: 'svc-page-desc-prod',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipments, and handle all export documentation on your behalf.',
    features: [
      'Sea freight (FCL & LCL)',
      'Air freight & express courier',
      'Export documentation preparation',
      'Shipment tracking & updates',
    ],
    imgId: 'svc-page-ship-i9j0',
    titleId: 'svc-page-title-ship',
    descId: 'svc-page-desc-ship',
  },
  {
    id: 'compliance',
    icon: FileText,
    title: 'Compliance & Certification Support',
    description: 'We help ensure your products meet the regulatory requirements of your target market, coordinating with certified testing labs and certification bodies.',
    features: [
      'CE, FCC, RoHS, REACH guidance',
      'Lab testing coordination',
      'Certificate of origin',
      'Customs documentation support',
    ],
    imgId: 'svc-page-comp-k1l2',
    titleId: 'svc-page-title-comp',
    descId: 'svc-page-desc-comp',
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
      <div className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            End-to-end sourcing support — from finding the right supplier to delivering goods to your warehouse.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-[#1a4f8a] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-[#0d2340] mb-4">{service.title}</h2>
                    <p id={service.descId} className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Request this service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-72 object-cover"
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
}
