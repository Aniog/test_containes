import { Mail, ArrowUpRight } from 'lucide-react'

const CTA = () => {
  return (
    <section id="join" className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-25"
        data-strk-bg-id="microcosmos-cta-bg-7e2f91"
        data-strk-bg="[cta-headline] microscopic cells abstract dark"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/85" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
          The dispatch
        </span>
        <h2
          id="cta-headline"
          className="mt-6 font-serif text-3xl md:text-6xl font-light tracking-tight text-slate-50 leading-[1.05]"
        >
          One letter a month,
          <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-cyan-300 to-violet-300">
            from a world too small to see.
          </span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-slate-300 font-light text-base md:text-lg leading-relaxed">
          New plates, fresh field notes, and the occasional essay on what the
          invisible has been quietly doing all along. No tracking, no ads, no haste.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <label htmlFor="email" className="sr-only">Email address</label>
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" strokeWidth={1.5} />
            <input
              id="email"
              type="email"
              required
              placeholder="you@somewhere.earth"
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/60 focus:bg-slate-900 transition"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition font-medium tracking-wide"
          >
            Subscribe
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">
          Free, irregular, and unsubscribable with one click.
        </p>
      </div>
    </section>
  )
}

export default CTA
