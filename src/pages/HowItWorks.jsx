import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, FileText, Users, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    id: 'step-1',
    titleId: 'step-title-1',
    descId: 'step-desc-1',
    imgId: 'step-img-1-a1b2c3',
    title: 'Submit Your Product Brief',
    duration: '1–2 days',
    desc: 'Fill out our sourcing inquiry form with your product requirements: specifications, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target FOB price and MOQ',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Destination country and preferred Incoterms',
    ],
  },
  {
    number: '02',
    id: 'step-2',
    titleId: 'step-title-2',
    descId: 'step-desc-2',
    imgId: 'step-img-2-d4e5f6',
    title: 'Supplier Research & Shortlisting',
    duration: '5–10 days',
    desc: 'Our sourcing team searches our verified supplier database and conducts outreach to identify 3–5 qualified manufacturers. We screen each supplier against your requirements before presenting them to you.',
    details: [
      'Database search across 10,000+ verified suppliers',
      'Initial qualification calls with factories',
      'Quote collection and comparison',
      'Supplier profile report with key metrics',
      'Recommendation with rationale',
    ],
  },
  {
    number: '03',
    id: 'step-3',
    titleId: 'step-title-3',
    descId: 'step-desc-3',
    imgId: 'step-img-3-g7h8i9',
    title: 'Factory Audit & Sample Review',
    duration: '7–14 days',
    desc: 'Once you select a preferred supplier, we conduct an on-site factory audit and coordinate sample production. We review samples against your specifications and provide feedback before you approve production.',
    details: [
      'On-site factory audit with photo documentation',
      'Sample production coordination',
      'Sample review against spec sheet',
      'Negotiation of final price and terms',
      'Purchase order and contract review',
    ],
  },
  {
    number: '04',
    id: 'step-4',
    titleId: 'step-title-4',
    descId: 'step-desc-4',
    imgId: 'step-img-4-j1k2l3',
    title: 'Production Monitoring',
    duration: 'Varies by product',
    desc: 'After you place your order, we monitor production progress with regular factory visits and milestone updates. We identify and escalate any issues early so they can be resolved without delaying your shipment.',
    details: [
      'Production schedule tracking',
      'Weekly progress reports with photos',
      'In-line quality inspection',
      'Issue escalation and resolution',
      'Pre-shipment final inspection',
    ],
  },
  {
    number: '05',
    id: 'step-5',
    titleId: 'step-title-5',
    descId: 'step-desc-5',
    imgId: 'step-img-5-m4n5o6',
    title: 'Shipping & Delivery',
    duration: '15–45 days transit',
    desc: 'Once goods pass final inspection, we coordinate with freight forwarders to arrange shipment. We prepare all export documentation and provide tracking updates until your goods arrive at the destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Packing list and labeling review',
      'Shipment booking and tracking',
      'Delivery confirmation',
    ],
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Source for You
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A structured, five-step process designed to reduce risk, save time, and deliver
              consistent results — from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline overview */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-2 text-sm">
                <span className="w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {step.number}
                </span>
                <span className="font-medium text-gray-700">{step.title}</span>
                <span className="text-gray-400 hidden md:inline">·</span>
                <span className="text-gray-400 hidden md:inline">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                      <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-gray-100 h-64 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
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

      {/* What you get */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">What You Get at Every Stage</h2>
            <p className="text-gray-300">Clear deliverables so you always know what to expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Written Reports', desc: 'Supplier profiles, audit reports, and inspection reports delivered in PDF.' },
              { icon: Users, title: 'Dedicated Contact', desc: 'One point of contact who knows your project from start to finish.' },
              { icon: Package, title: 'Photo Documentation', desc: 'Factory photos, production photos, and inspection photos at every stage.' },
              { icon: CheckCircle, title: 'Clear Recommendations', desc: 'We tell you what we found and what we recommend — no ambiguity.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <Icon className="w-8 h-8 text-gold-accent mb-3" />
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Submit your product brief and we will respond within 24 hours with a sourcing plan.
          </p>
          <Link to="/contact" className="btn-cta">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 inline ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
