import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MessageSquare, Search, Factory, Package, ClipboardCheck, Truck, Clock } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1-3 Days',
    desc: 'Share your product requirements, target specifications, budget, and timeline with our team. We assess feasibility, identify potential challenges, and provide an initial sourcing strategy.',
    actions: [
      'Product requirements form and consultation call',
      'Market and manufacturing feasibility assessment',
      'Preliminary budget and timeline estimation',
      'Sourcing strategy proposal',
    ],
    imgId: 'process-step-consult-1a2b3c',
    titleId: 'proc-title-consult',
    descId: 'proc-desc-consult',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification',
    duration: '1-2 Weeks',
    desc: 'We search our database of pre-vetted manufacturers and tap into our industry network to identify 5-10 potential suppliers matching your criteria.',
    actions: [
      'Database search across relevant industrial clusters',
      'Supplier capability assessment and ranking',
      'Initial factory background checks',
      'Supplier shortlist with detailed profiles',
    ],
    imgId: 'process-step-identify-4d5e6f',
    titleId: 'proc-title-identify',
    descId: 'proc-desc-identify',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: '1-2 Weeks',
    desc: 'Our engineers conduct on-site audits of shortlisted factories, verifying production capacity, quality systems, certifications, and business legitimacy.',
    actions: [
      'On-site factory visit and facility inspection',
      'Production equipment and capacity evaluation',
      'Quality management system audit',
      'Business license and export documentation check',
    ],
    imgId: 'process-step-audit-7g8h9i',
    titleId: 'proc-title-audit',
    descId: 'proc-desc-audit',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    duration: '2-4 Weeks',
    desc: 'We coordinate sample production, evaluate quality, and negotiate pricing, payment terms, and delivery schedules with the best-matched suppliers.',
    actions: [
      'Sample request and quality evaluation',
      'Price negotiation and cost breakdown analysis',
      'Payment term and contract negotiation',
      'Final supplier selection recommendation',
    ],
    imgId: 'process-step-sample-0j1k2l',
    titleId: 'proc-title-sample',
    descId: 'proc-desc-sample',
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: '2-8 Weeks',
    desc: 'We monitor production progress with weekly updates, conduct in-line inspections, and perform final pre-shipment quality checks to ensure compliance.',
    actions: [
      'Production schedule monitoring and updates',
      'In-line quality inspection (DUPRO)',
      'Pre-shipment final random inspection (FRI)',
      'Defect resolution and re-inspection if needed',
    ],
    imgId: 'process-step-production-3m4n5o',
    titleId: 'proc-title-production',
    descId: 'proc-desc-production',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: '1-4 Weeks',
    desc: 'We coordinate freight forwarding, prepare customs documentation, supervise container loading, and track your shipment to final destination.',
    actions: [
      'Freight booking and shipping coordination',
      'Customs documentation preparation',
      'Container loading supervision',
      'Delivery tracking and post-delivery follow-up',
    ],
    imgId: 'process-step-shipping-6p7q8r',
    titleId: 'proc-title-shipping',
    descId: 'proc-desc-shipping',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <span id="process-hero-label">How It Works</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span id="process-hero-heading">A Clear, Proven Sourcing Process</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span id="process-hero-subtitle">
                Six structured steps from your initial inquiry to final delivery. 
                Transparent, reliable, and tailored to your needs.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {steps.map((s) => (
              <div key={s.step} className="text-center p-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div className="text-sm font-semibold text-b2b-text mb-1">{s.title}</div>
                <div className="flex items-center justify-center gap-1 text-xs text-accent">
                  <Clock className="w-3 h-3" />
                  {s.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Steps */}
          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="lg:w-1/2">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}] [process-hero-subtitle] [process-hero-heading]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-navy/15">{s.step}</div>
                    <div>
                      <h2 id={s.titleId} className="text-2xl font-bold text-b2b-text">{s.title}</h2>
                      <div className="flex items-center gap-1 text-sm text-accent mt-1">
                        <Clock className="w-4 h-4" />
                        Estimated: {s.duration}
                      </div>
                    </div>
                  </div>
                  <p id={s.descId} className="text-b2b-text-medium leading-relaxed mb-6">{s.desc}</p>
                  <div className="bg-b2b-light rounded-lg p-5">
                    <h4 className="text-sm font-semibold text-b2b-text mb-3">What we do:</h4>
                    <ul className="space-y-2">
                      {s.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2 text-sm text-b2b-text-medium">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
            Start Your Sourcing Journey Today
          </h2>
          <p className="text-lg text-b2b-text-medium mb-8 max-w-2xl mx-auto">
            The entire process typically takes 4-8 weeks. Contact us to discuss your project timeline.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}