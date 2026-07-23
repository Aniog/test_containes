import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import RelatedProducts from '@/components/product/RelatedProducts'
import StarRating from '@/components/shared/StarRating'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
} from '@/data/store'

const ProductDetail = () => {
  const containerRef = useRef(null)
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setActiveImage(0)
    setSelectedTone(product?.tones[0] || 'Gold Tone')
    setQuantity(1)
  }, [product])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug, activeImage])

  const accordionItems = useMemo(
    () => [
      { title: 'Description', content: product?.description },
      {
        title: 'Materials & Care',
        content: `${product?.materials} ${product?.care}`,
      },
      { title: 'Shipping & Returns', content: product?.shipping },
    ],
    [product],
  )

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl text-neutral-950">Product not found</h1>
        <Link className="mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-4 text-sm uppercase tracking-[0.28em] text-stone-50" to="/shop">
          Return to shop
        </Link>
      </section>
    )
  }

  return (
    <div className="pb-16 pt-28 md:pb-24" ref={containerRef}>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-stone-500">
          <Link to="/">Home</Link>
          <span>·</span>
          <Link to="/shop">Shop</Link>
          <span>·</span>
          <span className="text-neutral-950">{product.name}</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery
            activeImage={activeImage}
            onImageChange={setActiveImage}
            product={product}
          />
          <div className="lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              {product.category}
            </p>
            <h1
              className="mt-4 font-display text-4xl uppercase leading-none tracking-product text-neutral-950 sm:text-5xl"
              id={`${product.slug}-title`}
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-2xl font-medium text-neutral-950">
                {formatPrice(product.price)}
              </p>
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tones.map((tone) => {
                  const isActive = selectedTone === tone

                  return (
                    <button
                      className={`rounded-full border px-5 py-3 text-sm transition ${isActive ? 'border-neutral-950 bg-neutral-950 text-stone-50' : 'border-stone-300 bg-white text-neutral-950 hover:border-stone-400'}`}
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      type="button"
                    >
                      {tone}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-stone-300 bg-white p-1">
                <button
                  aria-label="Decrease quantity"
                  className="rounded-full p-3 text-neutral-950"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  type="button"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm font-medium text-neutral-950">
                  {quantity}
                </span>
                <button
                  aria-label="Increase quantity"
                  className="rounded-full p-3 text-neutral-950"
                  onClick={() => setQuantity((current) => current + 1)}
                  type="button"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              className="mt-8 w-full rounded-full bg-amber-600 px-6 py-4 text-sm font-medium uppercase tracking-[0.28em] text-stone-50 transition hover:bg-amber-700"
              onClick={() => addItem(product, selectedTone, quantity)}
              type="button"
            >
              Add to Cart
            </button>

            <ProductAccordion items={accordionItems} />
          </div>
        </div>

        <RelatedProducts products={getRelatedProducts(product.slug)} />
      </section>
    </div>
  )
}

export default ProductDetail
