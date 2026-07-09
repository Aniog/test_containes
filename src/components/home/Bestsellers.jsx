import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { ProductCard } from "@/components/shop/ProductCard"
import { Button } from "@/components/ui/button"

export function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section className="bg-velmora-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">Curated Favorites</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-velmora-charcoal sm:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button variant="outline" asChild className="px-8">
            <Link to="/shop">Shop All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
