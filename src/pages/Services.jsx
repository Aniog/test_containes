import { useEffect, useRef } from 'react';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button, SectionHeader, Card, PageHero } from '@/components/ui/index.jsx';

const services = [
  {
    id: 'svc-sourcing',
    imgId: 'svc-sourcing-img-3a7b1c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer — fast.',
    desc: 'We research and shortlist verified manufacturers that match your product specifications, target price, MOQ, and delivery timeline. Our network spans all major Chinese manufacturing hubs including Guangzhou, Shenzhen, Yiwu, Dongguan, and Ningbo.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      '3–5 qualified supplier shortlist',
      'Comparative quotation summary',
    ],
  },
  {
    id: 'svc-verify',
    imgId: 'svc-verify-img-9c4d2e',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    tagline: 'Know exactly who you\'re buying from.',
    desc: 'Before you commit to an order, we conduct on-site factory audits to verify the supplier\'s legitimacy, production capacity, certifications, and working conditions. We provide a detailed audit report with photos and a risk assessment.',
    features: [
      'Business license verification',
      'On-site factory visit & photos',
      'Production capacity assessment',
      'Certification review (ISO, BSCI, etc.)',
      'Detailed audit report',
    ],
  },
  {
    id: 'svc-qc',
    imgId: 'svc-qc-img-5e8f3a',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they reach your warehouse.',
    desc: 'Our trained QC inspectors conduct pre-shipment and in-line inspections following AQL international standards. We check product dimensions, functionality, packaging, labeling, and quantity — and provide a full inspection report within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling methodology',
      'Defect classification & photos',
      'Pass/fail recommendation',
    ],
  },
  {
    id: 'svc-production',
    imgId: 'svc-production-img-2b6c4d',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay in control without being on-site.',
    desc: 'We act as your eyes and ears on the factory floor. From sample approval to final production, we monitor milestones, communicate with the factory in Chinese, and resolve issues before they become costly delays.',
    features: [
      'Sample review & approval',
      'Production milestone tracking',
      'Weekly progress reports',
      'Issue escalation & resolution',
      'Final quantity confirmation',
    ],
  },
  {
    id: 'svc-shipping',
    imgId: 'svc-shipping-img-7f1a9b',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your door.',
    desc: 'We coordinate with trusted freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs declarations, and keep you informed at every stage of transit.',
    features: [
      'Freight forwarder coordination',
      'Sea, air & express options',
      'Export documentation support',
      'Customs clearance guidance',
      'Shipment tracking & updates',
    ],
  },
  {
    id: 'svc-consolidation',
    imgId: 'svc-consolidation-img-4d2e8f',
    titleId: 'svc-consolidation-title',
    descId: 'svc-consolidation-desc',
    icon: Package,
    title: 'Consolidation & FBA Prep',
    tagline: 'Combine orders, reduce shipping costs.',
    desc: 'If you\'re ordering from multiple suppliers, we consolidate your goods into a single shipment to reduce freight costs. We also offer Amazon FBA preparation including labeling, poly-bagging, and carton marking.',
    features: [
      'Multi-supplier consolidation',
      'Repackaging & relabeling',
      'Amazon FBA prep services',
      'FNSKU labeling',
      'Carton marking & documentation',
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Our Services"
        title="Full-Service China Sourcing — From Supplier to Shipment"
        subtitle="We handle every step of the sourcing process so you can focus on growing your business."
      />

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-steel" />
                </div>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-2">
                  {svc.title}
                </h2>
                <p className="text-brand-red font-medium text-sm mb-4">{svc.tagline}</p>
                <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" variant="primary">
                  Request This Service <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
