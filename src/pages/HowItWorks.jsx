import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, MessageSquare, Search, Factory, Package, ShieldCheck, Truck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — specifications, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price or budget',
      'Estimated order quantity',
      'Required certifications or standards',
      'Delivery timeline',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified manufacturer database and conducts targeted research to identify 3–5 suppliers that best match your requirements. We evaluate pricing, MOQ, lead time, and production capability.',
    details: [
      'Database search across 2,000+ verified factories',
      'Targeted outreach to new manufacturers',
      'Price and MOQ comparison',
      'Initial capability assessment',
      'Shortlist report delivered within 5–10 days',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before recommending any supplier, we conduct an on-site factory audit. We verify business registration, inspect production facilities, assess workforce and equipment, and confirm certifications.',
    details: [
      'Business license verification',
      'On-site facility inspection',
      'Production capacity assessment',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Procurement & Approval',
    desc: 'We request samples from shortlisted suppliers and ship them to you for evaluation. Once you approve a sample, we finalize supplier selection and negotiate the best terms on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample quality assessment',
      'Consolidated international shipping',
      'Supplier negotiation support',
      'Final supplier selection',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress and conduct quality inspections at key stages. Our QC team checks against your specifications and provides detailed reports before shipment is approved.',
    details: [
      'Production schedule tracking',
      'In-line quality checks',
      'Pre-shipment inspection (AQL)',
      'Defect documentation and resolution',
      'Shipment approval sign-off',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, customs documentation, and delivery to your destination. We work with trusted logistics partners for sea freight, air freight, and express courier options.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Real-time shipment tracking',
      'Delivery confirmation',
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
      <section className="bg-navy-900 text-white py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              How We Source for You
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. We handle the complexity so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-5xl font-extrabold text-navy-100">{step.num}</div>
                      <div className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="section-title mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-gray-100 h-72 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
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
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">Typical Timeline</p>
            <h2 className="section-title mb-4">From Inquiry to Delivery</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Timelines vary by product complexity, but here is a typical schedule for a standard sourcing project.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { phase: 'Inquiry & Supplier Research', time: 'Days 1–10' },
              { phase: 'Factory Audit & Verification', time: 'Days 5–15' },
              { phase: 'Sample Procurement & Approval', time: 'Days 10–30' },
              { phase: 'Production', time: 'Days 30–60' },
              { phase: 'Quality Inspection', time: 'Days 55–65' },
              { phase: 'Shipping (Sea Freight)', time: 'Days 65–95' },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-0">
                <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <div className="flex-1 text-navy-800 font-medium text-sm">{row.phase}</div>
                <div className="text-gold-600 font-semibold text-sm">{row.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-600 py-16">
        <div className="container-xl text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gold-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing inquiry today and receive a free consultation within 24 hours.
          </p>
          <Link to="/contact" className="inline-block bg-white text-gold-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-100 transition-colors">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
