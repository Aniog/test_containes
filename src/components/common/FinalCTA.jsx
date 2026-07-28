import { ArrowRight } from 'lucide-react'
import CTAButton from './CTAButton.jsx?ssourcing=20260728'

const FinalCTA = () => (
  <section className="bg-blue-950 py-16 text-white lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Start with a practical brief</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Need a reliable sourcing partner in China?</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
          Share your product details and we will review the best next step: supplier search, verification, sample follow-up, QC inspection, or shipment coordination.
        </p>
      </div>
      <CTAButton href="/contact" variant="dark" className="gap-2">
        Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
      </CTAButton>
    </div>
  </section>
)

export default FinalCTA
