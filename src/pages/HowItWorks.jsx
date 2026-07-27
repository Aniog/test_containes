import { Link } from 'react-router-dom';
import { MessageSquare, Search, Factory, ShieldCheck, Ship, CheckCircle, ArrowRight, Clock, FileText, Users } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Request',
    duration: '1 day',
    description: 'Fill out our sourcing inquiry form with your product details, target price, quantity, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, FDA, etc.)',
      'Packaging and labeling requirements',
      'Delivery timeline',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    duration: '5–10 days',
    description: 'Our sourcing team searches our verified supplier network and conducts targeted research to identify manufacturers that match your requirements. We present you with a shortlist of 3–5 qualified options.',
    details: [
      'Database and trade show research',
      'Initial supplier qualification calls',
      'Price and MOQ comparison',
      'Supplier profile preparation',
      'Recommendation report',
    ],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit',
    duration: '3–5 days',
    description: 'For shortlisted suppliers, we conduct on-site factory audits to verify their credentials, production capacity, and quality systems. You receive a detailed audit report with photos.',
    details: [
      'Business license and registration check',
      'Production line inspection',
      'Quality management system review',
      'Worker conditions assessment',
      'Photo and video documentation',
    ],
  },
  {
    number: '04',
    icon: FileText,
    title: 'Sample & Negotiation',
    duration: '7–14 days',
    description: 'We arrange product samples from your chosen supplier and review them against your specifications. We also negotiate pricing, payment terms, and lead times on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample review against specs',
      'Price and terms negotiation',
      'Contract review support',
      'Sample approval sign-off',
    ],
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Production & Quality Control',
    duration: 'During production',
    description: 'Once production begins, we monitor progress with regular factory visits and conduct quality inspections at key milestones to catch issues before they escalate.',
    details: [
      'Production schedule monitoring',
      'During-production inspection',
      'Pre-shipment inspection (AQL)',
      'Defect reporting and resolution',
      'Final approval before shipment',
    ],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    duration: '15–45 days',
    description: 'We coordinate freight booking, prepare export documentation, and track your shipment from the factory to your destination. We support sea, air, and express freight options.',
    details: [
      'Freight forwarder coordination',
      'Export documentation',
      'Customs clearance support',
      'Real-time shipment tracking',
      'Delivery confirmation',
    ],
  },
];

const faqs = [
  { q: 'Do I need to travel to China?', a: 'No. We handle all on-the-ground activities in China on your behalf, including factory visits, inspections, and supplier meetings.' },
  { q: 'Can I use your QC service without full sourcing?', a: 'Yes. We offer standalone quality inspection and factory audit services for buyers who already have suppliers.' },
  { q: 'How do you charge for your services?', a: 'We charge a service fee based on project scope. We provide a clear quote before starting any work — no surprises.' },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              How We Source for You
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              A clear, structured process from your first inquiry to goods arriving at your door. No guesswork, no surprises.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Start Your Sourcing Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Step by Step"
            title="The SSourcing China Process"
            subtitle="Six clear stages, each designed to reduce risk and keep you informed."
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-6 md:gap-8">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-neutral-200 mt-3 min-h-8" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-brand-sky uppercase tracking-widest">{step.number}</span>
                      <span className="flex items-center gap-1 text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-12 bg-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Quick Answers</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">{faq.q}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default HowItWorks;
