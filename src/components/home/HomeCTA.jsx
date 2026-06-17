import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeCTA = () => {
  return (
    <section className="relative bg-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
            Ready to begin?
          </span>
          <h2
            id="cta-title"
            className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.15]"
          >
            Let's build the machine your workshop deserves.
          </h2>
          <p
            id="cta-desc"
            className="mt-6 text-lg text-steel leading-relaxed max-w-lg"
          >
            Tell us about your production needs and our engineers will respond
            within 48 hours with a tailored configuration and quote.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-brass transition group"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-ink hover:text-white transition"
            >
              Browse Machines
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] hidden lg:block">
          <div
            className="absolute inset-0"
            data-strk-bg-id="cta-bg-1f8c3e"
            data-strk-bg="[cta-desc] [cta-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 ring-1 ring-ink/10" />
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
