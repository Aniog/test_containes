import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages, StrkImg } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream"
            >
              <StrkImg
                imgId={cat.imgId}
                query={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                ratio="4x5"
                width={700}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-3xl md:text-4xl uppercase tracking-widest3"
                >
                  {cat.label}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.desc}
                </p>
                <span className="mt-3 text-[11px] uppercase tracking-widest2 text-ivory/90 border-b border-ivory/60 pb-1 group-hover:border-gold group-hover:text-gold-soft transition-colors">
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
