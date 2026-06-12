import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Fill in our free inquiry form with your product details — what you need, your target price, estimated quantity, and any specific requirements such as certifications or packaging.',
    details: [
      'Takes less than 5 minutes to complete',
      'No commitment or payment required',
      'We accept requests for samples, small orders, and large production runs',
    ],
    color: 'bg-blue-600',
  },
  {
    number: '02',
    title: 'Initial Consultation',
    description: 'Within 24 hours, one of our sourcing managers will contact you to clarify your requirements, discuss your timeline, and explain our process and fees.',
    details: [
      'Video call or email — your preference',
      'We ask the right questions to avoid costly mistakes later',
      'You receive a clear scope of work and pricing before we start',
    ],
    color: 'bg-indigo-600',
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team researches the Chinese market, contacts potential suppliers, and shortlists 3–5 factories that match your criteria. Each supplier is pre-screened for legitimacy and capability.',
    details: [
      'We check business registration, export history, and certifications',
      'We request product photos, price quotes, and lead times',
      'You receive a supplier comparison report',
    ],
    color: 'bg-violet-600',
  },
  {
    number: '04',
    title: 'Sample Ordering & Review',
    description: 'We coordinate sample orders from your preferred suppliers, receive them at our office, inspect them, and ship them to you with a detailed evaluation.',
    details: [
      'We photograph and measure samples before forwarding',
      'We flag any quality or specification issues',
      'You make an informed decision before placing a production order',
    ],
    color: 'bg-sky-600',
  },
  {
    number: '05',
    title: 'Factory Audit (Optional)',
    description: 'For larger orders or new suppliers, we conduct an on-site factory audit to verify production capacity, quality systems, and working conditions.',
    details: [
      'Covers facility, equipment, workforce, and compliance',
      'Full written report with photos',
      'Recommended for orders over $10,000 USD',
    ],
    color: 'bg-teal-600',
  },
  {
    number: '06',
    title: 'Order Placement & Production Monitoring',
    description: 'Once you confirm the order, we handle communication with the factory, review the purchase agreement, and monitor production progress with regular updates.',
    details: [
      'We review contracts and payment terms on your behalf',
      'Weekly production updates',
      'Early warning if delays or issues arise',
    ],
    color: 'bg-green-600',
  },
  {
    number: '07',
    title: 'Quality Inspection',
    description: 'Before goods are shipped, our QC inspectors visit the factory to check products against your specifications using AQL sampling standards.',
    details: [
      'Covers dimensions, appearance, function, and packaging',
      'Detailed inspection report with photos and video',
      'We do not release goods until issues are resolved',
    ],
    color: 'bg-amber-600',
  },
  {
    number: '08',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, prepare export documentation, and track your shipment from the factory to your warehouse.',
    details: [
      'Sea freight, air freight, or express options',
      'Full set of shipping documents provided',
      'Delivery tracking and updates throughout',
    ],
    color: 'bg-orange-600',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              How We Source for You
            </h1>
            <p className="text-slate-400 text-lg">
              A clear, step-by-step process designed to reduce risk and deliver results — from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8">
                {/* Step number circle */}
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 z-10 shadow-sm`}>
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
          <p className="text-slate-500 mb-8 text-lg">Submit your sourcing request today and receive a free plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
