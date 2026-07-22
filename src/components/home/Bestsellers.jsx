import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border-b border-ink pb-1 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-gold"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
