import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, Truck } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Request',
    desc: 'Fill in our free sourcing inquiry form with your product requirements — what you need, how many, your target price, and any quality or compliance requirements. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name, description, and specifications',
      'Target quantity and order frequency',
      'Budget or target unit price',
      'Required certifications (CE, FCC, REACH, etc.)',
      'Preferred delivery timeline',
    ],
    titleId: 'step1-title',
    descId: 'step1-desc',
    imgId: 'step1-img-a1b2c3',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the Chinese market to identify manufacturers that match your criteria. We use our existing supplier network, trade databases, and direct outreach to compile a shortlist of 3–5 qualified factories with profiles, pricing, and initial quotes.',
    details: [
      'Market research across major manufacturing regions',
      'Supplier profile and background check',
      'Initial price and MOQ comparison',
      'Communication with factories in Chinese',
      'Shortlist report delivered within 5–7 business days',
    ],
    titleId: 'step2-title',
    descId: 'step2-desc',
    imgId: 'step2-img-d4e5f6',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Sample Evaluation',
    desc: 'Before you commit to an order, we visit the shortlisted factories in person to verify their legitimacy and capabilities. We also arrange product samples so you can evaluate quality firsthand before placing a full order.',
    details: [
      'On-site factory audit with written report',
      'Business license and certification verification',
      'Sample procurement and international shipping',
      'Price negotiation on your behalf',
      'Supplier recommendation with risk assessment',
    ],
    titleId: 'step3-title',
    descId: 'step3-desc',
    imgId: 'step3-img-g7h8i9',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you select a supplier, we help you finalize the purchase order and monitor production from start to finish. We communicate with the factory in Chinese, track milestones, and alert you to any issues before they escalate.',
    details: [
      'Purchase order review and finalization',
      'Production schedule tracking',
      'Regular status updates to the buyer',
      'Material and component verification',
      'Issue escalation and resolution',
    ],
    titleId: 'step4-title',
    descId: 'step4-desc',
    imgId: 'step4-img-j1k2l3',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before goods are packed and shipped, our inspectors visit the factory to check products against your specifications using AQL sampling standards. You receive a detailed inspection report with photos and a clear pass/fail result.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect classification',
      'Measurement, function, and appearance checks',
      'Packaging and labeling verification',
      'Same-day inspection report with photos',
    ],
    titleId: 'step5-title',
    descId: 'step5-desc',
    imgId: 'step5-img-m4n5o6',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'After goods pass inspection, we coordinate with freight forwarders to arrange shipment by sea, air, or express courier. We handle export documentation, track the shipment, and keep you updated until goods arrive at your destination.',
    details: [
      'Freight forwarder selection and booking',
      'Export customs documentation',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
      'Delivery confirmation and handover',
    ],
    titleId: 'step6-title',
    descId: 'step6-desc',
    imgId: 'step6-img-p7q8r9',
  },
];

export default function HowItWorksPage() {
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How China Sourcing Works with SSourcing China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, step-by-step process from your first inquiry to final delivery. No surprises, no hidden steps — just transparent, professional sourcing management.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map(({ number, icon: Icon, title, desc, details, titleId, descId, imgId }, index) => (
              <div
                key={number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl font-bold text-blue-100 leading-none">{number}</span>
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-darktext mb-4">{title}</h2>
                  <p id={descId} className="text-bodytext leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-bodytext">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="bg-lightbg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Typical Timeline"
            title="How Long Does It Take?"
            subtitle="Timelines vary by product complexity and order size. Here's a typical schedule for a standard sourcing project."
          />
          <div className="space-y-3">
            {[
              { phase: 'Initial consultation & requirements review', time: '1–2 days' },
              { phase: 'Supplier research & shortlist', time: '5–7 business days' },
              { phase: 'Factory audit & sample procurement', time: '1–3 weeks' },
              { phase: 'Sample evaluation & supplier selection', time: '1–2 weeks (buyer review)' },
              { phase: 'Order placement & production', time: '3–8 weeks (product dependent)' },
              { phase: 'Quality inspection', time: '1–2 days' },
              { phase: 'Shipping (sea freight)', time: '2–5 weeks (destination dependent)' },
            ].map(({ phase, time }) => (
              <div key={phase} className="flex items-center justify-between bg-white rounded-lg border border-border px-5 py-4">
                <span className="text-bodytext text-sm">{phase}</span>
                <span className="text-primary font-semibold text-sm ml-4 flex-shrink-0">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
