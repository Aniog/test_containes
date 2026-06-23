import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, MessageSquare, FileText, Package, Truck } from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui/SharedComponents';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — specifications, target quantity, budget, and any quality or compliance requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    duration: '5 minutes',
    details: [
      'Product name and description',
      'Target quantity and MOQ',
      'Budget or target unit price',
      'Required certifications (CE, RoHS, etc.)',
      'Delivery timeline',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Free Consultation & Scope Review',
    desc: 'Within 24 hours, one of our sourcing specialists will review your inquiry and contact you to clarify requirements, discuss the scope of work, and provide a transparent fee proposal.',
    duration: '24 hours',
    details: [
      'Requirements clarification call',
      'Feasibility assessment',
      'Service scope recommendation',
      'Transparent fee proposal',
      'Timeline estimate',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches our supplier database and conducts targeted outreach to identify manufacturers that match your criteria. We screen each candidate for legitimacy, capacity, and quality standards.',
    duration: '5–7 business days',
    details: [
      'Database and market research',
      'Initial supplier screening',
      'Capacity and capability verification',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier profile reports',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: Package,
    title: 'Samples & Price Negotiation',
    desc: 'We arrange product samples from shortlisted suppliers and negotiate pricing, payment terms, and lead times on your behalf. You evaluate the samples and select your preferred supplier.',
    duration: '2–4 weeks',
    details: [
      'Sample request and coordination',
      'Sample consolidation and shipping',
      'Price and terms negotiation',
      'Supplier comparison summary',
      'Final supplier selection support',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: Clock,
    title: 'Production Monitoring & QC',
    desc: 'Once you place your order, we monitor production progress, conduct quality inspections at key stages, and report any issues immediately. We ensure the final product matches your approved sample.',
    duration: 'Throughout production',
    details: [
      'Production milestone tracking',
      'In-line and pre-shipment inspection',
      'Defect identification and resolution',
      'Photo and video documentation',
      'Inspection report within 24 hours',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'After goods pass inspection, we coordinate freight booking, prepare shipping documentation, and track your shipment to its destination. We keep you informed at every stage of transit.',
    duration: '2–6 weeks (sea freight)',
    details: [
      'Freight forwarder coordination',
      'Bill of lading and customs docs',
      'Sea, air, or express options',
      'Shipment tracking updates',
      'Delivery confirmation',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
];

const whyUs = [
  { title: 'China-Based Team', desc: 'Our team is physically located in China, giving us direct access to factories and real-time oversight.' },
  { title: 'No Conflict of Interest', desc: 'We work exclusively for buyers. We do not accept commissions from suppliers.' },
  { title: 'Transparent Pricing', desc: 'Fixed service fees with no hidden charges. You know exactly what you are paying for.' },
  { title: 'Industry Experience', desc: 'Over 12 years sourcing across electronics, furniture, apparel, machinery, and more.' },
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">Our Process</Badge>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              How We Source for You
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A structured, transparent process from your first inquiry to final delivery. No guesswork, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Step by Step"
            title="The SSourcing China Process"
            subtitle="Six clear steps from inquiry to delivery."
          />
          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-brand-gold text-2xl font-extrabold">{step.num}</span>
                    </div>
                    <h2 id={step.titleId} className="text-brand-navy text-2xl md:text-3xl font-bold mb-3">{step.title}</h2>
                    <div className="inline-flex items-center gap-1.5 bg-brand-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      {step.duration}
                    </div>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      className="w-full h-64 lg:h-72 object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why SSourcing China"
            title="What Makes Our Approach Different"
            subtitle="We are not a marketplace or a directory. We are a dedicated sourcing team working exclusively for buyers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <Card key={item.title}>
                <h3 className="text-brand-navy font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Start Your Sourcing Journey Today</h2>
          <p className="text-blue-100 text-lg mb-8">
            Submit your inquiry and receive a free consultation within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
