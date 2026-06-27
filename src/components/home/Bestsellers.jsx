import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"
import Reveal from "@/components/ui/Reveal"
import { PRODUCTS } from "@/data/products"

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  // Best sellers: badge includes "Bestseller" first, then top-rated items
  const bestsellers = [
    ...PRODUCTS.filter((p) => p.badge === "Bestseller"),
    ...PRODUCTS.filter((p) => p.badge !== "Bestseller"),
  ].slice(0, 5)

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="text-center">
          <span className="eyebrow">Most Loved</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-espresso tracking-tight">
            Our Bestsellers
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted max-w-md mx-auto">
            The pieces our community returns to — and gifts — most often.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
            {bestsellers.map((product, idx) => (
              <Reveal key={product.id} delay={idx * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}