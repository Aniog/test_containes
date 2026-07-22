import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'

import Accordion from '@/components/common/Accordion'
import QuantitySelector from '@/components/common/QuantitySelector'
import Stars from '@/components/common/Stars'
import ProductGallery from '@/components/product/ProductGallery'
import RelatedProducts from '@/components/product/RelatedProducts'
import { useStore } from '@/context/StoreContext'
import { getProductBySlug } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const noop = () => {}

const ProductDetail = () => {
  const { slug } = useParams()
  const { products, addToCart } = useStore()
  const containerRef = useRef(null)
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== slug).slice(0, 4),
    [products, slug],
  )

  useEffect(() => {
    let cleanup = noop

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || noop
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug, selectedTone])

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5 py-32">
        <div className="rounded-[2rem] border border-velmora-mist/20 bg-white/80 px-8 py-10 text-center shadow-soft">
          <h1 className="font-display text-5xl text-velmora-ink">
            Piece not found
          </h1>
          <Link
            to="/shop"
            className="mt-5 inline-flex rounded-full border border-velmora-bronze px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-parchment"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    )
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.details.join(' · ')}. Store in the pouch provided and avoid moisture, fragrance, and lotions to preserve the finish.`,
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <main ref={containerRef} className="pb-20 pt-32 sm:pt-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 sm:px-8 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ProductGallery product={product} tone={selectedTone} />

          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-5 rounded-[2rem] border border-velmora-mist/20 bg-white/70 p-6 shadow-soft sm:p-8">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">
                  {product.category}
                </p>
                <h1 className="font-display text-5xl uppercase tracking-luxe text-velmora-ink sm:text-6xl">
                  {product.name}
                </h1>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-2xl text-velmora-ink">${product.price}</p>
                  <Stars rating={product.rating} reviewCount={product.reviewCount} />
                </div>
              </div>

              <p className="text-base leading-8 text-velmora-rose">
                {product.shortDescription}
              </p>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
                  Tone
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                        selectedTone === tone
                          ? 'border-velmora-bronze bg-velmora-ink text-velmora-parchment'
                          : 'border-velmora-mist/20 bg-white text-velmora-ink hover:border-velmora-bronze'
                      }`}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
                  Quantity
                </p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-velmora-parchment transition hover:bg-velmora-cacao"
                onClick={() => addToCart(product, selectedTone, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </section>

        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  )
}

export default ProductDetail
