import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { strkBgUrl } from "@/lib/strk-images"
import { useStrkImages } from "@/hooks/useStrkImages"
import Reveal from "@/components/ui/Reveal"

export default function CategoryTiles() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-12 text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
          Shop by Category
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {categories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 100}>
            <Link to={`/shop?category=${cat.name}`} className="group block">
              <div className="img-zoom relative aspect-[4/5] overflow-hidden bg-cream-deep md:aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-strk-bg-id={cat.bgId}
                  data-strk-bg={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                  style={strkBgUrl(cat.bgId) ? { backgroundImage: `url(${strkBgUrl(cat.bgId)})` } : undefined}
                />
                <div className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-2xl uppercase tracking-widest2 text-cream"
                  >
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="sr-only">
                    {cat.tagline}
                  </p>
                  <span className="mt-2 inline-block text-[11px] font-medium uppercase tracking-widest2 text-cream/90">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
