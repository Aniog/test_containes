import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHero from '@/components/shared/SectionHero';
import CtaBanner from '@/components/shared/CtaBanner';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We identify qualified suppliers from our verified network and through targeted research across China\'s major manufacturing hubs — Guangdong, Zhejiang, Jiangsu, and beyond.',
    features: [
      'Product specification analysis',
      'Supplier shortlisting (3–5 candidates)',
      'Initial capability assessment',
      'Price and MOQ comparison',
      'Communication in Chinese on your behalf',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'audit',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re buying from before you pay',
    desc: 'Our team visits factories in person to verify their legitimacy, production capabilities, and compliance with your standards. We provide a detailed written report with photos.',
    features: [
      'Business license and registration check',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Worker conditions and safety review',
      'Photo documentation and written report',
    ],
    imgId: 'svc-audit-img-d4e5f6',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'qc',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'We conduct inspections at every stage of production — during manufacturing, before shipment, and at container loading — using internationally recognized AQL standards.',
    features: [
      'Pre-production inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection report with photos',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the factory floor. Regular check-ins, progress reports, and proactive issue resolution keep your order on track.',
    features: [
      'Weekly production status updates',
      'On-site factory visits during production',
      'Issue identification and resolution',
      'Timeline management and escalation',
      'Photo and video updates',
    ],
    imgId: 'svc-prod-img-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    desc: 'We coordinate with trusted freight forwarders for sea and air freight, prepare all export documentation, and ensure your goods are shipped correctly and on time.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight and air freight options',
      'Cargo insurance guidance',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-ship-img-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'compliance',
    icon: FileText,
    title: 'Compliance & Documentation',
    subtitle: 'Meet import requirements in your country',
    desc: 'We help ensure your products meet the regulatory requirements of your target market, including product testing, certification, and proper labeling.',
    features: [
      'Product compliance review',
      'Testing lab coordination',
      'Certificate of Origin assistance',
      'Labeling and packaging compliance',
      'Import documentation support',
    ],
    imgId: 'svc-comp-img-p7q8r9',
    titleId: 'svc-comp-title',
    descId: 'svc-comp-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Sourcing Services | SSourcing China';
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <SectionHero
        badge="Our Services"
        title="China Sourcing Services for Global Buyers"
        subtitle="From supplier discovery to final delivery — we manage every step of your China sourcing process with transparency and accountability."
        cta="Get a Free Sourcing Quote"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-accent text-sm font-semibold mb-2">{svc.subtitle}</p>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Inquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md ${isEven ? '' : 'lg:order-1'}`}>
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
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation."
        cta="Get a Free Consultation"
      />
    </div>
  );
}
