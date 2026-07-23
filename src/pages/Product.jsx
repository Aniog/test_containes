import { useMemo, useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { ChevronDown, Minus, Plus, Star } from "lucide-react"
import { productById, relatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import ProductGallery from "@/components/product/ProductGallery"
import ProductCard from "@/components/ui/ProductCard"

function Stars({ value }) {
  return (
    <div className="flex items-center gap-0.5 text-gold" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("w-3.5 h-3.5", i < Math.round(value) ? "fill-current" : "opacity-30")}
        />
      ))}
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  return (
    <details
      className="group border-t border-bone/15 py-5"
      open={defaultOpen}
    >
      <summary className="flex items-center justify-between cursor-pointer text-bone">
        <span className="text-[12px] tracking-widest2 uppercase font-medium">
          {title}
        </span>
        <ChevronDown className="w-4 h-4 chev transition-transform" />
      </summary>
      <div className="mt-4 text-[14px] leading-relaxed text-bone/75">
        {children}
      </div>
    </details>
  )
}

export default function Product() {
  const { id } = useParams()
  const product = productById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.variants[0]?.id)
  const [qty, setQty] = useState(1)
  const related = useMemo(() => relatedProducts(id, 4), [id])

  if (!product) return <Navigate to="/shop" replace />

  const onAdd = () => addItem(product.id, variant, qty)

  return (
    <div className="bg-ink text-bone pt-20 md:pt-24">
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-10">
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-widest2 uppercase text-bone/55">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-bone/80">{product.name}</li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-editorial px-6 md:px-10 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Gallery */}
        <div className="md:col-span-7">
          <ProductGallery product={product} />
        </div>

        {/* Details */}
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          {product.badge && (
            <span className="inline-block px-2.5 py-1 text-[10px] tracking-widest2 uppercase border border-bone/20 text-bone/80">
              {product.badge}
            </span>
          )}
          <h1
            id={`product-${product.id}-name`}
            className="mt-4 font-serif text-[32px] md:text-[44px] leading-[1.1] text-bone"
          >
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-bone/75">
            <Stars value={product.rating} />
            <span className="text-[12px] text-bone/60">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>
          <p
            id={`product-${product.id}-price`}
            className="mt-5 font-serif text-[24px] text-bone"
          >
            {formatPrice(product.price)}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-bone/75">
            {product.short}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[12px] tracking-widest2 uppercase text-bone/70 mb-3">
              Finish — <span className="text-bone">{product.variants.find(v => v.id === variant)?.label}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => {
                const isActive = v.id === variant
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariant(v.id)}
                    className={cn(
                      "inline-flex items-center gap-2 h-11 pl-2 pr-4 border text-[12px] tracking-widest2 uppercase transition-colors",
                      isActive
                        ? "border-gold text-bone bg-ink-soft"
                        : "border-bone/25 text-bone/75 hover:border-bone/60"
                    )}
                    aria-pressed={isActive}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-bone/20"
                      style={{ background: v.swatch }}
                    />
                    {v.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[12px] tracking-widest2 uppercase text-bone/70 mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-bone/25">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center hover:text-gold"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-[14px] tabular-nums">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="w-11 h-11 flex items-center justify-center hover:text-gold"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={onAdd}
            className="mt-8 w-full h-14 bg-bone text-ink text-[12px] tracking-widest2 uppercase hover:bg-gold transition-colors"
          >
            Add to Bag — {formatPrice(product.price * qty)}
          </button>
          <button
            type="button"
            className="mt-3 w-full h-14 border border-bone/30 text-bone text-[12px] tracking-widest2 uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Add to Wishlist
          </button>

          {/* Trust microcopy */}
          <ul className="mt-8 grid grid-cols-2 gap-3 text-[12px] text-bone/65">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Free worldwide shipping
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 30-day returns
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Hypoallergenic
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Gift-ready packaging
            </li>
          </ul>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.long}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-ink-soft border-t border-bone/10">
        <div className="mx-auto max-w-editorial px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-[28px] md:text-[36px] text-bone">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="text-[12px] tracking-widest2 uppercase text-bone/75 hover:text-gold"
            >
              View all
            </Link>
          </div>
          <div className="-mx-6 px-6 md:mx-0 md:px-0 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} variant="default" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
