import { Link } from 'react-router-dom';
import { FileText, Users, ClipboardList, Truck, CheckCircle, Clock, MessageSquare, Shield } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Fill out our inquiry form with your product requirements, including specifications, quantities, target price, and timeline. The more details you provide, the more accurate our sourcing plan will be.',
    details: [
      'Product specifications and technical requirements',
      'Target quantity and order volume',
      'Budget range and target pricing',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery date',
    ],
    tip: 'Include photos, drawings, or reference products if available.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Supplier Identification & Verification',
    description: 'Our team searches our network and the broader Chinese market to identify qualified suppliers. We then conduct thorough verification to ensure they meet our standards.',
    details: [
      'Market research across manufacturing regions',
      'Initial screening of 10-20 potential suppliers',
      'Business license and registration verification',
      'On-site factory audits for top candidates',
      'Production capacity and quality assessment',
    ],
    tip: 'We typically present 3-5 verified suppliers for your review.',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Quotation & Supplier Selection',
    description: 'We collect detailed quotations from verified suppliers and present them to you with our analysis and recommendations. You choose the supplier that best fits your needs.',
    details: [
      'Detailed quotation comparison',
      'Price analysis and negotiation support',
      'Supplier capability comparison',
      'Our professional recommendations',
      'Final supplier selection with your approval',
    ],
    tip: 'We help you understand the trade-offs between price, quality, and lead time.',
  },
  {
    icon: ClipboardList,
    step: '04',
    title: 'Sampling & Production',
    description: 'Once you select a supplier, we coordinate sample production and approval, then monitor mass production to ensure everything stays on track.',
    details: [
      'Sample request coordination',
      'Sample evaluation and quality assessment',
      'Feedback communication and revisions',
      'Mass production kickoff',
      'Regular production progress updates',
    ],
    tip: 'Never skip the sampling stage. It is your best quality assurance.',
  },
  {
    icon: Shield,
    step: '05',
    title: 'Quality Inspection',
    description: 'Before your goods ship, we conduct thorough quality inspections to ensure products meet your approved specifications and quality standards.',
    details: [
      'Pre-shipment inspection (PSI)',
      'Random sampling based on AQL standards',
      'Functionality and safety testing',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
    tip: 'We only approve shipment after quality passes our inspection.',
  },
  {
    icon: Truck,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics to get your goods from the factory to your destination, handling documentation and customs requirements.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation preparation',
      'Container loading supervision',
      'Shipping tracking and updates',
      'Delivery confirmation',
    ],
    tip: 'We can work with your existing freight forwarder or arrange one for you.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Sourcing Process Works</h1>
            <p className="text-lg text-blue-100">
              A transparent, step-by-step process from your initial inquiry to final delivery. We keep you informed at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="lg:w-64 flex-shrink-0">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">
                      <span className="font-semibold">Pro tip:</span> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Submit your product requirements and we will get back to you within 24 hours with a free sourcing plan.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
