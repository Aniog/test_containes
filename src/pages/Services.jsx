import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Globe,
  CheckCircle, ArrowRight
} from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer, fast.',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality requirements, and budget. Our supplier database and industry contacts allow us to identify suitable factories quickly — saving you weeks of research.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified factories',
      'Comparative supplier report',
    ],
    imgId: 'srv-sourcing-img-a1b2c3',
    titleId: 'srv-sourcing-title',
    descId: 'srv-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    tagline: 'Know who you\'re buying from.',
    desc: 'Before you commit to an order, we conduct on-site factory audits to verify production capacity, quality management systems, certifications, and business legitimacy. Our detailed audit reports give you the facts you need to make informed decisions.',
    features: [
      'On-site factory visit',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Certification and compliance check',
      'Detailed written audit report',
    ],
    imgId: 'srv-factory-img-d4e5f6',
    titleId: 'srv-factory-title',
    descId: 'srv-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they ship.',
    desc: 'Our local QC inspectors conduct pre-shipment and in-line inspections at the factory. We check product quality against your specifications, test functionality, and verify packaging — so you know exactly what\'s in the container before it leaves China.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'Product specification compliance check',
      'Defect classification and reporting',
      'Packaging and labeling verification',
      'Photo and video documentation',
    ],
    imgId: 'srv-qc-img-g7h8i9',
    titleId: 'srv-qc-title',
    descId: 'srv-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    tagline: 'Stay informed at every stage.',
    desc: 'We act as your eyes and ears on the ground throughout the production process. Regular updates, factory visits, and proactive issue resolution ensure your order stays on track and meets your quality standards.',
    features: [
      'Production schedule monitoring',
      'Regular progress updates with photos',
      'Issue identification and resolution',
      'Material and component verification',
      'Timeline management',
    ],
    imgId: 'srv-prod-img-j1k2l3',
    titleId: 'srv-prod-title',
    descId: 'srv-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory to your door.',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics of getting your goods from the factory to your destination. We work with both sea freight and air freight, and can consolidate shipments from multiple suppliers.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight and air freight options',
      'Shipment consolidation',
      'Customs clearance support',
      'Delivery tracking and updates',
    ],
    imgId: 'srv-ship-img-m4n5o6',
    titleId: 'srv-ship-title',
    descId: 'srv-ship-desc',
  },
  {
    id: 'private-label-oem',
    icon: Globe,
    title: 'Private Label & OEM',
    tagline: 'Build your own product line.',
    desc: 'From product concept to branded packaging, we help you develop and launch your own private label or OEM product line from China. We manage the entire development process, including design, prototyping, sampling, and production.',
    features: [
      'Product concept development',
      'OEM manufacturer identification',
      'Prototype and sample management',
      'Branding and packaging design coordination',
      'Compliance and certification support',
      'Full production management',
    ],
    imgId: 'srv-oem-img-p7q8r9',
    titleId: 'srv-oem-title',
    descId: 'srv-oem-desc',
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
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services for Global Buyers
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            End-to-end sourcing support — from finding the right supplier to delivering goods to your warehouse.
          </p>
          <CTAButton to="/contact" variant="primary" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map(({ id, icon: Icon, title, tagline, desc, features, imgId, titleId, descId }, index) => (
              <div
                key={id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">{tagline}</span>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{title}</h2>
                  <p id={descId} className="text-gray-500 leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CTAButton to="/contact" variant="secondary" showArrow>
                    Enquire About This Service
                  </CTAButton>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 mb-8">
            Tell us about your sourcing project and we'll recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" variant="primary" showArrow>
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
