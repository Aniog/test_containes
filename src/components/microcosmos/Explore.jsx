import { useEffect, useRef } from 'react'
import { Droplets, Leaf, Wind, FlaskConical } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const habitats = [
  {
    icon: Droplets,
    title: 'A Drop of Pond Water',
    desc: 'Within a single droplet, you can find amoebas pulsing, paramecia darting, and rotifers spinning their crowns of cilia.',
    accent: 'text-cyan-300',
    ring: 'ring-cyan-400/30',
  },
  {
    icon: Leaf,
    title: 'A Pinch of Soil',
    desc: 'One gram of healthy soil hosts billions of microbes — fungi, archaea, nematodes — the silent architects beneath every forest.',
    accent: 'text-lime-300',
    ring: 'ring-lime-400/30',
  },
  {
    icon: Wind,
    title: 'The Air Around Us',
    desc: 'Dust grains carry hitchhiking spores and bacteria across continents. Every breath samples the planet’s aerial microbiome.',
    accent: 'text-purple-300',
    ring: 'ring-purple-400/30',
  },
  {
    icon: FlaskConical,
    title: 'Inside Every Living Body',
    desc: 'Your gut alone is home to 100 trillion microbes — tuning your digestion, your immunity, even your mood.',
    accent: 'text-fuchsia-300',
    ring: 'ring-fuchsia-400/30',
  },
]

export default function Explore() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="explore"
      ref={containerRef}
      className="relative border-b border-white/5 bg-[#05060d] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            01 — Explore
          </span>
          <h2
            id="explore-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl"
          >
            The MicroCosmos is everywhere
          </h2>
          <p
            id="explore-subtitle"
            className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg"
          >
            You don't need a spaceship to discover an alien world. The strangest creatures
            on Earth live closer than you think — sometimes inside you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {habitats.map((h) => {
            const Icon = h.icon
            return (
              <article
                key={h.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/[0.05] md:p-8"
              >
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ${h.ring}`}
                >
                  <Icon className={`h-6 w-6 ${h.accent}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-50">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{h.desc}</p>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-cyan-500/0 blur-2xl transition group-hover:bg-cyan-500/20" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
