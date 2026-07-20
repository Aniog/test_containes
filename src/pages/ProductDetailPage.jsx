import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-taupe">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left font-sans text-sm uppercase tracking-widest text-espresso/80 hover:text-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-espresso/60 text-sm leading-relaxed font-sans font-light">
          {children}
        </p>
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-2xl text-espresso">Product not found</p>
        <Link to="/shop" className="btn-primary mt-6">Back to Shop</Link>
      </div>
    )
  }

  const images = [product.images.primary, product.images.hover]

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-muted-gold rounded-sm overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                    idx === selectedImage ? 'border-gold' : 'border-transparent hover:border-taupe'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-espresso mb-4 font-light">
              {product.name}
            </h1>
            <p className="font-sans text-2xl text-espresso mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe'}
                />
              ))}
              <span className="text-xs text-espresso/50 ml-2 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-espresso/60 text-sm leading-relaxed mb-8 font-sans font-light">
              {product.description}
            </p>

            {/* Variant selector */}
            <p className="font-sans text-xs uppercase tracking-widest text-espresso/80 mb-3">
              Finish
            </p>
            <div className="flex gap-3 mb-8">
              <button className="px-5 py-2 border-2 border-gold bg-gold/5 text-gold text-xs uppercase tracking-widest rounded-sm font-sans font-medium">
                18K Gold
              </button>
              <button className="px-5 py-2 border border-taupe text-espresso/40 text-xs uppercase tracking-widest rounded-sm font-sans hover:border-gold hover:text-gold transition-colors">
                Silver Tone
              </button>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-taupe rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 text-sm font-sans min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="text-xs text-espresso/40 font-sans">Quantity</span>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`btn-primary w-full text-center mb-4 ${
                added ? 'bg-espresso' : ''
              }`}
            >
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            <p className="text-center text-xs text-espresso/30 font-sans">
              Free shipping & 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="serif-heading text-2xl md:text-3xl text-center mb-2 font-light">
              You May Also Like
            </h2>
            <div className="hairline-divider mb-10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-muted-gold rounded-sm overflow-hidden mb-3">
                    <img
                      src={rp.images.primary}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name group-hover:text-gold transition-colors">
                    {rp.name}
                  </h3>
                  <p className="product-price mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}