import { Link } from 'react-router-dom'
import { Search, Handshake, ClipboardCheck, Factory, Truck, ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Shield } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Planning',
    time: '1-2 weeks',
    steps: [
      'You submit product requirements through our inquiry form',
      'We schedule a consultation call to understand your needs in detail',
      'Our team researches the market and identifies potential sourcing strategies',
      'You receive a comprehensive sourcing plan with timeline and cost estimates',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Supplier Identification & Vetting',
    time: '2-4 weeks',
    steps: [
      'We search our verified supplier database and industry networks',
      'Shortlisted suppliers are screened for credentials and capabilities',
      'On-site factory audits are conducted for top candidates',
      'You receive detailed supplier profiles with audit reports and recommendations',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Negotiation & Sampling',
    time: '2-4 weeks',
    steps: [
      'We negotiate pricing, payment terms, and delivery schedules on your behalf',
      'Sample requests are coordinated and tracked',
      'Samples are evaluated against your specifications',
      'Final supplier selection with confirmed terms and conditions',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Production Management',
    time: '4-12 weeks',
    steps: [
      'Production kickoff meeting with confirmed supplier',
      'Raw material inspection and verification',
      'Regular production progress updates with photos',
      'During-production quality inspections at critical milestones',
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Quality Control & Shipping',
    time: '1-3 weeks',
    steps: [
      'Pre-shipment inspection using AQL standards',
      'Packaging and labeling verification',
      'Container loading supervision',
      'Logistics coordination and customs documentation',
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Delivery & Support',
    time: 'Ongoing',
    steps: [
      'Real-time shipment tracking until delivery',
      'Post-delivery quality follow-up',
      'Supplier relationship management for repeat orders',
      'Continuous improvement recommendations',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              A clear, structured process from your first inquiry to successful delivery. We guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div key={i} className="relative">
                <div className="md:flex md:gap-12">
                  <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-primary-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {phase.phase}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <Clock className="w-3.5 h-3.5" />
                        {phase.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {phase.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div className="hidden md:block absolute left-[130px] top-16 bottom-0 w-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get When You Work With Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-2">Full Transparency</h3>
              <p className="text-neutral-600 text-sm">Detailed reports, photos, and real-time updates at every stage. No hidden information.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-2">Dedicated Manager</h3>
              <p className="text-neutral-600 text-sm">A single point of contact who knows your business and manages your entire sourcing project.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-2">Risk Protection</h3>
              <p className="text-neutral-600 text-sm">We identify and mitigate risks before they become problems. Your interests are always protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Sourcing Journey Today
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Tell us about your product and we will create a custom sourcing plan.
            </p>
            <Link to="/contact" className="btn-primary text-lg inline-flex items-center gap-2">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}