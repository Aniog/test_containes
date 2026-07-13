import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Globe,
  CheckCircle, ArrowRight, FileText, Users, BarChart2
} from 'lucide-react';
import { SectionHeader, Card, Badge } from '@/components/ui/index.jsx';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist qualified manufacturers from our verified network, trade shows, and industry databases. Every supplier is pre-screened before we present them to you.',
    features: [
      'Product specification matching',
      'MOQ and pricing negotiation',
      'Supplier background checks',
      'Sample coordination',
      'Comparative supplier reports',
    ],
    color: 'text-[#1a4f8a]',
    bg: 'bg-blue-50',
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    tagline: 'Know exactly who you are buying from',
    desc: 'Our team conducts on-site factory audits to verify business legitimacy, production capacity, quality management systems, and compliance with international standards.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Worker welfare and safety check',
      'Certification verification (ISO, CE, etc.)',
    ],
    color: 'text-green-700',
    bg: 'bg-green-50',
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'We perform inspections at critical stages of production to catch defects early and ensure your goods meet agreed specifications before they leave the factory.',
    tagline: 'Catch problems before they become costly',
    features: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
    color: 'text-yellow-700',
    bg: 'bg-yellow-50',
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We act as your eyes and ears on the factory floor, providing regular updates and intervening when production deviates from the agreed schedule or quality standards.',
    tagline: 'Stay informed throughout production',
    features: [
      'Weekly production status reports',
      'On-site milestone visits',
      'Issue escalation and resolution',
      'Timeline management',
      'Direct communication with factory',
    ],
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    imgId: 'svc-production-img-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics chain from factory gate to your destination port or warehouse.',
    tagline: 'Smooth logistics from China to your door',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Sea, air, and express options',
      'Cargo tracking and updates',
    ],
    color: 'text-[#c0392b]',
    bg: 'bg-red-50',
    imgId: 'svc-shipping-img-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'compliance',
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'We help you navigate import regulations, product certification requirements, and labeling standards for your target market to avoid costly compliance failures.',
    tagline: 'Navigate regulations with confidence',
    features: [
      'CE, FCC, RoHS guidance',
      'Product labeling requirements',
      'Import duty classification',
      'Country-of-origin documentation',
      'Restricted substance compliance',
    ],
    color: 'text-teal-700',
    bg: 'bg-teal-50',
    imgId: 'svc-compliance-img-p7q8r9',
    titleId: 'svc-compliance-title',
    descId: 'svc-compliance-desc',
  },
];

const whyUs = [
  { icon: Users, title: 'Local Team in China', desc: 'Our staff are based in Guangzhou, Shenzhen, and Yiwu — the heart of Chinese manufacturing.' },
  { icon: FileText, title: 'Transparent Reporting', desc: 'Every audit, inspection, and factory visit comes with a detailed written report and photos.' },
  { icon: BarChart2, title: 'Data-Driven Decisions', desc: 'We use structured evaluation criteria to compare suppliers objectively, not just on price.' },
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
      <section className="bg-[#1a4f8a] py-16 md:py-20">
        <div className="section-container">
          <Badge variant="gold" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Full-Service China Sourcing
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            We cover every stage of the sourcing process — from finding the right supplier to getting your goods delivered safely and on time.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((svc, idx) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <svc.icon className={`w-6 h-6 ${svc.color}`} />
                  </div>
                  <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${svc.color}`}>{svc.tagline}</p>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-brand-body leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-brand-body text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#1a4f8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f6e] transition-colors text-sm"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-md ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why SSourcing China"
            title="What Sets Us Apart"
            subtitle="We're not a directory or a marketplace. We're a dedicated team working exclusively for you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <Card key={item.title} className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#1a4f8a]" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#a93226] transition-colors">
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
