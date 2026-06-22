import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="microcosmos-hero-bg-9a3e1c"
        data-strk-bg="[hero-tagline] [hero-title] microscopic cells bioluminescent"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Color overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950" />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-emerald-500/15 blur-3xl animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6">
            <Sparkles className="w-4 h-4" /> A Visual Atlas
          </span>

          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-50 leading-[0.95]"
          >
            The universe
            <span className="block bg-gradient-to-br from-cyan-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              beneath the lens.
            </span>
          </h1>

          <p
            id="hero-tagline"
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            MicroCosmos is a journey into the unseen — a curated collection of
            microscopy, cellular life, and luminous patterns that reveal the
            architecture of our world at the smallest scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full px-7 py-3.5 transition-colors"
            >
              Enter the gallery <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-cyan-400 text-slate-100 rounded-full px-7 py-3.5 transition-colors"
            >
              How it works
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-slate-800 pt-8">
            <div>
              <div className="font-serif text-3xl bg-gradient-to-br from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                240+
              </div>
              <div className="text-xs text-slate-400 mt-1">Microscopic studies</div>
            </div>
            <div>
              <div className="font-serif text-3xl bg-gradient-to-br from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                18
              </div>
              <div className="text-xs text-slate-400 mt-1">Featured ecosystems</div>
            </div>
            <div>
              <div className="font-serif text-3xl bg-gradient-to-br from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                4M×
              </div>
              <div className="text-xs text-slate-400 mt-1">Maximum magnification</div>
            </div>
          </div>
        </div>

        {/* Floating image stack */}
        <div className="lg:col-span-5 relative h-[460px] hidden lg:block">
          <div className="absolute top-0 right-10 w-56 h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/10 animate-floaty">
            <img
              alt="Diatom microscopy"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-stack-diatom-7c2b91"
              data-strk-img="[hero-stack-1-caption] diatom microscope"
              data-strk-img-ratio="3x4"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="hero-stack-1-caption" className="sr-only">
              diatom microscope crystal
            </span>
          </div>

          <div
            className="absolute top-24 left-0 w-64 h-44 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-emerald-500/10 animate-floaty"
            style={{ animationDelay: '1.4s' }}
          >
            <img
              alt="Pollen grains"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-stack-pollen-83bd44"
              data-strk-img="[hero-stack-2-caption] pollen scanning electron microscope"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="hero-stack-2-caption" className="sr-only">
              pollen grains scanning electron microscope
            </span>
          </div>

          <div
            className="absolute bottom-0 right-0 w-72 h-52 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/10 animate-floaty"
            style={{ animationDelay: '2.8s' }}
          >
            <img
              alt="Neurons fluorescence"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-stack-neuron-51fd09"
              data-strk-img="[hero-stack-3-caption] neuron fluorescence microscopy"
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="hero-stack-3-caption" className="sr-only">
              neuron fluorescence microscopy
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
