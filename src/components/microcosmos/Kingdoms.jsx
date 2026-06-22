import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const kingdoms = [
  {
    id: 'bacteria',
    name: 'Bacteria',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/40',
    description:
      'The oldest and most abundant life on Earth. Bacteria sculpt our atmosphere, populate our gut, and perform chemistry no eukaryote can.',
    examples: ['E. coli', 'Cyanobacteria', 'Streptococcus', 'Bacillus'],
    images: [
      { id: 'b1', q: 'bacteria colony petri dish' },
      { id: 'b2', q: 'cyanobacteria filament microscope' },
      { id: 'b3', q: 'gram stain bacteria microscope' },
      { id: 'b4', q: 'bacteria scanning electron microscope' },
    ],
  },
  {
    id: 'protists',
    name: 'Protists',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/40',
    description:
      'A wildly diverse menagerie of single-celled eukaryotes — from photosynthetic algae to predatory ciliates and amoebas.',
    examples: ['Paramecium', 'Amoeba', 'Diatom', 'Euglena'],
    images: [
      { id: 'p1', q: 'paramecium ciliate microscope' },
      { id: 'p2', q: 'diatom plankton microscope' },
      { id: 'p3', q: 'amoeba cell microscope' },
      { id: 'p4', q: 'euglena flagellate microscope' },
    ],
  },
  {
    id: 'fungi',
    name: 'Fungi',
    accent: 'text-amber-400',
    border: 'border-amber-500/40',
    description:
      'Networks of microscopic threads decompose, recycle, and connect entire forests through underground mycelium.',
    examples: ['Yeast', 'Penicillium', 'Aspergillus', 'Mycelium'],
    images: [
      { id: 'f1', q: 'yeast cells microscope budding' },
      { id: 'f2', q: 'penicillium mold microscope' },
      { id: 'f3', q: 'mycelium fungal threads microscope' },
      { id: 'f4', q: 'mushroom spores microscope' },
    ],
  },
  {
    id: 'animals',
    name: 'Micro-Animals',
    accent: 'text-rose-400',
    border: 'border-rose-500/40',
    description:
      'Tiny multicellular animals that swim, crawl and survive the impossible — from boiling springs to the vacuum of space.',
    examples: ['Tardigrades', 'Rotifers', 'Copepods', 'Nematodes'],
    images: [
      { id: 'a1', q: 'tardigrade water bear microscope' },
      { id: 'a2', q: 'rotifer microscope wheel animal' },
      { id: 'a3', q: 'copepod microscope plankton' },
      { id: 'a4', q: 'nematode worm microscope' },
    ],
  },
]

export default function Kingdoms() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(kingdoms[0].id)

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(id)
  }, [active])

  return (
    <section
      id="kingdoms"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Branches of Life
          </span>
          <h2
            id="kingdoms-title"
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
            style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
          >
            Four kingdoms of the unseen
          </h2>
          <p className="mt-5 text-slate-400 text-base md:text-lg">
            Choose a branch and explore its microscopic ambassadors.
          </p>
        </div>

        <div role="tablist" className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {kingdoms.map((k) => {
            const isActive = k.id === active
            return (
              <button
                key={k.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(k.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  isActive
                    ? `bg-slate-100 text-slate-950 border-slate-100 shadow-lg`
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-600'
                }`}
              >
                {k.name}
              </button>
            )
          })}
        </div>

        {kingdoms.map((k) => {
          const isActive = k.id === active
          if (!isActive) return null
          return (
            <div key={k.id} className="grid lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-4 space-y-5">
                <div
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border ${k.border} ${k.accent}`}
                >
                  {k.name}
                </div>
                <h3
                  id={`kingdom-${k.id}-title`}
                  className="text-2xl md:text-3xl font-bold text-slate-50"
                  style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
                >
                  {k.name} — small, mighty, everywhere
                </h3>
                <p
                  id={`kingdom-${k.id}-desc`}
                  className="text-slate-300 text-base leading-relaxed"
                >
                  {k.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 pt-2">
                  {k.examples.map((e) => (
                    <li
                      key={e}
                      className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-sm text-slate-300"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-8 grid grid-cols-2 gap-4 md:gap-5">
                {k.images.map((img, i) => (
                  <div
                    key={img.id}
                    className={`relative overflow-hidden rounded-2xl border border-slate-800 group ${
                      i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      alt={`${k.name} specimen`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`kingdom-${k.id}-${img.id}`}
                      data-strk-img={`[kingdom-${k.id}-desc] [kingdom-${k.id}-title] ${img.q}`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
