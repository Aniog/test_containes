import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, MessageSquare, FileSearch, PackageCheck, Ship } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, specifications, target pricing, and desired quantities. We assess feasibility and propose a sourcing plan tailored to your needs.',
    details: [
      'Free initial consultation to understand your requirements',
      'Feasibility assessment and market overview',
      'Proposed sourcing strategy and timeline',
    ],
    imgId: 'hiw-step1-a1b2c3',
    titleId: 'hiw-s1-title',
    descId: 'hiw-s1-desc',
  },
  {
    step: 2,
    icon: FileSearch,
    title: 'Supplier Identification & Verification',
    desc: 'We search our network of verified manufacturers, shortlist qualified factories, and conduct on-site verification audits to ensure they meet your standards.',
    details: [
      'Search across 500+ verified suppliers in our network',
      'Shortlist 3-5 qualified factories for comparison',
      'On-site factory audit with detailed verification report',
    ],
    imgId: 'hiw-step2-d4e5f6',
    titleId: 'hiw-s2-title',
    descId: 'hiw-s2-desc',
  },
  {
    step: 3,
    icon: PackageCheck,
    title: 'Sample & Quotation',
    desc: 'Receive product samples and detailed quotations from verified suppliers. Evaluate quality firsthand before committing to a production order.',
    details: [
      'Product samples shipped to your location',
      'Detailed quotation with cost breakdown',
      'Sample revision and refinement until approved',
    ],
    imgId: 'hiw-step3-g7h8i9',
    titleId: 'hiw-s3-title',
    descId: 'hiw-s3-desc',
  },
  {
    step: 4,
    icon: PackageCheck,
    title: 'Order & Production Monitoring',
    desc: 'We place orders on your behalf, track production milestones, conduct in-line inspections, and resolve issues to keep your schedule on track.',
    details: [
      'Order placement and deposit management',
      'Weekly production status updates with photos',
      'During-production quality inspections',
    ],
    imgId: 'hiw-step4-j1k2l3',
    titleId: 'hiw-s4-title',
    descId: 'hiw-s4-desc',
  },
  {
    step: 5,
    icon: Ship,
    title: 'Final Inspection & Shipping',
    desc: 'Pre-shipment quality inspection, logistics coordination, customs documentation, and delivery to your door.',
    details: [
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Freight booking and shipment consolidation',
      'Customs documentation and door-to-door delivery',
    ],
    imgId: 'hiw-step5-m4n5o6',
    titleId: 'hiw-s5-title',
    descId: 'hiw-s5-desc',
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
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">How It Works</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, structured process from your first inquiry to delivered goods. Here is what working with SSourcing China looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {s.step}
                    </div>
                    <h2 id={s.titleId} className="text-2xl md:text-3xl font-bold text-navy-900">{s.title}</h2>
                  </div>
                  <p id={s.descId} className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                    <img
                      alt={s.title}
                      data-strk-img-id={s.imgId}
                      data-strk-img={`[${s.descId}] [${s.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Typical Timeline</h2>
            <p className="text-lg text-slate-600">
              From first contact to delivered goods, most projects follow this timeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { week: 'Week 1-2', label: 'Requirements & Sourcing' },
              { week: 'Week 2-4', label: 'Verification & Samples' },
              { week: 'Week 4-5', label: 'Quotation & Approval' },
              { week: 'Week 5-10', label: 'Production & QC' },
              { week: 'Week 10-12', label: 'Inspection & Shipping' },
            ].map((item, i) => (
              <div key={item.week} className="bg-white rounded-xl p-5 border border-slate-100 text-center">
                <div className="text-brand-600 font-bold text-sm mb-2">{item.week}</div>
                <div className="text-navy-900 font-medium text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Share your product requirements and receive a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
