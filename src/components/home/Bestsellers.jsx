import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"
import { useReveal } from "@/hooks/useReveal"

export default function Bestsellers() {
  const [ref, visible] = useReveal()
  // First 5 — the seed products
  const items = PRODUCTS.slice(0, 5)

  return (
    <section
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} bg-ink text-bone`}
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p
              id="bestsellers-eyebrow"
              className="text-[11px] tracking-widest3 uppercase text-bone/60"
            >
              The Edit
            </p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-serif text-[36px] md:text-[48px] leading-[1.05] text-bone"
            >
              Bestsellers
            </h2>
            <p
              id="bestsellers-sub"
              className="mt-3 text-[14px] md:text-[15px] text-bone/70 max-w-md"
            >
              The five pieces our community reaches for again and again.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-bone/85 hover:text-gold transition-colors self-start md:self-end"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile: horizontal scroll. Desktop: 5 across grid. */}
        <div className="md:grid md:grid-cols-5 md:gap-6 -mx-6 px-6 md:mx-0 md:px-0 flex md:flex-none gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {items.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 w-[68%] sm:w-[42%] md:w-auto md:flex-shrink snap-start"
            >
              <ProductCard product={p} variant="default" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
