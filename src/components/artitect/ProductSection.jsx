import React from 'react'
import { BadgeCheck, Layers3, Ruler, Settings2 } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'A premium solution for accurate double folds, repeatable angles, and stable production runs.',
    icon: Layers3,
    imgId: 'product-double-folding-machine-c19a4b',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'User-friendly sheet metal folder equipment for workshops that need clean bends and simple setup.',
    icon: Ruler,
    imgId: 'product-sheet-metal-folder-f84d2c',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Strong metal folder machines engineered for daily use, precise clamping, and consistent finishing.',
    icon: Settings2,
    imgId: 'product-metal-folder-machine-b62f7e',
  },
]

const productTerms = ['Double folder', 'Sheet metal folding machine', 'Metal folder', 'Metal folding machine']

const ProductSection = () => {
  return (
    <section id="products" className="bg-artitect-ivory px-5 py-24 text-artitect-ink sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-artitect-brass-dark">Product range</p>
            <h2 id="products-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-artitect-ink sm:text-5xl">
              Folding machines designed around precision and ease.
            </h2>
          </div>
          <p id="products-subtitle" className="max-w-3xl text-lg leading-8 text-artitect-steel lg:justify-self-end">
            Choose from double folding machines, double folders, sheet metal folders, and metal folder machines tailored for accurate fabrication and smooth operation.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {productTerms.map((term) => (
            <span key={term} className="rounded-full border border-artitect-line bg-artitect-panel px-4 py-2 text-sm font-semibold text-artitect-graphite shadow-soft">
              {term}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            const titleId = `${product.id}-title`
            const descId = `${product.id}-desc`

            return (
              <article key={product.id} className="group overflow-hidden rounded-[2rem] border border-artitect-line bg-artitect-panel text-artitect-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative h-64 overflow-hidden bg-artitect-line">
                  <img
                    alt={`${product.title} by ARTITECT MACHINERY`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${descId}] [${titleId}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute left-5 top-5 rounded-2xl bg-artitect-ink/85 p-3 text-white shadow-soft backdrop-blur">
                    <Icon className="h-6 w-6 text-artitect-brass" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 id={titleId} className="text-2xl font-bold text-artitect-ink">{product.title}</h3>
                  <p id={descId} className="mt-4 leading-7 text-artitect-steel">{product.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-artitect-brass-dark">
                    <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    Custom recommendations available
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
