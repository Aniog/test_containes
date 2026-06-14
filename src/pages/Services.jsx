import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, BarChart3, Truck, ShieldCheck,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/shared/CtaBanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description:
      'We research and identify qualified Chinese manufacturers that match your product specifications, quality requirements, MOQ, and target price. Our sourcing process draws on an established network of verified suppliers across major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    includes: [
      'Product specification review and sourcing brief',
      'Supplier research across verified databases and trade shows',
      'Shortlist of 3–5 qualified manufacturers with profiles',
      'Initial price and lead time comparison',
      'Supplier communication and NDA management',
    ],
    imgId: 'svc-sourcing-img-j1k2l3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from before you commit',
    description:
      'Our team visits factories in person to verify their legitimacy, production capabilities, and compliance with your standards. We provide a detailed written audit report with photos and a clear recommendation.',
    includes: [
      'Business license and export certification verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker welfare and safety conditions check',
      'Written audit report with photos and scoring',
    ],
    imgId: 'svc-audit-img-m4n5o6',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    description:
      'We conduct independent quality inspections at key stages of production. Our inspectors follow internationally recognized AQL sampling standards and provide detailed reports with photos and pass/fail results.',
    includes: [
      'Pre-production inspection (raw materials and components)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI) — most common',
      'Container loading supervision (CLS)',
      'AQL-based sampling with detailed photo reports',
    ],
    imgId: 'svc-qc-img-p7q8r9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: BarChart3,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production cycle',
    description:
      'We act as your eyes and ears on the factory floor. Our team monitors production progress, communicates with the factory on your behalf, and escalates issues before they become costly problems.',
    includes: [
      'Production schedule tracking and milestone updates',
      'Regular written and photo progress reports',
      'Issue escalation and resolution with factory',
      'Sample approval coordination',
      'Final production sign-off before shipment',
    ],
    imgId: 'svc-prod-img-s1t2u3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods moving on time',
    description:
      'We coordinate with freight forwarders, prepare export documentation, and ensure your cargo is ready for departure. We work with your chosen forwarder or can recommend trusted partners for FCL, LCL, and air freight.',
    includes: [
      'Export documentation preparation (packing list, commercial invoice)',
      'Coordination with freight forwarder',
      'Container loading supervision',
      'Cargo readiness confirmation',
      'Shipping milestone updates',
    ],
    imgId: 'svc-ship-img-v4w5x6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'supplier-negotiation',
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    subtitle: 'Get better terms with local expertise',
    description:
      'Our Mandarin-speaking team negotiates directly with factories on your behalf, leveraging local market knowledge to secure competitive pricing, favorable payment terms, and realistic lead times.',
    includes: [
      'Price benchmarking against market rates',
      'Payment term negotiation',
      'Lead time and MOQ negotiation',
      'Contract and purchase order review',
      'Ongoing supplier relationship management',
    ],
    imgId: 'svc-nego-img-y7z8a9',
    titleId: 'svc-nego-title',
    descId: 'svc-nego-desc',
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
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Full-Service China Sourcing
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              From finding the right supplier to coordinating your shipment — we handle every step of the sourcing process so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-red" />
                    </div>
                    <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">
                      {svc.subtitle}
                    </span>
                  </div>
                  <h2 id={svc.titleId} className="text-3xl font-bold text-brand-navy mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-brand-slate leading-relaxed mb-6">{svc.description}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0 mt-1" />
                        <span className="text-brand-slate text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Enquire About This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden h-72 lg:h-96 bg-gray-100 ${!isEven ? 'lg:order-1' : ''}`}>
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

      <CtaBanner
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your project and we'll recommend the right combination of services for your situation."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
