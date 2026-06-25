import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const inhabitants = [
  {
    id: 'bacteria',
    name: 'Bacteria',
    latin: 'Domain · Bacteria',
    size: '0.2 – 10 μm',
    fact: 'Single-celled organisms with no nucleus. They outnumber every other form of life on Earth and shape every ecosystem they touch.',
    description: 'colorful bacteria cells under a microscope',
    titleId: 'inh-bacteria-title',
    descId: 'inh-bacteria-desc',
    imgId: 'inh-bacteria-img-a1b2c3',
    accent: 'from-cyan-300 to-sky-400',
  },
  {
    id: 'protozoa',
    name: 'Protozoa',
    latin: 'Kingdom · Protozoa',
    size: '10 – 500 μm',
    fact: 'Mobile, predatory single-celled eukaryotes. Paramecia, amoebae, and ciliates hunt smaller microbes through droplets of water.',
    description: 'paramecium ciliate protozoa darkfield microscopy',
    titleId: 'inh-protozoa-title',
    descId: 'inh-protozoa-desc',
    imgId: 'inh-protozoa-img-d4e5f6',
    accent: 'from-violet-300 to-fuchsia-400',
  },
  {
    id: 'algae',
    name: 'Algae',
    latin: 'Phylum · Various',
    size: '1 μm – meters',
    fact: 'Photosynthetic microbes that produce more than half of the oxygen we breathe. Diatoms even build glass shells from silica.',
    description: 'diatom algae glass shells microscope photography',
    titleId: 'inh-algae-title',
    descId: 'inh-algae-desc',
    imgId: 'inh-algae-img-g7h8i9',
    accent: 'from-emerald-300 to-lime-300',
  },
  {
    id: 'fungi',
    name: 'Fungi',
    latin: 'Kingdom · Fungi',
    size: '2 – 200 μm',
    fact: 'Threads called hyphae form the largest organisms on Earth — underground networks that connect entire forests.',
    description: 'fungi mycelium hyphae microscopy filaments',
    titleId: 'inh-fungi-title',
    descId: 'inh-fungi-desc',
    imgId: 'inh-fungi-img-j1k2l3',
    accent: 'from-amber-300 to-orange-400',
  },
  {
    id: 'tardigrade',
    name: 'Tardigrades',
    latin: 'Phylum · Tardigrada',
    size: '0.1 – 1.5 mm',
    fact: 'The eight-legged “water bears” survive vacuum, radiation, and temperatures from -272°C to 150°C. They have even survived in space.',
    description: 'tardigrade water bear electron microscope',
    titleId: 'inh-tardigrade-title',
    descId: 'inh-tardigrade-desc',
    imgId: 'inh-tardigrade-img-m4n5o6',
    accent: 'from-rose-300 to-pink-400',
  },
  {
    id: 'viruses',
    name: 'Viruses',
    latin: 'Realms · Various',
    size: '20 – 300 nm',
    fact: 'Not quite alive, not quite inert. There are more viral particles in a litre of seawater than there are humans on Earth.',
    description: 'virus particles electron micrograph capsid',
    titleId: 'inh-viruses-title',
    descId: 'inh-viruses-desc',
    imgId: 'inh-viruses-img-p7q8r9',
    accent: 'from-sky-300 to-indigo-400',
  },
]

export default function Inhabitants() {
  const containerRef = useRef(null)
  const [activeId, setActiveId] = useState(inhabitants[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeId])

  const active = inhabitants.find((i) => i.id === activeId)

  return (
    <section
      id="inhabitants"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">
              02 — The Inhabitants
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-50 leading-tight max-w-2xl">
              Meet the citizens of the unseen kingdom.
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            Six groups of organisms, six radically different ways of being alive.
            Click any name to peer inside.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Selector list */}
          <div
            role="tablist"
            aria-label="Microcosmos inhabitants"
            className="lg:col-span-4 flex flex-col gap-2"
          >
            {inhabitants.map((item) => {
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(item.id)}
                  className={`group text-left rounded-xl border px-5 py-4 transition-all ${
                    isActive
                      ? 'border-cyan-400/40 bg-white/[0.06] shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-xl text-slate-50">
                      {item.name}
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        isActive ? 'text-cyan-200' : 'text-slate-500'
                      }`}
                    >
                      {item.size}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-xs font-mono uppercase tracking-wider ${
                      isActive ? 'text-cyan-300/80' : 'text-slate-500'
                    }`}
                  >
                    {item.latin}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  alt={active.name}
                  className="w-full h-full object-cover"
                  data-strk-img-id={active.imgId}
                  data-strk-img={`[${active.descId}] [${active.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <span
                    className={`inline-block font-mono text-[10px] uppercase tracking-[0.25em] rounded-full px-2.5 py-1 bg-gradient-to-r ${active.accent} text-slate-950`}
                  >
                    {active.latin}
                  </span>
                  <h3
                    id={active.titleId}
                    className="mt-3 font-serif text-3xl md:text-4xl text-slate-50"
                  >
                    {active.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p
                  id={active.descId}
                  className="text-slate-300 text-lg leading-relaxed"
                >
                  {active.fact}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Typical size
                    </p>
                    <p className="mt-1 font-mono text-slate-100">{active.size}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Classification
                    </p>
                    <p className="mt-1 font-mono text-slate-100">
                      {active.latin}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
