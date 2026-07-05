import { Link } from "react-router-dom"
import StrkImage from "@/components/ui/StrkImage"
import { categories } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-sand"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${cat.titleId}] [${cat.descId}]`}
                ratio="3x4"
                width={700}
                alt={cat.name}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl uppercase tracking-[0.14em]"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-xs uppercase tracking-[0.2em] text-champagne mt-1.5 opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
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
