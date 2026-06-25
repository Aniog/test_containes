const plates = [
  {
    id: 'plate-i',
    plate: 'Plate I',
    titleId: 'gallery-plate-i-title',
    descId: 'gallery-plate-i-desc',
    imgId: 'gallery-img-plate-i-6a7b21',
    title: 'Frozen Botany',
    desc: 'Snowflakes are short-lived crystals built by water vapour. Each is a self-portrait of the air it grew in.',
    ratio: '3x4',
    width: 700,
    span: 'md:row-span-2',
  },
  {
    id: 'plate-ii',
    plate: 'Plate II',
    titleId: 'gallery-plate-ii-title',
    descId: 'gallery-plate-ii-desc',
    imgId: 'gallery-img-plate-ii-2c14d9',
    title: 'Inner Tide',
    desc: 'A drop of seawater contains thousands of plankton — the silent lungs of the planet.',
    ratio: '4x3',
    width: 800,
  },
  {
    id: 'plate-iii',
    plate: 'Plate III',
    titleId: 'gallery-plate-iii-title',
    descId: 'gallery-plate-iii-desc',
    imgId: 'gallery-img-plate-iii-8e2a06',
    title: 'Mineral Forest',
    desc: 'Crystals of vitamin C, photographed under polarised light, look like an aurora frozen on glass.',
    ratio: '4x3',
    width: 800,
  },
  {
    id: 'plate-iv',
    plate: 'Plate IV',
    titleId: 'gallery-plate-iv-title',
    descId: 'gallery-plate-iv-desc',
    imgId: 'gallery-img-plate-iv-31f9b7',
    title: 'Pollen Cathedral',
    desc: 'Sunflower pollen under an electron microscope — a perfect, spiked sphere designed to cling.',
    ratio: '3x4',
    width: 700,
    span: 'md:row-span-2',
  },
]

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-violet-300/80">
              Plates — visual archive
            </span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl font-light tracking-tight text-slate-50 leading-[1.1]">
              A small private gallery.
            </h2>
          </div>
          <p className="max-w-md text-slate-400 font-light italic">
            Selected microphotographs from working notebooks, 2019 – 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-2 gap-5 md:gap-6 auto-rows-[16rem] md:auto-rows-[18rem]">
          {plates.map((p) => (
            <figure
              key={p.id}
              className={`relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900/40 group ${p.span ?? ''}`}
            >
              <img
                data-strk-img-id={p.imgId}
                data-strk-img={`[${p.descId}] [${p.titleId}] microphotography dark`}
                data-strk-img-ratio={p.ratio}
                data-strk-img-width={String(p.width)}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300/80">
                  {p.plate}
                </div>
                <h3
                  id={p.titleId}
                  className="mt-2 font-serif text-2xl md:text-3xl font-light text-slate-50"
                >
                  {p.title}
                </h3>
                <p
                  id={p.descId}
                  className="mt-2 text-sm text-slate-300/90 font-light leading-relaxed max-w-md"
                >
                  {p.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
