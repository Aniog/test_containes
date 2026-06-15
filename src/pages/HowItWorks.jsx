import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '../components/shared/CtaBanner';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Fill out our sourcing inquiry form with your product details — what you need, target price, quantity, timeline, and any specific requirements. The more detail you provide, the faster we can help.',
    details: [
      'Product name and description',
      'Target unit price and order quantity',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline',
      'Any existing supplier contacts (optional)',
    ],
    imgQuery: 'business person filling out online form laptop',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'We Review & Confirm Scope',
    description: 'Within 24 hours, your dedicated sourcing manager reviews your request and contacts you to clarify any details. We confirm the scope of work and provide a transparent fee structure before proceeding.',
    details: [
      'Dedicated sourcing manager assigned',
      'Scope of work confirmed',
      'Fee structure provided upfront',
      'Timeline agreed',
    ],
    imgQuery: 'business meeting video call professional discussion',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Supplier Research & Shortlisting',
    description: 'We search our verified supplier database and conduct additional market research to identify 3–5 qualified manufacturers. Each candidate is screened for production capability, certifications, and reliability.',
    details: [
      'Database search across verified suppliers',
      'Initial screening calls with factories',
      'Capability and certification verification',
      'Supplier profile reports prepared',
    ],
    imgQuery: 'China factory manufacturing production floor workers',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Factory Audit (Optional)',
    description: 'For new suppliers or high-value orders, we conduct an on-site factory audit. Our team visits the facility, verifies business registration, inspects production equipment, and assesses quality management practices.',
    details: [
      'On-site factory visit',
      'Business license and certification check',
      'Production capacity assessment',
      'Detailed audit report with photos',
    ],
    imgQuery: 'factory audit quality inspector checking production line',
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Sampling & Approval',
    description: 'We coordinate sample production with the selected factory and arrange shipping to your location. We review samples against your specifications before they leave China and manage revision rounds until you approve.',
    details: [
      'Sample production coordination',
      'Pre-shipment sample review',
      'Revision management',
      'Final sample approval confirmation',
    ],
    imgQuery: 'product sample review quality check packaging',
  },
  {
    id: 'step-6',
    number: '06',
    title: 'Order Placement & Production Monitoring',
    description: 'Once you approve the sample and confirm the order, we place it with the factory on your behalf. We track production milestones and provide regular updates so you always know where your order stands.',
    details: [
      'Purchase order placement',
      'Production milestone tracking',
      'Regular status updates in English',
      'Issue escalation and resolution',
    ],
    imgQuery: 'production monitoring factory order tracking management',
  },
  {
    id: 'step-7',
    number: '07',
    title: 'Quality Inspection',
    description: 'Before goods are shipped, we conduct a pre-shipment inspection using AQL sampling methodology. We check product quality, quantity, packaging, and labeling against your approved specifications.',
    details: [
      'AQL-based sampling inspection',
      'Product quality and specification check',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
    imgQuery: 'quality control inspector checking products warehouse',
  },
  {
    id: 'step-8',
    number: '08',
    title: 'Shipping & Delivery',
    description: 'We coordinate with your freight forwarder, verify export documentation, and supervise container loading. We keep you updated until your goods are on their way and all documents are in order.',
    details: [
      'Freight forwarder coordination',
      'Export documentation review',
      'Container loading supervision',
      'Shipping confirmation and tracking',
    ],
    imgQuery: 'shipping container port cargo logistics China export',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step sourcing process designed to reduce risk and keep you in control at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                      <h2 id={`${step.id}-title`} className="text-xl md:text-2xl font-bold text-primary-dark">{step.title}</h2>
                    </div>
                    <p id={`${step.id}-desc`} className="text-gray-600 leading-relaxed mb-5">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`how-step-img-${step.id}`}
                      data-strk-img={`[${step.id}-desc] [${step.id}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        subtitle="Submit your sourcing request today and we'll get back to you within 24 hours."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
