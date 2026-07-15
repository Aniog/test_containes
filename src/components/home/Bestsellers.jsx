import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="font-sans text-xs uppercase tracking-widest2 text-gold">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Bestsellers
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm text-stone">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink px-10 py-4 font-sans text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
