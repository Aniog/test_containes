import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  MessageSquare, Search, ShieldCheck, Package, ClipboardCheck,
  Truck, CheckCircle2, ArrowRight, Clock, FileText, Users
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '1. Submit Your Requirements',
    desc: 'Share your product specifications, target price, order quantity, and any other requirements through our inquiry form or by email. The more detail you provide, the faster we can start.',
    details: [
      'Product description and specifications',
      'Target price and order quantity',
      'Quality standards and certifications needed',
      'Timeline requirements',
    ],
    imgId: 'step-inquiry-e1f2g3',
    titleId: 'step-inquiry-title',
    descId: 'step-inquiry-desc',
  },
  {
    icon: Search,
    title: '2. Supplier Search & Shortlisting',
    desc: 'We search our verified supplier network and identify the best matches for your requirements. We typically present 3-5 qualified options with detailed profiles for your review.',
    details: [
      'Search our database of 2,000+ verified suppliers',
      'Contact and pre-qualify potential matches',
      'Prepare supplier comparison profiles',
      'Present shortlisted options with recommendations',
    ],
    imgId: 'step-search-h4i5j6',
    titleId: 'step-search-title',
    descId: 'step-search-desc',
  },
  {
    icon: ShieldCheck,
    title: '3. Factory Verification & Audit',
    desc: 'Before you commit, we conduct on-site factory audits to verify capabilities, quality systems, and business legitimacy. You receive a detailed audit report with photos.',
    details: [
      'On-site factory visit and assessment',
      'Business license and registration check',
      'Production capacity and equipment review',
      'Quality management system evaluation',
    ],
    imgId: 'step-verify-k7l8m9',
    titleId: 'step-verify-title',
    descId: 'step-verify-desc',
  },
  {
    icon: Package,
    title: '4. Sample Development & Approval',
    desc: 'We coordinate sample production with the selected factory. Samples are shipped to you for review and approval before mass production begins.',
    details: [
      'Coordinate sample production with factory',
      'Review sample quality before shipping',
      'Ship samples to you for approval',
      'Manage revisions until you are satisfied',
    ],
    imgId: 'step-sample-n0o1p2',
    titleId: 'step-sample-title',
    descId: 'step-sample-desc',
  },
  {
    icon: ClipboardCheck,
    title: '5. Production & Quality Control',
    desc: 'During mass production, we monitor progress and conduct inspections at key stages. You receive regular updates with photos and videos from the production floor.',
    details: [
      'Monitor production progress weekly',
      'Pre-production material inspection',
      'During-production quality checks',
      'Pre-shipment final inspection (AQL)',
    ],
    imgId: 'step-production-q3r4s5',
    titleId: 'step-production-title',
    descId: 'step-production-desc',
  },
  {
    icon: Truck,
    title: '6. Shipping & Delivery',
    desc: 'We coordinate all logistics from factory to your door. This includes freight booking, customs documentation, and real-time shipment tracking.',
    details: [
      'Freight booking and carrier selection',
      'Customs documentation and compliance',
      'Shipment tracking and status updates',
      'Delivery confirmation and handover',
    ],
    imgId: 'step-shipping-t6u7v8',
    titleId: 'step-shipping-title',
    descId: 'step-shipping-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Process</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process that takes you from initial inquiry to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div key={step.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 id={step.titleId} className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden h-56 lg:h-72 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Typical Timeline</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Week 1-2</h3>
              <p className="text-gray-600 text-sm">Inquiry review, supplier search, and shortlisting</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <FileText className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Week 2-6</h3>
              <p className="text-gray-600 text-sm">Factory verification, sample development, and approval</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Week 6-14</h3>
              <p className="text-gray-600 text-sm">Mass production, QC inspections, and shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Submit your sourcing inquiry and receive a free assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
