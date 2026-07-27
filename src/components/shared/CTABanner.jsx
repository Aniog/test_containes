import CTAButton from '@/components/shared/CTAButton'
import { ArrowRight } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to Source from China?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Tell us what you need and get a free sourcing plan within 48 hours. No commitment required.
        </p>
        <div className="mt-8">
          <CTAButton variant="white">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
