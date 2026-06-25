import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="border-t border-line pt-16 md:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">
              Let's begin
            </p>
            <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink max-w-3xl">
              Tell us about the panels you need to fold. We will recommend the
              right machine — and the right way to use it.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/contact"
              className="bg-ink text-white hover:bg-bronze transition-colors px-7 py-4 text-sm font-medium tracking-wide inline-flex items-center gap-3"
            >
              Start the conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
