import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Search, Factory, ClipboardCheck, PackageCheck, Truck, ShieldCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Initial Consultation & Requirements Gathering',
    duration: '2-3 Days',
    desc: 'We start by understanding your product, target price, order volume, quality requirements, and timeline. You share specifications, reference samples, or design files — whatever you have.',
    details: [
      'Complete our inquiry form or schedule a call',
      'Share product specs, drawings, or reference samples',
      'Discuss budget, volume, and quality expectations',
      'Receive a tailored sourcing proposal within 24 hours',
    ],
  },
  {
    step: '02',
    icon: Factory,
    title: 'Supplier Identification & Screening',
    duration: '1-2 Weeks',
    desc: 'We search our network of 5,000+ pre-vetted factories, industry contacts, and trade databases to identify suppliers that match your exact requirements.',
    details: [
      'Search across our verified supplier database',
      'Screen suppliers for capability, capacity, and certifications',
      'Send RFQs and collect competitive quotations',
      'Present you with a shortlist and comparison analysis',
    ],
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    duration: '1-3 Weeks',
    desc: 'Our team visits shortlisted factories in person. We verify business licenses, inspect production lines, review quality systems, and assess financial stability.',
    details: [
      'On-site factory tour and equipment inspection',
      'Business license and certification verification',
      'Quality management system evaluation',
      'Detailed audit report with photos and scoring',
    ],
  },
  {
    step: '04',
    icon: PackageCheck,
    title: 'Sampling & Negotiation',
    duration: '2-4 Weeks',
    desc: 'We coordinate sample production, evaluate quality, and negotiate pricing, payment terms, and production timelines on your behalf.',
    details: [
      'Coordinate sample development with top factories',
      'Evaluate samples against your specifications',
      'Negotiate unit price, payment terms, and lead times',
      'Review and finalize the purchase agreement',
    ],
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: '4-12 Weeks (varies by product)',
    desc: 'Once production starts, we monitor progress with regular factory visits, milestone reports, and photos. Our QC team conducts inspections at critical stages.',
    details: [
      'Production schedule development and tracking',
      'Weekly progress reports with photos',
      'In-line quality inspections during production',
      'Pre-shipment final inspection (AQL standard)',
    ],
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping, Logistics & Delivery',
    duration: '2-6 Weeks',
    desc: 'We coordinate freight, handle export documentation, arrange cargo insurance, and track your shipment until it reaches your warehouse or fulfillment center.',
    details: [
      'Freight booking and rate negotiation',
      'Export documentation and customs clearance',
      'Cargo insurance arrangement',
      'Real-time tracking and delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              A Proven Process for Sourcing Success
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We follow a structured 6-step process that has been refined over 12 years and 15,000+ successful sourcing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative pb-16 last:pb-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-16 bottom-0 w-0.5 bg-gray-200" />
              )}

              <div className="flex gap-6">
                {/* Step circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                  <div className="text-center">
                    <div className="text-xs font-bold leading-none">{step.step}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                    <span className="text-xs font-medium text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Makes Our Process Different</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our approach is built on three core principles that set us apart.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Transparency', desc: 'You receive detailed reports, photos, and data at every stage. No black box — you see exactly what\'s happening with your order.' },
              { title: 'Local Presence', desc: 'Unlike remote agents, we are physically present in China\'s manufacturing hubs. We visit factories in person, not just call or email.' },
              { title: 'Accountability', desc: 'We take ownership of the entire process. If something goes wrong, we fix it. Our reputation depends on your satisfaction.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us what you need and we'll guide you through every step of the process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover transition-colors text-lg shadow-lg"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}