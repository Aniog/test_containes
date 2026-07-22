import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import ProductCard from "@/components/shop/ProductCard"

export default function Bestsellers() {
  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-serif text-4xl md:text-5xl text-espresso-800"
            >
              The Best Sellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-underline self-start md:self-auto inline-flex items-center gap-2"
          >
            View All
            <ArrowRight className="h-3 w-3" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
