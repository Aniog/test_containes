import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCTS, BESTSELLER_IDS } from "@/data/products"
import ProductCard from "@/components/home/ProductCard"

export default function Bestsellers() {
  const items = BESTSELLER_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id),
  ).filter(Boolean)

  return (
    <section className="py-20 md:py-32">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow" id="bestsellers-eyebrow">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="display text-3xl md:text-5xl mt-3"
            >
              Our bestsellers
            </h2>
            <p
              id="bestsellers-subtitle"
              className="mt-3 text-ink-secondary max-w-md text-sm md:text-base"
            >
              The pieces our community keeps coming back to — the perfect
              starting point.
            </p>
          </div>
          <Link
            to="/shop"
            className="link-underline text-[12px] uppercase tracking-name font-medium text-ink-primary self-start md:self-end"
          >
            View all jewelry
            <ArrowRight className="inline-block ml-2 h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        {/* On mobile: horizontal scroll. On lg+: 5-col grid showing all 5 */}
        <div className="lg:hidden -mx-6 md:mx-0 md:overflow-visible">
          <div className="flex gap-4 md:gap-6 px-6 md:px-0 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {items.map((p, i) => (
              <div
                key={p.id}
                className="flex-shrink-0 w-[68vw] sm:w-[44vw] md:w-[31vw] snap-start"
              >
                <ProductCard product={p} eager={i === 0} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-6">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
