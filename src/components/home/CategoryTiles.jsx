import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { StrkBackground } from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.id)}`}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <StrkBackground
                bgId={cat.imgId}
                query={`[${cat.descId}] [${cat.titleId}]`}
                ratio="3x4"
                width={700}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center px-4">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl uppercase tracking-wider"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-2 text-[11px] uppercase tracking-widest2 text-cream/80 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  {cat.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
