import { Link } from 'react-router-dom'
import { ClipboardList, Search, Building2, Eye, Truck, Handshake, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Tell Us Your Needs',
    desc: 'Start by completing our inquiry form or scheduling a call. Share your product requirements, target pricing, quality standards, order volume, and any specific supplier preferences. The more detail you provide, the better we can match you.',
    details: ['Product specifications and drawings', 'Target price range and budget', 'Quality standards and certifications', 'Order volume and timeline', 'Packaging and labeling requirements'],
    duration: 'Same day',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Research & Shortlist',
    desc: 'Our team searches our database of 3,000+ factories and performs additional market research to identify the best candidates. We evaluate suppliers on pricing, quality history, certifications, capacity, and reputation.',
    details: ['Database search across verified factories', 'Market rate analysis', 'Capability matching', 'Preliminary price negotiation', 'Shortlist of 3-5 qualified suppliers'],
    duration: '3-5 business days',
  },
  {
    icon: Building2,
    number: '03',
    title: 'Factory Verification',
    desc: 'We visit shortlisted factories on-site to verify their legitimacy and capabilities. Our bilingual team inspects production lines, reviews licenses and certifications, and checks references from existing clients.',
    details: ['On-site factory audit', 'Business license verification', 'Production capability assessment', 'Quality management system review', 'Reference checks with existing clients'],
    duration: '2-3 business days per factory',
  },
  {
    icon: Eye,
    number: '04',
    title: 'Quality Control & Samples',
    desc: 'Once suppliers are verified, we manage sample production and approval. When production begins, we conduct inspections at key stages: pre-production, during production, and pre-shipment, following international AQL standards.',
    details: ['Sample development and approval', 'Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection (AQL 2.5)', 'Container loading supervision'],
    duration: 'Ongoing during production',
  },
  {
    icon: Truck,
    number: '05',
    title: 'Shipping & Delivery',
    desc: 'After goods pass inspection, we coordinate the entire logistics process. We negotiate freight rates, handle customs documentation, arrange consolidation if needed, and track delivery to your destination.',
    details: ['Freight rate comparison and booking', 'Export documentation preparation', 'Customs clearance coordination', 'Cargo insurance arrangement', 'Delivery tracking to your door'],
    duration: '7-45 days depending on method',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Support',
    desc: 'Our relationship does not end with delivery. We provide ongoing supplier management, assist with reorders, and help resolve any post-delivery issues. As you grow, we scale with you.',
    details: ['Supplier relationship management', 'Reorder facilitation', 'Issue resolution and escalation', 'Market intelligence updates', 'Annual supplier performance reviews'],
    duration: 'Ongoing',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process designed to minimize risk and maximize results. From your first inquiry to delivery at your door.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isReversed = i % 2 === 1
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#1A365D] rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#C27A3E] text-xs font-bold tracking-wider uppercase">
                        Step {step.number} &mdash; {step.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">{step.title}</h2>
                    <p className="text-[#64748B] text-base leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2.5">
                      {step.details.map((d, di) => (
                        <li key={di} className="flex items-start gap-2.5 text-sm text-[#1E293B]">
                          <div className="w-1.5 h-1.5 bg-[#C27A3E] rounded-full shrink-0 mt-1.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-[#F8F9FA] rounded-xl p-8 ${isReversed ? 'lg:order-1' : ''}`}>
                    <h3 className="text-sm font-semibold text-[#1A365D] mb-4">What happens in this step</h3>
                    <div className="space-y-4">
                      {step.details.map((d, di) => (
                        <div key={di} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                          <div className="w-8 h-8 bg-[#F5EDE3] rounded-full flex items-center justify-center text-[#C27A3E] text-xs font-bold">
                            {di + 1}
                          </div>
                          <span className="text-sm text-[#1E293B]">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Ready to Get Started?</h2>
          <p className="text-[#64748B] mb-6">
            The first step is simple. Tell us what you need, and we will handle the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors"
          >
            Start Your Sourcing Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
