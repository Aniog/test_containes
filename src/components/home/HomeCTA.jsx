import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-paper border border-silver/40 px-8 md:px-16 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-ember" />
              <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Let's Talk</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight">
              Tell us about the parts you need to fold.<br />
              We'll bring the machine that fits your line.
            </h2>
            <p className="mt-5 text-steel max-w-xl leading-relaxed">
              Send us your sheet sizes, materials, and production volume.
              An Artitect engineer will reply within one business day.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
            >
              Browse Machines
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
