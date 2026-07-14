import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function ShopByCategory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[cat-${cat.id}-desc] [cat-${cat.id}-name] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={`cat-${cat.id}-name`}
                className="font-serif text-2xl uppercase tracking-widest2 text-ivory"
              >
                {cat.name}
              </h3>
              <p
                id={`cat-${cat.id}-desc`}
                className="mt-1 text-xs text-ivory/80"
              >
                {cat.description}
              </p>
              <span className="mt-4 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
