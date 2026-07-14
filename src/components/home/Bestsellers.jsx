import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products.js"
import ProductCard from "@/components/product/ProductCard.jsx"

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-baseline justify-between gap-3 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Most Loved</span>
            <h2
              id="home-bestsellers-title"
              className="h-section mt-3 text-4xl text-espresso md:text-5xl"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="btn-ghost"
            id="home-bestsellers-cta"
          >
            Shop All
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
