import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, Star } from 'lucide-react'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

function ProductDetail() {
  const pageRef = useRef(null)
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 4),
    [productId],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const displayedRating = Math.round(product.rating)
  const gallery = [
    { id: product.imageId, label: product.name },
    { id: product.hoverImageId, label: `${product.name} worn` },
    { id: `${product.id}-detail-packaging-83f0a2`, label: `${product.name} packaging` },
  ]

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.care },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on every order. Pieces arrive in Velmora gift packaging and may be returned within 30 days in unworn condition.',
    },
  ]

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') cleanupImages()
    }
  }, [productId, activeImage])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-20 w-20 shrink-0 overflow-hidden border bg-velmora-champagne velmora-image transition ${
                  activeImage === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-champagne'
                }`}
                aria-label={`View ${image.label}`}
              >
                <span
                  className="block h-full w-full bg-cover bg-center"
                  data-strk-bg-id={`thumb-${image.id}`}
                  data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="220"
                  role="img"
                  aria-label={image.label}
                />
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden bg-velmora-champagne velmora-image shadow-velvet lg:order-2">
            <div className="relative aspect-[4/5]">
              {gallery.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 bg-cover bg-center transition duration-500 ${
                    activeImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  data-strk-bg-id={`detail-${image.id}`}
                  data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="1100"
                  role="img"
                  aria-label={image.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:pt-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-luxury text-velmora-deepgold hover:text-velmora-espresso">
            Back to shop
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-luxury text-velmora-deepgold">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-luxury text-velmora-espresso sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-ink/75">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className={`h-4 w-4 ${index < displayedRating ? 'fill-current' : ''}`} />
                ))}
              </span>
              <span>{product.rating} · {product.reviews} reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-ink/78">{product.shortDescription}</p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Tone</p>
              <div className="flex gap-3">
                {product.colorways.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                      selectedVariant === variant
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-porcelain'
                        : 'border-velmora-champagne bg-velmora-porcelain text-velmora-espresso hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Quantity</p>
              <div className="flex w-36 items-center border border-velmora-champagne bg-velmora-porcelain">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-espresso hover:bg-velmora-champagne/60" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center font-semibold text-velmora-espresso">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-espresso hover:bg-velmora-champagne/60" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, { variant: selectedVariant, quantity })}
              className="w-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso shadow-glint transition hover:bg-velmora-deepgold hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-deepgold focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <Accordion items={accordions} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-deepgold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-luxury text-velmora-deepgold hover:text-velmora-espresso sm:block">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
