import { Link } from 'react-router-dom'
import SectionHeader from '@/components/shared/SectionHeader'

const steps = [
  {
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, specifications, target price, and desired quantity. We analyze your needs and develop a sourcing plan.',
  },
  {
    num: '02',
    title: 'Supplier Search & Verification',
    desc: 'We search our network, shortlist candidates, verify factories on-site, and present you with qualified supplier options with detailed reports.',
  },
  {
    num: '03',
    title: 'Sample & Price Negotiation',
    desc: 'We coordinate sample production, evaluate quality, negotiate pricing and terms on your behalf, and ensure clear agreement before production.',
  },
  {
    num: '04',
    title: 'Production & Quality Control',
    desc: 'We follow production progress, conduct inspections at key stages, and address issues proactively to keep your order on track and up to standard.',
  },
  {
    num: '05',
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, handle customs documentation, coordinate logistics, and track your shipment until it reaches your door.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Our Sourcing Process"
          subtitle="A clear, step-by-step approach that keeps you informed and in control at every stage."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative bg-white rounded-xl p-6 border border-gray-100">
              <div className="text-accent-400 font-bold text-2xl mb-3">{step.num}</div>
              <h3 className="text-base font-semibold text-navy-600 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-navy-200 text-xl">&rarr;</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-accent-400 font-semibold hover:text-accent-500 transition-colors"
          >
            See Full Process Details
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
