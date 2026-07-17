import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, placeholderImage } from '../../data/storefrontContent'

function CategoryTiles() {
  return (
    <section id="collections" className="bg-champagne px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxe text-gold">Shop by category</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            const visualId = `category-${category.id}-visual`

            return (
              <Link
                key={category.id}
                to={category.href}
                className="group relative overflow-hidden rounded-3xl bg-espresso text-white shadow-soft"
              >
                <span id={visualId} className="sr-only">
                  {category.visual}
                </span>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-gradient-to-t from-espresso/95 via-espresso/48 to-espresso/12"
                />
                <img
                  alt={category.label}
                  className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[${visualId}] luxury gold jewelry editorial portrait`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={placeholderImage}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                  <div className="flex items-end justify-between gap-4 rounded-[1.75rem] bg-espresso/18 p-5 backdrop-blur-[2px]">
                    <div>
                      <h3 id={titleId} className="font-serif text-4xl text-white">
                        {category.label}
                      </h3>
                      <p id={descId} className="mt-2 max-w-[16rem] text-sm leading-7 text-white/80">
                        {category.description}
                      </p>
                    </div>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition group-hover:border-gold group-hover:text-gold">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
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
