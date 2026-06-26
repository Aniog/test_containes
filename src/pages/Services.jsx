import { useEffect, useRef } from 'react';
import {
  Search, Factory, ClipboardCheck, TrendingUp, Ship, ShieldCheck,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    id: 'svc-sourcing',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-img-sourcing-4a2b1c',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget. Our network spans all major Chinese manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Supplier database search & outreach',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified factories',
      'Supplier comparison report',
    ],
  },
  {
    id: 'svc-factory',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-img-factory-7d3e2f',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their capabilities, certifications, production capacity, and quality management systems.',
    features: [
      'On-site factory visit',
      'Business license & certification check',
      'Production capacity assessment',
      'Quality management system review',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'svc-qc',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-img-qc-9b5c4d',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Our inspectors conduct thorough checks at every stage of production to ensure your goods meet your specifications and quality standards before they leave China.',
    features: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection report with photos',
    ],
  },
  {
    id: 'svc-production',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-img-production-2e6f7a',
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We act as your eyes and ears on the ground, monitoring production progress, communicating with the factory, and flagging issues before they become costly problems.',
    features: [
      'Regular production status updates',
      'On-site production monitoring',
      'Issue identification & resolution',
      'Timeline management',
      'Weekly progress reports',
    ],
  },
  {
    id: 'svc-shipping',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-img-shipping-1c8d9e',
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics process from factory gate to your destination port or warehouse.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo tracking & updates',
      'Incoterms guidance (FOB, CIF, EXW)',
    ],
  },
  {
    id: 'svc-compliance',
    titleId: 'svc-compliance-title',
    descId: 'svc-compliance-desc',
    imgId: 'svc-img-compliance-5f0a3b',
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    desc: 'We guide you through the certification and compliance requirements for your target market, helping you avoid costly delays or rejections at customs.',
    features: [
      'CE, FCC, RoHS, REACH guidance',
      'Product labeling requirements',
      'Import regulation advice',
      'Third-party lab testing coordination',
      'Compliance documentation review',
    ],
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
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Service China Sourcing Solutions
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From finding the right supplier to getting goods delivered — we provide every service
              you need to source from China with confidence and control.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
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
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-brand-gray leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-brand-dark">
                          <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-md h-72 bg-brand-light ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
