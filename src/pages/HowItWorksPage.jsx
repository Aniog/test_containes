import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FileSearch, FileText, Beaker, Factory, Ship, ArrowRight, CheckCircle } from 'lucide-react'

const phases = [
  {
    icon: Search,
    phase: 'Phase 1',
    title: 'Discovery & Briefing',
    subtitle: 'We learn about your business',
    duration: '1-3 days',
    items: [
      'Initial consultation to understand your product requirements',
      'Detailed specification review and clarification',
      'Budget parameters and target pricing discussion',
      'Quality standards and certification requirements',
      'Timeline expectations and milestone planning',
      'Non-disclosure agreement (NDA) signing',
    ],
  },
  {
    icon: FileSearch,
    phase: 'Phase 2',
    title: 'Supplier Research & Vetting',
    subtitle: 'We find the best suppliers for you',
    duration: '1-2 weeks',
    items: [
      'Targeted search through our curated supplier database',
      'Initial screening against your criteria and requirements',
      'Business license and certification verification',
      'Past export record and trade reference checks',
      'Shortlist of 3-5 qualified suppliers per product',
      'Comprehensive supplier comparison report',
    ],
  },
  {
    icon: FileText,
    phase: 'Phase 3',
    title: 'Quotes & Negotiation',
    subtitle: 'We present and negotiate options',
    duration: '1-2 weeks',
    items: [
      'Request detailed quotations from shortlisted suppliers',
      'Compare pricing, MOQ, lead times, and terms',
      'Negotiate favorable pricing and payment terms',
      'Clarify product specifications and customization options',
      'Present curated options with our recommendations',
      'Final supplier selection based on your decision',
    ],
  },
  {
    icon: Beaker,
    phase: 'Phase 4',
    title: 'Sample Development & Approval',
    subtitle: 'We manage the sampling process',
    duration: '2-4 weeks',
    items: [
      'Coordinate sample development with selected supplier',
      'Communicate specifications and quality requirements',
      'Track sample production timeline',
      'Collect and inspect samples upon arrival',
      'Arrange sample shipping to your location',
      'Manage revision cycles if needed',
      'Obtain pre-production sample approval',
    ],
  },
  {
    icon: Factory,
    phase: 'Phase 5',
    title: 'Order & Production Management',
    subtitle: 'We monitor your production',
    duration: 'Throughout production',
    items: [
      'Review and confirm order contract and terms',
      'Deposit payment coordination (if applicable)',
      'Raw material verification at factory',
      'During-production quality inspections',
      'Weekly progress reports with photos',
      'Issue identification and resolution',
      'Pre-shipment inspection before dispatch',
    ],
  },
  {
    icon: Ship,
    phase: 'Phase 6',
    title: 'Shipping & Delivery',
    subtitle: 'We handle logistics end-to-end',
    duration: '1-4 weeks depending on method',
    items: [
      'Freight booking (sea or air) at competitive rates',
      'Export customs clearance documentation',
      'Cargo insurance arrangement',
      'Container loading supervision',
      'Real-time tracking and status updates',
      'Destination customs clearance support',
      'Final delivery to your warehouse or door',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A transparent, structured process designed to minimize risk and deliver results. From initial briefing to final delivery, we guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-16">
              {phases.map((phase, idx) => (
                <div key={phase.title} className="relative md:pl-20">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-xl bg-brand-navy items-center justify-center z-10">
                    <phase.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-brand-red bg-red-50 px-2.5 py-1 rounded">{phase.phase}</span>
                      <span className="text-xs text-gray-400">{phase.duration}</span>
                    </div>
                    <h2 className="text-xl font-bold text-brand-navy mb-1">{phase.title}</h2>
                    <p className="text-gray-500 mb-4">{phase.subtitle}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Start Your Sourcing Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Get a free consultation and sourcing plan tailored to your product requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}