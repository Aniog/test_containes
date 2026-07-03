import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "@/components/home/ProductCard"

export default function RelatedProducts({ products }) {
  const trackRef = useRef(null)

  function scrollBy(delta) {
    trackRef.current?.scrollBy({ left: delta, behavior: "smooth" })
  }

  if (!products || products.length === 0) return null

  return (
    <section className="py-20 md:py-32 border-t border-line">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow" id="related-eyebrow">
              You May Also Like
            </p>
            <h2
              id="related-title"
              className="display text-3xl md:text-4xl mt-3"
            >
              More to treasure
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-360)}
              className="w-11 h-11 border border-line-strong text-ink-primary hover:border-accent hover:text-accent transition-colors duration-300 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(360)}
              className="w-11 h-11 border border-line-strong text-ink-primary hover:border-accent hover:text-accent transition-colors duration-300 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="md:hidden -mx-6">
          <div
            ref={trackRef}
            className="flex gap-4 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="flex-shrink-0 w-[68vw] sm:w-[44vw] snap-start"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
