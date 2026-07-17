import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, placeholderImage } from '../../data/storefrontContent'

function CategoryTiles() {
  return (
    <section className="bg-champagne px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxe text-gold">Shop by category</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`

            return (
              <Link
                key={category.id}
                to={category.href}
                className="group relative overflow-hidden rounded-3xl bg-espresso text-pearl shadow-soft"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/15 to-transparent" />
                <img
                  alt={category.label}
                  className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={`category-${category.id}-img-4a${category.id.length}`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={placeholderImage}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 id={titleId} className="font-serif text-4xl text-pearl">
                      {category.label}
                    </h3>
                    <p id={descId} className="mt-2 text-sm leading-7 text-pearl/76">
                      {category.description}
                    </p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-hairline-light text-pearl transition group-hover:border-gold group-hover:text-gold">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
