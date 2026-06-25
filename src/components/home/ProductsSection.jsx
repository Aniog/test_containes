import { ArrowUpRight, Layers3, Ruler, Settings2 } from 'lucide-react'
import MachineVisual from './MachineVisual'

const products = [
  {
    title: 'Double Folding Machine',
    description: 'A high-capacity solution for consistent two-sided folding, made for fabricators who need repeatable accuracy and a refined workflow.',
    icon: Layers3,
    accent: 'amber',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    title: 'Sheet Metal Folder',
    description: 'A dependable metal folder for clean bends across common sheet sizes, with accessible operation for workshop teams.',
    icon: Ruler,
    accent: 'slate',
    titleId: 'product-sheet-folder-title',
    descId: 'product-sheet-folder-desc',
  },
  {
    title: 'Metal Folding Machine',
    description: 'A durable folding platform that supports precise forming, smooth handling, and long service life in daily production.',
    icon: Settings2,
    accent: 'white',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="bg-stone-50 py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-600">Product range</p>
          <h2 id="products-title" className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Machines for precise sheet metal folding.
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-700">
            From double folders to sheet metal folding machines, every ARTITECT MACHINERY product is presented with a clear purpose: reliable bends, confident handling, and a polished operator experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <article key={product.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
                <div className="relative overflow-hidden bg-slate-900">
                  <MachineVisual title={`${product.title} illustration`} accent={product.accent} compact />
                  <div className="absolute left-5 top-5 rounded-2xl bg-white/95 p-3 text-slate-950 shadow-lg">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 id={product.titleId} className="text-2xl font-black tracking-tight text-slate-950">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="mt-4 leading-7 text-slate-700">
                    {product.description}
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:text-amber-700">
                    Request details
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
