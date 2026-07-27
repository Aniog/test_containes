import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Send,
  Search,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Truck,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: Send,
    step: '1',
    title: 'Submit Your Inquiry',
    description: 'Share your product requirements, including specifications, quantity, target price, and timeline. The more detail you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget',
      'Quality standards and certifications required',
      'Preferred timeline',
    ],
  },
  {
    icon: Search,
    step: '2',
    title: 'Supplier Identification & Verification',
    description: 'We search for suitable manufacturers, evaluate their capabilities, and conduct on-site verification to ensure they are legitimate and qualified.',
    details: [
      'Search across verified supplier databases',
      'Initial capability and capacity assessment',
      'On-site factory audit',
      'Business license and certification verification',
      'Quotation collection and comparison',
    ],
  },
  {
    icon: ShieldCheck,
    step: '3',
    title: 'Sample Evaluation & Supplier Selection',
    description: 'We coordinate sample production, evaluate quality on your behalf, and help you select the best supplier based on quality, price, and reliability.',
    details: [
      'Sample request and coordination',
      'Sample inspection and testing',
      'Detailed feedback to supplier',
      'Supplier recommendation report',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Order Placement & Production Follow-up',
    description: 'Once you approve a supplier, we help place the order and monitor production progress to ensure everything stays on track.',
    details: [
      'Purchase order coordination',
      'Production schedule tracking',
      'Regular progress updates',
      'Issue identification and resolution',
    ],
  },
  {
    icon: TrendingUp,
    step: '5',
    title: 'Quality Inspection',
    description: 'Before goods are shipped, we conduct a thorough pre-shipment inspection to verify quality, quantity, and packaging meet your requirements.',
    details: [
      'Pre-shipment quality inspection',
      'Quantity and packaging verification',
      'Functional testing where applicable',
      'Detailed inspection report with photos',
    ],
  },
  {
    icon: Truck,
    step: '6',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, from freight forwarding to customs documentation, ensuring your goods arrive safely and on time.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Delivery tracking and updates',
    ],
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            A clear, structured process from your first inquiry to final delivery.
            We keep you informed at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-blue-700" />
                    <h2 className="text-xl font-semibold text-slate-800">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your sourcing inquiry and we will begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
