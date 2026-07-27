import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Share your requirements',
    description:
      'Send us your product specifications, target price, quantity, and quality expectations. We clarify details and confirm feasibility within one business day.',
  },
  {
    number: '02',
    title: 'Supplier shortlist & samples',
    description:
      'We source, verify, and compare qualified factories, then arrange samples so you can evaluate quality before committing to an order.',
  },
  {
    number: '03',
    title: 'Production & quality control',
    description:
      'Once you place the order, we follow production on-site, inspect goods against your specifications, and send you detailed reports at each stage.',
  },
  {
    number: '04',
    title: 'Shipping & delivery',
    description:
      'We consolidate cargo, handle export documentation, coordinate with your forwarder or ours, and track the shipment until it reaches your port.',
  },
]

const ProcessSteps = () => {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear, four-step sourcing process"
          description="You always know what stage your order is in and what happens next. No surprises, no guesswork."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-line bg-white p-6 shadow-sm md:p-8"
            >
              <span className="text-4xl font-bold text-brand-100">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-body md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            See the full process, timeline and fees <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
