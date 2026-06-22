import { useState, useEffect, useRef } from 'react'
import { Bug, Leaf, FlaskConical, Atom, Droplets } from 'lucide-react'

const kingdoms = [
  {
    id: 'bacteria',
    name: 'Bacteria',
    icon: FlaskConical,
    titleId: 'kingdom-title-bacteria',
    descId: 'kingdom-desc-bacteria',
    title: 'The First Life',
    description:
      'Single-celled, ancient, and absolutely everywhere — from the deep crust of the Earth to the lining of your gut. Bacteria invented photosynthesis, fermentation, and most of our planet\'s chemistry.',
    fact: '4 billion years old',
    detail: 'Estimated 5 × 10³⁰ cells alive on Earth right now.',
  },
  {
    id: 'protists',
    name: 'Protists',
    icon: Droplets,
    titleId: 'kingdom-title-protists',
    descId: 'kingdom-desc-protists',
    title: 'Drops of Wilderness',
    description:
      'A single drop of pond water can contain hundreds of species — amoebas, ciliates, flagellates, and diatoms. They blur the line between plant and animal and form the silent base of the aquatic food web.',
    fact: '200,000+ species',
    detail: 'Most of the ocean\'s primary production happens here.',
  },
  {
    id: 'fungi',
    name: 'Fungi',
    icon: Leaf,
    titleId: 'kingdom-title-fungi',
    descId: 'kingdom-desc-fungi',
    title: 'The Underground Web',
    description:
      'Beneath every forest is a network of fungal threads — mycelium — connecting trees, sharing nutrients, and decomposing the dead. Fungi are closer to animals than plants, and recycle the world.',
    fact: '90% of plants',
    detail: 'rely on fungal partners to absorb nutrients.',
  },
  {
    id: 'archaea',
    name: 'Archaea',
    icon: Atom,
    titleId: 'kingdom-title-archaea',
    descId: 'kingdom-desc-archaea',
    title: 'The Extremophiles',
    description:
      'Archaea thrive where nothing should — boiling vents, salt lakes, acid pools, and the icy crust of distant moons could host them. They are the closest analog we have to alien life.',
    fact: '122°C',
    detail: 'is the hottest temperature an archaeon can grow at.',
  },
  {
    id: 'micro-animals',
    name: 'Micro-Animals',
    icon: Bug,
    titleId: 'kingdom-title-microanimals',
    descId: 'kingdom-desc-microanimals',
    title: 'Tiny Creatures',
    description:
      'Tardigrades, rotifers, and copepods are full animals with brains, mouths, and legs — yet they live at the scale of dust. Some can survive being frozen, boiled, dehydrated, or sent to space.',
    fact: '−272°C → +150°C',
    detail: 'survival range of a tardigrade in cryptobiosis.',
  },
]

export default function Kingdoms() {
  const [active, setActive] = useState(kingdoms[0].id)
  const containerRef = useRef(null)

  // Note: image-loader is fired centrally in the page; we just expose the ref hook.
  useEffect(() => {
    // Trigger a custom event so any global image loader can re-scan if needed.
    window.dispatchEvent(new Event('strk:images:rescan'))
  }, [active])

  const current = kingdoms.find((k) => k.id === active)

  return (
    <section
      id="kingdoms"
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(245,158,11,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span
            id="kingdoms-eyebrow"
            className="text-xs tracking-[0.3em] uppercase text-cyan-300/80"
          >
            Taxonomy · 03
          </span>
          <h2
            id="kingdoms-title"
            className="mt-4 font-serif font-light text-4xl md:text-5xl text-slate-50 tracking-tight"
          >
            Five hidden kingdoms.
          </h2>
          <p
            id="kingdoms-subtitle"
            className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Animals and plants are only a thin slice of life. Step beneath the
            visible and meet the rulers of Earth.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          className="mt-12 flex flex-wrap gap-2 md:gap-3"
        >
          {kingdoms.map((k) => {
            const Icon = k.icon
            const isActive = active === k.id
            return (
              <button
                key={k.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(k.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all border ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {k.name}
              </button>
            )
          })}
        </div>

        {/* Active panel */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] bg-slate-900/40">
            <img
              key={current.id}
              alt={current.name}
              data-strk-img-id={`kingdom-img-${current.id}`}
              data-strk-img={`[${current.descId}] [${current.titleId}] [kingdoms-title] microscope`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-cyan-300">
                  Kingdom
                </div>
                <div className="font-serif text-3xl text-slate-50">
                  {current.name}
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-2xl text-amber-300">
                  {current.fact}
                </div>
                <div className="text-xs text-slate-400 max-w-[180px]">
                  {current.detail}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3
              id={current.titleId}
              className="font-serif text-3xl md:text-4xl text-slate-50 tracking-tight"
            >
              {current.title}
            </h3>
            <p
              id={current.descId}
              className="mt-5 text-slate-300 leading-relaxed text-base md:text-lg"
            >
              {current.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Signature
                </div>
                <div className="mt-2 font-serif text-xl text-cyan-300">
                  {current.fact}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Status
                </div>
                <div className="mt-2 font-serif text-xl text-amber-300">
                  Mostly undescribed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
