import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { CATEGORY_TILES } from '@/data/products.js'

const CategoryTiles = () => (
  <section id="collections" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">Jewelry edited to your mood</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-ink-soft">
          Explore sculptural earrings, soft layering necklaces, and polished huggies made to move effortlessly from desk to dinner.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {CATEGORY_TILES.map((tile) => {
          const titleId = `${tile.id}-title`
          const subtitleId = `${tile.id}-subtitle`

          return (
            <Link
              key={tile.id}
              to={`/shop?category=${encodeURIComponent(tile.name)}`}
              className="group relative overflow-hidden rounded-[32px] border border-champagne/30 bg-espresso text-ivory shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tile.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  data-strk-img-id={`${tile.id}-image-f4`}
                  data-strk-img={`[${subtitleId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 id={titleId} className="font-serif text-3xl text-ivory">{tile.name}</h3>
                  <p id={subtitleId} className="mt-2 text-sm leading-6 text-ivory/78">{tile.subtitle}</p>
                </div>
                <span className="rounded-full border border-ivory/25 bg-ivory/10 p-3 text-ivory transition group-hover:border-gold group-hover:text-gold">
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

export default CategoryTiles
