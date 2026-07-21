import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { bestsellers } from "@/data/products"
import { useReveal } from "@/hooks/useReveal"

export default function Bestsellers() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.05)

  return (
    <section className="bg-ivory-100 py-20 sm:py-28 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          ref={headerRef}
          className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <p className="eyebrow mb-3">Most Loved</p>
            <h2 className="display-lg">
              <span className="font-serif">Bestsellers</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-taupe-600 max-w-md font-light leading-relaxed">
              The pieces our community reaches for again and again — quiet
              icons, designed to live in.
            </p>
          </div>
          <Link to="/shop" className="btn-link self-start sm:self-auto">
            View all
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div
          ref={gridRef}
          className="reveal grid grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-14"
        >
          {bestsellers.map((product, idx) => (
            <div
              key={product.id}
              className={idx === 0 ? "col-span-2 lg:col-span-1" : ""}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
