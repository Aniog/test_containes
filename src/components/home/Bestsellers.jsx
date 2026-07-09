import { Link } from "react-router-dom"
import { PRODUCTS } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"
import ProductCard from "@/components/product/ProductCard"
import Button from "@/components/ui/Button"

export default function Bestsellers() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-taupe">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Bestsellers
        </h2>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button as={Link} to="/shop" variant="outline">
          View All Jewelry
        </Button>
      </div>
    </section>
  )
}
