import { Link } from 'react-router-dom';
import { MessageSquare, Search, Factory, ClipboardCheck, Package, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    duration: '1 day',
    description: 'Fill out our sourcing inquiry form with your product requirements — type, specifications, target price, quantity, and destination. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Technical specifications or drawings',
      'Target unit price and MOQ',
      'Required certifications (CE, FCC, etc.)',
      'Delivery timeline and destination port',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Shortlisting',
    duration: '5–10 days',
    description: 'We search our verified supplier network and conduct targeted outreach to identify 3–5 qualified manufacturers that match your requirements. Each supplier is pre-screened before being presented to you.',
    details: [
      'Search across verified supplier database',
      'Background and license verification',
      'Initial pricing and MOQ confirmation',
      'Supplier profile report for each option',
    ],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: '3–5 days',
    description: 'Once you select a preferred supplier, we conduct a thorough audit — either on-site or document-based — to verify their legitimacy, production capacity, and compliance with your standards.',
    details: [
      'Business license and export license check',
      'Production capacity and equipment review',
      'Certification and compliance verification',
      'Detailed audit report with photos',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample Development & Approval',
    duration: '2–4 weeks',
    description: 'We arrange sample production, inspect the samples against your specifications, and ship them to you for final approval. We manage multiple revision rounds if needed.',
    details: [
      'Sample order placement and follow-up',
      'Sample inspection before shipping',
      'Feedback and revision coordination',
      'Final sample approval confirmation',
    ],
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring & QC',
    duration: 'Throughout production',
    description: 'After you approve the sample and place the bulk order, we monitor production progress and conduct quality checks at critical stages to catch issues early.',
    details: [
      'Weekly production status updates',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Varies by route',
    description: 'We coordinate with licensed freight forwarders to arrange the most suitable shipping method, prepare all export documentation, and track your shipment until it reaches your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process designed to reduce risk and give you full visibility at every stage.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 -mb-4" />
                  )}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1a4f8a] rounded-xl flex items-center justify-center shadow-md relative z-10">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-[#e8621a] font-bold text-sm">Step {step.number}</span>
                        <h2 className="text-xl font-bold text-[#0d2340]">{step.title}</h2>
                        <span className="bg-[#1a4f8a]/10 text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                      <div className="bg-[#f4f6f9] rounded-xl p-4">
                        <ul className="space-y-2">
                          {step.details.map((d) => (
                            <li key={d} className="flex items-center gap-2 text-gray-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0" />
                              {d}
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

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Start Your Sourcing Inquiry <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
