import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/store.js'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function CategoryTiles() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [categoryTiles.length])

  return (
    <section className="velmora-container py-16 md:py-24" ref={containerRef}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="velmora-eyebrow">Shop by category</p>
          <h2 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
            Curated by how you wear it
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-velmora-truffle">
          Explore signature silhouettes in earrings, necklaces, and modern huggies.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {categoryTiles.map((tile) => {
          const titleId = `category-${tile.slug}-title`
          const descId = `category-${tile.slug}-desc`

          return (
            <Link
              key={tile.slug}
              to={`/shop?category=${encodeURIComponent(tile.name)}`}
              className="group relative block overflow-hidden rounded-[2rem] bg-velmora-ink"
            >
              <img
                alt={tile.name}
                className="h-[360px] w-full object-cover transition duration-500 ease-velmora group-hover:scale-[1.04]"
                data-strk-img-id={`category-${tile.slug}-img-8k3m`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                <div>
                  <p id={titleId} className="font-display text-4xl text-velmora-pearl">
                    {tile.name}
                  </p>
                  <p id={descId} className="mt-2 hidden text-sm uppercase tracking-[0.22em] text-velmora-pearl/72" aria-hidden="true">
                    {tile.prompt}
                  </p>
                </div>
                <span className="rounded-full border border-velmora-pearl/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-velmora-pearl transition group-hover:border-velmora-gold group-hover:text-velmora-gold">
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

export default CategoryTiles
