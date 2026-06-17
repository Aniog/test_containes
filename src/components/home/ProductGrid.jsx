import { ArrowUpRight } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'df-2500',
    name: 'DF-2500 Double Folder',
    tagline: 'Flagship double folding machine',
    capacity: 'Up to 2500 mm · 2.5 mm steel',
    description:
      'Our signature double folder for high-volume fabrication. Twin upper beams enable up- and down-folds without flipping the workpiece, dramatically reducing cycle time.',
    titleId: 'product-df-2500-title',
    descId: 'product-df-2500-desc',
    imgId: 'product-df-2500-img-9a3c',
  },
  {
    id: 'sm-3200',
    name: 'SM-3200 Sheet Metal Folder',
    tagline: 'Heavy-duty sheet metal folding machine',
    capacity: 'Up to 3200 mm · 3 mm mild steel',
    description:
      'A robust sheet metal folder built for HVAC, façade, and architectural panel work. Hardened tool steel beams hold tight tolerances over a long working life.',
    titleId: 'product-sm-3200-title',
    descId: 'product-sm-3200-desc',
    imgId: 'product-sm-3200-img-1f4d',
  },
  {
    id: 'mf-2000',
    name: 'MF-2000 Metal Folder',
    tagline: 'Compact metal folder machine',
    capacity: 'Up to 2000 mm · 2 mm mild steel',
    description:
      'A precise, space-efficient metal folder ideal for prototyping shops and short-run production. Servo-assisted backgauge ensures repeatable bends every time.',
    titleId: 'product-mf-2000-title',
    descId: 'product-mf-2000-desc',
    imgId: 'product-mf-2000-img-5b8e',
  },
  {
    id: 'pro-4000',
    name: 'PRO-4000 Industrial Folder',
    tagline: 'Wide-format metal folding machine',
    capacity: 'Up to 4000 mm · 4 mm mild steel',
    description:
      'Designed for large-format cladding and structural panels. CNC-controlled axes and a programmable recipe library streamline complex bend sequences.',
    titleId: 'product-pro-4000-title',
    descId: 'product-pro-4000-desc',
    imgId: 'product-pro-4000-img-c2a7',
  },
]

export default function ProductGrid() {
  return (
    <section id="machines" className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Our Machines</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">
              A folder for every fabrication line.
            </h2>
            <div className="w-12 h-px bg-accent mt-6" />
          </div>
          <p className="text-steel md:max-w-md leading-relaxed">
            From compact workshop folders to wide-format CNC machines, every ARTITECT
            unit is engineered with the same obsession for square frames, true beams,
            and bends that hold their angle for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group bg-bone border border-mist hover:border-ink transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-paper/95 text-ink text-[0.65rem] tracking-[0.25em] uppercase">
                  {p.id.toUpperCase()}
                </div>
              </div>

              <div className="p-7 md:p-9">
                <p className="text-xs tracking-[0.25em] uppercase text-accent">{p.tagline}</p>
                <h3
                  id={p.titleId}
                  className="mt-3 font-display text-2xl md:text-3xl text-ink tracking-tight"
                >
                  {p.name}
                </h3>
                <p id={p.descId} className="mt-4 text-steel leading-relaxed">
                  {p.description}
                </p>
                <p className="mt-5 text-sm text-ink">
                  <span className="text-steel">Capacity · </span>
                  {p.capacity}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-ink font-medium border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  Request specifications
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
