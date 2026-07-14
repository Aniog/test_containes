import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'
import SectionHeading from '@/components/home/SectionHeading'

export default function CategoryTiles() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Find Your Piece"
          title="Shop by Category"
          description="From everyday huggies to statement necklaces."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-3xl text-ivory uppercase tracking-widest2"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-sm text-ivory/75 mt-2 max-w-[16rem] mx-auto"
                >
                  {cat.description}
                </p>
                <span className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-champagne border-b border-champagne/50 pb-1">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
