import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../components/cart/CartContext'
import ProductCard from '../components/ui/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-warm-charcoal/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-ultra-wide font-medium text-text-primary">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <h1 className="font-serif text-2xl text-text-primary">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-muted-gold underline">Back to shop</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity)
    setQuantity(1)
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <main className="pt-24 md:pt-28 pb-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-text-muted">
          <Link to="/" className="hover:text-muted-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-muted-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-3x4 bg-cream rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={`pdp-${product.slug}-main-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-3x4 bg-cream rounded-sm overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-muted-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.slug}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-wide-product uppercase text-text-primary"
            >
              {product.name}
            </h1>

            <p
              id={product.descId}
              className="sr-only"
            >
              {product.type} — {product.description}
            </p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-muted-gold text-muted-gold' : 'text-warm-charcoal/20'}`} />
                ))}
              </div>
              <span className="text-xs text-text-muted">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-text-primary mt-4">${product.price}</p>

            <p className="text-sm text-text-secondary leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest text-text-muted font-medium block mb-2">
                Tone
              </label>
              <div className="flex gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-muted-gold bg-muted-gold/10 text-muted-gold'
                        : 'border-warm-charcoal/20 text-text-secondary hover:border-muted-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest text-text-muted font-medium block mb-2">
                Quantity
              </label>
              <div className="flex items-center border border-warm-charcoal/20 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-muted-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-muted-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-premium w-full mt-8 bg-muted-gold text-warm-black py-4 text-xs font-medium uppercase tracking-ultra-wide hover:bg-bright-gold transition-colors duration-300"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-xl md:text-2xl tracking-ultra-wide uppercase text-text-primary text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 10} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
