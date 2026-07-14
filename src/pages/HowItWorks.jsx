import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, ShieldCheck, FlaskConical, ClipboardCheck, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    description: 'Fill out our sourcing inquiry form with your product requirements — type, quantity, target price, certifications needed, and any other specifications. The more detail you provide, the better we can match you.',
    details: ['Product description & specs', 'Target unit price range', 'Required certifications', 'Delivery timeline'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our sourcing team searches our verified supplier database and major Chinese trade platforms. We screen candidates against your criteria and present a shortlist of 3–5 qualified manufacturers within 5–10 business days.',
    details: ['Database & platform search', 'Initial supplier screening', 'Capability assessment', 'Shortlist presentation'],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit',
    description: 'Before you commit, we visit the shortlisted factories in person. Our auditors verify business registration, production capacity, equipment, workforce, and compliance with your standards.',
    details: ['On-site factory visit', 'Business license verification', 'Production capacity check', 'Audit report with photos'],
  },
  {
    number: '04',
    icon: FlaskConical,
    title: 'Sampling & Negotiation',
    description: 'We request product samples from the best-matched factories, review quality against your specifications, and negotiate pricing, payment terms, and lead times on your behalf.',
    details: ['Sample request & review', 'Quality assessment', 'Price negotiation', 'Terms & conditions review'],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    description: 'Once you approve a supplier and place the order, we monitor production progress and conduct inspections at key stages — during production and before shipment — to ensure quality standards are met.',
    details: ['Production milestone tracking', 'During-production inspection', 'Pre-shipment inspection', 'Defect reporting & resolution'],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, prepare all export documentation, and track your shipment from the factory to your warehouse. We handle sea freight, air freight, and express options.',
    details: ['Freight forwarder coordination', 'Export documentation', 'Container loading supervision', 'Shipment tracking & updates'],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Our Process</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A clear, structured process from your first inquiry to final delivery — with full transparency at every step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-neutral-200 -mb-8" />
                  )}
                  <div className="bg-white border border-neutral-200 rounded-2xl p-6 lg:p-8 relative">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shadow-md">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">Step {step.number}</span>
                        </div>
                        <h2 className="text-neutral-900 text-xl font-bold mb-3">{step.title}</h2>
                        <p className="text-neutral-500 text-base leading-relaxed mb-4">{step.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {step.details.map((detail) => (
                            <div key={detail} className="flex items-center gap-2 text-neutral-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-4">Start Your Sourcing Project</h2>
          <p className="text-blue-200 text-lg mb-8">Submit your inquiry today and we'll have a sourcing plan ready for you within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-base"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
