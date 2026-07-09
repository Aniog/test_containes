import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft, Heart } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Stars({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? 'fill-gold text-gold' : 'fill-warm-beige text-warm-beige'}
        />
      ))}
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-warm-beige">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-widest uppercase text-deep-charcoal hover:text-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [material, setMaterial] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [addedAnim, setAddedAnim] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-deep-charcoal">Product not found</h1>
          <Link to="/shop" className="btn-primary inline-block mt-6">Back to Shop</Link>
        </div>
      </main>
    )
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, material)
    }
    setAdded(true)
    setAddedAnim(true)
    setTimeout(() => { setAddedAnim(false) }, 600)
    setTimeout(() => { setAdded(false) }, 2000)
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 pt-6 pb-2">
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-taupe hover:text-deep-charcoal transition-colors">
          <ArrowLeft size={12} />
          Back to Shop
        </Link>
      </div>

      {/* Product */}
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Left - Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-warm-beige/30 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="md:sticky md:top-24 md:self-start">
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-deep-charcoal uppercase tracking-widest leading-[1.15]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <Stars rating={product.rating} size={14} />
              <span className="text-xs text-taupe">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-deep-charcoal mt-5 font-medium">
              ${product.price}
            </p>

            <p className="text-sm text-taupe mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Material Variant */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-deep-charcoal mb-3 font-medium">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMaterial(m)}
                    className={`px-6 py-3 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      material === m
                        ? 'border-deep-charcoal bg-deep-charcoal text-white'
                        : 'border-warm-beige text-taupe hover:border-taupe'
                    }`}
                  >
                    {m === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-deep-charcoal mb-3 font-medium">Quantity</p>
              <div className="flex items-center border border-warm-beige w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-taupe hover:text-deep-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 py-3 text-sm font-medium min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-taupe hover:text-deep-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`btn-primary w-full mt-8 flex items-center justify-center gap-2 transition-all duration-300 ${
                addedAnim ? 'scale-[0.98]' : ''
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart — $' + (product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-b border-warm-beige">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-3">Each piece is crafted with precision and designed for everyday elegance.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K gold plated over sterling silver</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in a cool, dry place — use the included pouch</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• 30-day return window for unworn items</li>
                  <li>• Orders dispatched within 1–2 business days</li>
                  <li>• Tracked shipping with signature on delivery</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-white mt-10">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-8 md:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] bg-warm-beige/30 overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="font-serif text-xs uppercase tracking-widest text-deep-charcoal">
                    {p.name}
                  </h3>
                  <p className="font-serif text-sm font-medium mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
