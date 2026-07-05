import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { getBestsellers } from "@/data/products"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  const products = getBestsellers(5)
  const [ref, inView] = useReveal({ threshold: 0.05 })

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-bone" aria-labelledby="bestsellers-heading">
      <div className="container-editorial">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            <p className="eyebrow-gold mb-3">Most Loved</p>
            <h2 id="bestsellers-heading" className="font-serif text-4xl sm:text-5xl text-ink font-light tracking-tight">
              Our Bestsellers
            </h2>
            <p className="mt-3 text-muted max-w-md text-sm sm:text-base font-sans">
              Quietly the most-worn pieces in our collection. The ones our customers come back for.
            </p>
          </div>
          <Link
            to="/shop"
            className={cn(
              "inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-eyebrow text-ink hover:text-gold-deep transition-colors font-sans",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            View All <ArrowRight size={14} strokeWidth={1.4} />
          </Link>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12 sm:gap-x-6 lg:gap-x-7">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={cn(
                "transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
              style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
            >
              <ProductCard product={p} priority={i < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
