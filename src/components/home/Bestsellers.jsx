import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function Bestsellers() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="container-editorial py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Most Loved</p>
        <h2 className="heading-serif mt-3 text-4xl md:text-5xl">Bestsellers</h2>
        <p className="mt-4 max-w-md font-sans text-sm text-ink-muted">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link to="/shop" className="btn-outline">
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
