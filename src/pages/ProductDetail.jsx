import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/home/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-rose/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-wider uppercase font-medium">{title}</span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} /> : <ChevronDown size={16} strokeWidth={1.5} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-velmora-muted leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [selectedImg, setSelectedImg] = useState(0)
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      image: product.images[0].src,
      quantity,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb */}
        <div className="text-[0.6875rem] tracking-wide text-velmora-muted mb-8">
          <Link to="/" className="hover:text-velmora transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <div className="aspect-square bg-velmora-sand mb-4 overflow-hidden">
              <img
                src={product.images[selectedImg].src}
                alt={product.images[selectedImg].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`w-20 h-20 bg-velmora-sand overflow-hidden border-2 transition-colors ${
                    idx === selectedImg ? 'border-velmora' : 'border-transparent'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:pt-8">
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#c2ab8d' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-rose'}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-light tracking-wide mb-6">${product.price}</p>
            <p className="text-sm text-velmora-muted leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[0.6875rem] tracking-wider uppercase font-medium mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                      variant === v
                        ? 'border-velmora bg-velmora text-white'
                        : 'border-velmora-rose hover:border-velmora'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-[0.6875rem] tracking-wider uppercase font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-rose w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-green-800 border-green-800 text-white'
                  : 'btn-primary'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 lg:mt-28 pt-16 border-t border-velmora-rose/60">
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
