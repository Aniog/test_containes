import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, FileText } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionLabel from '@/components/SectionLabel';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our sourcing inquiry form with your product details, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, specifications, and materials',
      'Target unit price and order quantity',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline and destination',
    ],
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a1b2c3',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches the Chinese market to identify manufacturers that match your requirements. We screen suppliers based on product fit, production capacity, certifications, and track record.',
    details: [
      'Market research across manufacturing hubs',
      'Initial supplier screening and filtering',
      'Price and MOQ comparison',
      'Shortlist of 3–5 qualified suppliers',
    ],
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d4e5f6',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification & Sampling',
    desc: 'Before you commit, we verify the shortlisted factories through on-site audits and arrange product samples for your review. You receive a full audit report and can approve samples before placing an order.',
    details: [
      'On-site factory audit with photo report',
      'Business license and certification check',
      'Sample procurement and quality review',
      'Supplier recommendation with risk assessment',
    ],
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g7h8i9',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve a supplier, we assist with contract negotiation and order placement. Throughout production, we monitor progress, conduct in-line inspections, and keep you updated with regular reports.',
    details: [
      'Contract and payment term negotiation',
      'Production schedule confirmation',
      'In-line quality inspections (DUPRO)',
      'Weekly production status updates',
    ],
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j1k2l3',
  },
  {
    number: '05',
    icon: FileText,
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods leave the factory, our QC team conducts a thorough pre-shipment inspection following AQL standards. You receive a detailed report with pass/fail results and photos of the finished goods.',
    details: [
      'AQL-based random sampling inspection',
      'Workmanship and specification check',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m4n5o6',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most suitable shipping method for your cargo. We handle export documentation and keep you updated on shipment status until delivery.',
    details: [
      'Sea, air, or express freight options',
      'Export documentation and customs support',
      'Freight forwarder coordination',
      'Shipment tracking until delivery',
    ],
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p7q8r9',
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
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel className="text-red-400">Our Process</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Source Products from China for You
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A transparent, step-by-step process designed to reduce risk, save time, and give you full visibility into your sourcing project from start to finish.
            </p>
            <CTAButton to="/contact" className="text-base px-8 py-4">
              Start Your Sourcing Project
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-6xl font-bold text-slate-100 leading-none">{step.number}</span>
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="16x9"
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

      {/* Timeline summary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Typical Timeline</SectionLabel>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">How Long Does It Take?</h2>
            <p className="text-slate-600">Timelines vary by product complexity, but here's a typical project schedule.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {[
              { phase: 'Requirements & Briefing', duration: '1–2 days' },
              { phase: 'Supplier Research & Shortlist', duration: '5–10 business days' },
              { phase: 'Factory Audit & Sampling', duration: '1–3 weeks' },
              { phase: 'Order Placement & Production', duration: '30–60 days (product dependent)' },
              { phase: 'Pre-Shipment Inspection', duration: '1–3 days' },
              { phase: 'Shipping (Sea Freight)', duration: '20–40 days to destination' },
            ].map((row, i) => (
              <div key={row.phase} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <span className="text-navy-900 font-medium text-sm">{row.phase}</span>
                <span className="text-red-600 font-semibold text-sm">{row.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your sourcing requirements and we'll get back to you within 24 hours.
          </p>
          <CTAButton to="/contact" variant="outline" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
