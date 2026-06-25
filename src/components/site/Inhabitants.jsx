const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const inhabitants = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nick: 'Water bear',
    size: '0.5 mm',
    fact: 'Survives in vacuum, lava heat, and absolute zero. The most durable animal known.',
    query: 'tardigrade water bear scanning electron microscope',
    imgId: 'inhab-tardigrade-aa11',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    nick: 'Slipper animalcule',
    size: '0.3 mm',
    fact: 'Swims with thousands of synchronized hairs called cilia at 1 mm per second.',
    query: 'paramecium ciliate single cell organism microscope',
    imgId: 'inhab-paramecium-bb22',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nick: 'Glass jewel',
    size: '0.02 mm',
    fact: 'Builds an intricate silica shell more delicate than any human-made glass.',
    query: 'diatom silica shell microscope colorful',
    imgId: 'inhab-diatom-cc33',
  },
  {
    id: 'amoeba',
    name: 'Amoeba',
    nick: 'Shape shifter',
    size: '0.7 mm',
    fact: 'Has no fixed shape. Flows around food and engulfs it whole.',
    query: 'amoeba protozoa microscope',
    imgId: 'inhab-amoeba-dd44',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    nick: 'Wheel animal',
    size: '0.5 mm',
    fact: 'A crown of beating cilia creates a tiny vortex that pulls food into its mouth.',
    query: 'rotifer wheel animal microscope',
    imgId: 'inhab-rotifer-ee55',
  },
  {
    id: 'radiolarian',
    name: 'Radiolarian',
    nick: 'Mineral star',
    size: '0.1 mm',
    fact: 'Drifts in oceans wearing a geometric mineral skeleton, like a living snowflake.',
    query: 'radiolarian skeleton microscope',
    imgId: 'inhab-radiolarian-ff66',
  },
  {
    id: 'bacteria',
    name: 'Bacteria',
    nick: 'Tiny everything',
    size: '0.001 mm',
    fact: 'Outnumber every other form of life. Some can divide every twenty minutes.',
    query: 'bacteria rod shaped fluorescence microscope',
    imgId: 'inhab-bacteria-gg77',
  },
  {
    id: 'mite',
    name: 'Dust mite',
    nick: 'House neighbor',
    size: '0.3 mm',
    fact: 'Lives in your mattress, feasting on shed skin, completely invisible to the eye.',
    query: 'dust mite electron microscope',
    imgId: 'inhab-mite-hh88',
  },
]

export default function Inhabitants() {
  return (
    <section id="inhabitants" className="relative py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-teal-300">Meet the locals</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
              Inhabitants of the MicroCosmos
            </h2>
          </div>
          <p className="text-slate-300 max-w-md">
            A field guide to the most extraordinary citizens of the small world. Click any specimen to imagine
            its life at human scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inhabitants.map((it) => (
            <article
              key={it.id}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-950"
            >
              <div className="relative aspect-square">
                <img
                  alt={it.name}
                  src={PLACEHOLDER}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-strk-img-id={it.imgId}
                  data-strk-img={`[inhab-${it.id}-fact] [inhab-${it.id}-name] ${it.query}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-widest text-teal-300 border border-teal-400/30">
                  {it.size}
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-slate-400">{it.nick}</div>
                <h3 id={`inhab-${it.id}-name`} className="mt-1 text-lg font-semibold text-slate-50">
                  {it.name}
                </h3>
                <p id={`inhab-${it.id}-fact`} className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {it.fact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
