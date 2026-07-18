import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/storefront'
import { ImageLoader } from '@/components/layout/ImageLoader'

export function CategorySection() {
  return (
    <section className="bg-velmora-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">Shop by category</p>
          <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">
            Build your own considered collection.
          </h2>
        </div>

        <ImageLoader dependencies={[]} className="mt-10 grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink shadow-soft"
            >
              <img
                alt={tile.label}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                data-strk-img-id={`category-${tile.id}-image`}
                data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 id={tile.titleId} className="font-display text-3xl text-velmora-porcelain">
                    {tile.label}
                  </h3>
                  <p id={tile.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-parchment/85 opacity-0 transition duration-300 group-hover:opacity-100">
                    {tile.description}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-velmora-champagne transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </ImageLoader>
      </div>
    </section>
  )
}
