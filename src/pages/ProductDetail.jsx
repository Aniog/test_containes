import { useState, useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/StarRating'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'

const tones = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [tone, setTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    }, 50)
    return () => window.clearTimeout(timer)
  }, [slug, activeImage])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(slug, 4)

  const handleAdd = () => {
    addItem(product, { quantity, tone })
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on location. Enjoy 30-day returns on unworn items in original packaging. Each piece arrives in a signature Velmora gift box.',
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-sand">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {product.gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 md:w-full aspect-square overflow-hidden bg-cream shrink-0 transition-all ${
                    activeImage === i ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={g.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={200}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                key={activeImage}
                alt={product.name}
                data-strk-img-id={`${product.gallery[activeImage].imgId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width={900}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover fade-up"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-widest3 leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={15} />
              <span className="text-sm text-sand">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

            <p id={product.descId} className="mt-5 text-base text-ink/75 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-sand mb-3">
                Tone — <span className="text-ink capitalize">{tone}</span>
              </p>
              <div className="flex gap-3">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={`px-6 py-3 text-[11px] uppercase tracking-widest2 font-medium rounded-full border transition-all ${
                      tone === t.id
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-hairline text-ink hover:border-ink'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-sand mb-3">Quantity</p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="px-5 text-sm text-ink min-w-[3ch] text-center">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium py-4 hover:bg-gold-soft transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="mt-4 text-xs text-sand text-center">
              Free shipping · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
