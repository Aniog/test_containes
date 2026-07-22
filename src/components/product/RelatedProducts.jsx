import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getProductsByIds } from "@/data/products"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"
import { formatPrice } from "@/lib/utils"
import { Link } from "react-router-dom"

export default function RelatedProducts({ ids }) {
  const products = getProductsByIds(ids)
  const scrollerRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  if (!products.length) return null

  return (
    <section ref={makeStrkImageLoaderRef()} className="bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2
              id="related-title"
              className="mt-2 font-serif text-3xl md:text-4xl text-espresso-800"
            >
              Complete the set
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso-800/20 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso-800/20 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50 transition-colors"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        >
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="flex-shrink-0 w-[55vw] sm:w-[220px] md:w-[260px] snap-start group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                <img
                  data-strk-img-id={p.imgId}
                  data-strk-img={p.imageQuery}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-4">
                <h3 className="product-name text-[12px] text-espresso-800">{p.name}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
