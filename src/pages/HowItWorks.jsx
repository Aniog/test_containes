import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Search, ShieldCheck, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/home/InquiryForm';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Sourcing Request',
    duration: '< 10 minutes',
    description: 'Fill out our sourcing request form with your product details, specifications, target price, and quantity. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target unit price and MOQ',
      'Destination country and delivery timeline',
      'Any certifications required (CE, RoHS, FDA, etc.)',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    duration: '3–5 business days',
    description: 'Our sourcing team researches our verified supplier network and industry contacts to identify manufacturers that match your requirements. We evaluate each supplier on capability, pricing, and reliability.',
    details: [
      'Search across verified supplier database',
      'Evaluate production capability and capacity',
      'Compare pricing and MOQ across suppliers',
      'Shortlist 3–5 qualified manufacturers',
      'Prepare supplier comparison report',
    ],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    duration: '3–7 business days',
    description: 'Before recommending a supplier, we verify their legitimacy through document checks and, where needed, on-site factory visits. You receive a full audit report for each shortlisted supplier.',
    details: [
      'Business license and export license verification',
      'Certification checks (ISO, CE, etc.)',
      'On-site factory visit (if required)',
      'Production capacity and workforce assessment',
      'Written audit report with photos',
    ],
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Sample & Price Negotiation',
    duration: '7–14 business days',
    description: 'We request samples from shortlisted suppliers, review quality against your specifications, and negotiate pricing and payment terms on your behalf. You approve the sample before production begins.',
    details: [
      'Sample request and coordination',
      'Sample quality review against specs',
      'Price and payment term negotiation',
      'Sample photos and evaluation report',
      'Buyer approval before production',
    ],
  },
  {
    number: '05',
    icon: Clock,
    title: 'Production Monitoring',
    duration: 'Throughout production',
    description: 'Once you confirm the order, we monitor production progress with regular updates. Our team communicates with the factory in Mandarin and escalates any issues before they become problems.',
    details: [
      'Weekly production status reports',
      'Factory communication in Mandarin',
      'Timeline tracking and delay alerts',
      'During-production inspection (DUPRO)',
      'Photo and video progress updates',
    ],
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Pre-Shipment Inspection',
    duration: '1–2 days before shipment',
    description: 'Before goods are loaded, our QC inspector conducts a final pre-shipment inspection. We check quantity, quality, packaging, and labeling against your specifications and provide a detailed report.',
    details: [
      'Quantity and carton count verification',
      'Product quality and defect check',
      'Packaging and labeling inspection',
      'Measurement and weight verification',
      'Detailed inspection report with photos',
    ],
  },
  {
    number: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Depends on destination',
    description: 'We coordinate with freight forwarders to arrange the most suitable shipping option for your order. We handle export documentation and keep you updated until goods arrive at your destination.',
    details: [
      'Freight forwarder coordination',
      'FCL, LCL, or air freight options',
      'Export documentation preparation',
      'Customs declaration support',
      'Shipment tracking until delivery',
    ],
  },
];

export default function HowItWorks() {
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
            How We Source for You
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            A structured, transparent 7-step process designed to reduce risk and give you full visibility from inquiry to delivery.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Sourcing Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-10 md:gap-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div>
                        <h2 className="text-brand-navy font-bold text-xl md:text-2xl">{step.title}</h2>
                        <span className="text-brand-orange text-xs font-semibold flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-brand-muted leading-relaxed mb-5">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-brand-text text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-brand-blue-light rounded-2xl p-8 flex items-center justify-center min-h-48 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-10 h-10 text-brand-blue" />
                      </div>
                      <p className="text-brand-navy font-semibold text-sm">Step {step.number}</p>
                      <p className="text-brand-muted text-xs mt-1">{step.duration}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InquiryForm />
    </div>
  );
}
