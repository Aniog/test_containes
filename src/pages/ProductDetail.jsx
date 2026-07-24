import { useParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-surface flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-textPrimary">Product not found</h2>
          <Link to="/shop" className="font-sans text-sm text-velmora-gold mt-4 inline-block uppercase tracking-[0.1em]">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.material} over premium base metal. To maintain the luster of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout. We offer a 30-day return policy — if you\'re not completely satisfied, return your piece in its original condition for a full refund.',
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-surface pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm mb-4">
              <img
                data-strk-img-id={`${product.images[selectedImage].id}-detail`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
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

          {/* Right: Product Info */}
          <div className="md:pl-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-velmora-textPrimary">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-xl text-velmora-gold mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-divider'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-textSecondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-velmora-textSecondary mt-4 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-velmora-divider mt-6 mb-6" />

            {/* Tone selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-velmora-textSecondary mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.tone.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTone(t)}
                    className={`px-4 py-2 font-sans text-sm uppercase tracking-[0.08em] rounded-sm border transition-colors ${
                      selectedTone === t
                        ? 'bg-velmora-gold text-velmora-base border-velmora-gold'
                        : 'bg-transparent text-velmora-textPrimary border-velmora-divider hover:border-velmora-gold'
                    }`}
                  >
                    {t === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-velmora-textSecondary mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-divider rounded-sm hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-divider rounded-sm hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-velmora-base py-3 font-sans text-sm uppercase tracking-[0.1em] hover:bg-velmora-goldLight transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((acc, i) => (
                <div key={i} className="border-t border-velmora-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-[0.08em] text-velmora-textPrimary hover:text-velmora-gold transition-colors"
                  >
                    {acc.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === i && (
                    <div className="pb-4 font-sans text-sm text-velmora-textSecondary leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 id="related-title" className="font-serif text-2xl md:text-3xl text-velmora-textPrimary tracking-[0.05em] text-center mb-8 md:mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={p.titleId} className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-textPrimary mt-3">
                  {p.name}
                </h3>
                <p id={p.descId} className="font-sans text-xs text-velmora-textSecondary mt-1 hidden md:block">
                  {p.shortDescription}
                </p>
                <p className="font-serif text-sm text-velmora-gold mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
