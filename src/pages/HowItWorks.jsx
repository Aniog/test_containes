import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, FileText, Search, Factory, ClipboardCheck, Truck } from 'lucide-react';

const phases = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Inquiry',
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    desc: 'Fill out our sourcing inquiry form with your product requirements, target price, estimated quantity, and any specific certifications or standards needed.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and order quantity',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Destination country and delivery timeline',
    ],
    time: 'Takes 5–10 minutes',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    desc: 'Our team researches the Chinese market to identify manufacturers that match your requirements. We check trade records, certifications, and production capacity.',
    details: [
      'Market research across relevant manufacturing hubs',
      'Supplier background and trade record checks',
      'Initial contact and capability assessment',
      'Shortlist of 3–5 qualified manufacturers',
    ],
    time: '3–5 business days',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Quotation & Factory Verification',
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    desc: 'We collect competitive quotes from shortlisted suppliers and, if required, conduct on-site factory audits to verify their capabilities and legitimacy.',
    details: [
      'Competitive price and MOQ comparison',
      'On-site factory audit (optional)',
      'Sample request and evaluation',
      'Supplier recommendation report',
    ],
    time: '5–10 business days',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    desc: 'Once you confirm a supplier, we assist with contract review, order placement, and production monitoring. We keep you updated at every milestone.',
    details: [
      'Purchase order and contract review support',
      'Production schedule confirmation',
      'Weekly production status updates',
      'On-site visits at key milestones',
    ],
    time: 'Ongoing during production',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    desc: 'Before goods are packed and shipped, our QC inspectors visit the factory to check product quality against your specifications using AQL sampling standards.',
    details: [
      'Pre-shipment inspection at factory',
      'AQL sampling and defect classification',
      'Photo documentation of findings',
      'Pass/fail report within 24 hours',
    ],
    time: '1–2 days before shipment',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    desc: 'We coordinate freight booking, export documentation, and container loading. You receive tracking updates until goods arrive at your destination.',
    details: [
      'Freight forwarder selection and booking',
      'Export customs documentation',
      'Container loading supervision',
      'Shipment tracking and delivery confirmation',
    ],
    time: 'Varies by destination',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Sourcing Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A transparent, step-by-step process from your first inquiry to final delivery. No surprises, no guesswork.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-gray-100 select-none">{phase.num}</span>
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <phase.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h2 id={phase.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{phase.title}</h2>
                <p id={phase.descId} className="text-gray-600 text-lg mb-6">{phase.desc}</p>
                <ul className="space-y-2 mb-5">
                  {phase.details.map((d) => (
                    <li key={d} className="flex gap-3 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{phase.time}</span>
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  data-strk-img-id={phase.imgId}
                  data-strk-img={`[${phase.descId}] [${phase.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={phase.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your sourcing inquiry and we'll get back to you within one business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
