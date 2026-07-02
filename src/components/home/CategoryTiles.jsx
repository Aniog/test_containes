import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categoryTiles, IMAGE_PLACEHOLDER } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Shop by category</p>
        <h2 className="mt-3 font-display text-4xl text-stone-950">Jewelry for the everyday edit</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categoryTiles.map((category) => {
          const titleId = `category-${category.id}-title`
          const descId = `category-${category.id}-desc`

          return (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-200 text-stone-50"
            >
              <img
                alt={category.name}
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={IMAGE_PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 id={titleId} className="font-display text-3xl text-stone-50">
                    {category.name}
                  </h3>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 transition group-hover:border-amber-200 group-hover:text-amber-200">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
