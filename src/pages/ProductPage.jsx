import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[hsl(var(--border))]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="product-name text-sm tracking-[0.12em]">{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-[hsl(var(--foreground-secondary))] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-sm bg-[hsl(var(--background-secondary))] aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 text-center">
        <p className="product-name text-xs tracking-[0.12em]">{product.name}</p>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>
    </Link>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-secondary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  const allImages = product.gallery || [product.image, product.imageHover]

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding">
        {/* Breadcrumb */}
        <nav className="text-xs text-[hsl(var(--foreground-muted))] mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[hsl(var(--accent))] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[hsl(var(--accent))] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[hsl(var(--foreground-secondary))]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="overflow-hidden rounded-sm bg-[hsl(var(--background-secondary))] aspect-[3/4] mb-4">
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`overflow-hidden rounded-sm aspect-square bg-[hsl(var(--background-secondary))] border-2 transition-colors ${
                    selectedImage === i ? 'border-[hsl(var(--accent))]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-2">{product.category}</p>
            <h1 className="product-name text-2xl md:text-3xl tracking-[0.15em] mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-[hsl(var(--accent))] text-[hsl(var(--accent))]' : 'text-[hsl(var(--border))]'}
                  />
                ))}
              </div>
              <span className="text-xs text-[hsl(var(--foreground-muted))]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-light mb-6">${product.price}</p>

            <p className="text-sm text-[hsl(var(--foreground-secondary))] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[hsl(var(--foreground-secondary))] mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider border transition-all ${
                      variant === v
                        ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-white'
                        : 'border-[hsl(var(--border))] text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--accent))]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-[hsl(var(--foreground-secondary))] mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(var(--accent))] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(var(--accent))] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="btn-primary btn-full mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-center text-[hsl(var(--foreground-muted))]">
              Free shipping on all orders · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">We offer free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping (2-4 business days) is available at checkout.</p>
                <p>We accept returns within 30 days of delivery. Items must be unworn and in original packaging. Refunds are processed within 5 business days of receiving the return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[hsl(var(--border))]">
            <h2 className="serif-heading text-2xl md:text-3xl tracking-[0.15em] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
