import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductAccordions from '@/components/product/ProductAccordions'
import ProductCard from '@/components/product/ProductCard'
import ProductGallery from '@/components/product/ProductGallery'
import { useCart } from '@/components/cart/CartContext'
import { formatPrice, getProductBySlug, getRelatedProducts } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const pageRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [slug, selectedImage])

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product.slug, 4)

  return (
    <main ref={pageRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        <ProductGallery product={product} selectedIndex={selectedImage} onSelect={setSelectedImage} />
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa/70 transition hover:text-velmora-ink">
            Back to shop
          </Link>
          <h1 className="mt-6 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.14em] text-velmora-ink sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between gap-5 border-b border-velmora-ink/10 pb-6">
            <p className="font-serif text-3xl text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-cocoa/65">{product.reviews}</span>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-velmora-cocoa/78">{product.detail}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition ${
                    selectedTone === tone
                      ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                      : 'border-velmora-ink/15 bg-transparent text-velmora-ink hover:border-velmora-champagne'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Quantity</p>
            <div className="inline-flex items-center rounded-full border border-velmora-ink/15 bg-velmora-porcelain text-velmora-ink">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="bg-transparent p-4 text-velmora-ink hover:text-velmora-champagne" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="bg-transparent p-4 text-velmora-ink hover:text-velmora-champagne" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => addItem(product, quantity, selectedTone)}
            className="mt-8 w-full rounded-full bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition hover:bg-velmora-ink hover:text-velmora-cream"
          >
            Add to Cart
          </button>

          <ProductAccordions product={product} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4 border-t border-velmora-ink/10 pt-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Complete the ritual</p>
            <h2 className="font-serif text-4xl text-velmora-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa/70 transition hover:text-velmora-ink sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  )
}
