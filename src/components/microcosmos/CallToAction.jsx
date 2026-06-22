import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section
      id="join"
      className="relative py-24 md:py-32 border-t border-slate-900 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="cta-bg-microcosmos-7e0a31"
        data-strk-bg="[cta-title] [cta-subtitle] microscope abstract bioluminescence"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
          Join the lab
        </span>
        <h2
          id="cta-title"
          className="font-serif text-4xl md:text-6xl text-slate-50 mt-5 leading-tight"
        >
          A monthly letter from the small.
        </h2>
        <p
          id="cta-subtitle"
          className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto"
        >
          Every full moon we send one curated story, three new specimens, and a
          single beautiful image. Free, calm, and mostly very strange.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@laboratory.com"
            className="flex-1 bg-slate-900/80 border border-slate-700 focus:border-cyan-400 outline-none rounded-full px-5 py-3.5 text-slate-100 placeholder:text-slate-500"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full px-6 py-3.5 transition-colors"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4">
          One email per moon. Unsubscribe with a single click.
        </p>
      </div>
    </section>
  )
}
