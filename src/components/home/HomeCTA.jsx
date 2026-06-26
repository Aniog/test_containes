import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-500 font-medium">
            Let&apos;s build yours
          </span>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight tracking-tight">
            Tell us what you fold. We&apos;ll engineer the machine that fits.
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-300 leading-relaxed max-w-2xl">
            From a single bench folder to a fully tooled production line, our
            engineers will help you specify the right configuration and lead
            times.
          </p>
        </div>
        <div className="md:col-span-4 flex md:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-stone-50 text-stone-900 px-8 py-4 text-xs tracking-[0.22em] uppercase font-medium hover:bg-amber-500 transition-colors"
          >
            Request a quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
