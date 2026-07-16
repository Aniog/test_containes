import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"

export function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Bestsellers
        </h2>
        <div className="mt-5 h-px w-16 bg-gold" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-[0.2em] text-ink underline-offset-8 transition-colors hover:text-gold hover:underline"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
