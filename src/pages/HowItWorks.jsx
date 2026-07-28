import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  FileText, Search, FlaskConical, Factory, ClipboardCheck,
  Ship, ArrowRight, CheckCircle
} from 'lucide-react';

const steps = [
  {
    id: 'step-requirements',
    num: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    tips: ['Include product drawings or reference images if available', 'Specify certifications needed (CE, FDA, ISO, etc.)', 'Mention your target landed cost if possible'],
    imgId: 'hiw-requirements-img-4a2b7c',
  },
  {
    id: 'step-research',
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database and conducts new research to identify 3-5 potential factories that match your criteria. We evaluate each on price, quality, capacity, and reliability.',
    tips: ['We check trade records and export history', 'We verify business licenses and certifications', 'We assess production capacity vs. your volume needs'],
    imgId: 'hiw-research-img-8d5e1f',
  },
  {
    id: 'step-samples',
    num: '03',
    icon: FlaskConical,
    title: 'Samples & Factory Audit',
    desc: 'We arrange product samples from shortlisted suppliers and conduct on-site factory audits. You receive a detailed comparison report with our recommendations.',
    tips: ['Sample costs are typically covered by the supplier', 'Factory audit includes photos and video', 'We provide a clear recommendation with reasoning'],
    imgId: 'hiw-samples-img-3c9a6e',
  },
  {
    id: 'step-production',
    num: '04',
    icon: Factory,
    title: 'Order Placement & Production',
    desc: 'Once you approve a supplier, we help negotiate final terms, place the order, and monitor production progress with regular updates and factory visits.',
    tips: ['We review and advise on supplier contracts', 'Weekly production progress reports', 'Immediate escalation of any issues'],
    imgId: 'hiw-production-img-7f4b2d',
  },
  {
    id: 'step-qc',
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team conducts a thorough inspection following AQL standards. We check dimensions, functionality, appearance, packaging, and labeling.',
    tips: ['Detailed inspection report with photos', 'Pass/fail decision based on your criteria', 'Re-inspection if issues are found and corrected'],
    imgId: 'hiw-qc-img-2e8c5a',
  },
  {
    id: 'step-shipping',
    num: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate the entire logistics process — booking freight, preparing export documents, managing customs clearance, and tracking your shipment until delivery.',
    tips: ['Sea, air, or rail freight options', 'Full documentation handling', 'Real-time shipment tracking updates'],
    imgId: 'hiw-shipping-img-6a1d9c',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="hiw-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Our structured 6-step sourcing process keeps you informed and in control from start to finish.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="w-full lg:w-2/5">
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.id}-title] [hiw-page-subtitle] [hiw-page-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.num}
                    </span>
                    <step.icon className="w-5 h-5 text-navy" />
                  </div>
                  <h2 id={`${step.id}-title`} className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Submit your sourcing requirements today and receive a free consultation within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white px-7 py-3.5 rounded-lg font-semibold no-underline hover:bg-orange-dark transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
