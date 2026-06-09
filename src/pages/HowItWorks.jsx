import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — type, specifications, target quantity, budget, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target order quantity (MOQ)',
      'Target price range',
      'Destination country and required certifications',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    time: 'Day 1',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches suppliers from our verified network, trade databases, and industry contacts. We screen candidates based on your requirements and shortlist 3–5 qualified factories.',
    details: [
      'Database and trade show research',
      'Initial supplier qualification screening',
      'Business license and export record check',
      'Capacity and product range verification',
      'Shortlist report with supplier profiles',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    time: 'Days 2–7',
  },
  {
    num: '03',
    title: 'Quotation & Sample Coordination',
    desc: 'We request detailed quotations from shortlisted suppliers, negotiate pricing on your behalf, and coordinate sample production. You receive a clear comparison report to help you choose the best option.',
    details: [
      'RFQ sent to shortlisted suppliers',
      'Price negotiation and terms review',
      'Sample request and shipment coordination',
      'Quotation comparison report',
      'Recommendation with rationale',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    time: 'Days 7–14',
  },
  {
    num: '04',
    title: 'Factory Audit (Optional)',
    desc: 'For new suppliers or high-value orders, we conduct an on-site factory audit to verify production capacity, equipment, certifications, and working conditions. You receive a full audit report with photos.',
    details: [
      'On-site visit by our local team',
      'Production capacity and equipment check',
      'Certification and compliance review',
      'Worker conditions assessment',
      'Detailed audit report with photos',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    time: 'Days 10–15',
  },
  {
    num: '05',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you confirm the supplier and approve the sample, we assist with purchase order placement and monitor production progress. We communicate with the factory regularly and flag any issues early.',
    details: [
      'Purchase order review and placement support',
      'Production timeline tracking',
      'Regular status updates to you',
      'Issue escalation and resolution',
      'Pre-production material check (if required)',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    time: 'During production',
  },
  {
    num: '06',
    title: 'Quality Inspection',
    desc: 'Before goods are packed and shipped, our QC inspector visits the factory to check product quality against your specifications. We follow AQL sampling standards and provide a report within 24 hours.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect classification',
      'Measurement, function, and appearance checks',
      'Packaging and labelling verification',
      'Pass/fail report with photos',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    time: 'Before shipment',
  },
  {
    num: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange sea, air, or express shipping. We handle export documentation on the China side and keep you updated on shipment status until goods arrive.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'China customs clearance support',
      'Shipment booking and tracking',
      'Final delivery confirmation',
    ],
    imgId: 'hiw-step7-img-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
    time: 'Post-inspection',
  },
];

const faqs = [
  { q: 'Do I need to use all your services?', a: 'No. You can use individual services based on your needs. Some clients only need QC inspection; others want full end-to-end management. We\'ll recommend what makes sense for your situation.' },
  { q: 'How do you communicate with me during the process?', a: 'We communicate via email, WhatsApp, or your preferred channel. You\'ll receive regular updates at each stage, and we\'re available to answer questions throughout.' },
  { q: 'What happens if the inspection fails?', a: 'If goods fail inspection, we work with the factory to resolve the issues before shipment. We do not release goods until they meet the agreed specifications.' },
  { q: 'Can I start with a small trial order?', a: 'Yes. We recommend starting with a smaller trial order to test the supplier before scaling up. We support orders of all sizes.' },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          data-strk-bg-id="hiw-hero-bg-v4w5x6"
          data-strk-bg="China sourcing process supply chain management"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            How We Source Products from China for You
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            A clear, step-by-step process designed to reduce risk, save time, and give you full visibility over your China sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Your Sourcing Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Step by Step"
            title="The SSourcing China Process"
            subtitle="From your first inquiry to final delivery — here's exactly how we work."
          />
          <div className="space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold text-blue-100">{step.num}</span>
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.time}
                      </span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Process FAQs" />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-slate-900 hover:text-blue-700 transition-colors">
                  <span>{q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing inquiry and we'll get back to you within 24 hours with a plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
