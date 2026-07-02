import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const product = products.find((p) => p.slug === slug)

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [expandedAccordion, setExpandedAccordion] = useState('description')

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}. To maintain the brilliance of your Velmora piece, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch away from direct sunlight. Gently clean with a soft, dry cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivery within 5–10 business days. Express shipping available at checkout. We offer a 30-day return policy — if you\'re not in love, send it back. Items must be unworn and in original packaging.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-velmora-muted mb-8 tracking-wide">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-warm">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span id={`pdp-name-${product.id}`} className="hidden">{product.name} gold jewelry editorial</span>
            </div>
            <div className="flex gap-3">
              {product.images?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 flex-shrink-0 border-2 transition-colors ${
                    i === activeImage ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name-${product.id}] detail view ${i + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="128"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase mb-2">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <p className="font-sans text-xl font-medium">${product.price}</p>
              <span className="text-velmora-border">|</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'fill-velmora-border text-velmora-border'
                    }`}
                  />
                ))}
                <span className="text-xs text-velmora-muted ml-1">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-velmora-muted leading-relaxed mb-8">{product.description}</p>

            {/* Color selector */}
            {product.colors.length > 1 && (
              <div className="mb-6">
                <p className="text-xs text-velmora-muted tracking-wider uppercase mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2 text-sm border transition-all ${
                        selectedColor === color
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-border hover:border-velmora-warm'
                      }`}
                    >
                      {color} Tone
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs text-velmora-muted tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-velmora-cream transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 py-2 text-sm min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-velmora-cream transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addItem(product, selectedColor)
                }
              }}
              className="btn-primary w-full text-center mb-4"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust icons */}
            <div className="flex gap-6 text-xs text-velmora-muted mt-6 flex-wrap">
              <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Free Shipping</span>
              <span className="flex items-center gap-1.5"><RotateCcw className="w-3.5 h-3.5" /> 30-Day Returns</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 1 Year Warranty</span>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-border mt-10 pt-8 space-y-1">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-border">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === acc.id ? '' : acc.id)}
                    className="flex items-center justify-between w-full py-4 text-sm font-serif tracking-wide"
                  >
                    {acc.title}
                    {expandedAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-muted" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedAccordion === acc.id ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-muted leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-velmora-border">
            <h2 className="font-serif text-2xl tracking-wide text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${rp.id}`}
                      data-strk-img={`[related-name-${rp.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span id={`related-name-${rp.id}`} className="hidden">{rp.name} gold jewelry</span>
                  </div>
                  <h3 className="font-serif text-xs tracking-wider uppercase group-hover:text-velmora-gold transition-colors">
                    {rp.name}
                  </h3>
                  <p className="text-sm mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}