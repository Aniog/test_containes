import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, FileText, Search, Factory, Package, Truck, ClipboardCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Inquiry',
    desc: 'Fill out our sourcing request form with your product details, target specifications, quantity, and budget. The more detail you provide, the faster we can get started.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target quantity and budget',
      'Destination country and delivery timeline',
      'Any specific certifications required (CE, FCC, etc.)',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches suppliers from verified databases, trade shows, and our established network. We screen candidates against your requirements and present a shortlist of 3–5 qualified options.',
    details: [
      'Database and network research',
      'Initial supplier screening calls',
      'Pricing and MOQ comparison',
      'Shortlist report with supplier profiles',
      'Recommendation with rationale',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit',
    desc: 'For shortlisted suppliers, we conduct on-site factory visits to verify their capabilities, certifications, and working conditions. You receive a detailed audit report with photos within 48 hours.',
    details: [
      'On-site factory visit by our auditor',
      'Business license and export license verification',
      'Production capacity and equipment check',
      'Quality management system review',
      'Photo documentation and written report',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample & Approval',
    desc: 'We arrange samples from your selected supplier, inspect them against your specifications, and ship them to you for final approval. We manage revisions and re-sampling as needed.',
    details: [
      'Sample request and coordination',
      'Sample inspection before shipping',
      'Express courier to your address',
      'Feedback and revision management',
      'Final sample sign-off',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'Once you approve the sample and place the order, we monitor production progress and conduct quality inspections at key milestones. Issues are flagged and resolved before they become costly.',
    details: [
      'Production schedule monitoring',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect reporting',
      'Corrective action follow-up',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most suitable shipping method. We prepare export documentation, track the shipment, and keep you updated until goods arrive.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking updates',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
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
      <section className="bg-[#0d2b4e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">How It Works</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A clear, structured process from your first inquiry to goods arriving at your warehouse. No surprises, no guesswork.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1a4f8a] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-5xl font-bold text-[#1a4f8a]/10 leading-none">{step.num}</span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-[#0d2b4e] mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Typical Timeline"
            heading="How Long Does It Take?"
            subtext="Timelines vary by product complexity, but here's a general guide for a standard sourcing project."
          />
          <div className="mt-12 space-y-3">
            {[
              { phase: 'Initial inquiry & briefing', time: '1–2 days' },
              { phase: 'Supplier research & shortlist', time: '5–10 days' },
              { phase: 'Factory audit (if required)', time: '3–5 days' },
              { phase: 'Sample arrangement & review', time: '7–14 days' },
              { phase: 'Production (varies by product)', time: '20–45 days' },
              { phase: 'Quality inspection', time: '1–3 days' },
              { phase: 'Shipping (sea freight)', time: '15–35 days' },
            ].map((row) => (
              <div key={row.phase} className="flex items-center justify-between bg-white rounded-lg px-5 py-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-[#1a4f8a] flex-shrink-0" />
                  <span className="text-[#0d2b4e] font-medium text-sm">{row.phase}</span>
                </div>
                <span className="text-[#e8621a] font-semibold text-sm flex-shrink-0 ml-4">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d2b4e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Submit your sourcing inquiry today and we'll respond within one business day.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-10 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
