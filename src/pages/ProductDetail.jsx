import { Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard.jsx'
import { useCart } from '@/components/layout/CartContext.jsx'
import { getProductById, products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addToCart } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') {
        cleanupImages()
      }
    }
  }, [product.id, selectedImage])

  const gallery = useMemo(() => [
    {
      id: `${product.id}-gallery-main`,
      label: 'Studio detail',
      contextId: `${product.id}-gallery-main-context`,
      context: 'Warm studio close up of demi-fine gold jewelry on neutral stone',
      ratio: '4x3',
    },
    {
      id: `${product.id}-gallery-worn`,
      label: 'Worn view',
      contextId: `${product.id}-gallery-worn-context`,
      context: 'Gold jewelry worn on model close up warm editorial skin tone',
      ratio: '4x3',
    },
    {
      id: `${product.id}-gallery-gift`,
      label: 'Gift ready',
      contextId: `${product.id}-gallery-gift-context`,
      context: 'Velmora jewelry packaging box warm ivory and gold luxury gift',
      ratio: '4x3',
    },
  ], [product.id])

  const selectedGalleryImage = gallery[selectedImage]
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  const accordions = [
    ['Description', product.details],
    ['Materials & Care', product.care],
    ['Shipping & Returns', 'Free worldwide shipping on every order. If it is not quite right, return unworn pieces within 30 days in their original packaging.'],
  ]

  return (
    <main ref={containerRef} className="bg-velmora-cream pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 text-sm text-velmora-espresso">
          <Link to="/shop" className="underline-offset-4 transition hover:text-velmora-gold-dark hover:underline">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-mist transition ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-mist hover:border-velmora-gold-dark'}`}
                  aria-label={`Show ${image.label}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div
                    className="h-full w-full bg-cover bg-center"
                    data-strk-bg-id={`thumb-${image.id}-c8a7e2`}
                    data-strk-bg={`[${image.contextId}] [${product.descId}] [${product.titleId}]`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="200"
                    role="img"
                    aria-label={image.label}
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden bg-velmora-mist shadow-soft lg:order-2">
              <div
                className="aspect-[4/5] h-full w-full bg-cover bg-center lg:aspect-[4/5]"
                data-strk-bg-id={`detail-${selectedGalleryImage.id}-f1d4b9`}
                data-strk-bg={`[${selectedGalleryImage.contextId}] [${product.descId}] [${product.titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1100"
                role="img"
                aria-label={`${product.name} ${selectedGalleryImage.label}`}
              />
            </div>
            {gallery.map((image) => (
              <span key={image.contextId} id={image.contextId} className="sr-only">{image.context}</span>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">{product.category}</p>
            <h1 id={product.titleId} className="mt-3 font-serif text-5xl uppercase leading-none tracking-luxe text-velmora-ink md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="font-serif text-3xl text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-espresso">
                <span className="flex text-velmora-gold-dark" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span>{product.rating} ({product.reviews})</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-espresso">
              {product.description}
            </p>

            <div className="mt-8 border-t border-velmora-mist pt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${tone === option ? 'border-velmora-ink bg-velmora-ink text-velmora-porcelain' : 'border-velmora-mist bg-velmora-porcelain text-velmora-ink hover:border-velmora-gold'}`}
                    onClick={() => setTone(option)}
                  >
                    {option} Tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-[8rem_1fr]">
              <div className="flex h-14 items-center justify-between border border-velmora-mist bg-velmora-porcelain text-velmora-ink">
                <button
                  type="button"
                  className="flex h-full w-11 items-center justify-center bg-transparent text-velmora-ink transition hover:bg-velmora-mist"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-medium">{quantity}</span>
                <button
                  type="button"
                  className="flex h-full w-11 items-center justify-center bg-transparent text-velmora-ink transition hover:bg-velmora-mist"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((value) => value + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                className="h-14 bg-velmora-gold px-7 text-xs font-bold uppercase tracking-luxe text-velmora-ink shadow-glow transition hover:bg-velmora-ink hover:text-velmora-porcelain"
                onClick={() => addToCart(product, quantity, tone)}
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-mist border-y border-velmora-mist">
              {accordions.map(([title, content]) => (
                <div key={title}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-transparent py-5 text-left text-xs font-bold uppercase tracking-luxe text-velmora-ink"
                    onClick={() => setOpenAccordion(openAccordion === title ? '' : title)}
                    aria-expanded={openAccordion === title}
                  >
                    {title}
                    <span className="text-lg text-velmora-gold-dark">{openAccordion === title ? '−' : '+'}</span>
                  </button>
                  {openAccordion === title && (
                    <p className="pb-5 text-sm leading-7 text-velmora-espresso">{content}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10">
        <div className="mb-8 border-b border-velmora-mist pb-6">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">Complete the ritual</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ink">You may also like</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
