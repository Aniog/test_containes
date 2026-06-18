import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description: 'Tell us what product you need, your target price, quantity, and any specific requirements. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'Our team searches our vetted supplier network and identifies 3–5 qualified factories that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit & Samples',
    description: 'We visit shortlisted factories, verify their credentials, and arrange sample production for your review.',
  },
  {
    number: '04',
    title: 'Order & Production',
    description: 'Once you approve, we place the order, monitor production progress, and send you regular updates.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description: 'Before shipment, our QC team inspects goods against your specifications and provides a detailed report.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle customs paperwork, and track your shipment until it arrives at your door.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          title="How We Source for You"
          subtitle="A transparent, step-by-step process designed to reduce risk and save you time when importing from China."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A3C6E] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{step.title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  {(index + 1) % 3 !== 0 && (
                    <ArrowRight className="w-5 h-5 text-[#CBD5E0]" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
