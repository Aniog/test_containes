import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingBag, ChevronDown, ChevronUp, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [variant, setVariant] = useState(product?.variant || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal">Product Not Found</h1>
          <Link to="/shop" className="mt-6 inline-block text-xs tracking-[0.2em] uppercase text-gold-dark underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main ref={containerRef} className="bg-cream pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase text-stone mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-sand">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 rounded-sm overflow-hidden bg-sand border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-2xl lg:text-3xl tracking-[0.18em] uppercase text-charcoal leading-tight"
            >
              {product.name}
            </h1>

            <p className="mt-3 text-xl text-stone font-light">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="mt-5 text-sm text-stone leading-relaxed font-light">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.15em] uppercase text-charcoal mb-3">Finish</p>
              <div className="flex gap-2">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border rounded-sm transition-all ${
                      variant === v
                        ? 'border-gold bg-gold/10 text-charcoal'
                        : 'border-warm text-stone hover:border-stone'
                    }`}
                  >
                    {v === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex items-center border border-warm rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-charcoal/50 hover:text-charcoal transition-colors"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-charcoal/50 hover:text-charcoal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`mt-5 w-full py-3.5 text-xs font-medium tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-espresso text-cream'
                  : 'bg-gold text-espresso hover:bg-gold-light'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            <p className="mt-4 text-[11px] text-stone/60 text-center">Free worldwide shipping · 30-day returns</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-warm pt-6 space-y-1">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-warm/50">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-[0.15em] uppercase text-charcoal hover:text-gold-dark transition-colors"
                  >
                    {acc.label}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-stone" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-xs text-stone/80 leading-relaxed whitespace-pre-line font-light">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-charcoal tracking-wide text-center">
            You May Also Like
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map((rp) => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
