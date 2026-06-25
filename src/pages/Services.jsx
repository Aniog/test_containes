import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe,
  CheckCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, MOQ, and delivery requirements. Our network spans Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Manufacturer database research',
      'Initial supplier screening',
      '3–5 qualified supplier shortlist',
      'Comparative quote analysis',
    ],
    titleId: 'svc-p-sourcing-title',
    descId: 'svc-p-sourcing-desc',
    imgId: 'svc-p-sourcing-img-aa1bb2',
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we conduct on-site factory audits to verify their business registration, production capacity, equipment, workforce, certifications, and compliance with your standards.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'ISO / CE / other certification check',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-p-verify-title',
    descId: 'svc-p-verify-desc',
    imgId: 'svc-p-verify-img-cc3dd4',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our inspectors conduct pre-shipment and in-line quality checks following AQL international standards. We check dimensions, functionality, packaging, labeling, and appearance against your approved samples.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling methodology',
      'Defect classification and reporting',
      'Pass/fail recommendation',
    ],
    titleId: 'svc-p-qc-title',
    descId: 'svc-p-qc-desc',
    imgId: 'svc-p-qc-img-ee5ff6',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the factory floor. Our team provides regular production updates, attends key milestones, and escalates issues before they become costly delays.',
    features: [
      'Weekly production status reports',
      'On-site milestone visits',
      'Early delay detection',
      'Material and component verification',
      'Direct communication with factory',
    ],
    titleId: 'svc-p-prod-title',
    descId: 'svc-p-prod-desc',
    imgId: 'svc-p-prod-img-gg7hh8',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your door',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipments. We handle export documentation, customs clearance support, and track your cargo until delivery.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-p-ship-title',
    descId: 'svc-p-ship-desc',
    imgId: 'svc-p-ship-img-ii9jj0',
  },
  {
    id: 'compliance',
    icon: Globe,
    title: 'Trade Compliance',
    subtitle: 'Navigate regulations with confidence',
    desc: 'We help you understand import regulations, product safety standards, and labeling requirements for your target market — whether you are selling in the EU, US, Australia, or elsewhere.',
    features: [
      'Market-specific compliance guidance',
      'CE, FCC, RoHS, and other standards',
      'Product labeling requirements',
      'HS code classification support',
      'Import duty estimation',
    ],
    titleId: 'svc-p-comp-title',
    descId: 'svc-p-comp-desc',
    imgId: 'svc-p-comp-img-kk1ll2',
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
      <section className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">End-to-End China Sourcing Services</h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-7">
              We cover every stage of the sourcing process — from finding the right supplier to getting your goods delivered. One team, full visibility, no surprises.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svc.icon className="w-7 h-7 text-[#2563eb]" />
                </div>
                <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-2">{svc.subtitle}</p>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-2xl overflow-hidden bg-slate-100 aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2563eb]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 mb-7">Tell us about your sourcing project and we'll recommend the right approach for your situation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1a4f8a] font-bold px-7 py-3.5 rounded-lg transition-colors no-underline"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
