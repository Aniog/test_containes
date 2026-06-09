import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Package, CheckCircle, ArrowRight
} from 'lucide-react';
import SectionHeader, { CTAButton } from '@/components/ui/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified manufacturers from our network and trusted platforms. Every supplier is pre-screened for legitimacy, production capability, and export experience before we present them to you.',
    features: [
      'Product specification matching',
      'MOQ and pricing negotiation',
      'Supplier background checks',
      'Comparative supplier reports',
    ],
    imgId: 'svc-img-1-a1b2c3',
    titleId: 'svc-1-title',
    descId: 'svc-1-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, we visit the factory in person. Our audit covers business registration, production capacity, certifications, workforce conditions, and quality management systems.',
    features: [
      'On-site factory visits',
      'Business license verification',
      'ISO and compliance checks',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-img-2-d4e5f6',
    titleId: 'svc-2-title',
    descId: 'svc-2-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our inspectors conduct pre-shipment, during-production, and container loading inspections. We check against your specifications and international standards, providing a full inspection report.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling and defect reporting',
    ],
    imgId: 'svc-img-3-g7h8i9',
    titleId: 'svc-3-title',
    descId: 'svc-3-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed without being on the ground',
    desc: 'We act as your eyes and ears during manufacturing. Regular milestone updates, production photos, and issue escalation keep you in control of your order without the need to travel.',
    features: [
      'Weekly production status reports',
      'Milestone photo documentation',
      'Issue identification and resolution',
      'Timeline management',
    ],
    imgId: 'svc-img-4-j0k1l2',
    titleId: 'svc-4-title',
    descId: 'svc-4-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    desc: 'We coordinate with licensed freight forwarders for sea, air, and express shipments. We handle export documentation, customs declarations, and track your cargo from departure to arrival.',
    features: [
      'Sea, air, and express freight',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Real-time shipment tracking',
    ],
    imgId: 'svc-img-5-m3n4o5',
    titleId: 'svc-5-title',
    descId: 'svc-5-desc',
  },
  {
    id: 'sample-management',
    icon: Package,
    title: 'Sample Management',
    subtitle: 'Approve before you commit to bulk',
    desc: 'We request, review, and ship product samples to you before bulk production begins. Our team evaluates samples against your specs and provides structured feedback to the supplier.',
    features: [
      'Sample request and follow-up',
      'Quality evaluation against specs',
      'Feedback coordination with supplier',
      'Sample shipping to your location',
    ],
    imgId: 'svc-img-6-p6q7r8',
    titleId: 'svc-6-title',
    descId: 'svc-6-desc',
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
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive China sourcing support — from finding the right supplier to delivering goods to your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                      {svc.subtitle}
                    </span>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-text-muted leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-text-dark">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CTAButton to="/contact" variant="primary">
                      Inquire About This Service
                    </CTAButton>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-neutral-bg h-72 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
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

      {/* CTA */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-text-muted mb-8">
            Tell us about your product and sourcing goals. We will recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
