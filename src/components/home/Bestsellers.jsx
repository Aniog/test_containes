import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.slice(0, 5)

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
          Bestsellers
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
          The pieces our community reaches for again and again — quietly
          luxurious, made to be worn every day.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:text-gold"
        >
          View All Products
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
