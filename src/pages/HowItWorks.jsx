import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    duration: '5 minutes',
    desc: 'Fill out our online inquiry form with your product details — what you need, target price, quantity, quality requirements, and any certifications. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, etc.)',
      'Packaging and labeling requirements',
      'Delivery timeline',
    ],
  },
  {
    number: '02',
    title: 'Free Consultation & Scope Agreement',
    duration: '1–2 business days',
    desc: 'Our team reviews your request and schedules a brief call or email exchange to clarify requirements and confirm the scope of work. We provide a transparent fee structure before proceeding.',
    details: [
      'Requirements clarification call',
      'Service scope and fee proposal',
      'Timeline confirmation',
      'Agreement to proceed',
    ],
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    duration: '5–7 business days',
    desc: 'We research suppliers from our verified network, trade databases, and industry contacts. Each candidate is screened against your requirements before being included in the shortlist.',
    details: [
      'Database and network research',
      'Initial supplier screening',
      'Capability and capacity check',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier profile reports',
    ],
  },
  {
    number: '04',
    title: 'Factory Audit & Verification',
    duration: '3–5 business days',
    desc: 'For shortlisted suppliers, we conduct on-site or document-based audits to verify their credentials, production capacity, quality systems, and compliance. You receive a detailed audit report.',
    details: [
      'On-site factory visit',
      'Production capacity assessment',
      'Quality management review',
      'Certification verification',
      'Audit report with photos',
    ],
  },
  {
    number: '05',
    title: 'Sample Coordination & Review',
    duration: '7–21 days (factory dependent)',
    desc: 'We coordinate sample production with your chosen supplier, review samples against your specifications, and provide a detailed sample report. We can ship samples directly to you for final approval.',
    details: [
      'Sample request coordination',
      'Sample quality review',
      'Specification compliance check',
      'Sample report and photos',
      'Sample shipping to buyer',
    ],
  },
  {
    number: '06',
    title: 'Order Placement & Production Monitoring',
    duration: 'Ongoing during production',
    desc: 'Once you approve the sample and place your order, we monitor production progress, communicate with the factory, and provide regular updates. We flag any issues early so they can be resolved quickly.',
    details: [
      'Purchase order review',
      'Production timeline tracking',
      'Factory communication',
      'Weekly progress updates',
      'Issue escalation and resolution',
    ],
  },
  {
    number: '07',
    title: 'Pre-Shipment Inspection',
    duration: '1–2 days',
    desc: 'Before goods are packed and shipped, our inspectors visit the factory to conduct a thorough quality check using AQL sampling standards. You receive a full inspection report before approving shipment.',
    details: [
      'AQL sampling inspection',
      'Specification compliance check',
      'Packaging and labeling review',
      'Defect classification report',
      'Shipment approval or hold',
    ],
  },
  {
    number: '08',
    title: 'Shipping Coordination & Delivery',
    duration: 'Varies by destination',
    desc: 'We coordinate with freight forwarders to arrange sea or air freight, prepare export documentation, and track your shipment. We keep you informed until your goods arrive at your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation',
      'Shipment booking',
      'Tracking and updates',
      'Delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              How Our China Sourcing Process Works
            </h1>
            <p className="text-[#a8b8cc] text-lg leading-relaxed">
              A structured, step-by-step process designed to reduce risk, save time, and give you full visibility from inquiry to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-[#dde3ec] -mb-8" />
                )}

                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[#0d2340] rounded-xl flex items-center justify-center">
                      <span className="text-[#e8621a] font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#f4f6f9] rounded-xl p-6 mb-2">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h2 className="text-xl font-bold text-[#0d2340]">{step.title}</h2>
                      <div className="flex items-center gap-1.5 bg-white border border-[#dde3ec] rounded-full px-3 py-1">
                        <Clock className="w-3.5 h-3.5 text-[#5a6a7e]" />
                        <span className="text-xs text-[#5a6a7e] font-medium">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-[#5a6a7e] text-sm leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-[#1a2332]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#1a4f8a] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Start Your Sourcing Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
