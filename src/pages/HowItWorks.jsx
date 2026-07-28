import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, Package, Truck } from 'lucide-react';

const phases = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, quantity, target price, destination, and any specific certifications or standards needed. The more detail you provide, the faster we can get started.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Destination country and delivery timeline',
      'Certification or compliance requirements',
      'Packaging and labeling preferences',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches our supplier network and conducts outreach to identify manufacturers that match your requirements. We evaluate pricing, capacity, certifications, and export experience before presenting a shortlist.',
    details: [
      'Database and network research',
      'Supplier outreach and qualification',
      'Pricing and MOQ comparison',
      'Export experience verification',
      'Shortlist of 3–5 qualified suppliers',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their legitimacy, production capabilities, and quality systems. You receive a detailed audit report before making any commitment.',
    details: [
      'On-site factory visit',
      'Business license and registration check',
      'Production capacity assessment',
      'Quality management system review',
      'Audit report with photos delivered within 5 days',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Sample Arrangement & Approval',
    desc: 'We coordinate sample production with the selected factory, review samples against your specifications, and ship them to you for final approval. Any issues are addressed before production begins.',
    details: [
      'Sample request and coordination',
      'Sample review against specifications',
      'Feedback and revision management',
      'Sample shipping to buyer',
      'Final approval confirmation',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: Package,
    title: 'Production Monitoring',
    desc: 'Once production begins, we track progress against the agreed schedule, communicate regularly with the factory, and flag any issues early. You receive regular updates without needing to manage the factory directly.',
    details: [
      'Production schedule tracking',
      'Regular status updates to buyer',
      'Material and component verification',
      'Issue identification and resolution',
      'In-line inspection (optional)',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Inspection & Shipping',
    desc: 'Before goods leave the factory, our inspectors conduct a pre-shipment inspection. Once approved, we coordinate freight forwarding, customs documentation, and delivery to your destination.',
    details: [
      'Pre-shipment quality inspection',
      'Inspection report with pass/fail results',
      'Freight forwarder coordination',
      'Export customs documentation',
      'Shipment tracking until delivery',
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
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0F2A5C 0%, #1A4B8C 100%)" }} className="text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              How It Works
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to goods arriving at your warehouse.
              No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={phase.num}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-slate-200">{phase.num}</span>
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1A4B8C]" />
                    </div>
                  </div>
                  <h2 id={phase.titleId} className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-3">
                    {phase.title}
                  </h2>
                  <p id={phase.descId} className="text-slate-500 leading-relaxed mb-6">{phase.desc}</p>
                  <ul className="space-y-2">
                    {phase.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#1A4B8C] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-500 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    alt={phase.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={phase.imgId}
                    data-strk-img={`[${phase.descId}] [${phase.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-3">
              Typical Sourcing Timeline
            </h2>
            <p className="text-slate-500">
              Timelines vary by product complexity and order size. Here's a general guide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { phase: 'Supplier Research', time: '3–7 days' },
              { phase: 'Factory Audit', time: '5–10 days' },
              { phase: 'Sample Production', time: '7–21 days' },
              { phase: 'Production', time: '20–45 days' },
              { phase: 'Inspection', time: '1–2 days' },
              { phase: 'Sea Freight', time: '15–35 days' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                <div className="text-xl font-bold text-[#1A4B8C] mb-1">{item.time}</div>
                <div className="text-slate-500 text-sm">{item.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(90deg, #0F2A5C 0%, #1A4B8C 100%)" }} className="py-16 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your sourcing inquiry and we'll respond within 24 hours with a plan and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
