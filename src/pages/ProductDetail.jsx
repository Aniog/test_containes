import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionList from '@/components/product/AccordionList'
import ProductGallery from '@/components/product/ProductGallery'
import ProductCard from '@/components/shared/ProductCard'
import RatingStars from '@/components/shared/RatingStars'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/format'
import strkImgConfig from '@/strk-img-config.json'

function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug, tone, quantity])

  useEffect(() => {
    if (!product) return
    setTone(product.tones[0] || 'Gold')
    setQuantity(1)
  }, [product])

  if (!product) {
    return <Navigate replace to="/shop" />
  }

  const accordionItems = [
    { label: 'Description', content: product.details },
    { label: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { label: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAddToCart = () => {
    addItem(product, tone, quantity)
  }

  return (
    <div ref={containerRef} className="px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-sm text-velmora-aubergine/75">
          <Link className="transition hover:text-velmora-ink" to="/shop">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-ink">{product.shortName}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery product={product} />

          <aside className="rounded-[2rem] border border-velmora-sand/35 bg-white p-6 shadow-soft md:p-8 lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.2em] text-velmora-champagne">{product.category}</p>
            <h1 id={`product-${product.slug}-title`} className="mt-3 font-serif text-4xl uppercase tracking-luxe text-velmora-ink md:text-5xl">
              {product.name}
            </h1>
            <p id={`product-${product.slug}-desc`} className="mt-4 text-base leading-7 text-velmora-aubergine/85">
              {product.description}
            </p>
            <p id={`product-${product.slug}-caption`} className="sr-only">{product.caption}</p>

            <div className="mt-6 flex items-center justify-between gap-4 border-b border-t border-velmora-sand/30 py-5">
              <span className="text-2xl font-semibold text-velmora-espresso">{formatCurrency(product.price)}</span>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-aubergine/75">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tones.map((option) => (
                  <button
                    key={option}
                    className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      tone === option
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-sand/40 bg-velmora-ivory text-velmora-ink hover:bg-velmora-mist'
                    }`}
                    onClick={() => setTone(option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-aubergine/75">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-velmora-sand/40 bg-velmora-ivory px-3 py-2">
                <button
                  aria-label="Decrease quantity"
                  className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-mist"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  type="button"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-semibold text-velmora-ink">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-mist"
                  onClick={() => setQuantity((current) => current + 1)}
                  type="button"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              className="mt-8 w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-sand"
              onClick={handleAddToCart}
              type="button"
            >
              Add to Cart
            </button>
          </aside>
        </div>

        <div className="mt-10">
          <AccordionList items={accordionItems} />
        </div>

        <section className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-champagne">You may also like</p>
              <h2 className="mt-3 text-4xl text-velmora-ink">Complete the edit</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} sectionId="related-products" />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
