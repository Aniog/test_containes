import React from 'react'
import { Gauge, ShieldCheck, SlidersHorizontal, Wrench } from 'lucide-react'

const advantages = [
  {
    icon: Gauge,
    title: 'Repeatable accuracy',
    text: 'Stable clamping and controlled folding help teams keep every angle consistent.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Operator-friendly setup',
    text: 'Clear workflows reduce training time and make everyday fabrication easier.',
  },
  {
    icon: ShieldCheck,
    title: 'Durable industrial build',
    text: 'Robust frames and practical controls support long-term workshop performance.',
  },
  {
    icon: Wrench,
    title: 'Service-minded support',
    text: 'Guidance for model selection, commissioning, and dependable after-sales support.',
  },
]

const EngineeringSection = () => {
  return (
    <section id="engineering" className="bg-artitect-graphite px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div
            className="min-h-[520px] rounded-[2rem] border border-white/15 bg-white/10 bg-cover bg-center shadow-elegant"
            data-strk-bg-id="artitect-engineering-bg-d40b7c"
            data-strk-bg="[engineering-copy] [engineering-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-artitect-ink/90 p-6 text-white shadow-elegant backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-artitect-brass">ARTITECT method</p>
            <p className="mt-3 text-3xl font-bold text-white">Engineering clarity from quote to production.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-artitect-ink/95 p-6 text-white shadow-elegant sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-artitect-brass">Why ARTITECT</p>
          <h2 id="engineering-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Machines that feel refined, practical, and ready for real work.
          </h2>
          <p id="engineering-copy" className="mt-6 text-lg leading-8 text-white/80">
            We combine elegant machine design with the practical needs of sheet metal fabrication: fast setup, precise results, strong construction, and a clear buying experience.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {advantages.map((advantage) => {
              const Icon = advantage.icon
              return (
                <div key={advantage.title} className="rounded-3xl border border-white/10 bg-artitect-graphite p-6 text-white shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-artitect-brass text-artitect-ink">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{advantage.title}</h3>
                  <p className="mt-3 leading-7 text-white/80">{advantage.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringSection
