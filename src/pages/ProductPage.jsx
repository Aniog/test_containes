import { useEffect, useMemo, useRef, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import { Minus, Plus } from "lucide-react"
import ProductCard from "@/components/shared/ProductCard"
import QuantitySelector from "@/components/shared/QuantitySelector"
import RatingStars from "@/components/shared/RatingStars"
import StockImage from "@/components/shared/StockImage"
import { getProductBySlug, getRelatedProducts } from "@/data/store"
import strkImgConfig from "@/strk-img-config.json"

const accordionSections = [
  { key: "description", title: "Description" },
  { key: "materialsCare", title: "Materials & Care" },
  { key: "shippingReturns", title: "Shipping & Returns" },
]

const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const pageRef = useRef(null)
  const [activeImage, setActiveImage] = useState("primary")
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || "Gold Tone")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [
    {
      key: "primary",
      label: "Front",
      query: `[product-${product.id}-image-primary] [product-${product.id}-type] [product-${product.id}-title]`,
    },
    {
      key: "editorial",
      label: "Editorial",
      query: `[product-${product.id}-image-editorial] [product-${product.id}-type] [product-${product.id}-title]`,
    },
    {
      key: "detail",
      label: "Detail",
      query: `[product-${product.id}-image-detail] [product-${product.id}-materials] [product-${product.id}-title]`,
    },
  ]

  useEffect(() => {
    if (!product) return
    setActiveImage("primary")
    setSelectedTone(product.tones[0])
    setQuantity(1)
  }, [product?.id])

  useEffect(() => {
    if (!product || !pageRef.current) return

    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === "function") cleanup()
    }
  }, [product?.id, activeImage])

  return (
    <section ref={pageRef} className="bg-ivory pb-20 pt-8 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <nav className="mb-8 text-xs uppercase tracking-[0.26em] text-velvet/55">
          <Link to="/shop" className="transition hover:text-rosewood">
            Shop
          </Link>{" "}
          / <span className="text-velvet/75">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 lg:grid-cols-[100px_minmax(0,1fr)]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {gallery.map((item) => {
                const isActive = activeImage === item.key

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveImage(item.key)}
                    className={`overflow-hidden rounded-3xl border bg-champagne/30 ${
                      isActive ? "border-velvet shadow-soft" : "border-velvet/10"
                    }`}
                  >
                    <StockImage
                      imageId={`velmora-detail-v2-${product.id}-${item.key}-thumb`}
                      query={item.query}
                      ratio="1x1"
                      width="240"
                      alt={`${product.name} ${item.label}`}
                      className="h-24 w-24 object-cover"
                    />
                  </button>
                )
              })}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] bg-porcelain shadow-card lg:order-2">
              <StockImage
                imageId={`velmora-detail-v2-${product.id}-${activeImage}-main`}
                query={gallery.find((item) => item.key === activeImage)?.query || gallery[0].query}
                ratio="3x4"
                width="1200"
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-velvet/10 bg-porcelain p-6 text-velvet shadow-soft sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-gold">{product.category}</p>
            <h1
              id={`product-${product.id}-title`}
              className="mt-5 font-serif text-4xl uppercase tracking-luxe text-velvet sm:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-medium text-velvet">${product.price}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p
              id={`product-${product.id}-description`}
              className="mt-6 text-base leading-7 text-velvet/74"
            >
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-gold">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => {
                  const active = tone === selectedTone

                  return (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-sm transition ${
                        active
                          ? "border-velvet bg-velvet text-ivory"
                          : "border-velvet/12 bg-ivory text-velvet hover:border-gold hover:text-gold"
                      }`}
                    >
                      {tone}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold">Quantity</p>
                <div className="mt-4">
                  <QuantitySelector
                    quantity={quantity}
                    onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                    onIncrease={() => setQuantity((current) => current + 1)}
                  />
                </div>
              </div>
              <div className="rounded-full border border-velvet/10 bg-ivory px-4 py-3 text-sm text-velvet/70">
                Premium gift packaging available at checkout
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, { tone: selectedTone, quantity })}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velvet transition hover:bg-rosewood hover:text-ivory"
            >
              Add to Cart
            </button>

            <div className="mt-10 space-y-4 border-t border-velvet/10 pt-8">
              <p id={`product-${product.id}-type`} className="sr-only">
                {product.type}
              </p>
              <p id={`product-${product.id}-materials`} className="sr-only">
                {product.material}
              </p>
              <p id={`product-${product.id}-image-primary`} className="sr-only">
                {product.imageHints.primary}
              </p>
              <p id={`product-${product.id}-image-editorial`} className="sr-only">
                {product.imageHints.editorial}
              </p>
              <p id={`product-${product.id}-image-detail`} className="sr-only">
                {product.imageHints.detail}
              </p>
              {accordionSections.map((section) => (
                <details
                  key={section.key}
                  className="group rounded-3xl border border-velvet/10 bg-ivory px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium uppercase tracking-[0.24em] text-velvet">
                    {section.title}
                    <span className="rounded-full border border-velvet/10 p-1 text-velvet/60 transition group-open:rotate-45">
                      <Plus className="h-4 w-4 group-open:hidden" />
                      <Minus className="hidden h-4 w-4 group-open:block" />
                    </span>
                  </summary>
                  <p className="pt-4 text-sm leading-7 text-velvet/72">{product[section.key]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">You may also like</p>
              <h2 className="mt-4 font-serif text-4xl text-velvet">Pair it with another Velmora favorite</h2>
            </div>
            <Link
              to="/shop"
              className="text-sm font-medium uppercase tracking-[0.22em] text-velvet transition hover:text-rosewood"
            >
              Back to shop
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
