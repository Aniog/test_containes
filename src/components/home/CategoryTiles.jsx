import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import StrkImage from '@/components/ui/StrkImage'

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                ratio="3x4"
                width="700"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-opacity duration-500 group-hover:from-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-3xl uppercase tracking-[0.15em]"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-ivory/80 text-xs mt-2 max-w-[16rem] mx-auto translate-y-2 opacity-0 transition-all duration-500 ease-luxury group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {cat.blurb}
                </p>
                <span className="inline-block mt-4 text-[11px] uppercase tracking-[0.22em] text-champagne">
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
