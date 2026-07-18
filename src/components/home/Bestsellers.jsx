import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Bestsellers() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  const bestsellers = products.slice(0, 5)

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            Bestsellers
          </h2>
          <p className="mt-4 max-w-md text-sm text-stone">
            The pieces our community reaches for again and again — each one
            hand-finished and made to last.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
