import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react'
import { products } from '@/lib/products'
import { useCartDispatch } from '@/lib/CartContext'
import ProductCard from '@/components/home/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const dispatch = useCartDispatch()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-base mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-sm">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', payload: { id: product.id, name: product.name, price: product.price, quantity } })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { key: 'description', label: 'Description', content: product.description + '\n\n' + product.details },
    { key: 'materials', label: 'Materials & Care', content: product.materials },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="bg-surface pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="py-4">
          <Link to="/shop" className="inline-flex items-center gap-1.5 font-sans text-xs text-muted hover:text-accent transition-colors uppercase tracking-[0.05em]">
            <ArrowLeft className="w-3 h-3" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-20">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-100/60 via-amber-200/30 to-amber-50/40 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-amber-300/15 blur-3xl" />
                <div className="absolute w-36 h-36 rounded-full bg-amber-400/8 blur-2xl translate-x-12 translate-y-6" />
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="aspect-square bg-gradient-to-br from-amber-100/40 via-amber-200/20 to-amber-50/30 border border-border/50 hover:border-accent transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            {product.badge && (
              <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent font-sans text-[10px] uppercase tracking-[0.1em] mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-2xl md:text-3xl lg:text-4xl text-base mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl text-base font-medium mb-6">${product.price}</p>

            {/* Short description */}
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] text-base uppercase tracking-[0.08em] mb-3 font-medium">
                Finish
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-[0.08em] transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-base text-surface border border-base'
                        : 'bg-transparent text-muted border border-border hover:border-base'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-end gap-4 mb-8">
              <div>
                <p className="font-sans text-[11px] text-base uppercase tracking-[0.08em] mb-2 font-medium">Qty</p>
                <div className="flex items-center border border-border">
                  <button
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-base transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-base">
                    {quantity}
                  </span>
                  <button
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-base transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleAdd}
                className="btn-primary flex-1 gap-2 h-10"
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordions.map((a) => (
                <div key={a.key} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === a.key ? null : a.key)}
                    className="w-full flex items-center justify-between py-4 font-sans text-xs text-base uppercase tracking-[0.08em] font-medium"
                  >
                    {a.label}
                    {openAccordion === a.key ? (
                      <ChevronUp className="w-4 h-4 text-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === a.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-muted leading-relaxed whitespace-pre-line">
                      {a.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="pb-20 md:pb-28">
            <div className="hairline-divider mb-12" />
            <h2 className="section-title mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
