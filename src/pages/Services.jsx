import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship,
  CheckCircle, ArrowRight, FileText, Camera, Truck
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SectionHeader, CTAButton, Card, TrustBar } from '@/components/ui/SharedComponents';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer for your product',
    desc: 'We research and identify manufacturers that match your product specifications, quality standards, MOQ requirements, and budget. Our team has established relationships with suppliers across major manufacturing hubs in China.',
    includes: [
      'Product brief analysis and market research',
      'Identification of 3–5 qualified suppliers',
      'Initial supplier screening and communication',
      'Price negotiation and comparison report',
      'Supplier recommendation with full profiles',
    ],
    imgId: 'svc-img-sourcing-ss1',
    titleId: 'svc-title-sourcing',
    descId: 'svc-desc-sourcing',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    tagline: 'Know exactly who you\'re buying from',
    desc: 'Before you place an order, we visit the factory in person to verify their capabilities, certifications, workforce, and production processes. Our audit reports give you the information you need to make a confident decision.',
    includes: [
      'On-site factory visit and inspection',
      'Verification of business licenses and certifications',
      'Assessment of production capacity and equipment',
      'Worker conditions and compliance review',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-img-factory-ss2',
    titleId: 'svc-title-factory',
    descId: 'svc-desc-factory',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they reach your customers',
    desc: 'Our inspectors check your goods against your specifications at key stages of production. We use internationally recognized inspection standards (AQL) and provide detailed reports with photos and measurements.',
    includes: [
      'Pre-production inspection (materials and components)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling and defect classification',
    ],
    imgId: 'svc-img-qc-ss3',
    titleId: 'svc-title-qc',
    descId: 'svc-desc-qc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay informed at every stage of production',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production progress, communicates with the factory on your behalf, and alerts you to any issues before they become costly delays.',
    includes: [
      'Regular production status updates',
      'Factory communication in Mandarin',
      'Issue identification and resolution',
      'Photo and video documentation',
      'Timeline management and delay prevention',
    ],
    imgId: 'svc-img-prod-ss4',
    titleId: 'svc-title-prod',
    descId: 'svc-desc-prod',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    tagline: 'Get your goods delivered without the headaches',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and ensure your shipment complies with import regulations in your country. Whether you need sea freight, air freight, or express delivery, we handle the logistics.',
    includes: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance coordination',
      'Delivery tracking and updates',
    ],
    imgId: 'svc-img-ship-ss5',
    titleId: 'svc-title-ship',
    descId: 'svc-desc-ship',
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
      <section className="bg-brand-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We provide end-to-end sourcing support — from finding the right supplier to getting your goods delivered. Each service is designed to reduce risk and save you time.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((svc, index) => {
              const Icon = svc.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={svc.titleId} className="text-3xl font-bold text-brand-dark mb-2 tracking-tight">{svc.title}</h2>
                    <p className="text-brand-orange font-semibold text-sm mb-4">{svc.tagline}</p>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {svc.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <CTAButton to="/contact" variant="primary">
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </CTAButton>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
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
      <section className="bg-brand-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Not sure which service you need?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
