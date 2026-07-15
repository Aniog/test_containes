import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"
import { PRODUCTS } from "@/data/products"

export default function Bestsellers() {
  return (
    <section className="bg-canvas py-20 md:py-28 lg:py-32">
      <div className="container-content">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Bestsellers</p>
            <h2 className="display-lg mt-3 max-w-md text-ink text-balance" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              Most loved, this season.
            </h2>
          </div>
          <Link to="/shop" className="link-underline inline-flex items-center gap-2">
            View all
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
