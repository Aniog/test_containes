import { Mail, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">
          05 — Stay curious
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-50 leading-tight">
          One new microcosm in your inbox, every Sunday.
        </h2>
        <p className="mt-6 text-slate-300 text-lg leading-relaxed">
          Field notes, new images, and the strangest small creatures we
          encountered each week. No spam — just life at impossibly small scales.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <div className="relative flex-1">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              strokeWidth={1.5}
            />
            <input
              id="cta-email"
              type="email"
              required
              placeholder="you@curious.lab"
              className="w-full rounded-full bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50 focus:bg-white/10 transition"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-300 to-emerald-300 hover:from-cyan-200 hover:to-emerald-200 transition shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </form>

        <p className="mt-4 text-xs font-mono text-slate-500">
          Free · Unsubscribe anytime · 12,400 readers
        </p>
      </div>
    </section>
  )
}
