import { Mail, Send } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        data-strk-bg-id="cta-bg-microcosmos-c1f8e2"
        data-strk-bg="[cta-title] microscope abstract bioluminescence"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.18),_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-400/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-teal-300">
          <Mail className="h-3.5 w-3.5" />
          Subscribe to the dispatch
        </span>
        <h2
          id="cta-title"
          className="mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50"
        >
          Get a new <span className="bg-gradient-to-r from-teal-300 to-violet-300 bg-clip-text text-transparent">microscopic world</span> in your inbox each week.
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300">
          One specimen, one story, one photograph. No noise — only beautiful science.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 mx-auto flex flex-col sm:flex-row items-stretch gap-3 max-w-xl"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400/60"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-300 transition"
          >
            Subscribe
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
