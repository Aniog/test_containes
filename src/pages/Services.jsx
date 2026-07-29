import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, BarChart3, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify qualified Chinese manufacturers that match your product specifications, quality requirements, MOQ, and target price. Our sourcing team has access to a vetted network of factories across all major manufacturing hubs in China.',
    features: [
      'Product specification analysis',
      'Factory database search & shortlisting',
      'Initial supplier qualification',
      'Comparative supplier reports',
      'Sample coordination',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you place an order, we conduct on-site factory audits to verify business legitimacy, production capacity, equipment, workforce, and compliance with international standards. We provide a detailed audit report with photos and findings.',
    features: [
      'Business license & registration check',
      'On-site factory visit & inspection',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
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
    desc: 'Our QC inspectors conduct pre-shipment, in-line, and final random inspections based on AQL standards. We check product dimensions, functionality, packaging, labeling, and compliance — and provide a full inspection report within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling & defect classification',
      'Packaging & labeling check',
      'Inspection report within 24 hours',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: BarChart3,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every production milestone',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production progress, communicates with the factory on your behalf, and provides regular status updates so you always know where your order stands.',
    features: [
      'Production schedule tracking',
      'Regular milestone updates',
      'Factory communication management',
      'Issue escalation & resolution',
      'Delivery timeline management',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate the full logistics chain — from factory pickup to international freight, customs clearance, and final delivery. We work with trusted freight forwarders and can handle FCL, LCL, air freight, and express shipments.',
    features: [
      'Freight forwarder coordination',
      'FCL, LCL & air freight options',
      'Export customs documentation',
      'Cargo insurance arrangement',
      'Delivery tracking & updates',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'private-label-oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your brand with custom manufacturing',
    desc: 'We help brands develop custom products and private label lines with Chinese manufacturers. From product design and packaging development to OEM production management, we guide you through the entire process.',
    features: [
      'OEM factory identification',
      'Product design & development support',
      'Custom packaging & branding',
      'Sample development & approval',
      'Production management',
    ],
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-full-img-p7q8r9',
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
      <section className="bg-[#1A2332] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We cover every stage of the sourcing process — from finding the right supplier to delivering goods to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-[#1A3C6E]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-2">{svc.subtitle}</p>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#152f58] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-slate-100 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-72 md:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing project and we'll recommend the right combination of services for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
