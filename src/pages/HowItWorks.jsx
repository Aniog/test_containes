import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, Factory, ClipboardCheck, Ship, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    duration: 'Day 1-3',
    desc: 'Fill out our inquiry form with your product specifications, target price, order quantity, quality standards, and any certifications needed. The more detail you provide, the better we can match you with the right supplier.',
    details: [
      'Provide product specifications, drawings, or reference samples',
      'Share target price range and order volume',
      'Specify quality standards and certifications required',
      'Indicate preferred timeline and delivery destination',
    ],
    imgId: 'hiw-step-1-f1a2b3',
    titleId: 'hiw-title-1',
    descId: 'hiw-desc-1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Shortlisting',
    duration: 'Week 1-2',
    desc: 'We search our verified supplier network and industry databases to identify factories that match your requirements. You receive a shortlist of 3-5 qualified suppliers with detailed profiles, capabilities, and pricing.',
    details: [
      'Market research and supplier database search',
      'Initial factory capability screening',
      'Price comparison and negotiation',
      'Supplier shortlist with detailed profiles',
    ],
    imgId: 'hiw-step-2-f1a2b4',
    titleId: 'hiw-title-2',
    descId: 'hiw-desc-2',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Sampling',
    duration: 'Week 2-4',
    desc: 'We conduct on-site audits of shortlisted factories to verify their production capabilities, quality systems, and certifications. We also arrange product samples for your review before any commitment.',
    details: [
      'On-site factory audit with detailed report',
      'Production capacity and quality system verification',
      'Product sample arrangement and coordination',
      'Sample review and feedback',
    ],
    imgId: 'hiw-step-3-f1a2b5',
    titleId: 'hiw-title-3',
    descId: 'hiw-desc-3',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: 'Week 4-12',
    desc: 'Once you approve the supplier and sample, production begins. We monitor progress with regular factory visits, perform in-line QC inspections, and provide weekly reports with photos and data.',
    details: [
      'Production order placement and confirmation',
      'In-line QC inspections at key milestones',
      'Weekly progress reports with photos',
      'Issue identification and resolution',
    ],
    imgId: 'hiw-step-4-f1a2b6',
    titleId: 'hiw-title-4',
    descId: 'hiw-desc-4',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Final Inspection & Shipping',
    duration: 'Week 12-14',
    desc: 'Before shipment, we perform a final pre-shipment inspection (AQL standard). Once approved, we coordinate freight, handle export documentation, and track your shipment until delivery.',
    details: [
      'Pre-shipment inspection (AQL standard)',
      'Freight booking and rate negotiation',
      'Export documentation and customs clearance',
      'Shipment tracking until delivery',
    ],
    imgId: 'hiw-step-5-f1a2b7',
    titleId: 'hiw-title-5',
    descId: 'hiw-desc-5',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="hiw-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h1>
            <p id="hiw-page-subtitle" className="mt-4 text-lg text-slate-600">
              A structured, transparent 5-step process designed to minimize risk, save time, and deliver results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <div
                      data-strk-bg-id={step.imgId}
                      data-strk-bg={`[${step.descId}] [${step.titleId}] [hiw-page-subtitle] [hiw-page-title]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="700"
                    >
                      <div className="aspect-[4/3] rounded-xl bg-slate-200 overflow-hidden" />
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-14 h-14 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h2 id={step.titleId} className="text-2xl font-bold text-slate-900">{step.title}</h2>
                    <p id={step.descId} className="mt-3 text-slate-600 leading-relaxed">{step.desc}</p>
                    <div className="mt-6 space-y-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A typical sourcing project from inquiry to delivery takes 8-14 weeks, depending on product complexity and order volume.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-navy text-brand-navy flex items-center justify-center text-lg font-bold flex-shrink-0 hidden md:flex">
                      {step.number}
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <step.icon className="w-5 h-5 text-brand-navy" />
                        <h3 className="font-semibold text-slate-900">{step.title}</h3>
                        <span className="ml-auto text-xs font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Submit your requirements today and get a free consultation within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}