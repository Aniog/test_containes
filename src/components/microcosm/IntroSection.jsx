import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function IntroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="intro" ref={containerRef} className="bg-deep py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-cyan-glow font-body text-sm uppercase tracking-[0.25em] mb-4 font-medium">
              What is a Microcosm?
            </p>
            <h2
              id="intro-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              A universe hidden in plain sight
            </h2>
            <p className="font-body text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              The word <em className="text-cyan-glow not-italic font-medium">microcosm</em> comes from
              the Greek <em>mikros kosmos</em> — "small world." It refers to any miniature
              representation of something larger, but in science, it describes the breathtaking
              complexity of life at the microscopic scale.
            </p>
            <p className="font-body text-slate-400 text-base leading-relaxed mb-8">
              From the intricate lattice of a snowflake to the teeming ecosystem inside a single
              drop of pond water, the microcosm reveals that the universe's most extraordinary
              designs are often its smallest.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-cyan-glow">10<sup>30</sup></p>
                <p className="font-body text-slate-400 text-sm mt-1">Bacteria on Earth</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-violet-glow">37T</p>
                <p className="font-body text-slate-400 text-sm mt-1">Cells in the human body</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-neon-green">0.001mm</p>
                <p className="font-body text-slate-400 text-sm mt-1">Size of a red blood cell</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-cyan-glow/15 shadow-glow-cyan">
              <img
                alt="Microscopic world"
                className="w-full h-80 md:h-96 object-cover"
                data-strk-img-id="intro-img-d4e5f6"
                data-strk-img="[intro-heading] microscopic cells biology"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card-dark border border-cyan-glow/20 rounded-xl px-4 py-3 shadow-glow-cyan">
              <p className="font-body text-xs text-slate-400">Magnification</p>
              <p className="font-display text-lg font-bold text-cyan-glow">×1,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
