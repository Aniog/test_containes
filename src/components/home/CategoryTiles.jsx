import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages, StrkImage } from "@/components/ui/StrkImage"

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${cat.descId}] [${cat.titleId}]`}
                ratio="4x5"
                width={700}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-[0.2em] mb-2"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-cream/80 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
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
