import { useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { productBySlug } from "@/data/products"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductInfo } from "@/components/product/ProductInfo"
import { RelatedProducts } from "@/components/product/RelatedProducts"

export default function Product() {
  const { slug } = useParams()
  const product = productBySlug(slug)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!product) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product])

  if (!product) {
    return (
      <div className="container-x py-32 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-serif text-4xl text-ink-500">
          We can't find that piece
        </h1>
        <Link to="/shop" className="btn-outline mt-8 inline-flex">
          Browse the Collection
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="bg-ivory-100 pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-x">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 py-5 text-[11px] uppercase tracking-wider2 text-ink-200"
        >
          <Link to="/" className="hover:text-ink-500">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink-500">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink-500">{product.name}</span>
        </nav>
      </div>

      <div className="container-x grid gap-10 pb-16 md:gap-14 md:pb-20 lg:grid-cols-2 lg:gap-20">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

      <RelatedProducts current={product} ids={product.related} />
    </div>
  )
}
