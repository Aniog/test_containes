import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products'

function CategoryTiles() {
  return (
    <section className="section-shell" id="collections">
      <div className="mb-10 space-y-3">
        <p className="eyebrow text-amber-200">Shop by category</p>
        <h2 className="font-display text-4xl text-stone-100 sm:text-5xl">
          Jewelry wardrobes, refined by silhouette.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {categoryTiles.map((tile) => (
          <Link className="group relative block overflow-hidden rounded-[2rem] border border-stone-800/80" key={tile.id} to="/shop">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                alt={tile.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img={`[category-${tile.id}-desc] [category-${tile.id}-label] [category-title]`}
                data-strk-img-id={tile.imageId}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-4xl text-stone-50" id={`category-${tile.id}-label`}>
                    {tile.label}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-7 text-stone-200" id={`category-${tile.id}-desc`}>
                    {tile.description}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/70 bg-stone-950/65 text-amber-100 transition group-hover:-translate-y-0.5 group-hover:bg-amber-200 group-hover:text-stone-950">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <span className="sr-only" id="category-title">
        Velmora jewelry categories
      </span>
    </section>
  )
}

export default CategoryTiles
