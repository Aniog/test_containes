import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export const products = [
  {
    id: 'df-2500',
    slug: 'df-2500',
    name: 'DF-2500 Double Folder',
    tagline: 'Versatile twin-beam folding',
    description:
      'Our flagship double folding machine for fabricators who need up-and-down folding without flipping the sheet. Whisper-quiet servo drives, hardened tooling.',
    imgId: 'product-df2500-7c1a4d',
    specs: [
      { k: 'Working length', v: '2 500 mm' },
      { k: 'Mild steel', v: '1.5 mm' },
      { k: 'Folding angle', v: '0° – 145°' },
    ],
  },
  {
    id: 'df-3200',
    slug: 'df-3200',
    name: 'DF-3200 Sheet Metal Folder',
    tagline: 'Heavy-duty production line',
    description:
      'A heavy steel chassis sheet metal folding machine designed for continuous production. CNC back gauge with 5-axis control as standard.',
    imgId: 'product-df3200-3e8b22',
    specs: [
      { k: 'Working length', v: '3 200 mm' },
      { k: 'Mild steel', v: '2.0 mm' },
      { k: 'CNC axes', v: '5' },
    ],
  },
  {
    id: 'df-4000',
    slug: 'df-4000',
    name: 'DF-4000 Metal Folder Machine',
    tagline: 'Long-format precision',
    description:
      'Built for HVAC, façade, and architectural panel manufacturing. The DF-4000 metal folder machine extends to four meters while keeping ±0.05 mm tolerance.',
    imgId: 'product-df4000-c20fa9',
    specs: [
      { k: 'Working length', v: '4 000 mm' },
      { k: 'Mild steel', v: '1.5 mm' },
      { k: 'Accuracy', v: '±0.05 mm' },
    ],
  },
]

const HomeProducts = () => {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent" />
              <span id="products-eyebrow" className="text-xs uppercase tracking-[0.3em] text-accent">
                Our Machines
              </span>
            </div>
            <h2 id="products-title" className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink max-w-2xl">
              A family of folding machines, each engineered for a calling.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors w-fit"
          >
            View all products
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group bg-paper border border-mist hover:border-accent transition-colors duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-fog">
                <img
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[product-${p.id}-desc] [product-${p.id}-name] sheet metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23E5E7EB'/%3E%3C/svg%3E"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
                  {p.tagline}
                </p>
                <h3 id={`product-${p.id}-name`} className="font-serif text-2xl text-ink mb-3">
                  {p.name}
                </h3>
                <p id={`product-${p.id}-desc`} className="text-graphite text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
                <ul className="mt-auto border-t border-mist pt-5 space-y-2">
                  {p.specs.map((s) => (
                    <li key={s.k} className="flex items-center justify-between text-xs">
                      <span className="text-ash uppercase tracking-[0.18em]">{s.k}</span>
                      <span className="text-ink font-medium">{s.v}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/products#${p.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink hover:text-accent transition-colors"
                >
                  Details
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProducts
