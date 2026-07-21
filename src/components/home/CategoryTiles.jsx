import { Link } from "react-router-dom"
import { StrkImage } from "@/components/ui/StrkImage"
import { categories } from "@/data/products"
import { useImageLoader } from "@/hooks/useImageLoader"

export default function CategoryTiles() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-stone"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${cat.descId}] [${cat.titleId}]`}
                ratio="4x5"
                width={700}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-wide2"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="sr-only"
                >
                  {cat.description}
                </p>
                <span className="mt-3 text-cream/90 text-xs uppercase tracking-widest2 border-b border-cream/60 pb-1 group-hover:border-gold group-hover:text-gold-soft transition-colors duration-300">
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
