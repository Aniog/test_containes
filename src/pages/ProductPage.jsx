import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronLeft, Heart, Minus, Plus, Star, Truck } from "lucide-react"
import { getProductById, getRelatedProducts, TONES } from "@/data/products"
import { useCart } from "@/hooks/useCart"
import { cn, formatPrice } from "@/lib/utils"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem, openCart } = useCart()
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.tone || "gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useScrollReveal([productId])

  if (!product) {
    return (
      <main className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="container-velmora text-center">
          <p className="font-serif text-3xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="text-link">Back to shop</Link>
        </div>
      </main>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = product.gallery?.length ? product.gallery : []
  const activeImage = gallery[selectedImageIdx] || gallery[0]

  const handleAdd = () => {
    addItem(product, { tone: selectedTone, quantity })
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 1800)
  }

  const accordionItems = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Materials & Care",
      content: [
        ...product.details.map((d) => `· ${d}`),
        "",
        "Care:",
        ...product.care.map((c) => `· ${c}`),
      ],
    },
    {
      title: "Shipping & Returns",
      content: product.shipping,
    },
  ]

  return (
    <main className="bg-cream pt-24 md:pt-28 pb-20">
      {/* Breadcrumb */}
      <div className="container-velmora mb-6 md:mb-8">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-light" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span aria-hidden="true">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-gold transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink truncate">{product.name}</span>
        </nav>
      </div>

      <div className="container-velmora">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Thumbnails (desktop) */}
              <div className="hidden md:flex col-span-2 flex-col gap-3">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className={cn(
                      "aspect-square bg-ink overflow-hidden border transition-all",
                      selectedImageIdx === idx
                        ? "border-gold"
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="col-span-12 md:col-span-10">
                <div className="relative aspect-[4/5] bg-ink overflow-hidden">
                  {activeImage && (
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-cream/95 text-ink text-[10px] uppercase tracking-[0.2em]">
                      {product.badge}
                    </span>
                  )}
                </div>
                {/* Mobile thumbnails */}
                <div className="md:hidden flex gap-2 mt-3">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIdx(idx)}
                      aria-label={`View image ${idx + 1}`}
                      className={cn(
                        "w-16 aspect-square bg-ink overflow-hidden border",
                        selectedImageIdx === idx ? "border-gold" : "border-transparent opacity-60"
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Buy box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight mb-3">
              {product.name}
            </h1>
            <p className="text-base md:text-lg text-muted-light font-light italic font-serif mb-5">
              {product.tagline}
            </p>

            {/* Rating + price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-serif text-2xl md:text-3xl text-ink">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5",
                        i < Math.round(product.rating) ? "fill-gold text-gold" : "text-ink/20"
                      )}
                      strokeWidth={1.2}
                    />
                  ))}
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-light">
                  {product.reviews} reviews
                </span>
              </div>
            </div>

            {/* Tone selector */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink">
                  Finish
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-light">
                  {TONES.find((t) => t.id === selectedTone)?.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {TONES.map((tone) => (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => setSelectedTone(tone.id)}
                    aria-pressed={selectedTone === tone.id}
                    className={cn(
                      "px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-all",
                      selectedTone === tone.id
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/20 text-ink hover:border-ink"
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full border border-ink/20"
                        style={{ background: tone.swatch }}
                        aria-hidden="true"
                      />
                      {tone.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink/20">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-ink hover:text-gold transition-colors"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-medium text-ink">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-ink hover:text-gold transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                "w-full py-5 text-[12px] uppercase tracking-[0.25em] font-sans transition-all duration-300",
                added ? "bg-gold-deep text-cream" : "bg-ink text-cream hover:bg-gold hover:text-ink"
              )}
            >
              {added ? "Added to Bag" : "Add to Bag"} · {formatPrice(product.price * quantity)}
            </button>

            <button
              type="button"
              className="w-full mt-3 py-4 text-[11px] uppercase tracking-[0.25em] text-ink border border-ink/20 hover:border-ink transition-colors inline-flex items-center justify-center gap-2"
            >
              <Heart className="h-3.5 w-3.5" strokeWidth={1.5} />
              Add to Wishlist
            </button>

            {/* Reassurance line */}
            <ul className="mt-7 pt-6 border-t border-ink/10 space-y-2.5 text-[11px] uppercase tracking-[0.2em] text-muted-light">
              <li className="flex items-center gap-2.5">
                <Truck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                Free worldwide shipping over $80
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1 w-1 bg-gold rounded-full" aria-hidden="true" />
                30-day returns, no questions asked
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1 w-1 bg-gold rounded-full" aria-hidden="true" />
                Hypoallergenic · Tarnish-resistant
              </li>
            </ul>

            {/* Accords */}
            <div className="mt-8">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 md:mt-32 border-t border-ink/10 pt-16 md:pt-24">
            <div className="flex items-end justify-between mb-10 reveal">
              <div>
                <p className="eyebrow mb-3">You may also love</p>
                <h2 className="display-headline text-3xl md:text-4xl text-ink">
                  Pair it with
                </h2>
              </div>
              <Link to="/shop" className="text-link">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
              {related.map((p, idx) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-light hover:text-gold transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            Back to shop
          </Link>
        </div>
      </div>
    </main>
  )
}
