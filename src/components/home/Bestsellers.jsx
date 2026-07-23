import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import { ProductCard } from "@/components/layout/ProductCard"

export function Bestsellers() {
  const containerRef = useRef(null)
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-charcoal md:text-4xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
