import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, Heart, Share2 } from 'lucide-react'
import { products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-velmora-border)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase font-medium">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <div className="pb-4 text-sm text-[var(--color-velmora-text-muted)] leading-relaxed">{children}</div>}
    </div>
  )
}

function ProductGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] rounded overflow-hidden bg-[var(--color-velmora-bg-alt)]">
        <img
          src={images[activeImage]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-20 h-24 rounded overflow-hidden border-2 transition-colors ${
              activeImage === index ? 'border-[var(--color-velmora-accent)]' : 'border-transparent'
            }`}
          >
            <img src={img} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ProductPage({ onCartOpen }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
    onCartOpen?.()
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-6">
              <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[var(--color-velmora-gold)] text-[var(--color-velmora-gold)]' : 'text-[var(--color-velmora-border)]'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-velmora-text-muted)]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="serif-heading text-3xl mb-4">${product.price}</p>
              <p className="text-[var(--color-velmora-text-muted)] leading-relaxed">{product.description}</p>
            </div>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm tracking-widest uppercase mb-3 font-medium">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 rounded-full text-sm tracking-wide capitalize transition-all ${
                      selectedVariant === variant
                        ? 'bg-[var(--color-velmora-accent)] text-white'
                        : 'border border-[var(--color-velmora-border)] text-[var(--color-velmora-text-muted)] hover:border-[var(--color-velmora-accent)]'
                    }`}
                  >
                    {variant} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm tracking-widest uppercase mb-3 font-medium">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[var(--color-velmora-border)] rounded hover:bg-[var(--color-velmora-bg-alt)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[var(--color-velmora-border)] rounded hover:bg-[var(--color-velmora-bg-alt)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary"
              >
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button className="p-3 border border-[var(--color-velmora-border)] rounded hover:border-[var(--color-velmora-accent)] transition-colors" aria-label="Add to wishlist">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 border border-[var(--color-velmora-border)] rounded hover:border-[var(--color-velmora-accent)] transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p>
                  {product.name} is a stunning piece from our demi-fine collection. 
                  Crafted with attention to detail and designed for everyday wear, 
                  this piece transitions effortlessly from day to night.
                </p>
                <p className="mt-2">
                  Each piece comes beautifully packaged in our signature Velmora gift box, 
                  making it perfect for gifting or treating yourself.
                </p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <ul className="space-y-2">
                  <li>18K gold plated over recycled brass</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Orders ship within 1-2 business days</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                  <li>Gift sets are final sale</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-3xl md:text-4xl text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] rounded overflow-hidden mb-3 bg-[var(--color-velmora-bg-alt)]">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs mb-1 group-hover:text-[var(--color-velmora-accent)] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
