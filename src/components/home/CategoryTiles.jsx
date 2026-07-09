import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products'

const CategoryTiles = () => (
  <section className="bg-velmora-ivory py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-mist">
            Shop by category
          </p>
          <h2 className="mt-3 font-display text-4xl text-velmora-ink sm:text-5xl">
            Build your signature stack
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {categoryTiles.map((category) => {
          const slug = category.name.toLowerCase()

          return (
            <Link
              key={category.name}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative isolate overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-pearl"
            >
              <div className="aspect-[4/5]" />
              <div
                className="absolute inset-0"
                data-strk-bg-id={`category-${slug}`}
                data-strk-bg={`[category-${slug}-note] [category-${slug}-desc] [category-${slug}-title]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-velmora-noir/75 to-transparent transition duration-300 group-hover:from-velmora-noir/85" />
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-velmora-ivory">
                <h3 id={`category-${slug}-title`} className="font-display text-4xl">
                  {category.name}
                </h3>
                <p
                  id={`category-${slug}-desc`}
                  className="mt-2 max-w-xs text-sm leading-7 text-velmora-ivory/78 opacity-0 transition duration-300 group-hover:opacity-100"
                >
                  {category.description}
                </p>
                <p id={`category-${slug}-note`} className="sr-only" aria-hidden="true">
                  {category.note}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CategoryTiles
