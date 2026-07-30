import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe,
  CheckCircle, ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right factory, not just any factory.',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality requirements, and budget. Our sourcing process draws on an established network of factories across Guangdong, Zhejiang, Jiangsu, and other key manufacturing regions.',
    features: [
      'Product specification analysis',
      'Factory database search and referrals',
      'Initial supplier screening and vetting',
      'Shortlist of 3–5 qualified candidates',
      'Comparative supplier report',
    ],
    titleId: 'svc-pg-sourcing-title',
    descId: 'svc-pg-sourcing-desc',
    imgId: 'svc-pg-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    tagline: 'Know exactly who you are buying from.',
    desc: 'Before you place an order, we conduct on-site factory audits to verify business registration, production capacity, equipment, workforce, certifications, and compliance with your standards. We provide a detailed audit report with photos and a clear recommendation.',
    features: [
      'Business licence and registration check',
      'On-site factory visit and audit',
      'Production capacity assessment',
      'Certification and compliance review',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-pg-verify-title',
    descId: 'svc-pg-verify-desc',
    imgId: 'svc-pg-verify-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they reach your customers.',
    desc: 'Our inspectors conduct pre-shipment, in-line, and first-article inspections against your product specifications and AQL standards. We document every finding with photos and a structured report, giving you the information to accept, reject, or rework a shipment.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'First article / sample inspection',
      'AQL-based defect sampling',
      'Photo-documented inspection report',
    ],
    titleId: 'svc-pg-qc-title',
    descId: 'svc-pg-qc-desc',
    imgId: 'svc-pg-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay informed at every stage of production.',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production milestones, communicates with the factory on your behalf, and escalates issues before they become delays. You receive regular status updates throughout the production cycle.',
    features: [
      'Production schedule tracking',
      'Regular milestone updates',
      'Factory communication in Mandarin',
      'Issue escalation and resolution',
      'Pre-production material check',
    ],
    titleId: 'svc-pg-prod-title',
    descId: 'svc-pg-prod-desc',
    imgId: 'svc-pg-prod-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your warehouse.',
    desc: 'We coordinate with freight forwarders, customs brokers, and carriers to manage the full logistics chain. Whether you need FCL, LCL, air freight, or express courier, we handle the documentation, booking, and tracking so your goods arrive on time.',
    features: [
      'Freight forwarder coordination',
      'FCL, LCL, and air freight options',
      'Export customs documentation',
      'Cargo insurance arrangement',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-pg-ship-title',
    descId: 'svc-pg-ship-desc',
    imgId: 'svc-pg-ship-img-m4n5o6',
  },
  {
    id: 'trade-compliance',
    icon: Globe,
    title: 'Trade Compliance',
    tagline: 'Import with confidence, avoid costly surprises.',
    desc: 'We help you navigate import regulations, product certifications, and labelling requirements for your target market. From CE and FCC to REACH and RoHS, we advise on what is required and work with factories to ensure compliance before shipment.',
    features: [
      'Import regulation guidance',
      'CE, FCC, RoHS, REACH advisory',
      'Product labelling review',
      'Certificate of origin assistance',
      'Customs tariff classification support',
    ],
    titleId: 'svc-pg-trade-title',
    descId: 'svc-pg-trade-desc',
    imgId: 'svc-pg-trade-img-p7q8r9',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Service China Sourcing
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              We provide end-to-end sourcing support for global buyers — from finding the right supplier to delivering goods to your door. Every service is designed to reduce risk and save you time.
            </p>
            <CTAButton variant="primary" className="text-base px-8 py-4">
              Get a Free Sourcing Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-lightblue rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{svc.tagline}</p>
                  <h2 id={svc.titleId} className="text-3xl font-bold text-darktext mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-mutedtext leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-darktext">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CTAButton to="/contact" variant="primary">Enquire About This Service</CTAButton>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-lightblue h-72 lg:h-96 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us about your product and sourcing goals. We will recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
