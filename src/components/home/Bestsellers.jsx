import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function Bestsellers() {
  const containerRef = useRef(null)
  const bestsellers = products.filter((p) =>
    ["vivid-aura-jewels", "majestic-flora-nectar", "golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"].includes(p.id),
  )

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="container-x py-20 md:py-28"
      aria-labelledby="homepage-bestsellers-title"
    >
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="label-2 text-mist mb-3">Bestsellers</p>
          <h2
            id="homepage-bestsellers-title"
            className="font-serif text-3xl md:text-5xl text-ink leading-tight"
          >
            Most loved, right now
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden md:inline-flex btn-ghost"
        >
          View all
          <ArrowRight className="ghost-arrow w-4 h-4 ml-1" strokeWidth={1.25} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {bestsellers.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {/* 5th card: editorial CTA tile */}
        <Link
          to="/shop"
          className="hidden md:flex flex-col justify-end aspect-[4/5] bg-ink text-cream p-8 group"
        >
          <p className="label-2 text-cream/60 mb-3">The Edit</p>
          <p className="font-serif text-2xl md:text-3xl leading-tight mb-6">
            Five pieces, ten ways to wear them.
          </p>
          <span className="inline-flex items-center gap-2 label text-cream group-hover:gap-3 transition-all">
            Read the story
            <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
          </span>
        </Link>
      </div>

      <div className="md:hidden mt-10 text-center">
        <Link to="/shop" className="btn-outline">
          View all
        </Link>
      </div>
    </section>
  )
}
