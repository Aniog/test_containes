import { useEffect, useRef } from 'react'
import { Atom, Dna, Microscope, FlaskRound } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  {
    year: '1674',
    icon: Microscope,
    title: 'The First Glimpse',
    desc: 'Antonie van Leeuwenhoek peers through a hand-ground lens and sees "animalcules" swimming in pond water — the very first humans to witness microbial life.',
  },
  {
    year: '1864',
    icon: FlaskRound,
    title: 'Germ Theory',
    desc: 'Louis Pasteur proves that invisible organisms cause disease and fermentation, transforming medicine, food preservation, and public health forever.',
  },
  {
    year: '1953',
    icon: Dna,
    title: 'The Code of Life',
    desc: 'Watson, Crick, and Franklin reveal the double helix — the molecular blueprint shared by every microbe, plant, and creature on Earth.',
  },
  {
    year: 'Today',
    icon: Atom,
    title: 'Microbial Frontier',
    desc: 'Metagenomics, CRISPR, and cryo-electron microscopy let us read entire microbial communities and edit life letter-by-letter at the nanoscale.',
  },
]

export default function Science() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="science"
      ref={containerRef}
      className="relative overflow-hidden border-b border-white/5 bg-[#0b1226] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              04 — Science
            </span>
            <h2
              id="science-title"
              className="mt-4 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl"
            >
              Three centuries of seeing the unseen
            </h2>
            <p
              id="science-subtitle"
              className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg"
            >
              Every breakthrough in microbiology has rewritten what we thought life
              could be. Here are four moments that opened doors we're still walking
              through.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <img
                alt="Microscopic specimen"
                data-strk-img-id="science-feature-img-4a8f2c"
                data-strk-img="[science-subtitle] [science-title]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ol className="relative space-y-8 border-l border-white/10 pl-8">
            {milestones.map((m) => {
              const Icon = m.icon
              return (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[2.6rem] top-1 grid h-8 w-8 place-items-center rounded-full border border-cyan-400/40 bg-[#0b1226]">
                    <Icon className="h-4 w-4 text-cyan-300" />
                  </span>
                  <p className="font-mono text-sm font-semibold text-cyan-300">
                    {m.year}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-50">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">
                    {m.desc}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
