import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="border border-ink p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center bg-paper">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-steel mb-5">
              Ready when you are
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-ink leading-tight">
              Tell us what you bend.<br />
              We&apos;ll specify the right machine.
            </h2>
            <p className="mt-5 text-steel max-w-xl leading-relaxed">
              Send us your sheet specs, run sizes and floor footprint. An
              engineer will reply within one working day with a tailored
              recommendation and quote.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-ink px-7 py-4 text-sm tracking-wide hover:bg-ink hover:text-bone transition"
            >
              Request a quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
