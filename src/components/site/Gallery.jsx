const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// A diverse gallery with varied tiles to maximize visual richness.
const items = [
  { id: 'g1', title: 'Volvox colony', tag: 'Algae', q: 'volvox green algae colony microscope', span: 'md:col-span-2 md:row-span-2', ratio: '1x1', w: 900 },
  { id: 'g2', title: 'Stained neuron', tag: 'Cell', q: 'stained neuron fluorescence microscope', ratio: '3x4', w: 500 },
  { id: 'g3', title: 'Diatom mosaic', tag: 'Plankton', q: 'diatoms arranged microscope colorful', ratio: '4x3', w: 600 },
  { id: 'g4', title: 'Pollen cluster', tag: 'SEM', q: 'pollen grains scanning electron microscope cluster', ratio: '1x1', w: 500 },
  { id: 'g5', title: 'Ciliate spiral', tag: 'Protozoa', q: 'ciliate microscope colorful', ratio: '3x4', w: 500 },
  { id: 'g6', title: 'Bacterial bloom', tag: 'Bacteria', q: 'colorful bacterial colony agar plate', span: 'md:col-span-2', ratio: '16x9', w: 900 },
  { id: 'g7', title: 'Tardigrade portrait', tag: 'Animal', q: 'tardigrade water bear microscope close up', ratio: '4x3', w: 600 },
  { id: 'g8', title: 'Fungal hyphae', tag: 'Fungi', q: 'fungal hyphae mycelium microscope', ratio: '1x1', w: 500 },
  { id: 'g9', title: 'Red blood cells', tag: 'Cell', q: 'red blood cells scanning electron microscope', span: 'md:row-span-2', ratio: '3x4', w: 600 },
  { id: 'g10', title: 'Stentor trumpet', tag: 'Protozoa', q: 'stentor protozoa microscope', ratio: '4x3', w: 600 },
  { id: 'g11', title: 'Radiolarian shell', tag: 'Plankton', q: 'radiolarian microscope geometric', ratio: '1x1', w: 500 },
  { id: 'g12', title: 'Cyanobacteria mat', tag: 'Bacteria', q: 'cyanobacteria filaments microscope', ratio: '4x3', w: 600 },
  { id: 'g13', title: 'Yeast budding', tag: 'Fungi', q: 'yeast cells budding microscope', ratio: '1x1', w: 500 },
  { id: 'g14', title: 'Snowflake crystal', tag: 'Macro', q: 'snowflake macro photography microscope', span: 'md:col-span-2', ratio: '16x9', w: 900 },
  { id: 'g15', title: 'Spirogyra strands', tag: 'Algae', q: 'spirogyra green algae spiral microscope', ratio: '3x4', w: 500 },
  { id: 'g16', title: 'Foraminifera', tag: 'Plankton', q: 'foraminifera microscope shell', ratio: '4x3', w: 600 },
  { id: 'g17', title: 'Butterfly wing scales', tag: 'Macro', q: 'butterfly wing scales microscope iridescent', ratio: '1x1', w: 500 },
  { id: 'g18', title: 'Plant stomata', tag: 'Plant', q: 'plant leaf stomata microscope', ratio: '4x3', w: 600 },
]

const tags = ['All', 'Cell', 'Algae', 'Bacteria', 'Plankton', 'Fungi', 'Protozoa', 'SEM', 'Macro']

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-teal-300">Photo gallery</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
              Portraits from the small world
            </h2>
          </div>
          <p className="text-slate-300 max-w-md">
            A curated selection of microscope photography. Every frame is a complete world.
          </p>
        </div>

        {/* Tag chips (visual only) */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {tags.map((t, i) => (
            <span
              key={t}
              className={`shrink-0 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium border ${i === 0 ? 'bg-teal-400 text-slate-950 border-teal-400' : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {items.map((it) => (
            <figure
              key={it.id}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900 ${it.span || ''}`}
            >
              <img
                alt={it.title}
                src={PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-strk-img-id={`gal-${it.id}-${it.q.split(' ').slice(0, 2).join('')}`}
                data-strk-img={`[gal-${it.id}-title] ${it.q}`}
                data-strk-img-ratio={it.ratio}
                data-strk-img-width={it.w}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-[10px] uppercase tracking-widest text-teal-300">{it.tag}</div>
                <div id={`gal-${it.id}-title`} className="text-sm md:text-base font-semibold text-slate-50">
                  {it.title}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
