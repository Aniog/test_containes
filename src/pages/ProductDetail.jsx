import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { formatPrice, cn } from "@/lib/utils"
import ProductGallery from "@/components/product/ProductGallery"
import ProductCard from "@/components/product/ProductCard"
import Accordion from "@/components/product/Accordion"
import StarRating from "@/components/ui/StarRating"
import Button from "@/components/ui/Button"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  const [variant, setVariant] = useState(product?.variants[0] || "Gold")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Button as={Link} to="/shop" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const titleId = product.images[0].titleId
  const descId = product.images[0].descId
  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  return (
    <div ref={ref}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-32">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-14">
        {/* Gallery */}
        <ProductGallery
          images={product.images}
          titleId={titleId}
          descId={descId}
          name={product.name}
        />

        {/* Info */}
        <div className="md:py-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">
            {product.category}
          </p>
          <h1
            id={titleId}
            className="mt-2 font-serif text-4xl uppercase tracking-[0.1em] text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} showValue />
            <span className="text-xs text-stone">
              {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-stone">
            {product.shortDesc}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-ink">
              Tone: <span className="text-stone">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "min-w-24 border px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors",
                    variant === v
                      ? "border-gold bg-gold text-cream"
                      : "border-sand text-ink hover:border-gold"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-8">
            <Button onClick={handleAdd} className="w-full">
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free worldwide shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2">{product.materials}</p>
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">
                Free worldwide shipping on all orders. Orders are dispatched
                within 1–2 business days and arrive in signature Velmora
                packaging.
              </p>
              <p>
                Enjoy 30-day returns on unworn pieces in original packaging for
                a full refund.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
