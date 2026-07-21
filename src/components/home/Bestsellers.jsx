import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"

import { products } from "@/data/products"
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

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">Bestsellers</h2>
          <p className="mt-4 text-stone max-w-xl mx-auto">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink text-[11px] uppercase tracking-widest3 font-medium px-9 py-4 hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
