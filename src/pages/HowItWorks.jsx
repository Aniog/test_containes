import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const phases = [
  {
    phase: '1',
    title: 'Discovery & Consultation',
    duration: '1-2 days',
    tasks: [
      'Initial discussion to understand your product and requirements',
      'Review of specifications, budget, target price, and timeline',
      'Define quality standards and compliance requirements',
      'Discuss IP protection and confidentiality needs',
      'Agree on scope of work and service terms',
    ],
  },
  {
    phase: '2',
    title: 'Supplier Research & Shortlisting',
    duration: '1-2 weeks',
    tasks: [
      'Market research across relevant manufacturing hubs in China',
      'Identify potential suppliers matching your criteria',
      'Verify business licenses and trade credentials',
      'Review production capabilities and capacity',
      'Present shortlist of 3-5 qualified suppliers with profiles',
    ],
  },
  {
    phase: '3',
    title: 'Factory Audit & Verification',
    duration: '1-2 weeks',
    tasks: [
      'Schedule and conduct on-site factory visits',
      'Audit production lines, equipment, and facilities',
      'Verify quality management systems and certifications',
      'Assess working conditions and social compliance',
      'Provide detailed audit reports with photos',
    ],
  },
  {
    phase: '4',
    title: 'Sample Development & Approval',
    duration: '2-4 weeks',
    tasks: [
      'Coordinate sample requests with shortlisted suppliers',
      'Track sample production timeline',
      'Collect and evaluate samples upon arrival',
      'Arrange third-party testing if required',
      'Manage feedback and revision cycles until approval',
    ],
  },
  {
    phase: '5',
    title: 'Price Negotiation & Contracting',
    duration: '1-2 weeks',
    tasks: [
      'Facilitate price negotiations with selected supplier',
      'Clarify Incoterms, payment terms, and delivery schedule',
      'Review supplier contract and ensure key terms are covered',
      'Assist with NDA and IP protection agreements',
      'Confirm order placement and production start date',
    ],
  },
  {
    phase: '6',
    title: 'Production Monitoring & Quality Control',
    duration: 'Throughout production',
    tasks: [
      'Monitor production schedule and milestone completion',
      'Conduct during-production inspections (DUPRO)',
      'Verify raw materials and components',
      'Track packaging and labeling compliance',
      'Provide regular progress updates with photos/videos',
    ],
  },
  {
    phase: '7',
    title: 'Pre-Shipment Inspection & Testing',
    duration: '1 week before shipping',
    tasks: [
      'Conduct final pre-shipment inspection (PSI)',
      'Apply AQL sampling standards for quality checks',
      'Verify quantity, packaging, labeling, and documentation',
      'Arrange third-party lab testing if specified',
      'Provide final inspection report for your approval',
    ],
  },
  {
    phase: '8',
    title: 'Shipping, Logistics & Delivery',
    duration: '1-4 weeks',
    tasks: [
      'Coordinate freight booking (air or sea)',
      'Prepare and verify all shipping documentation',
      'Manage customs clearance and export procedures',
      'Provide real-time tracking updates',
      'Confirm final delivery and collect feedback',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Our 8-step sourcing process is designed to minimize risk, ensure quality, 
              and deliver results. From initial consultation to final delivery — we guide 
              you through every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {phases.map((phase, index) => (
            <div key={phase.phase} className="relative pb-12 last:pb-0">
              {/* Connecting line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-navy-200 hidden sm:block" />
              )}

              <div className="flex gap-6">
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{phase.phase}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy-900">{phase.title}</h3>
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block">
                      {phase.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-navy-300 rounded-full flex-shrink-0 mt-2" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Start Your Sourcing Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Ready to begin? Contact us for a free consultation and we will guide you 
            through the entire process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}