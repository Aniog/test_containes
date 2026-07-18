import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Bestsellers() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-3xl text-espresso md:text-4xl">
          Bestsellers
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
          The pieces our community reaches for again and again — warm gold,
          made to be worn every day.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button as={Link} to="/shop" variant="outline" size="md">
          View All Jewelry
        </Button>
      </div>
    </section>
  )
}
