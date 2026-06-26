import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardList, Search, Factory, Beaker, Eye, Ship } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell Us Your Requirements',
    subtitle: 'Share your product specifications and goals',
    details: [
      'Complete our detailed sourcing brief form',
      'Share product specifications, drawings, or samples',
      'Define quality standards and certification requirements',
      'Set target pricing and order volume expectations',
      'Specify timeline and delivery destination',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Research & Matching',
    subtitle: 'We find the best suppliers for your product',
    details: [
      'Search across our verified supplier database',
      'Identify manufacturers with relevant experience',
      'Cross-reference capabilities with your requirements',
      'Prepare shortlist of 3-5 qualified candidates',
      'Present supplier profiles with our recommendations',
    ],
  },
  {
    icon: Factory,
    step: '03',
    title: 'Factory Audit & Verification',
    subtitle: 'On-the-ground verification before commitment',
    details: [
      'Schedule and conduct on-site factory visits',
      'Verify business licenses and certifications',
      'Assess production lines and equipment',
      'Evaluate quality control systems',
      'Interview management and technical teams',
      'Deliver comprehensive audit report',
    ],
  },
  {
    icon: Beaker,
    step: '04',
    title: 'Sampling & Approval',
    subtitle: 'Get the product right before mass production',
    details: [
      'Coordinate sample development with supplier',
      'Arrange sample shipping to your address',
      'Review samples against specifications',
      'Manage revision cycles if needed',
      'Provide final sample approval report',
    ],
  },
  {
    icon: Eye,
    step: '05',
    title: 'Production & Quality Control',
    subtitle: 'Full oversight throughout manufacturing',
    details: [
      'Monitor raw material procurement',
      'Track production milestones weekly',
      'Conduct in-process inspections at key stages',
      'Perform pre-shipment quality inspection',
      'Provide real-time progress updates',
      'Issue detailed inspection reports',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Final Delivery',
    subtitle: 'Hassle-free logistics management',
    details: [
      'Book freight and compare shipping options',
      'Prepare all export documentation',
      'Coordinate container loading and inspection',
      'Handle customs clearance',
      'Provide tracking and delivery updates',
      'Follow up after delivery for feedback',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A transparent, six-step process designed to minimize risk and ensure your sourcing project delivers quality results on time.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex sm:flex-col items-center gap-3 sm:w-24 flex-shrink-0">
                    <div className="w-14 h-14 bg-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-bold text-accent-600">{step.step}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-border p-6 lg:p-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-primary-900 mb-1">{step.title}</h2>
                    <p className="text-accent-600 font-medium text-sm mb-4">{step.subtitle}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent-400 rounded-full flex-shrink-0 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-7 top-14 w-0.5 h-12 bg-accent-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-lg text-gray-600 mb-8">Fill out our sourcing brief and we will get back to you within 24 hours with a personalized plan.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}