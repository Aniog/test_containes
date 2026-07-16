import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { StrkImage } from '@/components/StrkImage'
import { useStrkImages } from '@/components/StrkImage'

export default function CategoryTiles() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">Shop by Category</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {categories.map((cat) => {
          const nameId = `cat-${cat.id}-name`
          const descId = `cat-${cat.id}-desc`
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block overflow-hidden"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${descId}] [${nameId}]`}
                ratio="4x5"
                width={700}
                alt={cat.name}
                className="aspect-[4/5] w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-colors duration-500 group-hover:from-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={nameId}
                  className="font-serif text-2xl uppercase tracking-[0.18em] text-ivory"
                >
                  {cat.name}
                </h3>
                <p
                  id={descId}
                  className="mt-1.5 translate-y-2 text-xs text-ivory/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {cat.description}
                </p>
                <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-gold">
                  Shop Now
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
