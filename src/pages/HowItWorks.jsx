import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, MessageSquare, Search, Factory, ClipboardCheck, Truck } from 'lucide-react';
import { SectionHeader, Card, Badge } from '@/components/ui/index.jsx';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — type, specifications, target quantity, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target order quantity (MOQ)',
      'Target unit price or budget',
      'Destination country and any compliance requirements',
    ],
    duration: 'Day 1',
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches suppliers from our verified network, Alibaba, Canton Fair contacts, and industry databases. We shortlist 3–5 candidates that best match your requirements.',
    details: [
      'Search across verified supplier database',
      'Cross-reference with trade show contacts',
      'Initial supplier screening calls',
      'Comparative supplier report delivered to you',
      'Recommendation with rationale',
    ],
    duration: 'Days 2–5',
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before you commit to any supplier, we visit the factory in person to verify their legitimacy, production capacity, and quality management practices.',
    details: [
      'On-site visit by our local team',
      'Business license and export record check',
      'Production line and equipment inspection',
      'Quality control process review',
      'Full audit report with photos',
    ],
    duration: 'Days 5–10',
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Sample Review & Negotiation',
    desc: 'We arrange samples from your chosen supplier, review them against your specifications, and negotiate pricing, payment terms, and lead times on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample review against spec sheet',
      'Price and MOQ negotiation',
      'Payment terms discussion',
      'Contract review support',
    ],
    duration: 'Days 10–18',
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    step: '05',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Once you place the order, we monitor production progress, conduct mid-production inspections, and keep you updated with regular reports.',
    details: [
      'Production kick-off confirmation',
      'Weekly status updates',
      'Mid-production inspection (DUPRO)',
      'Issue identification and resolution',
      'Timeline adherence monitoring',
    ],
    duration: 'During production',
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    desc: 'Before goods leave the factory, we conduct a final pre-shipment inspection. Once approved, we coordinate with freight forwarders to arrange shipment to your destination.',
    details: [
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight forwarder coordination',
      'Shipment tracking until delivery',
    ],
    duration: 'Pre-shipment',
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
];

const timelines = [
  { label: 'Simple Products', time: '3–5 weeks', note: 'Standard items with clear specs' },
  { label: 'Custom Products', time: '6–10 weeks', note: 'Products requiring tooling or custom development' },
  { label: 'Complex/Regulated', time: '10–16 weeks', note: 'Items requiring certifications or compliance testing' },
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
      <section className="bg-[#1a4f8a] py-16 md:py-20">
        <div className="section-container">
          <Badge variant="gold" className="mb-4">Our Process</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            How We Source for You
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A clear, step-by-step process designed to give you full visibility and control over your China sourcing from day one.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1a4f8a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-muted text-sm">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl font-bold text-brand-dark mb-3">{step.title}</h2>
                  <p id={step.descId} className="text-brand-body leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-brand-body text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-md ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Typical Timelines"
            title="How Long Does It Take?"
            subtitle="Timelines vary by product complexity. Here are typical ranges from inquiry to delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {timelines.map((t) => (
              <Card key={t.label} className="text-center">
                <div className="text-3xl font-bold text-[#1a4f8a] mb-2">{t.time}</div>
                <div className="font-semibold text-brand-dark mb-1">{t.label}</div>
                <div className="text-brand-muted text-sm">{t.note}</div>
              </Card>
            ))}
          </div>
          <p className="text-center text-brand-muted text-sm mt-6">
            * Timelines are estimates. Actual duration depends on product complexity, factory availability, and shipping method.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Submit your sourcing inquiry today and we'll respond within 24 hours with a plan tailored to your product.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#a93226] transition-colors">
            Submit a Sourcing Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
