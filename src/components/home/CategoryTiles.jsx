import { Link } from "react-router-dom"
import { useImageLoader } from "@/hooks/useImageLoader"

const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings collection flatlay dark background luxury" },
  { id: "necklaces", label: "Necklaces", query: "gold necklaces layered editorial jewelry dark background" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings closeup dark background luxury" },
]

export function CategoryTiles() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Shop by Category</p>
          <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">Find Your Signature</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-linen"
            >
              <div
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-label-${category.id}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${category.id}`}
                  className="border border-ivory/60 bg-ivory/90 px-6 py-3 font-serif text-lg uppercase tracking-[0.2em] text-charcoal backdrop-blur-sm transition-all group-hover:bg-ivory"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
