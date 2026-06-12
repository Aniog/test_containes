import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, Clock, Truck, Star } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — what you need, target quantity, quality requirements, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and order quantity',
      'Required certifications or compliance standards',
      'Preferred timeline and delivery destination',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier network and major Chinese sourcing platforms. We evaluate each candidate against your requirements and prepare a shortlist of 3–5 qualified manufacturers.',
    details: [
      'Search across 500+ verified suppliers',
      'Cross-check trade records and export history',
      'Evaluate production capacity and lead times',
      'Prepare a detailed supplier comparison report',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their capabilities, certifications, and working conditions. You receive a detailed audit report with photos before making any commitment.',
    details: [
      'On-site visit to factory premises',
      'Review of business licenses and certifications',
      'Assessment of production lines and equipment',
      'Worker conditions and compliance check',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    icon: Star,
    title: 'Sample Procurement & Approval',
    desc: 'We arrange product samples from your chosen supplier, inspect them against your specifications, and ship them to you for final approval. We handle all communication and negotiation.',
    details: [
      'Sample request and coordination',
      'Pre-shipment sample inspection',
      'Feedback and revision management',
      'Price and terms negotiation',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    icon: Clock,
    title: 'Production Monitoring',
    desc: 'Once production begins, we act as your on-the-ground project manager. We visit the factory, track milestones, and send you regular updates so you always know the status of your order.',
    details: [
      'Weekly production status reports',
      'On-site visits at key production stages',
      'Early detection and resolution of issues',
      'Material and component quality checks',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before goods are packed and shipped, our inspectors conduct a thorough final inspection using AQL sampling standards. Any defects are documented and resolved before shipment.',
    details: [
      'AQL-based random sampling inspection',
      'Dimensional, functional, and visual checks',
      'Packaging and labeling verification',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    number: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipment. We handle all export documentation and track your shipment until it arrives at your destination.',
    details: [
      'Sea freight (FCL/LCL) and air freight options',
      'Export documentation preparation',
      'Customs clearance support',
      'Real-time shipment tracking updates',
    ],
    imgId: 'hiw-step7-img-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              How Our China Sourcing Process Works
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A clear, step-by-step process designed to reduce risk and give you full visibility from inquiry to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i > 0 ? 'pt-8 border-t border-brand-border' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-brand-muted leading-relaxed mb-5">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-brand-muted text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="16x9"
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-brand-muted mb-8">
            Submit your inquiry today and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
