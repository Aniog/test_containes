import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';

const services = [
  {
    icon: Search,
    id: 'supplier-sourcing',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
    imgId: 'svc-img-sourcing-a1b2c3',
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified manufacturers from our network and public databases. Every supplier is pre-screened for export experience, production capacity, and product match before we present them to you.',
    features: [
      'Detailed supplier profiles with contact info',
      'Comparison of 3–5 qualified factories',
      'MOQ, lead time, and pricing overview',
      'Export history and certification check',
    ],
  },
  {
    icon: ShieldCheck,
    id: 'factory-verification',
    titleId: 'svc-title-verify',
    descId: 'svc-desc-verify',
    imgId: 'svc-img-verify-d4e5f6',
    title: 'Factory Verification',
    subtitle: 'Confirm the factory is real and capable',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their business license, production equipment, workforce, and quality management systems. We provide a detailed audit report.',
    features: [
      'On-site factory visit and photo documentation',
      'Business license and export license verification',
      'Production capacity and equipment assessment',
      'Worker conditions and compliance check',
    ],
  },
  {
    icon: ClipboardCheck,
    id: 'quality-inspection',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
    imgId: 'svc-img-qc-g7h8i9',
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct pre-shipment inspections based on your product specifications and AQL standards. We check dimensions, functionality, packaging, labeling, and quantity — and provide a full inspection report.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling and defect classification',
      'Detailed report with photos within 24 hours',
    ],
  },
  {
    icon: Factory,
    id: 'production-followup',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
    imgId: 'svc-img-prod-j1k2l3',
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production progress, communicates with the factory on your behalf, and alerts you to any issues before they become costly problems.',
    features: [
      'Regular production status updates',
      'On-site visits at key production milestones',
      'Issue escalation and resolution',
      'Timeline management and delay prevention',
    ],
  },
  {
    icon: Ship,
    id: 'shipping-coordination',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
    imgId: 'svc-img-ship-m4n5o6',
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered reliably',
    desc: 'We coordinate with licensed freight forwarders to arrange sea freight, air freight, or express courier delivery. We also assist with export documentation, customs clearance, and cargo insurance.',
    features: [
      'Sea, air, and express shipping options',
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Cargo tracking and delivery updates',
    ],
  },
  {
    icon: Package,
    id: 'sample-procurement',
    titleId: 'svc-title-sample',
    descId: 'svc-desc-sample',
    imgId: 'svc-img-sample-p7q8r9',
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before committing to production',
    desc: 'We source product samples from shortlisted factories and ship them to you for evaluation. We can also arrange custom samples with your branding, packaging, or specific modifications.',
    features: [
      'Standard and custom sample sourcing',
      'Sample quality review before shipping',
      'Multiple supplier sample comparison',
      'Express shipping to your location',
    ],
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="China Sourcing Services"
        subtitle="We provide end-to-end sourcing support — from finding suppliers to delivering goods to your door. Every service is designed to reduce risk and save you time."
        breadcrumb="Services"
        cta="Get a Free Sourcing Quote"
      />

      {/* Services List */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-[#e8f0fb] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1a4f8a]" />
                    </div>
                    <span className="text-[#64748b] text-sm font-medium">{svc.subtitle}</span>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#1a202c] mt-1 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-[#64748b] leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#1a202c]">
                          <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 mt-6 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden aspect-[4/3] bg-[#e8f0fb] ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-full object-cover"
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
        subtitle="Tell us about your sourcing project and we'll recommend the right combination of services for your situation."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
};

export default Services;
