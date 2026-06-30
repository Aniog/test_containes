import React, { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Star, Minus, Plus, Check, ChevronRight } from "lucide-react"
import Gallery from "@/components/product/Gallery"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/ui/ProductCard"
import { useCart } from "@/context/CartContext"
import { products, getProductBySlug } from "@/data/products"
import { formatPrice } from "@/lib/utils"

function Stars({ count, size = "h-3.5 w-3.5" }) {
  return (
    <div className="flex items-center gap-1 text-champagne-deep">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={size} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (product?.name) {
      document.title = `${product.name} — Velmora Fine Jewelry`
    }
    return () => {
      document.title = "Velmora Fine Jewelry"
    }
  }, [product])

  const { addToCart, openCart } = useCart()
  const [tone, setTone] = useState(product?.tone || "gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <section className="section-pad bg-cream min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="kicker">Not found</p>
          <h1 className="mt-4 headline-md text-espresso">
            This piece is no longer in our atelier.
          </h1>
          <Link
            to="/shop"
            className="mt-8 inline-flex underline-link"
          >
            Back to the collection
          </Link>
        </div>
      </section>
    )
  }

  const handleAdd = () => {
    addToCart({ slug: product.slug, tone, quantity })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1500)
    openCart()
  }

  const related = [
    ...products.filter(
      (p) => p.id !== product.id && p.category === product.category
    ),
    ...products.filter(
      (p) => p.id !== product.id && p.category !== product.category
    ),
  ].slice(0, 4)

  const accordions = [
    {
      title: "Description",
      content: (
        <>
          <p>{product.description}</p>
          {product.tagline && (
            <p className="italic text-mink">"{product.tagline}"</p>
          )}
        </>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="space-y-2">
          <li>· 18K gold plating over a hypoallergenic brass core</li>
          <li>· Sterling silver post (nickel-free)</li>
          <li>· Hand-set crystals / hand-finished detailing</li>
          <li>· Water-resistant; remove before swimming or showering</li>
          <li>· Store dry in the pouch provided</li>
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <>
          <p>
            Complimentary worldwide shipping on all orders. Most pieces ship within 2 business days from our studio.
          </p>
          <p>
            30-day returns — unworn, in their original packaging. We pay the return label.
          </p>
        </>
      ),
    },
  ]

  return (
    <section className="bg-cream">
      {/* Breadcrumb */}
      <div className="border-b border-taupe">
        <div className="mx-auto max-w-page px-6 md:px-12 py-4">
          <nav
            aria-label="Breadcrumb"
            className="font-sans text-[11px] tracking-[0.2em] uppercase text-mink flex items-center gap-2"
          >
            <Link to="/" className="hover:text-espresso transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-espresso transition-colors">
              Shop
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <span className="text-espresso">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-page px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <Gallery product={product} />
          </div>

          {/* Buy box */}
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            {product.badge && (
              <p className="kicker text-champagne-deep mb-3">
                {product.badge}
              </p>
            )}
            <h1 className="font-sans text-[14px] md:text-[15px] tracking-[0.32em] uppercase text-espresso font-medium">
              {product.name}
            </h1>
            <p className="mt-3 font-serif text-[20px] md:text-[22px] text-espresso">
              {formatPrice(product.price)}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Stars count={product.rating || 5} />
              <span className="font-sans text-[12px] tracking-[0.18em] uppercase text-mink">
                {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-[17px] leading-relaxed text-mink">
              {product.tagline}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-espresso mb-3">
                Finish: <span className="text-mink">{tone === "gold" ? "18K Gold" : "Sterling Silver"}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {(product.toneOptions || []).map((opt) => {
                  const isActive = tone === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setTone(opt.value)}
                      aria-pressed={isActive}
                      className={
                        "px-5 py-2.5 font-sans text-[11px] tracking-[0.24em] uppercase border transition-colors " +
                        (isActive
                          ? "border-espresso bg-espresso text-bone"
                          : "border-taupe text-espresso hover:border-espresso")
                      }
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-espresso mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-taupe">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-12 w-12 flex items-center justify-center text-espresso hover:bg-cream-deep transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <span className="h-12 w-12 flex items-center justify-center font-serif text-[17px] text-espresso border-x border-taupe">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="h-12 w-12 flex items-center justify-center text-espresso hover:bg-cream-deep transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full btn-primary"
            >
              {added ? (
                <>
                  <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Added to bag
                </>
              ) : (
                <>Add to Bag — {formatPrice(product.price * quantity)}</>
              )}
            </button>

            <ul className="mt-6 space-y-2 font-sans text-[12px] tracking-[0.06em] text-mink">
              <li>· Free worldwide shipping</li>
              <li>· 30-day easy returns</li>
              <li>· Presented in our signature gift box</li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} defaultOpen={0} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="text-center mb-10 md:mb-14">
              <p className="kicker">You may also love</p>
              <h2 className="mt-3 headline-md text-espresso">
                Pair it with
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
