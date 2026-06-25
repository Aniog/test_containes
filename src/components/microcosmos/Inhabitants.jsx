const inhabitants = [
  {
    id: 'diatom',
    name: 'Diatoms',
    kingdom: 'Algae · Bacillariophyta',
    size: '20 – 200 μm',
    descId: 'inhabitant-diatom-desc',
    titleId: 'inhabitant-diatom-title',
    imgId: 'inhabitant-img-diatom-3b9a2c',
    desc: 'Single-celled architects who lock themselves inside intricate glass shells. Their fossilised cases form the white cliffs and chalky soils of half the planet.',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    kingdom: 'Protozoa · Ciliophora',
    size: '50 – 330 μm',
    descId: 'inhabitant-paramecium-desc',
    titleId: 'inhabitant-paramecium-title',
    imgId: 'inhabitant-img-paramecium-7d12fe',
    desc: 'A slipper-shaped hunter propelled by thousands of synchronised hairs. It eats, learns, and avoids danger without ever growing a brain.',
  },
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    kingdom: 'Animalia · Tardigrada',
    size: '0.3 – 0.5 mm',
    descId: 'inhabitant-tardigrade-desc',
    titleId: 'inhabitant-tardigrade-title',
    imgId: 'inhabitant-img-tardigrade-c4081a',
    desc: 'The water bear. It survives the vacuum of space, boiling water, and a decade without moisture by curling into a desiccated speck called a tun.',
  },
  {
    id: 'neuron',
    name: 'Neurons',
    kingdom: 'Animalia · Nervous tissue',
    size: '4 – 100 μm',
    descId: 'inhabitant-neuron-desc',
    titleId: 'inhabitant-neuron-title',
    imgId: 'inhabitant-img-neuron-5fa3b2',
    desc: 'Branching cells that whisper to each other in electricity. A handful of them, properly arranged, produces the experience of reading this sentence.',
  },
  {
    id: 'pollen',
    name: 'Pollen',
    kingdom: 'Plantae · Gametophyte',
    size: '10 – 100 μm',
    descId: 'inhabitant-pollen-desc',
    titleId: 'inhabitant-pollen-title',
    imgId: 'inhabitant-img-pollen-2e7c44',
    desc: 'A spacecraft engineered by flowers. Each grain wears a sculpted shell as unique as a fingerprint and as durable as ceramic.',
  },
  {
    id: 'radiolarian',
    name: 'Radiolarians',
    kingdom: 'Protozoa · Radiolaria',
    size: '0.1 – 0.2 mm',
    descId: 'inhabitant-radiolarian-desc',
    titleId: 'inhabitant-radiolarian-title',
    imgId: 'inhabitant-img-radiolarian-9b8c61',
    desc: 'Drifting through the open ocean, these organisms grow mineral skeletons of impossible geometry — Ernst Haeckel filled an entire book trying to draw them.',
  },
]

const Inhabitants = ({ containerRef }) => {
  return (
    <section
      id="inhabitants"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
            Inhabitants — selected specimens
          </span>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl font-light tracking-tight text-slate-50 leading-[1.1]">
            A small atlas of the very small.
          </h2>
          <p className="mt-6 text-slate-300 font-light text-base md:text-lg leading-relaxed">
            Six citizens of the microcosmos, photographed and annotated. Each one is
            a complete biography compressed into less than a millimetre.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inhabitants.map((item) => (
            <article
              key={item.id}
              className="group relative rounded-2xl border border-white/5 bg-slate-900/40 overflow-hidden hover:border-emerald-400/30 transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] microscopic specimen dark`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    id={item.titleId}
                    className="font-serif text-2xl font-light text-slate-50 tracking-tight"
                  >
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-500 tabular-nums">{item.size}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-300/70">
                  {item.kingdom}
                </div>
                <p
                  id={item.descId}
                  className="mt-4 text-sm text-slate-300/90 font-light leading-relaxed"
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inhabitants
