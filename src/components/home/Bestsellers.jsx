import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function Bestsellers() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-12 reveal">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Most Loved</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink-800">Bestsellers</h2>
        <p className="mt-3 text-sm text-ink-500 max-w-md mx-auto">
          The pieces our community reaches for, again and again.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 reveal">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-14 reveal">
        <Link
          to="/shop"
          className="inline-block text-xs uppercase tracking-widest2 border border-ink-300 text-ink-800 px-9 py-4 hover:bg-ink-800 hover:text-cream transition-colors duration-300"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
