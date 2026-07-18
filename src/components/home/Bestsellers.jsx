import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { ProductCard } from "@/components/ui/ProductCard"
import { ArrowRight } from "lucide-react"

export function Bestsellers() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-primary">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
