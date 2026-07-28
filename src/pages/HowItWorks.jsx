import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import {
  Send,
  Search,
  FileText,
  ClipboardCheck,
  Ship,
  ArrowRight,
  CheckCircle,
  Clock,
  MessageSquare,
} from 'lucide-react';

const HowItWorksPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      number: '01',
      icon: Send,
      title: 'Submit Your Requirements',
      description: 'Tell us what you need. Share your product specifications, target quantity, budget range, and timeline. The more details you provide, the more accurate our sourcing will be.',
      details: [
        'Product specifications and drawings',
        'Target quantity and budget range',
        'Quality standards and certifications needed',
        'Preferred timeline and delivery date',
      ],
    },
    {
      number: '02',
      icon: Search,
      title: 'Supplier Research & Matching',
      description: 'Our team researches the market and identifies manufacturers that match your criteria. We evaluate their capabilities, certifications, and track record.',
      details: [
        'Market research across multiple regions',
        'Supplier capability assessment',
        'Certification and compliance verification',
        'Initial price and lead time comparison',
      ],
    },
    {
      number: '03',
      icon: FileText,
      title: 'Quotation & Sampling',
      description: 'We present you with a shortlist of verified suppliers along with competitive quotations. You can request samples to evaluate quality before committing.',
      details: [
        'Detailed quotation comparison',
        'Sample coordination and shipping',
        'Quality evaluation support',
        'Supplier recommendation with rationale',
      ],
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Production & Quality Control',
      description: 'Once you approve a supplier, we monitor production and conduct inspections at key milestones to ensure everything meets your standards.',
      details: [
        'Production schedule confirmation',
        'Pre-production material inspection',
        'During-production quality checks',
        'Pre-shipment final inspection',
      ],
    },
    {
      number: '05',
      icon: Ship,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics, prepare customs documentation, and track your shipment until it reaches your destination.',
      details: [
        'Freight forwarding arrangement',
        'Customs documentation preparation',
        'Container loading supervision',
        'Shipment tracking and delivery confirmation',
      ],
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Our Sourcing Process Works</h1>
            <p className="text-lg text-slate-300">
              A transparent, step-by-step approach that keeps you informed at every stage. From initial inquiry to final delivery, we handle the complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-blue-700/20">{step.number}</span>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-700" />
                    </div>
                  </div>
                  <h2 className="heading-2 mb-4">{step.title}</h2>
                  <p className="text-body mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="aspect-video bg-slate-100 rounded-xl overflow-hidden"
                    data-strk-bg-id={`step-bg-${index + 1}`}
                    data-strk-bg={`[step-title-${index}] [process-subtitle] [process-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <h3 id={`step-title-${index}`} className="sr-only">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Typical Timeline</h2>
            <p className="text-body">
              While timelines vary by product and complexity, here is a general overview of what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-default text-center">
              <Clock className="w-8 h-8 text-blue-700 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Week 1-2</h3>
              <p className="text-slate-600 text-sm">Supplier research, verification, and quotation collection</p>
            </div>
            <div className="card-default text-center">
              <MessageSquare className="w-8 h-8 text-blue-700 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Week 2-4</h3>
              <p className="text-slate-600 text-sm">Sample evaluation, negotiation, and supplier selection</p>
            </div>
            <div className="card-default text-center">
              <Ship className="w-8 h-8 text-blue-700 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Week 4+</h3>
              <p className="text-slate-600 text-sm">Production, quality control, and shipping coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Submit your requirements and we will begin the sourcing process within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
