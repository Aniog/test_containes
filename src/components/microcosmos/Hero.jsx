import { useEffect, useRef } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
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
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        data-strk-bg-id="hero-bg-microcosmos-7f2c1e"
        data-strk-bg="[hero-tagline] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />

      {/* Ambient glowing orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-violet-500/15 blur-3xl animate-drift-slow" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl animate-drift" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-mono tracking-wide text-cyan-200 mb-8">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>A field guide to the invisible</span>
          </div>

          <h1
            id="hero-title"
            className="font-serif font-medium tracking-tight text-slate-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
          >
            The universe{' '}
            <span className="italic bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              that fits
            </span>{' '}
            on a single drop of water.
          </h1>

          <p
            id="hero-tagline"
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Beneath every leaf, inside every breath, on the surface of your skin —
            trillions of organisms build worlds invisible to the naked eye.
            MicroCosmos is your microscope into that hidden frontier.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#inhabitants"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-300 to-emerald-300 hover:from-cyan-200 hover:to-emerald-200 transition shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              Begin the journey
              <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-200 border border-white/15 hover:border-cyan-300/40 hover:text-cyan-200 transition"
            >
              What is the microcosmos?
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Microbes on you
              </dt>
              <dd className="mt-2 font-serif text-3xl md:text-4xl font-medium bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">
                39T
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Species described
              </dt>
              <dd className="mt-2 font-serif text-3xl md:text-4xl font-medium bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                0.001%
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Smallest scale
              </dt>
              <dd className="mt-2 font-serif text-3xl md:text-4xl font-medium bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                20nm
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
