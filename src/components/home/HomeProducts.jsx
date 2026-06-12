import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'atelier-d2',
    name: 'Atelier D2',
    tagline: 'Double Folding Machine',
    descId: 'product-atelier-d2-desc',
    titleId: 'product-atelier-d2-title',
    imgId: 'product-atelier-d2-img',
    description:
      'Our flagship double folder. Twin folding beams crease panels up to 2,500 mm with mirror precision and a remarkably quiet drive.',
    specs: ['2,500 mm length', '1.6 mm mild steel', 'Twin beam'],
  },
  {
    id: 'studio-s1',
    name: 'Studio S1',
    tagline: 'Sheet Metal Folder',
    descId: 'product-studio-s1-desc',
    titleId: 'product-studio-s1-title',
    imgId: 'product-studio-s1-img',
    description:
      'A compact, single-beam metal folder for studios and architectural workshops. Effortless setup, refined ergonomics, exquisite results.',
    specs: ['1,500 mm length', '1.2 mm mild steel', 'Manual clamp'],
  },
  {
    id: 'forge-f3',
    name: 'Forge F3',
    tagline: 'Heavy-Duty Metal Folding Machine',
    descId: 'product-forge-f3-desc',
    titleId: 'product-forge-f3-title',
    imgId: 'product-forge-f3-img',
    description:
      'Built for production lines. The Forge F3 metal folder machine delivers continuous folds in stainless and aluminium without strain.',
    specs: ['3,200 mm length', '2.5 mm mild steel', 'CNC-assisted'],
  },
]

export default function HomeProducts() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p id="products-eyebrow" className="text-xs tracking-[0.35em] uppercase text-ember mb-5">
              The Collection
            </p>
            <h2 id="products-title" className="font-display font-light text-ink text-4xl md:text-5xl leading-tight">
              Folding machines built<br />
              <span className="italic text-ember">like architecture.</span>
            </h2>
          </div>
          <p id="products-subtitle" className="text-steel max-w-md leading-relaxed">
            Three quietly considered machines for the modern metal workshop —
            each tuned for a different scale of work, all sharing the same
            disciplined engineering language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group bg-bone border border-ink/10 hover:border-ember/40 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-mist relative">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [products-eyebrow]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-ember mb-3">
                  {p.tagline}
                </p>
                <h3
                  id={p.titleId}
                  className="font-display text-2xl md:text-3xl text-ink mb-4"
                >
                  {p.name}
                </h3>
                <p id={p.descId} className="text-steel leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                <ul className="border-t border-ink/10 pt-5 mb-6 space-y-2">
                  {p.specs.map((s) => (
                    <li key={s} className="text-sm text-ink/80 flex items-center gap-3">
                      <span className="w-1 h-1 bg-ember rounded-full" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-ink group-hover:text-ember transition-colors"
                >
                  View details
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
