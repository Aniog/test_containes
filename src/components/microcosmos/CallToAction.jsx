import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="cta" className="relative py-24 md:py-32 border-t border-slate-800 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="cta-bg-microcosmos"
        data-strk-bg="[cta-title] microscopy abstract colorful cells"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/80" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Step Closer
        </span>
        <h2
          id="cta-title"
          className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50"
          style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
        >
          The smallest things on Earth are the most alive of all.
        </h2>
        <p
          id="cta-desc"
          className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
        >
          Pick up a microscope, press your eye to the lens, and meet your
          neighbours. There are billions of them, and they have been here far
          longer than us.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
          >
            Browse the Gallery
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#kingdoms"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-medium hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
          >
            Explore Kingdoms
          </a>
        </div>
      </div>
    </section>
  )
}
