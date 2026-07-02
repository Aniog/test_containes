import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-200">
      <button
        onClick={() => setOpen(!open)}
        className="accordion-trigger"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  )
}

function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              i === activeIndex ? 'border-gold-500' : 'border-transparent hover:border-velmora-300'
            }`}
          >
            <img src={img} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-100 overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-950">Product Not Found</h1>
          <Link to="/shop" className="btn-primary mt-6 inline-flex">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  const relatedProducts = products.filter((p) => product.related.includes(p.id))

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-500 mb-8">
          <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-950">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product info */}
          <div className="md:sticky md:top-24 md:self-start">
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-widest uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-500 text-gold-500'
                        : 'text-velmora-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-charcoal-950 mt-6">${product.price}</p>

            <p className="text-sm text-charcoal-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-charcoal-950 mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-gold-500 bg-gold-500/10 text-charcoal-950'
                        : variant.available
                        ? 'border-velmora-300 text-charcoal-600 hover:border-charcoal-950'
                        : 'border-velmora-200 text-velmora-300 cursor-not-allowed line-through'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-charcoal-950 mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:text-gold-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:text-gold-600 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full mt-8 flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-charcoal-500">
              <span>Free Shipping</span>
              <span className="text-velmora-300">·</span>
              <span>30-Day Returns</span>
              <span className="text-velmora-300">·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece comes beautifully packaged in our signature Velmora gift box, ready for gifting or treating yourself.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="font-medium text-charcoal-950 mb-2">Materials</p>
                <p>{product.materials}</p>
                <p className="font-medium text-charcoal-950 mt-4 mb-2">Care</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="font-medium text-charcoal-950 mb-2">Shipping</p>
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping (2-3 days) available at checkout.</p>
                <p className="font-medium text-charcoal-950 mt-4 mb-2">Returns</p>
                <p>We offer hassle-free 30-day returns. Items must be unworn and in original packaging. Refunds are processed within 5 business days of receiving the return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-3xl text-charcoal-950 tracking-wide text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="product-card group">
                  <div className="product-card-image">
                    <img src={p.images[0]} alt={p.name} />
                    {p.images[1] && (
                      <div className="product-card-secondary">
                        <img src={p.images[1]} alt={p.name} />
                      </div>
                    )}
                  </div>
                  <h3 className="product-card-title">{p.name}</h3>
                  <p className="product-card-price">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
