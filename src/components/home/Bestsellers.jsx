import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"

export default function Bestsellers() {
  const containerRef = useStrkImages([])
  const revealRef = useReveal([])

  return (
    <section
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="mx-auto max-w-8xl px-5 py-20 md:px-10 md:py-28"
    >
      <div className="reveal mb-12 text-center">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-600">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
          Bestsellers
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-espresso-500">
          The pieces our community returns to, again and again.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <div key={product.id} className="reveal">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="reveal mt-14 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 border border-espresso-800 px-9 py-3.5 font-sans text-xs uppercase tracking-widest text-espresso-800 transition-colors hover:bg-espresso-800 hover:text-cream"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
