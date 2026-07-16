import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('description')
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedVariant('Gold')
    setQuantity(1)
    setActiveImage(0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-black mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary text-xs">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)
  const imageGradients = [
    'linear-gradient(135deg, #d4c5a0 0%, #e8dcc8 40%, #c9b88a 100%)',
    'linear-gradient(135deg, #c9b88a 0%, #b8a67a 40%, #d4c5a0 100%)',
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key)
  }

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\n${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <div>
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-black">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div>
              {/* Main image */}
              <div className="aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden mb-4">
                <div
                  className="w-full h-full"
                  style={{ background: imageGradients[activeImage] }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {imageGradients.map((gradient, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'w-20 h-24 rounded-sm overflow-hidden border-2 transition-colors',
                      activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
                    )}
                  >
                    <div
                      className="w-full h-full bg-velmora-cream"
                      style={{ background: gradient }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-4">
              <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-2">
                {product.category}
              </p>

              <h1 className="product-name text-2xl md:text-3xl text-velmora-black mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-medium text-velmora-black">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-velmora-warm line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>

              <div className="hairline mb-6" />

              {/* Description */}
              <p className="text-sm text-velmora-charcoal leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase text-velmora-muted mb-3 font-medium">
                  Tone: {selectedVariant}
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        'px-6 py-2.5 text-xs tracking-wider uppercase font-medium transition-all duration-200 border',
                        selectedVariant === v
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-border text-velmora-charcoal hover:border-velmora-gold'
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-wider uppercase text-velmora-muted mb-3 font-medium">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-velmora-muted hover:text-velmora-black transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-6 py-3 text-sm font-medium text-velmora-black border-x border-velmora-border min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-velmora-muted hover:text-velmora-black transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { icon: Truck, text: 'Free Shipping' },
                  { icon: RotateCcw, text: '30-Day Returns' },
                  { icon: Shield, text: 'Hypoallergenic' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 text-velmora-muted">
                    <item.icon size={14} strokeWidth={1.5} />
                    <span className="text-[11px] tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="hairline my-8" />

              {/* Accordions */}
              <div className="space-y-0">
                {accordions.map((acc) => (
                  <div key={acc.key} className="border-b border-velmora-border">
                    <button
                      onClick={() => toggleAccordion(acc.key)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs tracking-widest uppercase font-medium text-velmora-black">
                        {acc.title}
                      </span>
                      {activeAccordion === acc.key ? (
                        <ChevronUp size={16} className="text-velmora-muted" />
                      ) : (
                        <ChevronDown size={16} className="text-velmora-muted" />
                      )}
                    </button>
                    {activeAccordion === acc.key && (
                      <div className="pb-4 animate-fade-in">
                        <p className="text-sm text-velmora-charcoal leading-relaxed whitespace-pre-line">
                          {acc.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section-padding py-16 md:py-24 bg-velmora-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-black">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
