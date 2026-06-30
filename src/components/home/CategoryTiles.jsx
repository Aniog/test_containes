import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'

const categories = [
  { name: 'Earrings', queryId: 'cat-earrings', slug: 'earrings' },
  { name: 'Necklaces', queryId: 'cat-necklaces', slug: 'necklaces' },
  { name: 'Huggies', queryId: 'cat-huggies', slug: 'huggies' },
]

export default function CategoryTiles() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-velmora-base py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">
            Find Your Signature
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-taupe/10"
            >
              <img
                id={category.queryId}
                data-strk-img-id={`tile-${category.queryId}`}
                data-strk-img={`[${category.queryId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-base/30 transition-colors group-hover:bg-velmora-base/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-velmora-ivory/60 bg-velmora-base/40 px-8 py-4 backdrop-blur-sm transition-all group-hover:border-velmora-gold group-hover:bg-velmora-base/60">
                  <h3
                    id={category.queryId}
                    className="font-serif text-2xl tracking-wide text-velmora-ivory"
                  >
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
