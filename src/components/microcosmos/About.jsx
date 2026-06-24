import { Microscope, Droplets, Dna } from 'lucide-react'

const facts = [
  {
    icon: Microscope,
    title: 'Below the threshold of sight',
    desc: 'Most lifeforms on Earth are invisible. The microcosmos is the silent majority — older, more abundant, and more diverse than every animal combined.',
  },
  {
    icon: Droplets,
    title: 'Hidden in every drop',
    desc: 'A single milliliter of pond water can hold more than ten million organisms — predators, photosynthesizers, scavengers, and shapes we still cannot name.',
  },
  {
    icon: Dna,
    title: 'The original engineers',
    desc: 'Microbes invented oxygen, soil, and the modern atmosphere. They are the chemists, architects, and recyclers that quietly keep the planet running.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p
              id="about-eyebrow"
              className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300/80"
            >
              What is the microcosmos
            </p>
            <h2
              id="about-title"
              className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
            >
              An entire biosphere, hiding in plain sight.
            </h2>
            <p
              id="about-desc"
              className="mt-6 text-base md:text-lg leading-relaxed text-slate-300"
            >
              MicroCosmos is a journey into the living layer of the world we never
              see. From the first cells that learned to swim, to the strange beauty
              of a paramecium spinning through light — this is biology at its most
              raw, ancient, and quietly spectacular.
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
            {facts.map((f) => (
              <article
                key={f.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-300/0 via-transparent to-fuchsia-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/30">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
              </article>
            ))}
            <article className="sm:col-span-2 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-fuchsia-500/10 p-6 md:p-7">
              <p className="text-sm md:text-base text-slate-200 italic">
                “Anyone who has not seen a paramecium swim has not really lived.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-cyan-300/80">
                — A naturalist's notebook
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
