import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Send, Search, Shield, ClipboardCheck, Factory, Ship, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Send,
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product details, specifications, quantity, target price, and timeline. The more information you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality standards and certifications required',
      'Preferred timeline and delivery date',
    ],
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Matching & Shortlisting',
    description: 'We search our verified network of manufacturers and shortlist the best-fit suppliers based on your requirements. Each supplier has been pre-screened for capability and reliability.',
    details: [
      'Search across our verified supplier database',
      'Evaluate production capability and capacity',
      'Check relevant certifications and experience',
      'Shortlist 3-5 qualified suppliers',
    ],
  },
  {
    step: 3,
    icon: Shield,
    title: 'Quotation & Sampling',
    description: 'We collect competitive quotations from shortlisted suppliers and coordinate sample production. You review samples and select the best supplier for your order.',
    details: [
      'Collect and compare quotations',
      'Negotiate pricing and terms on your behalf',
      'Coordinate sample production and shipping',
      'Provide sample evaluation support',
    ],
  },
  {
    step: 4,
    icon: Factory,
    title: 'Production & Quality Control',
    description: 'Once you confirm the order, we monitor production progress and conduct quality inspections at key milestones to ensure everything meets your standards.',
    details: [
      'Production schedule monitoring',
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection with detailed report',
    ],
  },
  {
    step: 5,
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire logistics process — from booking freight to preparing customs documentation — to ensure your goods arrive safely and on time.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation preparation',
      'Container loading supervision',
      'Delivery tracking and coordination',
    ],
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
              How It Works
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Our Sourcing Process
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              A clear, transparent 5-step process that takes you from initial request to delivered goods.
              No surprises, no hidden steps — just reliable sourcing from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white">
                      {step.step}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                      <step.icon className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-slate-900">{step.title}</h2>
                  <p className="mt-3 text-lg text-slate-600">{step.description}</p>
                  <ul className="mt-6 space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    data-strk-bg-id={`process-bg-${step.step}`}
                    data-strk-bg={`[process-step-${step.step}-title] [process-step-${step.step}-desc]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="rounded-xl bg-slate-100 aspect-[4/3]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              While timelines vary by product and order size, here is a general guide to what you can expect.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {[
              { phase: 'Request', time: 'Day 1' },
              { phase: 'Shortlisting', time: '5-10 days' },
              { phase: 'Sampling', time: '2-4 weeks' },
              { phase: 'Production', time: '4-8 weeks' },
              { phase: 'Shipping', time: '2-6 weeks' },
            ].map((item) => (
              <div key={item.phase} className="card text-center">
                <div className="text-sm font-medium text-blue-700">{item.time}</div>
                <div className="mt-2 font-semibold text-slate-900">{item.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Submit your sourcing request today and we will get back to you within 24 hours.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-accent">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
