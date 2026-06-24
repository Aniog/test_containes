import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nickname: 'The Water Bear',
    size: '~0.5 mm',
    kingdom: 'Animalia',
    superpower: 'Cryptobiosis',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'org-img-tardigrade-7c4a1d',
    desc: 'Eight-legged micro-animals that survive boiling water, absolute zero, the vacuum of space, and lethal radiation by suspending all metabolic activity for decades.',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    nickname: 'The Slipper',
    size: '50–330 μm',
    kingdom: 'Protista',
    superpower: 'Cilia propulsion',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
    imgId: 'org-img-paramecium-3b8e2f',
    desc: 'Single-celled swimmers covered in thousands of beating cilia. They hunt bacteria, communicate chemically, and even exchange genetic material in a primitive form of mating.',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nickname: 'Glass Architect',
    size: '2–200 μm',
    kingdom: 'Chromista',
    superpower: 'Silica shells',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-img-diatom-9d1c4e',
    desc: 'Microscopic algae that build geometric glass houses out of silica. They produce around 20% of the oxygen you breathe — a fifth of every breath, made underwater.',
  },
  {
    id: 'amoeba',
    name: 'Amoeba',
    nickname: 'Shape-shifter',
    size: '~250 μm',
    kingdom: 'Protista',
    superpower: 'Pseudopodia',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-img-amoeba-2f7a9b',
    desc: 'Formless predators that flow rather than walk. They engulf prey by extending temporary "false feet," then digest them whole inside their fluid bodies.',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    nickname: 'The Wheel Animal',
    size: '50–500 μm',
    kingdom: 'Animalia',
    superpower: 'Crown of cilia',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
    imgId: 'org-img-rotifer-5e8c1a',
    desc: 'Tiny aquatic beasts whose spinning crowns of cilia create vortices to draw in food. Some species are entirely female, reproducing without males for millions of years.',
  },
  {
    id: 'bacteriophage',
    name: 'Bacteriophage',
    nickname: 'Lunar Lander',
    size: '~200 nm',
    kingdom: 'Virus',
    superpower: 'Genetic injection',
    titleId: 'org-phage-title',
    descId: 'org-phage-desc',
    imgId: 'org-img-phage-8b3d6c',
    desc: 'Geometric viruses that hunt bacteria. They dock onto a microbial surface like a lunar module, then inject DNA to hijack the cell. The most numerous entities on Earth.',
  },
]

export default function Organisms() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(organisms[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const current = organisms.find((o) => o.id === active) ?? organisms[0]

  return (
    <section
      id="organisms"
      ref={containerRef}
      className="relative border-b border-white/5 bg-[#0b1226] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              02 — Organisms
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Meet the inhabitants
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              Six remarkable lifeforms — each one a survival strategy refined across
              hundreds of millions of years of evolution.
            </p>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="mt-12 flex flex-wrap gap-3">
          {organisms.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setActive(o.id)}
              aria-selected={active === o.id}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                active === o.id
                  ? 'border-cyan-400/60 bg-cyan-400/10 text-cyan-200'
                  : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/30 hover:text-slate-100'
              }`}
            >
              {o.name}
            </button>
          ))}
        </div>

        {/* Active organism detail */}
        <div className="mt-10 grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur lg:grid-cols-5">
          <div className="relative aspect-[4/3] lg:col-span-2 lg:aspect-auto">
            <img
              key={current.id}
              alt={current.name}
              data-strk-img-id={current.imgId}
              data-strk-img={`[${current.descId}] [${current.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1226] via-transparent to-transparent" />
          </div>

          <div className="flex flex-col gap-6 p-8 lg:col-span-3 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-200">
                {current.kingdom}
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-300">
                {current.size}
              </span>
              <span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-purple-200">
                {current.superpower}
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                {current.nickname}
              </p>
              <h3
                id={current.titleId}
                className="mt-2 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl"
              >
                {current.name}
              </h3>
            </div>

            <p
              id={current.descId}
              className="text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {current.desc}
            </p>

            <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Kingdom</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {current.kingdom}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Size</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{current.size}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Trait</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {current.superpower}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
