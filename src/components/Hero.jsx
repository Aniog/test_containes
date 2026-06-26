import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm tracking-[0.2em] uppercase mb-6">
            <span className="h-px w-8 bg-amber-500" />
            Precision Sheet Metal Folding
          </p>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Engineered Folding Machines for Demanding Fabrication
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            From double folding machines to heavy-duty metal folding systems,
            ARTITECT MACHINERY builds reliable, high-precision equipment that
            keeps your production line moving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'Servo-electric drives',
              'CNC programmable',
              'Built to last',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/15"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-amber-400"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
