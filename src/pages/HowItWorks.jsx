import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, Users, Package, Ship } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Inquiry & Briefing',
    icon: FileText,
    duration: 'Day 1–2',
    desc: 'You submit a sourcing inquiry with your product requirements, target price, quantity, and timeline. Our team reviews your brief and schedules a call to clarify any details.',
    steps: [
      'Submit inquiry form or email us your requirements',
      'Initial consultation call with our sourcing team',
      'Confirm product specifications and target price',
      'Agree on scope of work and timeline',
    ],
    imgId: 'hiw-phase1-img-a1b2c3',
    titleId: 'hiw-phase1-title',
    descId: 'hiw-phase1-desc',
  },
  {
    phase: 'Phase 2',
    title: 'Supplier Research & Shortlisting',
    icon: Users,
    duration: 'Week 1–2',
    desc: 'Our team searches our supplier database and conducts outreach to identify manufacturers that match your requirements. We screen candidates on capability, certifications, and pricing before presenting a shortlist.',
    steps: [
      'Database search and supplier outreach',
      'Initial capability and pricing assessment',
      'Background check and reference review',
      'Shortlist of 3–5 qualified suppliers presented to you',
    ],
    imgId: 'hiw-phase2-img-d4e5f6',
    titleId: 'hiw-phase2-title',
    descId: 'hiw-phase2-desc',
  },
  {
    phase: 'Phase 3',
    title: 'Samples & Factory Audit',
    icon: Package,
    duration: 'Week 2–4',
    desc: 'We arrange product samples from your preferred suppliers and conduct on-site factory audits to verify their capabilities. You receive sample photos, test results, and a detailed audit report.',
    steps: [
      'Sample request and coordination',
      'On-site factory audit by our local team',
      'Sample review and quality assessment',
      'Audit report with photos and recommendations',
    ],
    imgId: 'hiw-phase3-img-g7h8i9',
    titleId: 'hiw-phase3-title',
    descId: 'hiw-phase3-desc',
  },
  {
    phase: 'Phase 4',
    title: 'Negotiation & Order Placement',
    icon: CheckCircle,
    duration: 'Week 3–5',
    desc: 'Once you select a supplier, we negotiate pricing, MOQ, lead time, and payment terms on your behalf. We review the purchase contract and help you place the order with confidence.',
    steps: [
      'Price and terms negotiation in Mandarin',
      'Purchase contract review and support',
      'Order confirmation and deposit coordination',
      'Production schedule agreement',
    ],
    imgId: 'hiw-phase4-img-j1k2l3',
    titleId: 'hiw-phase4-title',
    descId: 'hiw-phase4-desc',
  },
  {
    phase: 'Phase 5',
    title: 'Production Monitoring & QC',
    icon: Clock,
    duration: 'During Production',
    desc: 'We monitor production progress and conduct quality inspections at key milestones. You receive regular updates and a pre-shipment inspection report before goods are loaded.',
    steps: [
      'Regular production status updates',
      'In-line inspection at key production stages',
      'Pre-shipment inspection (PSI)',
      'Defect report and resolution if needed',
    ],
    imgId: 'hiw-phase5-img-m4n5o6',
    titleId: 'hiw-phase5-title',
    descId: 'hiw-phase5-desc',
  },
  {
    phase: 'Phase 6',
    title: 'Shipping & Delivery',
    icon: Ship,
    duration: 'Post-Production',
    desc: 'We coordinate with freight forwarders to arrange shipment, prepare export documentation, and track your cargo until it reaches your warehouse.',
    steps: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Cargo booking and tracking',
      'Delivery confirmation and handover',
    ],
    imgId: 'hiw-phase6-img-p7q8r9',
    titleId: 'hiw-phase6-title',
    descId: 'hiw-phase6-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container text-center">
          <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process designed to reduce risk and give you full visibility from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div key={phase.phase} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1a2e4a] rounded-full flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[#e85d26] text-xs font-semibold uppercase tracking-wide">{phase.phase}</span>
                      <span className="text-[#6b7280] text-xs ml-3">· {phase.duration}</span>
                    </div>
                  </div>
                  <h2 id={phase.titleId} className="text-2xl md:text-3xl font-bold text-[#1a2e4a] mb-4">{phase.title}</h2>
                  <p id={phase.descId} className="text-[#6b7280] leading-relaxed mb-6">{phase.desc}</p>
                  <ul className="space-y-2">
                    {phase.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[#1f2937] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#e85d26] flex-shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={phase.imgId}
                    data-strk-img={`[${phase.descId}] [${phase.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={phase.title}
                    className="w-full rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e85d26] py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing inquiry today and we'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#e85d26] hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
