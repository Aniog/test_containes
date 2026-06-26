import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search, Eye, ClipboardCheck, Package, Ship, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need: product details, quantity, quality standards, and target price. We review your request within 24 hours.',
    details: [
      'Product specifications and drawings',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery terms',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We search our verified supplier network and shortlist the best manufacturers that match your requirements.',
    details: [
      'Search across 2,000+ verified suppliers',
      'Evaluate production capabilities and capacity',
      'Compare pricing and lead times',
      'Present shortlist with detailed comparison',
    ],
  },
  {
    icon: Eye,
    step: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits to verify the factory\'s credentials, production capacity, and quality systems.',
    details: [
      'Business license and registration check',
      'Production facility walkthrough',
      'Quality management system review',
      'Social compliance and working conditions',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quotation',
    description: 'We arrange samples for your approval and negotiate the best pricing on your behalf.',
    details: [
      'Sample request and evaluation',
      'Quality comparison against your standards',
      'Price negotiation with suppliers',
      'Final quotation with transparent breakdown',
    ],
  },
  {
    icon: Package,
    step: '05',
    title: 'Production & QC',
    description: 'We monitor production progress and perform quality inspections at key stages before shipment.',
    details: [
      'Production kickoff confirmation',
      'Regular progress updates and photos',
      'During-production quality checks',
      'Pre-shipment inspection with full report',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics, customs documentation, and coordinate delivery to your destination.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation preparation',
      'Cargo insurance options',
      'Tracking and delivery confirmation',
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
            <h1 id="hiw-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              A Clear, Transparent Sourcing Process
            </h1>
            <p id="hiw-hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8">
              From your initial inquiry to final delivery, we keep you informed at every stage. No surprises, no hidden steps.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-slate-100">{step.step}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden border border-slate-200 shadow-lg"
                    data-strk-bg-id={`hiw-bg-${index}-d4e5f6`}
                    data-strk-bg={`[${step.title}] [hiw-hero-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                    style={{ minHeight: '280px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Typical Project Timeline</h2>
            <p className="text-lg text-slate-600">
              Every project is different, but here is a general timeline for a standard sourcing project.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { phase: 'Requirements Review', duration: '1-2 days', icon: Clock },
              { phase: 'Supplier Shortlisting', duration: '3-7 days', icon: Search },
              { phase: 'Factory Verification', duration: '5-10 days', icon: Eye },
              { phase: 'Sample Approval', duration: '7-14 days', icon: ClipboardCheck },
              { phase: 'Production', duration: '15-45 days', icon: Package },
              { phase: 'Quality Inspection', duration: '2-3 days', icon: CheckCircle },
              { phase: 'Shipping', duration: '15-35 days', icon: Ship },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-slate-900">{item.phase}</h3>
                </div>
                <span className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Communication Throughout the Process</h2>
            <p className="text-lg text-slate-600">
              We believe in keeping you informed. Here is how we communicate at each stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Weekly Updates', desc: 'Regular progress reports with photos and status updates from the factory floor.' },
              { title: 'Dedicated Contact', desc: 'A single point of contact who understands your project and speaks your language.' },
              { title: 'Instant Alerts', desc: 'Immediate notification if any issues arise during production or inspection.' },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Submit your requirements and receive a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
