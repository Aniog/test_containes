import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a1b2c3',
    description: 'Fill in our inquiry form with your product details — category, specifications, target quantity, and budget. The more detail you provide, the faster we can match you with suitable suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target quantity and delivery timeline',
      'Destination country and any compliance requirements',
    ],
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d4e5f6',
    description: 'Our team researches manufacturers from our verified network and trade databases. We contact suppliers in Chinese, request quotes, and evaluate them against your criteria.',
    details: [
      'Search across verified manufacturer databases',
      'Direct communication with factories in Chinese',
      'Evaluation of pricing, MOQ, and lead times',
      'Shortlist of 3–5 qualified suppliers delivered to you',
    ],
  },
  {
    num: '03',
    title: 'Quotation Review & Sample Request',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g7h8i9',
    description: 'We present you with a clear comparison of supplier quotes. If needed, we arrange product samples so you can evaluate quality before committing to a full order.',
    details: [
      'Side-by-side supplier comparison report',
      'Sample coordination and quality review',
      'Negotiation support on pricing and terms',
      'Recommendation based on your priorities',
    ],
  },
  {
    num: '04',
    title: 'Factory Audit',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j1k2l3',
    description: 'For new suppliers or high-value orders, we conduct an on-site factory audit. This verifies production capacity, quality systems, certifications, and working conditions.',
    details: [
      'On-site visit by our local team',
      'Production capacity and equipment check',
      'Quality management system assessment',
      'Detailed audit report with photographs',
    ],
  },
  {
    num: '05',
    title: 'Order Placement & Production Monitoring',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m4n5o6',
    description: 'Once you confirm the order, we place it on your behalf and monitor production progress. You receive regular updates with photos and milestone reports.',
    details: [
      'Purchase order management',
      'Raw material and component verification',
      'Production milestone tracking',
      'Issue identification and resolution',
    ],
  },
  {
    num: '06',
    title: 'Quality Inspection',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p7q8r9',
    description: 'Before goods are shipped, our inspectors conduct a pre-shipment inspection at the factory. We check against your specifications using AQL sampling standards.',
    details: [
      'Pre-shipment inspection at factory',
      'AQL-based sampling and defect classification',
      'Measurement, function, and packaging checks',
      'Inspection report delivered within 24 hours',
    ],
  },
  {
    num: '07',
    title: 'Shipping & Delivery',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
    imgId: 'hiw-step7-img-s1t2u3',
    description: 'We coordinate freight booking, export documentation, and cargo tracking. Goods are shipped to your destination with full visibility throughout the journey.',
    details: [
      'Sea or air freight coordination',
      'Export customs documentation',
      'Cargo tracking and status updates',
      'Coordination with your freight forwarder or 3PL',
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Source for You
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, step-by-step process designed to give you full visibility and control
              over your China supply chain — from first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="text-6xl font-bold text-slate-100 leading-none mb-3">{step.num}</div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 h-64 lg:h-72 ${!isEven ? 'lg:order-1' : ''}`}>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-china-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your inquiry and we will get back to you within 24 hours with a tailored plan.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-slate-100 text-china-red font-bold px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
