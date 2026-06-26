import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const steps = [
  {
    num: '01',
    id: 'step-1',
    titleId: 'step-title-1',
    descId: 'step-desc-1',
    imgId: 'step-img-1-a1b2c3',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Start by telling us what you need. Fill in our inquiry form with your product type, specifications, target quantity, and budget. The more detail you provide, the faster we can get started.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target order quantity (MOQ)',
      'Target price range',
      'Destination country and timeline',
    ],
  },
  {
    num: '02',
    id: 'step-2',
    titleId: 'step-title-2',
    descId: 'step-desc-2',
    imgId: 'step-img-2-d4e5f6',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier network and conducts outreach to identify manufacturers that match your requirements. We present you with a shortlist of 3–5 qualified options.',
    details: [
      'Database search across 1,200+ verified factories',
      'Outreach to new suppliers as needed',
      'Initial screening for capability and compliance',
      'Supplier comparison report delivered to you',
    ],
  },
  {
    num: '03',
    id: 'step-3',
    titleId: 'step-title-3',
    descId: 'step-desc-3',
    imgId: 'step-img-3-g7h8i9',
    title: 'Factory Audit & Verification',
    desc: 'Before you commit to any supplier, we visit the factory in person. Our auditors verify business licenses, production capacity, quality systems, and working conditions.',
    details: [
      'On-site factory visit by our local team',
      'Business license and certification verification',
      'Production line and equipment assessment',
      'Quality management system review',
      'Detailed audit report with photos',
    ],
  },
  {
    num: '04',
    id: 'step-4',
    titleId: 'step-title-4',
    descId: 'step-desc-4',
    imgId: 'step-img-4-j1k2l3',
    title: 'Sample Review & Price Negotiation',
    desc: 'We arrange product samples from your selected supplier and review them against your specifications. We then negotiate pricing, payment terms, and lead times on your behalf.',
    details: [
      'Sample arrangement and quality review',
      'Specification compliance check',
      'Price negotiation with supplier',
      'Payment terms and lead time agreement',
      'Purchase order preparation support',
    ],
  },
  {
    num: '05',
    id: 'step-5',
    titleId: 'step-title-5',
    descId: 'step-desc-5',
    imgId: 'step-img-5-m4n5o6',
    title: 'Production Monitoring & Quality Inspection',
    desc: 'Once production begins, we monitor progress and conduct inspections at key milestones. We catch issues early — before they become expensive problems.',
    details: [
      'Production kick-off confirmation',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Defect reporting and resolution',
      'Container loading supervision',
    ],
  },
  {
    num: '06',
    id: 'step-6',
    titleId: 'step-title-6',
    descId: 'step-desc-6',
    imgId: 'step-img-6-p7q8r9',
    title: 'Shipping & Delivery Coordination',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics process from factory to your destination. You receive regular updates throughout.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo tracking and status updates',
      'Delivery confirmation',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Work With You
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A clear, structured 6-step process designed to reduce risk, save time, and deliver
              results at every stage of your China sourcing project.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="text-6xl font-bold text-brand-blue/15 mb-2">{step.num}</div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-brand-gray leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-brand-dark">
                          <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-md h-72 bg-brand-light ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
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

      {/* Timeline Summary */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Typical Timeline"
            title="What to Expect"
            subtitle="Timelines vary by product complexity, but here's a typical project schedule."
            center
          />
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {[
              { phase: 'Inquiry & Supplier Research', time: '5–10 business days' },
              { phase: 'Factory Audit', time: '3–5 business days' },
              { phase: 'Sample & Negotiation', time: '7–14 days' },
              { phase: 'Production', time: '20–45 days (product dependent)' },
              { phase: 'Quality Inspection', time: '1–3 days' },
              { phase: 'Shipping (Sea Freight)', time: '15–35 days (destination dependent)' },
            ].map((row, i) => (
              <div
                key={row.phase}
                className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-medium text-brand-navy text-sm">{row.phase}</span>
                </div>
                <span className="text-brand-blue font-semibold text-sm">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Submit your sourcing inquiry today and receive a free sourcing plan within 24 hours.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
