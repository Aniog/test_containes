import { Link } from 'react-router-dom'

export default function CategoryTiles({ categories }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {categories.map((category) => {
        const titleId = `${category.id}-tile-title`
        const descId = `${category.id}-tile-desc`

        return (
          <Link
            key={category.id}
            to={category.href}
            className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink shadow-card"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={category.title}
              className="aspect-[4/5] w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
              data-strk-img-id={`${category.id}-tile-img`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">
                Explore
              </p>
              <h3
                id={titleId}
                className="mt-3 font-display text-4xl transition duration-300 group-hover:translate-x-1"
              >
                {category.title}
              </h3>
              <p
                id={descId}
                className="mt-3 max-w-xs text-sm leading-7 text-velmora-muted"
              >
                {category.description}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
