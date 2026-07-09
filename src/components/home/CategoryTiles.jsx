import { Link } from 'react-router-dom'
import { categories, imagePlaceholder } from '@/data/storefront'

export default function CategoryTiles() {
  return (
    <section id="categories" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="velmora-kicker">Shop by category</p>
          <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">Curated for every signature stack.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-velmora-cocoa/75">
          Explore earrings, necklaces, and huggies through a warm editorial lens with refined, easy-to-style silhouettes.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => {
          const titleId = `${category.name.toLowerCase()}-tile-title`
          const descId = `${category.name.toLowerCase()}-tile-desc`
          const sceneId = `${category.name.toLowerCase()}-tile-scene`

          return (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-sand/60 bg-velmora-ink text-velmora-mist shadow-velmora"
            >
              <span id={sceneId} className="sr-only">
                {category.imageScene}
              </span>
              <img
                alt={category.name}
                className="aspect-[4/5] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={`${category.name.toLowerCase()}-tile-img`}
                data-strk-img={`[${sceneId}] [${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={imagePlaceholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 id={titleId} className="font-display text-4xl text-velmora-mist">
                    {category.name}
                  </h3>
                  <p id={descId} className="max-w-xs pt-2 text-sm leading-6 text-velmora-mist/75 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-velmora-mist transition group-hover:border-velmora-gold group-hover:text-velmora-gold">
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
