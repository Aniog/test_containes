import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, TrendingUp, Truck, ShieldCheck,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '@/components/shared/CtaBanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We search our network of verified Chinese manufacturers to find suppliers that match your product specifications, quality standards, MOQ requirements, and target price. You receive a shortlist of 3–5 qualified options with detailed profiles.',
    features: [
      'Product specification analysis',
      'Manufacturer database search',
      'Supplier shortlist with profiles',
      'Initial price benchmarking',
      'Communication facilitation',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, our team visits the factory in person. We verify business registration, production capacity, equipment, certifications, and working conditions. You receive a comprehensive audit report with photos.',
    features: [
      'Business license verification',
      'On-site production audit',
      'Capacity and equipment assessment',
      'Certification review (ISO, CE, etc.)',
      'Detailed written report with photos',
    ],
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    desc: 'Our inspectors conduct pre-shipment and in-line inspections against your specifications and AQL standards. We check dimensions, functionality, packaging, and labeling. Defects are documented and reported before goods are shipped.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling methodology',
      'Defect classification and reporting',
      'Pass/fail recommendation',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production milestones, communicates with the factory on your behalf, and sends you regular progress updates with photos and status reports.',
    features: [
      'Production milestone tracking',
      'Factory communication management',
      'Weekly progress reports',
      'Issue escalation and resolution',
      'Delivery timeline management',
    ],
    imgId: 'svc-prod-img-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered on time',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle export documentation, booking, and tracking — and keep you updated until your goods arrive at the destination port.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation support',
      'Shipment tracking and updates',
      'Consolidation for smaller orders',
    ],
    imgId: 'svc-ship-img-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    subtitle: 'Meet your market\'s regulatory requirements',
    desc: 'We help you verify that products comply with the regulations of your target market. We check existing certifications, advise on required testing, and coordinate with accredited labs when needed.',
    features: [
      'CE, FCC, RoHS compliance review',
      'Certification document verification',
      'Lab testing coordination',
      'Market-specific regulatory advice',
      'Documentation for customs clearance',
    ],
    imgId: 'svc-comp-img-p7q8r9',
    titleId: 'svc-comp-title',
    descId: 'svc-comp-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Full-Service China Sourcing Support
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process so you don't have to.
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-dark-text mb-2">
                    {svc.title}
                  </h2>
                  <p className="text-navy font-medium mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-body-text leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-body-text">
                        <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-md aspect-[4/3] ${isEven ? '' : 'lg:order-1'}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}] China manufacturing sourcing`}
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
      </section>

      <CtaBanner />
    </div>
  );
}
