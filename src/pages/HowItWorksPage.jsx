import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, Search, FileText, CheckCircle, ClipboardCheck, Truck, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: '01',
    icon: Send,
    title: 'Submit Your Requirements',
    description: 'Share your product specifications, target quantity, budget range, and quality expectations. The more details you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery terms',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification & Screening',
    description: 'We search our network and industry databases to find manufacturers that match your requirements. Each potential supplier goes through an initial screening process.',
    details: [
      'Database and network research',
      'Initial capability assessment',
      'Business license verification',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    step: '03',
    icon: FileText,
    title: 'Quotation & Sample Collection',
    description: 'We request quotations from shortlisted suppliers and collect product samples for your evaluation. All samples are checked before shipping to you.',
    details: [
      'RFQ distribution to shortlisted suppliers',
      'Price and term comparison',
      'Sample collection and initial check',
      'Consolidated sample shipping',
    ],
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Supplier Selection & Order Placement',
    description: 'After you review samples and quotations, we help you select the best supplier and manage the order placement process.',
    details: [
      'Sample evaluation support',
      'Final price negotiation',
      'Contract review and confirmation',
      'Order placement and deposit management',
    ],
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & Quality Control',
    description: 'We monitor production progress and conduct quality inspections at key stages to ensure everything stays on track.',
    details: [
      'Regular production updates',
      'During-production inspection',
      'Issue identification and resolution',
      'Pre-shipment quality inspection',
    ],
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Once production is complete and quality is confirmed, we handle all logistics to deliver your products safely.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation',
      'Container loading supervision',
      'Delivery tracking and coordination',
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
      <section className="bg-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A transparent, step-by-step process from your initial inquiry to final delivery. We keep you informed at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl font-bold text-primary-100">{step.step}</div>
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden aspect-video bg-gray-100"
                    data-strk-bg-id={`process-bg-${i + 1}`}
                    data-strk-bg={`[process-title-${i}] [process-desc-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <h3 id={`process-title-${i}`} className="sr-only">{step.title}</h3>
                  <p id={`process-desc-${i}`} className="sr-only">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Typical Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While timelines vary by product and order size, here's a general overview.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1-2 Weeks</div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Supplier Sourcing</h3>
              <p className="text-gray-600">Research, screening, and shortlisting qualified suppliers.</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2-4 Weeks</div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Sampling & Selection</h3>
              <p className="text-gray-600">Sample collection, evaluation, and supplier selection.</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3-8 Weeks</div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Production & Shipping</h3>
              <p className="text-gray-600">Manufacturing, quality control, and delivery coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us about your sourcing needs and we'll begin the process right away.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
