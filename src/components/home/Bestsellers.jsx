import { Link } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"
import { getBestsellers } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Bestsellers() {
  const products = getBestsellers()
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block text-[11px] uppercase tracking-[0.3em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
