import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"
import { getBestSellers } from "@/data/products"

export default function BestSellers() {
  const products = getBestSellers()
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="bestsellers"
      className="bg-paper py-20 md:py-32"
    >
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="flex flex-col items-baseline justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p
              id="bestsellers-eyebrow"
              className="eyebrow"
            >
              The Edit
            </p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-5xl"
            >
              Best Sellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink transition-opacity duration-300 hover:opacity-70"
          >
            Shop All
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-16 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
