import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, Zap, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers based on your product specifications, target price, minimum order quantity, and quality requirements. You receive a clear comparison report so you can make an informed decision.',
    features: [
      'Product specification analysis',
      'Supplier database research (Alibaba, trade shows, direct contacts)',
      'Initial supplier screening and background check',
      'Quotation collection and comparison report',
      'Sample coordination',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    tagline: 'Know who you\'re buying from before you pay',
    desc: 'Our team visits factories in person to verify their production capacity, equipment, workforce, certifications, and compliance. We provide a detailed audit report with photos so you can assess the supplier with confidence.',
    features: [
      'On-site factory visit and audit',
      'Production capacity and equipment check',
      'Business license and certification verification',
      'Worker conditions and compliance review',
      'Photo and video documentation',
    ],
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before goods leave China',
    desc: 'Our local QC inspectors visit the factory during or after production to check product quality against your specifications. We follow AQL sampling standards and provide a detailed inspection report with photos.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling and defect classification',
      'Measurement, function, and packaging checks',
      'Detailed report with photos within 24 hours',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Zap,
    title: 'Production Follow-up',
    tagline: 'Stay informed without being on-site',
    desc: 'We act as your eyes and ears at the factory. Our team monitors production progress, communicates with the supplier on your behalf, and flags any issues early — keeping your order on schedule.',
    features: [
      'Regular production status updates',
      'On-site visits at key production milestones',
      'Issue escalation and resolution',
      'Timeline management and delay prevention',
      'Direct communication with factory management',
    ],
    imgId: 'svc-production-img-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your warehouse',
    desc: 'We coordinate with trusted freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs clearance on the China side, and keep you updated on shipment status.',
    features: [
      'Freight forwarder coordination (sea, air, express)',
      'Export documentation preparation',
      'China customs clearance support',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
    imgId: 'svc-shipping-img-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    tagline: 'Build your own brand with Chinese manufacturing',
    desc: 'We support buyers who want to develop custom products or private label goods. From product design and mold development to custom packaging and branding, we manage the OEM process with qualified factories.',
    features: [
      'OEM product development support',
      'Custom packaging and branding coordination',
      'Mold and tooling management',
      'Sample approval process',
      'IP and NDA guidance with suppliers',
    ],
    imgId: 'svc-oem-img-p7q8r9',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          data-strk-bg-id="services-hero-bg-s1t2u3"
          data-strk-bg="China factory manufacturing quality control"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            China Sourcing Services for International Buyers
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            We offer a complete range of sourcing services — from finding the right supplier to delivering goods to your warehouse. Each service is designed to reduce risk and save you time.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
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
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">{svc.tagline}</p>
                  <h2 id={svc.titleId} className="text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-slate-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="16x9"
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

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
