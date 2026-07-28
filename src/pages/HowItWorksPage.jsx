import { Link } from 'react-router-dom';
import { ArrowRight, Send, Search, FileCheck, Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Send,
    title: 'Submit Your Requirements',
    description: 'Tell us what you need — product details, quantities, quality standards, target price, and timeline. The more information you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and drawings',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery terms',
    ],
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Identification & Verification',
    description: 'We search our network of verified manufacturers and shortlist the most suitable options. Every supplier is checked for business license, production capacity, and quality management.',
    details: [
      'Search across our verified supplier database',
      'Evaluate production capabilities and certifications',
      'Conduct background checks and reference verification',
      'Shortlist 3-5 qualified suppliers for your review',
    ],
  },
  {
    step: 3,
    icon: FileCheck,
    title: 'Quotation & Sampling',
    description: 'We collect competitive quotes from shortlisted suppliers and coordinate sample production so you can evaluate quality before committing to a full order.',
    details: [
      'Request and compare detailed quotations',
      'Negotiate pricing and payment terms on your behalf',
      'Arrange sample production and shipping',
      'Provide sample evaluation feedback to factories',
    ],
  },
  {
    step: 4,
    icon: Package,
    title: 'Production & Quality Control',
    description: 'Once you approve a supplier and samples, we monitor production, conduct inspections at key stages, and keep you informed throughout the process.',
    details: [
      'Pre-production meeting and material verification',
      'During-production inspections and progress reports',
      'Pre-shipment final quality inspection',
      'Container loading supervision if required',
    ],
  },
  {
    step: 5,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics — freight forwarding, customs documentation, and delivery coordination — to ensure your goods arrive safely at your destination.',
    details: [
      'Freight forwarding (sea freight or air freight)',
      'Export customs clearance in China',
      'Import documentation preparation',
      'Delivery tracking and arrival confirmation',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">How Our Sourcing Process Works</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              A clear, transparent process designed to make importing from China simple, safe, and efficient. From your first inquiry to final delivery, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <h2 className="heading-2 text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center p-8">
                      <step.icon className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                      <p className="text-slate-400 font-medium">Step {step.step}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-lg text-slate-600">Every project is different, but here is a general timeline for a standard sourcing project.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { phase: 'Supplier Identification', duration: '1-2 weeks', description: 'Research, verification, and shortlisting' },
                { phase: 'Quotation & Sampling', duration: '2-4 weeks', description: 'Price negotiation and sample evaluation' },
                { phase: 'Production', duration: '4-8 weeks', description: 'Manufacturing with ongoing quality monitoring' },
                { phase: 'Inspection & Shipping', duration: '1-3 weeks', description: 'Final inspection, customs, and delivery' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-slate-900">{item.phase}</h3>
                      <span className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{item.duration}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your sourcing requirements and we will get back to you within 24 hours with a free consultation.
          </p>
          <Link to="/contact" className="btn-accent text-lg">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
