const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const worlds = [
  {
    id: 'pond',
    title: 'A drop of pond water',
    desc: 'A teeming metropolis of ciliates, rotifers and algae spinning through their watery sky.',
    query: 'pond water microorganisms ciliates microscope',
    imgId: 'world-pond-a1b2c3',
  },
  {
    id: 'soil',
    title: 'A pinch of soil',
    desc: 'Beneath your feet, fungal threads weave a vast underground web of nutrients and signals.',
    query: 'soil microorganisms fungi mycelium microscope',
    imgId: 'world-soil-d4e5f6',
  },
  {
    id: 'skin',
    title: 'On human skin',
    desc: 'Thousands of bacterial species share your surface, a living biosphere unique to you.',
    query: 'human skin bacteria microbiome microscope',
    imgId: 'world-skin-g7h8i9',
  },
  {
    id: 'leaf',
    title: 'Inside a leaf',
    desc: 'Chloroplasts glow like emerald suns, turning sunlight into the chemistry of life.',
    query: 'leaf chloroplasts plant cells microscope',
    imgId: 'world-leaf-j0k1l2',
  },
  {
    id: 'ocean',
    title: 'A scoop of seawater',
    desc: 'Phytoplankton drift like glass jewelry, producing half the oxygen you breathe.',
    query: 'phytoplankton diatoms seawater microscope',
    imgId: 'world-ocean-m3n4o5',
  },
  {
    id: 'dust',
    title: 'A grain of dust',
    desc: 'Skin flakes, pollen and microscopic mites compose the silent traffic of indoor air.',
    query: 'dust mite pollen scanning electron microscope',
    imgId: 'world-dust-p6q7r8',
  },
]

export default function Worlds() {
  return (
    <section id="worlds" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-300">Six small worlds</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
            Wherever you look, there is another universe
          </h2>
          <p className="mt-4 text-slate-300">
            Each of these everyday samples hides a complete ecosystem. Take a look through the eyepiece.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {worlds.map((w) => (
            <article
              key={w.id}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/60"
            >
              <div className="relative aspect-[4/3]">
                <img
                  alt={w.title}
                  src={PLACEHOLDER}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={w.imgId}
                  data-strk-img={`[world-${w.id}-desc] [world-${w.id}-title] ${w.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={`world-${w.id}-title`} className="text-xl font-semibold text-slate-50">
                  {w.title}
                </h3>
                <p id={`world-${w.id}-desc`} className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
