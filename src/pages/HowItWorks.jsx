import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, UserSearch, Building2, Eye, BarChart3, Truck, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Your Requirements',
    time: 'Day 1-3',
    desc: 'Fill out our sourcing inquiry form with your product specifications, target price range, order volume, quality standards, and any certifications required. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Tell us about your product: materials, dimensions, functions, packaging',
      'Share your target price and order volume',
      'Specify required certifications (CE, FDA, ISO, RoHS, etc.)',
      'We review and create a detailed sourcing brief within 24 hours',
    ],
    imgId: 'step-requirements-u1v2w3',
  },
  {
    step: '02',
    icon: UserSearch,
    title: 'Supplier Identification & Shortlisting',
    time: 'Week 1-2',
    desc: 'Our team searches our extensive network of pre-vetted manufacturers and conducts initial screening. We identify 3-5 suppliers that match your requirements and present you with detailed profiles for review.',
    details: [
      'Search our database of 2,000+ audited factories',
      'Screen for capability, capacity, and export experience',
      'Present shortlist with detailed supplier profiles',
      'You select which suppliers to proceed with for audit',
    ],
    imgId: 'step-identification-x4y5z6',
  },
  {
    step: '03',
    icon: Building2,
    title: 'Factory Audit & Verification',
    time: 'Week 2-3',
    desc: 'We conduct comprehensive on-site audits of the shortlisted factories. This includes verifying business licenses, assessing production lines, inspecting quality systems, and evaluating overall capability.',
    details: [
      'On-site factory visit with structured audit checklist',
      'Verify business license, certifications, and export records',
      'Assess production capacity, equipment, and workforce',
      'Deliver detailed audit report with photos and risk assessment',
    ],
    imgId: 'step-audit-a7b8c9',
  },
  {
    step: '04',
    icon: Eye,
    title: 'Sampling, Pricing & Negotiation',
    time: 'Week 3-5',
    desc: 'We arrange product samples from your selected factories and facilitate pricing negotiations. Our team leverages local market knowledge to help you secure competitive pricing and favorable terms.',
    details: [
      'Coordinate sample production and international shipping',
      'Facilitate price negotiations with local market insights',
      'Review payment terms, MOQ, and delivery schedules',
      'Help you finalize supplier selection and contract terms',
    ],
    imgId: 'step-sampling-d0e1f2',
  },
  {
    step: '05',
    icon: BarChart3,
    title: 'Production & Quality Monitoring',
    time: 'Week 5-10+',
    desc: 'Once production begins, we provide regular updates on progress, conduct in-process quality inspections, and perform pre-shipment inspections to ensure every product meets your specifications.',
    details: [
      'Weekly production progress reports with photos',
      'In-process quality inspection at 30-50% completion',
      'Pre-shipment inspection with AQL sampling standards',
      'Proactive issue identification and resolution',
    ],
    imgId: 'step-monitoring-g3h4i5',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    time: 'Week 10+',
    desc: 'We coordinate the entire logistics process — from container loading supervision to customs documentation and freight booking. You receive tracking updates until goods arrive at your destination.',
    details: [
      'Container loading supervision with photo documentation',
      'Freight booking (sea, air, or rail) with competitive rates',
      'Customs documentation and clearance support',
      'Door-to-door delivery tracking and coordination',
    ],
    imgId: 'step-shipping-j6k7l8',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A proven 6-step process that takes your product from concept to delivery — with full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.step} className="relative pl-12 md:pl-16 pb-12 last:pb-0">
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[19px] md:left-[27px] top-10 w-0.5 h-full bg-gray-200" />
                )}

                {/* Step number circle */}
                <div className="absolute left-0 top-1 w-10 h-10 md:w-14 md:h-14 bg-navy rounded-full flex items-center justify-center z-10">
                  <span className="text-gold font-bold text-sm md:text-base">{s.step}</span>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <s.icon className="w-5 h-5 text-navy" />
                    <h3 id={`step-title-${i}`} className="text-xl md:text-2xl font-bold text-navy">{s.title}</h3>
                    <span className="text-xs font-semibold bg-gold/10 text-gold px-3 py-1 rounded-full">
                      {s.time}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {s.details.map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-2" />
                        <span className="text-sm text-gray-600">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Begin Your Sourcing Journey?</h2>
          <p className="text-gray-600 mb-8">Fill out our inquiry form and a dedicated project manager will guide you through every step.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;