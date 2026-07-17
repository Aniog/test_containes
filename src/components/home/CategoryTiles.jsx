import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages, IMG_PLACEHOLDER } from "@/lib/strk-images"

export default function CategoryTiles() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
          Shop by Category
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => {
          const nameId = `cat-${cat.id}-name`
          const descId = `cat-${cat.id}-desc`
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4x5] overflow-hidden bg-sand"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${descId}] [${nameId}] gold jewelry editorial warm`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src={IMG_PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <h3
                  id={nameId}
                  className="font-serif text-2xl uppercase tracking-widest3"
                >
                  {cat.name}
                </h3>
                <p id={descId} className="mt-1 text-sm text-cream/80">
                  {cat.description}
                </p>
                <span className="mt-3 inline-block text-xs uppercase tracking-widest2 text-cream/90 transition-colors group-hover:text-gold">
                  Shop Now →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
