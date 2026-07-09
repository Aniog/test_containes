import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-cream"
            >
              <div
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="700"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-3xl md:text-4xl uppercase tracking-[0.15em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-ivory/0 group-hover:text-ivory/80 text-sm mt-2 max-w-[16rem] transition-all duration-500 px-4"
                >
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
