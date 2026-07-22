import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Bestsellers
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-stone">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
