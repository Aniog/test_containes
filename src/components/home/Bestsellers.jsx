import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { Button } from "@/components/ui/Button"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
          Most Loved
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light">Bestsellers</h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-14">
        <Button as={Link} to="/shop" variant="outline">
          View All Jewelry
        </Button>
      </div>
    </section>
  )
}
