import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categories, placeholderSvg } from '@/data/products.js'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream py-20 text-velmora-ink sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-antique">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink sm:text-6xl">
            Find your signature shine.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.label}`}
              className="group relative overflow-hidden rounded-[2rem] bg-velmora-blush shadow-editorial"
            >
              <img
                alt={category.label}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={placeholderSvg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/74 via-velmora-ink/10 to-transparent opacity-80 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-porcelain">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 id={category.titleId} className="font-serif text-4xl font-semibold text-velmora-porcelain">
                      {category.label}
                    </h3>
                    <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-cream/82">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-velmora-porcelain/40 p-3 text-velmora-porcelain transition group-hover:border-velmora-champagne group-hover:text-velmora-champagne">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
