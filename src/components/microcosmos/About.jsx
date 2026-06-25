import { useEffect, useRef } from 'react'
import { Atom, Eye, Dna } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const pillars = [
  {
    icon: Eye,
    title: 'A frontier of perception',
    body: 'Most life on Earth is invisible to us. The microcosmos is the planet we share but rarely see.',
    accent: 'from-cyan-300 to-sky-400',
  },
  {
    icon: Dna,
    title: 'The architects of life',
    body: 'Microbes recycle nutrients, oxygenate oceans, ferment food, and live inside every multicellular body — including yours.',
    accent: 'from-emerald-300 to-lime-300',
  },
  {
    icon: Atom,
    title: 'A scale of its own',
    body: 'From 20-nanometre viruses to 0.5-millimetre tardigrades, the microcosmos spans five orders of magnitude in size.',
    accent: 'from-fuchsia-300 to-violet-400',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">
              01 — Introduction
            </p>
            <h2
              id="about-title"
              className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-50 leading-tight"
            >
              An entire civilisation lives in a teaspoon of pond water.
            </h2>
            <p
              id="about-subtitle"
              className="mt-6 text-slate-300 text-lg leading-relaxed"
            >
              The microcosmos is the realm of organisms so small that a thousand
              could rest comfortably on the period at the end of this sentence.
              They were the first inhabitants of Earth, and they remain its most
              numerous, diverse, and consequential residents.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Field note
              </p>
              <p className="mt-2 text-slate-200 italic font-serif text-lg leading-snug">
                “There are more bacterial cells in your gut than there are stars
                in the Milky Way.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_-20px_rgba(34,211,238,0.25)]">
              <img
                alt="Microscope view of microorganisms"
                className="w-full h-auto block"
                data-strk-img-id="about-microscope-9c4d3a"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-mono text-xs text-slate-200 bg-slate-950/60 backdrop-blur px-2.5 py-1 rounded-md border border-white/10">
                  400× magnification
                </span>
                <span className="font-mono text-xs text-cyan-200 bg-slate-950/60 backdrop-blur px-2.5 py-1 rounded-md border border-cyan-400/20">
                  freshwater · 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-cyan-400/20 transition-colors"
              >
                <span
                  className={`inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.accent} bg-opacity-20`}
                >
                  <Icon className="w-5 h-5 text-slate-950" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-slate-50">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  {pillar.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
