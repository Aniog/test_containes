import { Link } from 'react-router-dom'
import { categoryTiles } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="section-frame grid gap-5 md:grid-cols-3">
        {categoryTiles.map((tile) => {
          const titleId = `${tile.slug.toLowerCase()}-tile-title`
          const descriptionId = `${tile.slug.toLowerCase()}-tile-description`

          return (
            <Link
              key={tile.slug}
              to={`/shop?category=${encodeURIComponent(tile.slug)}`}
              className="group relative overflow-hidden rounded-[30px] bg-velmora-ink shadow-card"
            >
              <img
                alt={tile.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.03]"
                data-strk-img-id={`${tile.slug.toLowerCase()}-tile-img`}
                data-strk-img={`[${descriptionId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-velmora-parchment">
                <div>
                  <p
                    id={titleId}
                    className="font-display text-3xl uppercase tracking-[0.14em] text-velmora-parchment"
                  >
                    {tile.name}
                  </p>
                  <p id={descriptionId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-parchment/80">
                    {tile.description}
                  </p>
                </div>
                <span className="translate-y-2 text-xs uppercase tracking-luxe opacity-0 transition-all duration-300 ease-velvet group-hover:translate-y-0 group-hover:opacity-100">
                  Explore
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
