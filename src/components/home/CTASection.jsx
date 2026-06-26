import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 md:h-72 md:w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" aria-hidden />
          <div className="md:col-span-7 relative">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Let's build</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-medium leading-[1.1]">
              Ready to fold smarter,<br />
              <span className="italic text-amber-400">not harder?</span>
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
              Tell us about the parts you make and the volumes you run. We will
              recommend the right Artitect machine and prepare a tailored quote.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end relative">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-7 py-4 rounded-full text-sm font-semibold hover:bg-amber-400 transition"
            >
              Request a Personalized Quote
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
