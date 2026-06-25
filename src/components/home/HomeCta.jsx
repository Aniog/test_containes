import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeCta() {
  return (
    <section className="bg-graphite-950 text-bone-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="eyebrow eyebrow-light">Begin the conversation</p>
        <h2 className="mt-4 font-serif font-light text-4xl md:text-6xl leading-tight">
          Tell us about the parts you want to fold.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-steel-300 leading-relaxed">
          Send us a sample drawing or a rough sketch. We will reply within one
          business day with a machine recommendation, a transparent quotation,
          and a realistic delivery date.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brass-500 hover:bg-brass-600 text-graphite-950 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center border border-bone-50/40 hover:bg-bone-50 hover:text-graphite-900 text-bone-50 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
          >
            Browse Machines
          </Link>
        </div>
      </div>
    </section>
  )
}
