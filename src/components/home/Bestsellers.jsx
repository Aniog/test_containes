import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { BESTSELLER_IDS, getProduct } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { Reveal } from "@/components/Reveal"

export function Bestsellers() {
  const products = BESTSELLER_IDS.map(getProduct)

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
              Most Loved
            </p>
            <h2 id="bestsellers-heading" className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
              The Bestsellers
            </h2>
            <p id="bestsellers-sub" className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              The pieces our community reaches for again and again — everyday gold, made extraordinary.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden shrink-0 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:text-bronze md:flex"
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 lg:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 70} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink"
          >
            View All Jewelry
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
