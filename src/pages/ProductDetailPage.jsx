import { useState } from 'react'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { useParams, useNavigate } from 'react-router-dom'

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-velmora-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-lg text-charcoal-900 tracking-wide">{title}</span>
        {isOpen ? <ChevronUp size={18} className="text-charcoal-500" /> : <ChevronDown size={18} className="text-charcoal-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-charcoal-600 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[3/4] bg-velmora-100 overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-20 bg-velmora-100 overflow-hidden transition-all duration-200 ${
              i === activeIndex ? 'ring-2 ring-gold-500' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === id)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal-900 mb-4">Product not found</p>
          <button onClick={() => navigate('/shop')} className="btn-primary">
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return (
    <main className="pt-20 md:pt-24">
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.shortName} />

          {/* Details */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-velmora-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-charcoal-900 mb-6">${product.price}</p>

            <p className="text-charcoal-600 leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-charcoal-700 font-sans mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase font-sans border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-charcoal-900 bg-charcoal-900 text-white'
                        : 'border-velmora-300 text-charcoal-700 hover:border-charcoal-900'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-charcoal-700 font-sans mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 text-charcoal-900 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-charcoal-500 text-center">
              Free shipping on all orders · 30-day returns
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto mt-16">
          <Accordion title="Description">
            <p>{product.description}</p>
            <p className="mt-3">Each Velmora piece is designed with intention — to complement your everyday style while feeling special enough for any occasion. The weight, the finish, the way it catches light — every detail is considered.</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p className="mb-2"><strong className="text-charcoal-800">Materials:</strong> {product.materials}</p>
            <p><strong className="text-charcoal-800">Care:</strong> {product.care}</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p className="mb-2"><strong className="text-charcoal-800">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
            <p><strong className="text-charcoal-800">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receipt.</p>
          </Accordion>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-velmora-200 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <button
                  key={p.id}
                  onClick={() => navigate(`/product/${p.id}`)}
                  className="group text-left"
                >
                  <div className="aspect-[3/4] bg-velmora-100 overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.shortName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-1">{p.name}</h3>
                  <p className="text-charcoal-900 font-medium">${p.price}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
