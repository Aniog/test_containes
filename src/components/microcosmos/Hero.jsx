import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        data-strk-bg-id="hero-bg-microcosmos-9a1c2e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Gradient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#05060d]/85" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-150px] left-[-100px] h-[400px] w-[400px] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-3 w-3" />
            A universe inside a drop
          </span>

          <h1
            id="hero-title"
            className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-50 md:text-7xl"
          >
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              MicroCosmos
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            Beyond what the eye can see, an entire civilization thrives — bacteria,
            protists, tardigrades, and viruses building ecosystems on a cellular scale.
            Step into the invisible world that shapes life on Earth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#organisms"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Begin Exploration
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#science"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Read the Science
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { value: '10¹⁴', label: 'Microbes per human body' },
              { value: '0.2 μm', label: 'Smallest known bacterium' },
              { value: '1 mL', label: 'Holds millions of organisms' },
              { value: '3.5 B', label: 'Years of microbial evolution' },
            ].map((stat) => (
              <div key={stat.label} className="text-left md:text-center">
                <p className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
