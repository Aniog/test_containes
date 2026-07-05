import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const ref = useStrkImages([id])
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { imgId: `${product.imgId}-g1`, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: `${product.imgId}-g2`, query: `[${product.descId}] [${product.titleId}] worn model` },
    { imgId: `${product.imgId}-g3`, query: `[${product.descId}] [${product.titleId}] detail close up` },
    { imgId: `${product.imgId}-g4`, query: `[${product.descId}] [${product.titleId}] styled` },
  ]

  const accordions = [
    {
      title: "Description",
      content: (
        <>
          <p>{product.description}</p>
          <p>
            Each piece is finished by hand in our studio and presented in a
            signature Velmora pouch — ready to gift, or to keep.
          </p>
        </>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <>
          <p>
            <strong className="text-ink">Materials:</strong> 18K gold plating
            over a hypoallergenic brass base. Lead and nickel free.
          </p>
          <p>
            <strong className="text-ink">Care:</strong> Avoid contact with
            water, perfume, and cosmetics. Store in the provided pouch away
            from direct sunlight. Gently wipe with a soft cloth to restore
            shine.
          </p>
        </>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <>
          <p>
            <strong className="text-ink">Shipping:</strong> Free worldwide
            shipping on all orders. Dispatched within 1–2 business days.
          </p>
          <p>
            <strong className="text-ink">Returns:</strong> Enjoy 30 days to
            return unworn pieces for a full refund. Gift sets must be returned
            complete.
          </p>
        </>
      ),
    },
  ]

  const related = getRelatedProducts(product.id, 4)

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-content px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight width={12} />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight width={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-content px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:max-h-[640px] md:overflow-y-auto">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "shrink-0 w-20 md:w-24 aspect-[4/5] overflow-hidden bg-sand border transition-colors",
                    activeImg === i ? "border-gold" : "border-line hover:border-gold/50"
                  )}
                >
                  <StrkImage
                    imgId={`${g.imgId}-thumb`}
                    query={g.query}
                    ratio="4x5"
                    width={200}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <StrkImage
                imgId={`${gallery[activeImg].imgId}-main`}
                query={gallery[activeImg].query}
                ratio="4x5"
                width={900}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-sand text-ink text-[10px] uppercase tracking-widest2 px-2.5 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-wider leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.tagline}
            </p>
            <p className="mt-2 text-muted">{product.tagline}</p>

            <div className="flex items-center gap-3 mt-4">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-muted">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl">{formatPrice(product.price)}</p>

            <p className="mt-5 text-sm text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-muted mb-3">
                Tone — <span className="text-ink">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] uppercase tracking-widest2 border transition-colors",
                      tone === t
                        ? "border-gold bg-gold/10 text-ink"
                        : "border-line text-muted hover:border-gold/50 hover:text-ink"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-3 py-3.5 hover:bg-sand transition-colors"
                >
                  <Minus width={14} />
                </button>
                <span className="px-4 text-sm tabular-nums w-10 text-center">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-3 py-3.5 hover:bg-sand transition-colors"
                >
                  <Plus width={14} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, { tone, quantity: qty })}
                className="flex-1 bg-gold text-cream uppercase tracking-widest2 text-[11px] py-4 hover:bg-gold-deep transition-colors"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <p className="mt-4 text-xs text-muted">
              Free worldwide shipping · 30-day returns · Hypoallergenic
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <Accordion items={accordions} />
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
