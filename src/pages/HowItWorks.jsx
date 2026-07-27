import { Link } from 'react-router-dom';
import { MessageSquare, Search, ClipboardList, CheckCircle, Factory, Truck, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    duration: 'Day 1',
    description: 'Fill out our sourcing inquiry form with details about your product, target quantity, budget, and any specific requirements. The more detail you provide, the faster and more accurately we can match you with the right suppliers.',
    details: [
      'Product name, description, and specifications',
      'Target quantity and MOQ requirements',
      'Budget or target unit price',
      'Required certifications or compliance standards',
      'Preferred timeline for samples and production',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Screening',
    duration: 'Days 2–7',
    description: 'Our sourcing team searches our verified supplier database, trade platforms, and industry contacts to identify manufacturers that match your criteria. We screen each candidate for capability, reliability, and pricing before presenting them to you.',
    details: [
      'Search across verified supplier network and trade platforms',
      'Initial supplier capability assessment',
      'Preliminary pricing and MOQ verification',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier comparison summary report',
    ],
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Factory Audit & Quote Negotiation',
    duration: 'Days 7–14',
    description: 'For shortlisted suppliers, we conduct background checks and on-site factory audits. We verify business licenses, production capacity, quality systems, and certifications. We then negotiate pricing and terms on your behalf.',
    details: [
      'On-site factory visit and audit',
      'Business license and certification verification',
      'Production capacity and equipment assessment',
      'Price and terms negotiation',
      'Detailed audit report with photos',
    ],
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Sample Procurement & Approval',
    duration: 'Weeks 2–4',
    description: 'We request samples from your selected supplier, inspect them against your specifications, and ship them to you for final approval. If revisions are needed, we coordinate with the factory and manage additional sample rounds.',
    details: [
      'Sample request and coordination',
      'Sample quality inspection against specs',
      'Sample shipping to your location',
      'Feedback collection and revision coordination',
      'Final sample approval confirmation',
    ],
  },
  {
    number: '05',
    icon: Factory,
    title: 'Production Monitoring',
    duration: 'During Production',
    description: 'Once you approve the sample and place the order, we monitor production progress. We conduct mid-production inspections, communicate with the factory on your behalf, and provide regular status updates.',
    details: [
      'Production kick-off confirmation',
      'Weekly progress updates',
      'During-production inspection (DUPRO)',
      'Issue identification and resolution',
      'Photo and video updates from the factory',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Quality Inspection & Shipment',
    duration: 'Before Shipment',
    description: 'Before goods leave the factory, our inspectors conduct a thorough pre-shipment inspection. Once goods pass inspection, we coordinate with freight forwarders to arrange shipping and prepare all export documentation.',
    details: [
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight forwarder coordination',
      'Shipment tracking and delivery updates',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A clear, step-by-step process designed to reduce risk and give you full visibility into your China sourcing project.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-100 -mb-12 hidden md:block" />
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Step number */}
                    <div className="md:col-span-1 flex md:flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 z-10 relative">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-11">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-xl font-bold text-navy">{step.title}</h2>
                        <span className="text-xs font-medium text-primary bg-lightblue px-3 py-1 rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{step.description}</p>
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Activities</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <p className="text-gray-600 mb-6 text-base">Ready to start your sourcing project?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
