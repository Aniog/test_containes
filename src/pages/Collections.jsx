import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Collections() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 text-center border-b border-line">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
          Curated Edits
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
          Collections
        </h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Small, considered collections — each piece earns its place.
        </p>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${encodeURIComponent(cat.name)}`}
            className="group relative aspect-[3/4] overflow-hidden bg-cream"
          >
            <img
              data-strk-img-id={`coll-${cat.id}-img`}
              data-strk-img={`[coll-desc-${cat.id}] [coll-name-${cat.id}] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h2
                id={`coll-name-${cat.id}`}
                className="font-serif text-3xl text-ivory uppercase tracking-widest2"
              >
                {cat.name}
              </h2>
              <p
                id={`coll-desc-${cat.id}`}
                className="text-sm text-ivory/75 mt-2"
              >
                {cat.description}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-champagne border-b border-champagne/50 pb-1">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
