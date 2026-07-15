import { useEffect, useRef, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Star, ShoppingBag, Heart, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

import { getProductById, getProductsByIds } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

import ProductCard from "@/components/product/ProductCard"
import Accordion from "@/components/product/Accordion"
import { useReveal } from "@/lib/useReveal"

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState(product?.variants?.[0]?.id || "gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  const galleryRef = useRef(null)
  const relatedRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    setActiveImg(0)
    setVariant(product?.variants?.[0]?.id || "gold")
    setQty(1)
  }, [id, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current)
  }, [id])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [id])

  useReveal(infoRef, [id])

  if (!product) {
    return (
      <section className="pt-40 pb-32 text-center">
        <p className="font-serif text-4xl">Piece not found.</p>
        <Link to="/shop" className="btn-outline mt-8">Back to Shop</Link>
      </section>
    )
  }

  const related = getProductsByIds(product.related || [])

  const handleAdd = () => {
    addItem(product.id, variant, qty)
  }

  return (
    <>
      <section className="bg-cream pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
        <div className="container-editorial">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] uppercase tracking-wider-3 text-mocha-400 mb-8"
          >
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <span className="mx-2 text-taupe-300">/</span>
            <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
            <span className="mx-2 text-taupe-300">/</span>
            <span className="text-espresso">{product.name}</span>
          </nav>

          <div ref={galleryRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                {/* Thumbnails — desktop left rail */}
                <div className="hidden lg:flex col-span-1 flex-col gap-3">
                  {product.gallery.map((imgId, i) => (
                    <button
                      key={imgId}
                      onClick={() => setActiveImg(i)}
                      className={cn(
                        "relative aspect-[4/5] bg-taupe-100 overflow-hidden border transition-colors",
                        activeImg === i ? "border-gold-500" : "border-transparent hover:border-taupe-300",
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img
                        data-strk-img-id={`thumb-${imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="120"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Main image */}
                <div className="col-span-12 lg:col-span-11">
                  <div className="relative aspect-[4/5] bg-taupe-100 overflow-hidden">
                    {product.gallery.map((imgId, i) => (
                      <img
                        key={imgId}
                        data-strk-img-id={imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="1100"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={i === 0 ? product.name : ""}
                        aria-hidden={i !== 0}
                        className={cn(
                          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
                          activeImg === i ? "opacity-100" : "opacity-0",
                        )}
                      />
                    ))}
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1.5 bg-cream/95 text-espresso text-[10px] uppercase tracking-wider-3 font-medium">
                        {product.badge}
                      </span>
                    )}

                    {/* Image nav (mobile/tablet) */}
                    <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 lg:hidden">
                      {product.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          aria-label={`Go to image ${i + 1}`}
                          className={cn(
                            "h-1 rounded-full transition-all duration-300",
                            activeImg === i ? "w-8 bg-cream" : "w-2 bg-cream/50",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div ref={infoRef} className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="reveal">
                <p className="eyebrow">Velmora · {product.collection}</p>
                <h1
                  id={product.titleId}
                  className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] mt-3 text-espresso leading-[1.1]"
                >
                  {product.name}
                </h1>

                {/* Price + rating */}
                <div className="mt-5 flex items-center gap-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-[24px] sm:text-[28px] text-espresso">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[15px] text-mocha-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-mocha-500">
                    <div className="flex items-center text-gold-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-[12px] text-mocha-400">
                      {product.rating} · {product.reviewCount} reviews
                    </span>
                  </div>
                </div>

                {/* Short description */}
                <p
                  id={product.descId}
                  className="mt-6 text-[15px] text-mocha-500 leading-relaxed font-light"
                >
                  {product.description}
                </p>

                {/* Variant */}
                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-wider-3 font-medium text-mocha-400 mb-3">
                    Finish — <span className="text-espresso">{product.variants.find(v => v.id === variant)?.label}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVariant(v.id)}
                        data-active={variant === v.id}
                        className="pill"
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-7">
                  <p className="text-[11px] uppercase tracking-wider-3 font-medium text-mocha-400 mb-3">
                    Quantity
                  </p>
                  <div className="inline-flex items-center border border-taupe-300">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-11 h-11 grid place-items-center text-espresso hover:text-gold-600 transition-colors"
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-[14px] font-medium">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="w-11 h-11 grid place-items-center text-espresso hover:text-gold-600 transition-colors"
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to cart */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button onClick={handleAdd} className="btn-primary flex-1">
                    <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                    Add to Cart
                  </button>
                  <button
                    aria-label="Save to wishlist"
                    className="btn px-5 py-4 border border-taupe-300 text-espresso hover:border-gold-500 hover:text-gold-600"
                  >
                    <Heart className="w-4 h-4" strokeWidth={1.4} />
                  </button>
                </div>

                {/* Trust micro-row */}
                <ul className="mt-7 grid grid-cols-3 gap-2 text-center text-[11px] uppercase tracking-wider-2 text-mocha-400">
                  <li className="flex flex-col items-center gap-1.5">
                    <Truck className="w-4 h-4 text-gold-500" strokeWidth={1.4} />
                    <span>Free Shipping</span>
                  </li>
                  <li className="flex flex-col items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-gold-500" strokeWidth={1.4} />
                    <span>30-Day Returns</span>
                  </li>
                  <li className="flex flex-col items-center gap-1.5">
                    <Shield className="w-4 h-4 text-gold-500" strokeWidth={1.4} />
                    <span>Lifetime Plating</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-16 sm:mt-20 max-w-3xl">
            <Accordion
              items={[
                { title: "Description",  content: product.description },
                { title: "Materials & Care", content: (
                  <div>
                    <p className="mb-4">{product.materials}</p>
                    <p>{product.care}</p>
                  </div>
                ) },
                { title: "Shipping & Returns", content: product.shipping },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section ref={relatedRef} className="bg-sand py-20 sm:py-24 border-t border-taupe-300/40">
          <div className="container-editorial">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-[32px] sm:text-[40px] text-espresso">
                You May Also Love
              </h2>
              <Link to="/shop" className="link-underline text-[12px] uppercase tracking-wider-3 font-medium">
                Shop All
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-x-7 gap-y-10 sm:gap-y-12">
              {related.map((p, i) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
