import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { getProductBySlug, products } from '@/data/products'
import { getPdpImageUrl } from '@/lib/strk-image'
import { useCart } from '@/components/cart/CartContext'
import Rating from '@/components/product/Rating'
import ProductCard from '@/components/product/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

const tones = ['Gold', 'Silver']
const accordionItems = [
  { key: 'description', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug) || products[0]
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const { addItem } = useCart()
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [slug, activeImage])


  const gallery = useMemo(
    () => [
      {
        id: `pdp-${product.id}-main`,
        alt: product.name,
        query: `[pdp-product-desc] [pdp-product-title] warm gold jewelry product editorial`,
        thumbSrc: getPdpImageUrl(product, `pdp-${product.id}-main`, 'thumb'),
        imageSrc: getPdpImageUrl(product, `pdp-${product.id}-main`, 'large'),
      },
      {
        id: `pdp-${product.id}-worn`,
        alt: `${product.name} worn on model`,
        query: `[pdp-product-title] jewelry worn on model close up warm light`,
        thumbSrc: getPdpImageUrl(product, `pdp-${product.id}-worn`, 'thumb'),
        imageSrc: getPdpImageUrl(product, `pdp-${product.id}-worn`, 'large'),
      },
      {
        id: `pdp-${product.id}-detail`,
        alt: `${product.name} detail`,
        query: `[pdp-product-desc] jewelry macro detail gold craftsmanship`,
        thumbSrc: getPdpImageUrl(product, `pdp-${product.id}-detail`, 'thumb'),
        imageSrc: getPdpImageUrl(product, `pdp-${product.id}-detail`, 'large'),
      },
    ],
    [product],
  )

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, { tone: selectedTone, quantity })
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[90px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto scrollbar-hide lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`shrink-0 overflow-hidden border bg-velmora-bone transition ${
                    activeImage === index ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-champagne'
                  }`}
                  aria-label={`Show ${image.alt}`}
                >
                  <img
                    alt={image.alt}
                    className="h-20 w-20 object-cover lg:h-24 lg:w-full"
                    data-strk-img-id={`${image.id}-thumb`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={image.thumbSrc}
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden border border-velmora-line bg-velmora-bone shadow-soft lg:order-2">
              <img
                alt={gallery[activeImage].alt}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`${gallery[activeImage].id}-large`}
                data-strk-img={gallery[activeImage].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src={gallery[activeImage].imageSrc}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
              {product.category}
            </p>
            <h1 id="pdp-product-title" className="mt-4 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-ink sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-col gap-3 border-b border-velmora-line pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-4xl text-velmora-ink">${product.price}</p>
              <Rating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p id="pdp-product-desc" className="mt-6 text-base leading-8 text-velmora-taupe">
              {product.description}
            </p>

            <div className="mt-8 border-y border-velmora-line py-6">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">
                  Tone
                </p>
                <div className="flex flex-wrap gap-3">
                  {tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                        selectedTone === tone
                          ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                          : 'border-velmora-line bg-velmora-pearl text-velmora-ink hover:border-velmora-champagne'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-velmora-line bg-velmora-pearl">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="inline-flex h-12 w-12 items-center justify-center text-velmora-ink transition hover:bg-velmora-bone"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm font-bold text-velmora-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="inline-flex h-12 w-12 items-center justify-center text-velmora-ink transition hover:bg-velmora-bone"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
            >
              Add to Cart
            </button>

            <div className="mt-8 divide-y divide-velmora-line border-y border-velmora-line">
              {accordionItems.map((item) => {
                const isOpen = openAccordion === item.key
                return (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : item.key)}
                      className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink"
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                      <p className="text-sm leading-7 text-velmora-taupe">
                        {item.key === 'description' ? product.details : item.key === 'care' ? product.care : product.shipping}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
                You may also like
              </p>
              <h2 className="font-serif text-4xl font-semibold text-velmora-ink sm:text-5xl">
                Complete the ritual.
              </h2>
            </div>
            <Link to="/shop" className="w-fit border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-gold">
              View all
            </Link>
          </div>
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} imageScope="related" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
