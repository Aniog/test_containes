import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const accordionItems = [
  {
    title: 'Description',
    content: 'Each piece in the Velmora collection is designed to transition effortlessly from day to night. Our demi-fine jewelry combines the warmth of 18K gold plating with hypoallergenic base metals, ensuring both beauty and comfort. Every detail — from the clasp to the finish — is considered with care.',
  },
  {
    title: 'Materials & Care',
    content: '18K Gold Plated over brass. Nickel-free and hypoallergenic. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently wipe with a soft cloth after each use.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express shipping available at checkout. 30-day hassle-free returns — if you\'re not completely in love with your piece, send it back for a full refund.',
  },
]

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.12em] uppercase font-sans font-medium text-stone-900">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-500" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-stone-600 font-sans leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  useEffect(() => {
    if (relatedRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, relatedRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-stone-900">Product not found</h1>
        <Link to="/shop" className="text-sm text-gold hover:text-gold-light mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="max-w-8xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs font-sans text-stone-400 tracking-wide">
            <Link to="/" className="hover:text-stone-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-stone-600 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div>
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                <img
                  alt={product.name}
                  data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgId2}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-24 overflow-hidden bg-stone-100 border-2 transition-colors duration-200 ${
                      selectedImage === idx ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      data-strk-img-id={idx === 0 ? product.imgId : product.imgId2}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-4">
              <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-stone-900">
                {product.name}
              </h1>
              <p id={product.descId} className="sr-only">{product.description}</p>

              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-stone-500 font-sans">({product.reviews} reviews)</span>
              </div>

              <p className="text-2xl font-serif text-stone-900 mt-4">${product.price}</p>

              <p className="text-sm text-stone-600 font-sans leading-relaxed mt-4">
                {product.description}. Crafted with 18K gold plating over brass, nickel-free and hypoallergenic for sensitive skin.
              </p>

              {/* Tone selector */}
              <div className="mt-6">
                <label className="text-xs tracking-[0.12em] uppercase font-sans font-medium text-stone-900 block mb-3">
                  Tone
                </label>
                <div className="flex gap-3">
                  {['gold', 'silver'].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase font-sans border transition-all duration-200 ${
                        selectedTone === tone
                          ? 'border-gold bg-gold text-white'
                          : 'border-stone-300 text-stone-600 hover:border-stone-900'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <label className="text-xs tracking-[0.12em] uppercase font-sans font-medium text-stone-900 block mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-stone-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full mt-8 bg-gold hover:bg-gold-light text-white text-xs tracking-[0.15em] uppercase font-sans font-medium py-4 flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="mt-8">
                {accordionItems.map((item) => (
                  <Accordion key={item.title} title={item.title} content={item.content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section ref={relatedRef} className="py-16 md:py-24 bg-stone-100">
        <div className="max-w-8xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-stone-900 text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-stone-200 mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-stone-900">
                  {p.name}
                </h3>
                <p className="text-sm font-sans text-stone-900 mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
