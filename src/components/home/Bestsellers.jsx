import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/strk-images"
import Button from "@/components/ui/Button"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
        <p className="mt-4 max-w-md text-sm text-stone">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button as={Link} to="/shop" variant="outline">
          View All Jewelry
        </Button>
      </div>
    </section>
  )
}
