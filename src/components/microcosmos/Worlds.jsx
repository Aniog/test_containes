import React from 'react'

const worlds = [
  {
    id: 'aquatic',
    name: 'Aquatic',
    blurb: 'Diatoms, plankton, and the geometry of fresh water.',
    species: '64 specimens',
    imgId: 'world-aquatic-19f23c',
    titleId: 'world-aquatic-title',
    descId: 'world-aquatic-desc',
    query: 'diatom plankton microscope ocean',
  },
  {
    id: 'cellular',
    name: 'Cellular',
    blurb: 'Mitosis, organelles, and the rhythm of life inside life.',
    species: '78 specimens',
    imgId: 'world-cellular-44ab90',
    titleId: 'world-cellular-title',
    descId: 'world-cellular-desc',
    query: 'cell mitosis fluorescence microscopy',
  },
  {
    id: 'mineral',
    name: 'Mineral',
    blurb: 'Polarized crystals, lattices, and frozen patterns.',
    species: '42 specimens',
    imgId: 'world-mineral-7b1cd2',
    titleId: 'world-mineral-title',
    descId: 'world-mineral-desc',
    query: 'mineral crystal polarized light microscope',
  },
  {
    id: 'botanical',
    name: 'Botanical',
    blurb: 'Pollen, leaf veins, and the architecture of plants.',
    species: '36 specimens',
    imgId: 'world-botanical-90fa61',
    titleId: 'world-botanical-title',
    descId: 'world-botanical-desc',
    query: 'pollen leaf microscope green',
  },
  {
    id: 'invertebrate',
    name: 'Invertebrate',
    blurb: 'Tardigrades, mites, and the small machinery of soil.',
    species: '21 specimens',
    imgId: 'world-invertebrate-ec3370',
    titleId: 'world-invertebrate-title',
    descId: 'world-invertebrate-desc',
    query: 'tardigrade mite electron microscope',
  },
  {
    id: 'fungal',
    name: 'Fungal',
    blurb: 'Mycelium, spores, and slow networks beneath our feet.',
    species: '29 specimens',
    imgId: 'world-fungal-128ade',
    titleId: 'world-fungal-title',
    descId: 'world-fungal-desc',
    query: 'fungus mycelium spores microscope',
  },
]

export default function Worlds() {
  return (
    <section
      id="worlds"
      className="relative py-24 md:py-32 border-t border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Six worlds
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-50 mt-4 leading-tight">
            Choose an ecosystem and disappear into it.
          </h2>
          <p className="text-slate-300 mt-5">
            Each collection is a curated path through one of the great realms of
            microscopic life — annotated, translated, and rendered for the eye.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {worlds.map((w) => (
            <a
              key={w.id}
              href="#gallery"
              className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-colors bg-slate-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={w.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={w.imgId}
                  data-strk-img={`[${w.descId}] [${w.titleId}] ${w.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3
                    id={w.titleId}
                    className="font-serif text-2xl text-slate-50"
                  >
                    {w.name}
                  </h3>
                  <span className="text-xs text-cyan-400">{w.species}</span>
                </div>
                <p id={w.descId} className="text-slate-300 mt-2 text-sm leading-relaxed">
                  {w.blurb}
                </p>
                <span className="inline-block mt-5 text-sm text-cyan-400 group-hover:text-cyan-300">
                  Enter the realm →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
