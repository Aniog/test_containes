import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileSearch, ClipboardCheck, Ship, Headphones, ArrowRight, Clock, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1-2 Days',
    desc: 'Share your product requirements, specifications, target price, order volume, and timeline. We will ask detailed questions to fully understand your needs and define the scope of work.',
    details: [
      'Video call or in-person meeting to discuss your project',
      'Product specification review (drawings, samples, reference images)',
      'Define target price range, MOQ, and delivery timeline',
      'Scope of work and fee proposal delivered within 24 hours',
    ],
    titleId: 'hiw-title-step-01',
    descId: 'hiw-desc-step-01',
    imgId: 'hiw-img-step-01-a1b2',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Search & Shortlisting',
    duration: '1-2 Weeks',
    desc: 'We search our verified network and industry channels to identify factories that match your requirements. We pre-screen each candidate before presenting a shortlist with our analysis.',
    details: [
      'Search database of 500+ pre-audited factories',
      'Supplement with trade fair contacts and industry networks',
      'Pre-screen candidates via phone/video interviews',
      'Deliver shortlist of 3-5 qualified suppliers with profiles',
    ],
    titleId: 'hiw-title-step-02',
    descId: 'hiw-desc-step-02',
    imgId: 'hiw-img-step-02-c3d4',
  },
  {
    step: '03',
    icon: FileSearch,
    title: 'Factory Audit & Sampling',
    duration: '2-3 Weeks',
    desc: 'We conduct on-site factory audits for your top choices. Simultaneously, we collect product samples from each candidate and arrange shipping to you for evaluation.',
    details: [
      'On-site factory audit with our 8-point checklist',
      'Sample collection from shortlisted factories',
      'International sample shipping to your address',
      'Detailed audit report with photos and recommendation',
    ],
    titleId: 'hiw-title-step-03',
    descId: 'hiw-desc-step-03',
    imgId: 'hiw-img-step-03-e5f6',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    duration: '3-8 Weeks',
    desc: 'We help finalize the purchase agreement, place the order, and monitor production with regular factory visits and progress reports.',
    details: [
      'Purchase agreement review and negotiation support',
      'Deposit handling with secure payment terms',
      'Weekly production monitoring with photo updates',
      'In-process quality inspections at key milestones',
    ],
    titleId: 'hiw-title-step-04',
    descId: 'hiw-desc-step-04',
    imgId: 'hiw-img-step-04-g7h8',
  },
  {
    step: '05',
    icon: Ship,
    title: 'Quality Inspection & Shipping',
    duration: '1-3 Weeks',
    desc: 'Final pre-shipment inspection, freight booking, customs documentation, and shipment tracking until your goods arrive.',
    details: [
      'Pre-shipment final random inspection (AQL standard)',
      'Freight booking with multi-carrier rate comparison',
      'Customs documentation preparation and clearance',
      'Shipment tracking from factory to your destination',
    ],
    titleId: 'hiw-title-step-05',
    descId: 'hiw-desc-step-05',
    imgId: 'hiw-img-step-05-i9j0',
  },
  {
    step: '06',
    icon: Headphones,
    title: 'Ongoing Partnership',
    duration: 'Continuous',
    desc: 'We continue to support you for reorders, new product sourcing, and any post-delivery issues. Your account manager remains your dedicated contact.',
    details: [
      'Post-delivery quality review and feedback session',
      'Reorder management with streamlined process',
      'New product sourcing with established factory relationships',
      'Continuous market intelligence and supplier updates',
    ],
    titleId: 'hiw-title-step-06',
    descId: 'hiw-desc-step-06',
    imgId: 'hiw-img-step-06-k1l2',
  },
];

const timelineItems = [
  { label: 'Consultation', weeks: 'Week 1' },
  { label: 'Supplier Search', weeks: 'Weeks 1-2' },
  { label: 'Factory Audit & Samples', weeks: 'Weeks 3-5' },
  { label: 'Production', weeks: 'Weeks 5-13' },
  { label: 'QC & Shipping', weeks: 'Weeks 13-16' },
  { label: 'Delivery', weeks: 'Week 16+' },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A clear, structured 6-step process — from your initial inquiry to delivery at your door.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((item, i) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 bg-brand-500 text-white rounded-lg flex items-center justify-center text-lg font-bold">
                      {item.step}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-brand-600 bg-brand-50 px-3 py-1 rounded-full font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>
                  <h2 id={item.titleId} className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                    {item.title}
                  </h2>
                  <p id={item.descId} className="text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Shield className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden shadow-lg bg-slate-100 aspect-[4/3]">
                    <img
                      alt={item.title}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
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

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Typical Timeline</h2>
            <p className="section-subheading mx-auto">
              A typical sourcing project from inquiry to delivery takes 12-16 weeks, depending on product complexity.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-200 -translate-y-1/2" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {timelineItems.map((item) => (
                <div key={item.label} className="relative flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-500 border-4 border-white shadow mb-3 z-10" />
                  <p className="text-sm font-semibold text-brand-900 text-center">{item.label}</p>
                  <p className="text-xs text-slate-500 text-center">{item.weeks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">Start Your Sourcing Journey</h2>
          <p className="text-slate-600 mb-8">
            Tell us about your product and requirements. We will guide you through every step.
          </p>
          <Link to="/contact" className="btn-accent gap-2 text-lg px-8 py-3.5">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
