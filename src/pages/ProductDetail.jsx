import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Gem } from 'lucide-react'
import { fetchProductBySlug, fetchProducts } from '@/api/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/shop/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [status, setStatus] = useState('loading')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tone, setTone] = useState('gold')
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setStatus('loading')
        const p = await fetchProductBySlug(slug)
        if (!cancelled) {
          if (p) {
            setProduct(p.data || p)
            setTone((p.data || p).tone || 'gold')
            setSelectedImage(0)
            setQuantity(1)
            // Load related products in same category
            const all = await fetchProducts({ category: (p.data || p).category })
            const filtered = all
              .filter((r) => r.id !== p.id)
              .slice(0, 4)
            setRelated(filtered.map((r) => r.data || r))
          } else {
            setStatus('notfound')
          }
          setStatus('ready')
        }
      } catch (e) {
        if (!cancelled) setStatus('error')
      }
    }
    load()
    return () => { cancelled = true }
  }, [slug])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product, related])

  const handleAddToCart = () => {
    if (!product) return
    addItem(product, quantity, tone)
  }

  const gallery = product?.gallery_urls?.length
    ? product.gallery_urls
    : [product?.image_url || 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80']

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product?.description || 'No description available.',
    },
    {
      key: 'care',
      title: 'Materials & Care',
      content: product?.care || 'No care information available.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: product?.shipping_returns || 'No shipping information available.',
    },
  ]

  if (status === 'notfound') {
    return (
      <main className="pt-32 min-h-screen bg-ivory text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-accent underline underline-offset-4 text-sm">
          Back to Shop
        </Link>
      </main>
    )
  }

  if (status === 'error') {
    return (
      <main className="pt-32 min-h-screen bg-ivory text-center">
        <h1 className="font-serif text-3xl mb-4">Something went wrong</h1>
        <Link to="/shop" className="text-accent underline underline-offset-4 text-sm">
          Back to Shop
        </Link>
      </main>
    )
  }

  if (status === 'loading' || !product) {
    return (
      <main className="pt-32 min-h-screen bg-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="aspect-[3/4] bg-stone-200 animate-pulse" />
            <div className="space-y-4">
              <div className="h-6 bg-stone-200 w-2/3 animate-pulse" />
              <div className="h-4 bg-stone-200 w-1/3 animate-pulse" />
              <div className="h-24 bg-stone-200 w-full animate-pulse mt-6" />
            </div>
          </div>
        </div>
      </main>
    )
  }

  const productTitleId = `pd-title-${product.id}`

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-20">
              {gallery.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border overflow-hidden transition-colors ${
                    selectedImage === idx ? 'border-espresso' : 'border-hairline hover:border-stone-400'
                  }`}
                >
                  <img
                    src={url}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-stone-100 overflow-hidden">
              <img
                data-strk-img-id={`pd-main-${product.id}`}
                data-strk-img={`[${productTitleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={gallery[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-2">
              {product.category}
            </p>
            <h1
              id={productTitleId}
              className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.15em] mb-3"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating || 0)
                        ? 'fill-accent text-accent'
                        : 'text-hairline'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.rating?.toFixed(1)} ({product.review_count} reviews)
              </span>
            </div>
            <p className="font-serif text-xl md:text-2xl mb-6">${product.price.toFixed(2)}</p>
            <p className="text-sm text-taupe leading-relaxed mb-6">
              {product.short_description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.12em] font-medium border transition-colors ${
                      tone === t
                        ? 'border-espresso bg-espresso text-white'
                        : 'border-hairline bg-white text-espresso hover:border-stone-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-hairline flex items-center justify-center hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 border border-hairline flex items-center justify-center hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-accent text-white py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent-hover transition-colors mb-6"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-hairline">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-2 text-accent" />
                <p className="text-[10px] uppercase tracking-[0.1em] text-taupe">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto mb-2 text-accent" />
                <p className="text-[10px] uppercase tracking-[0.1em] text-taupe">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Gem className="w-5 h-5 mx-auto mb-2 text-accent" />
                <p className="text-[10px] uppercase tracking-[0.1em] text-taupe">18K Gold Plated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-12 md:mt-20 max-w-2xl">
          {accordions.map((acc) => (
            <div key={acc.key} className="border-b border-hairline">
              <button
                onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-sm uppercase tracking-[0.15em] font-medium">{acc.title}</span>
                {openAccordion === acc.key ? (
                  <ChevronUp className="w-4 h-4 text-taupe" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-taupe" />
                )}
              </button>
              {openAccordion === acc.key && (
                <div className="pb-5 text-sm text-taupe leading-relaxed">{acc.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
                You May Also Like
              </p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
                Complete the Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
