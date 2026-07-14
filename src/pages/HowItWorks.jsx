import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, ShieldCheck, Truck, FileText } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target quantity, budget, and destination. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'No commitment required at this stage',
      'We respond within 24 business hours',
      'Free initial consultation included',
      'NDA available on request',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier network and conducts targeted research across China\'s manufacturing hubs. We identify 3–5 qualified manufacturers that match your product specs, MOQ, and price range.',
    details: [
      'Research across Guangzhou, Shenzhen, Yiwu, Ningbo, and more',
      'Pre-screening for business legitimacy',
      'Capability and capacity verification',
      'Comparative supplier summary report',
    ],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before recommending any supplier, we conduct an on-site factory audit. We verify production capabilities, certifications, workforce, equipment, and quality management systems. You receive a full audit report.',
    details: [
      'On-site visit by our local team',
      'Certification and license verification',
      'Production capacity assessment',
      'Photo documentation included',
    ],
  },
  {
    num: '04',
    icon: FileText,
    title: 'Sample Review & Price Negotiation',
    desc: 'We arrange product samples from shortlisted factories, review them against your specifications, and negotiate pricing, payment terms, and lead times on your behalf using our local market knowledge.',
    details: [
      'Sample coordination and review',
      'Specification compliance check',
      'Price and MOQ negotiation',
      'Payment terms guidance',
    ],
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Production Monitoring',
    desc: 'Once you place an order, we monitor production milestones and communicate with the factory on your behalf. We flag any issues early and keep you updated throughout the manufacturing process.',
    details: [
      'Regular production status reports',
      'Milestone tracking',
      'Issue identification and resolution',
      'Direct factory communication',
    ],
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before goods are packed and shipped, our inspectors conduct a pre-shipment inspection following AQL standards. We check dimensions, functionality, appearance, packaging, and labeling against your specs.',
    details: [
      'AQL-based sampling methodology',
      'Defect classification and reporting',
      'Pass/fail recommendation',
      'Detailed inspection report with photos',
    ],
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment from the factory to your destination. We keep you informed at every stage of transit.',
    details: [
      'Freight forwarder coordination',
      'Export documentation support',
      'FCL and LCL options',
      'Shipment tracking updates',
    ],
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
              How SSourcing China Works
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex gap-6">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 bg-gray-200 flex-1 mt-2 min-h-8" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-slate-bg rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-navy" />
                      </div>
                      <h2 className="text-xl font-bold text-navy">{step.title}</h2>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-text-main">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
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

      {/* What to Expect */}
      <section className="py-16 bg-slate-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">What to Expect Working With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Transparent Communication', desc: 'You receive regular updates at every stage. We tell you what we find — including problems — clearly and promptly.' },
              { title: 'Local Expertise', desc: 'Our team is based in China. We speak the language, know the factories, and understand how manufacturing works on the ground.' },
              { title: 'No Conflicts of Interest', desc: 'We work for you, not the factory. We do not accept commissions from suppliers, so our recommendations are always in your interest.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Get Started?</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Submit your sourcing inquiry and we'll get back to you within 24 hours with a plan and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-china text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-red-china-dark transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
