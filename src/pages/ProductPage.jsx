import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionItem from '@/components/shared/AccordionItem.jsx'
import ProductCard from '@/components/products/ProductCard.jsx'
import StarRating from '@/components/shared/StarRating.jsx'
import { formatPrice, getProductBySlug, getRelatedProducts } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext.jsx'

const tones = ['Gold', 'Silver']

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const galleryRef = useRef(null)
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedImage(0)
    setSelectedTone('Gold')
    setQuantity(1)
  }, [slug])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug, selectedImage])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const selectedSceneId = `pdp-${product.slug}-scene-${selectedImage}`

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <section ref={galleryRef}>
          <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
              {product.gallery.map((scene, index) => (
                <button
                  key={scene}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[1.4rem] border p-1 transition ${
                    selectedImage === index
                      ? 'border-velmora-gold bg-velmora-champagne'
                      : 'border-velmora-line/30 bg-white/60'
                  }`}
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-24 w-20 rounded-[1.1rem] object-cover"
                    data-strk-img-id={`pdp-thumb-${product.slug}-${index}`}
                    data-strk-img={`[pdp-${product.slug}-scene-${index}] [pdp-${product.slug}-title] [pdp-${product.slug}-category]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="240"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                  />
                </button>
              ))}

              {product.gallery.map((scene, index) => (
                <span
                  key={`scene-copy-${scene}`}
                  id={`pdp-${product.slug}-scene-${index}`}
                  aria-hidden="true"
                  className="sr-only"
                >
                  {scene}
                </span>
              ))}

            </div>

            <div className="order-1 overflow-hidden rounded-[2.5rem] border border-velmora-line/30 bg-white/60 p-3 shadow-soft sm:order-2">
              <img
                alt={product.name}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover"
                data-strk-img-id={`pdp-main-${product.slug}-${selectedImage}`}
                data-strk-img={`[${selectedSceneId}] [pdp-${product.slug}-title] [pdp-${product.slug}-category]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
              />
            </div>
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-velmora-line/30 bg-white/60 p-6 shadow-soft sm:p-8 lg:sticky lg:top-28">
          <p id={`pdp-${product.slug}-category`} className="text-xs uppercase tracking-[0.32em] text-velmora-gold">
            {product.category}
          </p>
          <h1
            id={`pdp-${product.slug}-title`}
            className="mt-4 font-serif text-4xl uppercase tracking-[0.22em] text-velmora-espresso sm:text-5xl"
          >
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-lg font-medium uppercase tracking-[0.18em] text-velmora-espresso">
              {formatPrice(product.price)}
            </p>
            <StarRating rating={product.rating} reviewCount={product.reviews} />
          </div>
          <p
            id={`pdp-${product.slug}-description`}
            className="mt-6 max-w-xl text-sm leading-8 text-velmora-espresso/74 sm:text-base"
          >
            {product.description}
          </p>

          <div className="mt-8 space-y-6 border-t border-velmora-line/30 pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-espresso">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-champagne text-velmora-espresso'
                        : 'border-velmora-line/40 bg-transparent text-velmora-espresso/72 hover:border-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-espresso">Quantity</p>
              <div className="mt-4 inline-flex items-center rounded-full border border-velmora-line/40 bg-velmora-ivory px-2 py-1">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full p-3 text-velmora-espresso transition hover:bg-velmora-champagne"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full p-3 text-velmora-espresso transition hover:bg-velmora-champagne"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm uppercase tracking-[0.28em] text-velmora-cream transition duration-500 ease-luxe hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Add to Cart
            </button>
            <p className="text-xs uppercase tracking-[0.22em] text-velmora-espresso/60">
              Free worldwide shipping on orders over $75.
            </p>
          </div>

          <div className="mt-8 border-t border-velmora-line/30">
            <AccordionItem title="Description" content={product.description} defaultOpen />
            <AccordionItem title="Materials & Care" content={product.materials} />
            <AccordionItem title="Shipping & Returns" content={product.shipping} />
          </div>
        </section>
      </div>

      <section className="mt-20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">You may also like</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso">More to treasure</h2>
          </div>
          <Link
            to="/shop"
            className="text-sm uppercase tracking-[0.26em] text-velmora-espresso transition hover:text-velmora-gold"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.slug} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}
