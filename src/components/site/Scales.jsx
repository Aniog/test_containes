const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const scales = [
  {
    id: 'naked-eye',
    level: '1×',
    title: 'The naked eye',
    desc: 'A single droplet of pond water on your fingertip. Apparently transparent. Apparently empty.',
    query: 'water droplet on finger macro',
    imgId: 'scale-naked-aa01',
  },
  {
    id: 'loupe',
    level: '10×',
    title: 'A pocket loupe',
    desc: 'Tiny specks resolve into swimming dots. Something is alive in there.',
    query: 'water droplet macro lens close up',
    imgId: 'scale-loupe-bb02',
  },
  {
    id: 'light',
    level: '400×',
    title: 'Light microscope',
    desc: 'A bustling city of paramecia and rotifers comes into focus, twirling through their glass sky.',
    query: 'light microscope view pond water microorganisms',
    imgId: 'scale-light-cc03',
  },
  {
    id: 'fluorescence',
    level: '1000×',
    title: 'Fluorescence',
    desc: 'Stained organelles glow neon green and magenta. The architecture of the cell is revealed.',
    query: 'fluorescence microscopy stained cells colorful',
    imgId: 'scale-fluo-dd04',
  },
  {
    id: 'sem',
    level: '10,000×',
    title: 'Scanning electron',
    desc: 'A single grain of pollen looks like an alien planet. Surface textures emerge in detail.',
    query: 'pollen grain scanning electron microscope',
    imgId: 'scale-sem-ee05',
  },
  {
    id: 'tem',
    level: '500,000×',
    title: 'Transmission electron',
    desc: 'Inside the cell wall, ribosomes and membranes form the molecular machinery of life.',
    query: 'transmission electron microscope cell organelles',
    imgId: 'scale-tem-ff06',
  },
]

export default function Scales() {
  return (
    <section id="scales" className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-300">Powers of ten</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
            Zooming in, one order of magnitude at a time
          </h2>
          <p className="mt-4 text-slate-300">
            The same droplet, photographed at six magnifications. Each step reveals an entirely new layer
            of reality.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {scales.map((s, i) => (
            <article
              key={s.id}
              className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl ring-1 ring-white/10 bg-slate-900/50 overflow-hidden ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className="relative aspect-video md:aspect-[4/3] md:[direction:ltr]">
                <img
                  alt={s.title}
                  src={PLACEHOLDER}
                  className="absolute inset-0 h-full w-full object-cover"
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[scale-${s.id}-desc] [scale-${s.id}-title] ${s.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                />
                <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal-300 border border-teal-400/30">
                  {s.level}
                </div>
              </div>
              <div className="p-6 md:p-10 md:[direction:ltr]">
                <h3 id={`scale-${s.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-50">
                  {s.title}
                </h3>
                <p id={`scale-${s.id}-desc`} className="mt-4 text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
