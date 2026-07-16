import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield, Heart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { products } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import { formatPrice } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [wishlisted, setWishlisted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImage(0)
    setSelectedVariant('Gold')
    setQuantity(1)
  }, [id])

  if (!product) {
    return (
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-heading-md text-warm-black">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-gold underline text-sm">
            Return to Shop
          </Link>
        </div>
      </main>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-10">
        <nav className="flex items-center gap-2 text-xs text-muted-text">
          <Link to="/" className="hover:text-warm-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-warm-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-black">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 overflow-hidden transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square bg-cream overflow-hidden relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-warm-black text-white text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl md:text-3xl text-warm-black uppercase tracking-[0.08em] font-medium">
              {product.name}
            </h1>

            <p className="text-lg font-medium text-warm-black mt-2">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(product.rating) ? '#C6A355' : 'transparent'}
                    className={i < Math.round(product.rating) ? 'text-gold' : 'text-border'}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-text">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-muted-text mt-4 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Divider */}
            <div className="h-px bg-border my-6" />

            {/* Variant selector */}
            <div>
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-text mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs font-medium tracking-[0.08em] uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-warm-black bg-warm-black text-white'
                        : 'border-border text-muted-text hover:border-warm-gray'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-text mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted-text hover:text-warm-black transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted-text hover:text-warm-black transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-warm-black text-white py-4 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-gold-dark transition-colors"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-14 h-14 flex items-center justify-center border transition-all ${
                  wishlisted ? 'border-gold bg-gold/10' : 'border-border hover:border-warm-gray'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart
                  size={18}
                  fill={wishlisted ? '#C6A355' : 'transparent'}
                  className={wishlisted ? 'text-gold' : 'text-muted-text'}
                />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(badge => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-1.5">
                  <badge.icon size={18} className="text-gold" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-text tracking-wide">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-medium tracking-[0.1em] uppercase text-warm-black">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={16} className="text-muted-text" />
                    ) : (
                      <ChevronDown size={16} className="text-muted-text" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 animate-fade-in">
                      <p className="text-sm text-muted-text leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-2">
                Complete the Look
              </p>
              <h2 className="font-serif text-heading-md text-warm-black">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
