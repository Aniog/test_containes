import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill in our inquiry form with your product details, target quantity, budget, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and annual volume',
      'Destination country and delivery timeline',
      'Any certifications or compliance requirements',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches verified supplier databases, trade platforms, and our own network to identify manufacturers that match your requirements. We shortlist 3–5 qualified candidates.',
    details: [
      'Search across Alibaba, Made-in-China, and private networks',
      'Filter by certifications, capacity, and export experience',
      'Initial price and MOQ comparison',
      'Shortlist report delivered within 3–5 business days',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit the shortlisted factories in person to verify their legitimacy, production capabilities, and quality systems. You receive a written audit report with photos before making any commitment.',
    details: [
      'On-site visit to factory premises',
      'Business license and export license verification',
      'Production line and equipment inspection',
      'Worker count and management interview',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    title: 'Sample Procurement & Negotiation',
    desc: 'We request samples from your chosen supplier, review them against your specifications, and negotiate pricing, payment terms, and lead times on your behalf.',
    details: [
      'Sample request and quality review',
      'Comparison against your approved spec',
      'Price negotiation and payment term discussion',
      'Proforma invoice review before you commit',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    title: 'Production Monitoring',
    desc: 'Once you place the order, we follow up with the factory at key production milestones. We conduct in-line inspections and report any issues before they affect your delivery.',
    details: [
      'Production kick-off confirmation',
      'Mid-production in-line inspection',
      'Material and component verification',
      'Regular status updates to you',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods are loaded, our inspector visits the factory to conduct a final random inspection based on AQL standards. We check quality, quantity, labeling, and packaging.',
    details: [
      'AQL-based random sampling',
      'Workmanship and dimension checks',
      'Labeling and packaging verification',
      'Pass/fail report with photos',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    num: '07',
    title: 'Shipping & Delivery Coordination',
    desc: 'We coordinate with freight forwarders to book the shipment, prepare export documents, and track your cargo from the factory to your warehouse.',
    details: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Shipment tracking until delivery',
    ],
    imgId: 'hiw-step7-img-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
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
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">The Process</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">How It Works</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A clear, step-by-step process that takes you from initial inquiry to goods delivered — with full transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.num}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="text-5xl font-extrabold text-brand-border mb-3">{step.num}</div>
                  <h2 id={step.titleId} className="text-2xl lg:text-3xl font-extrabold text-brand-navy mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-brand-muted leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-brand-navy">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden aspect-[4/3] bg-brand-light ${isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Start Your Sourcing Project</h2>
          <p className="text-brand-muted text-lg mb-8">
            Submit your inquiry today and receive a free consultation within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded font-bold hover:bg-amber-600 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
