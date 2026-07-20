import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products.js'
import { formatPrice } from '@/lib/cart.js'
import JewelryImage from '@/components/common/JewelryImage.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'

const variants = ['Gold Tone', 'Silver Tone']
const accordionItems = [
  { id: 'description', title: 'Description' },
  { id: 'care', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

const ProductDetail = ({ onAddToCart }) => {
  const { slug } = useParams()
  const pageRef = useRef(null)
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState('primary')
  const [variant, setVariant] = useState(variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const activeQuery = selectedImage === 'primary'
    ? `[${descId}] [${titleId}]`
    : `[${titleId}] [${descId}]`

  return (
    <main ref={pageRef} className="bg-velmora-parchment pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4 md:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {['primary', 'secondary'].map((imageType) => (
              <button
                key={imageType}
                type="button"
                onClick={() => setSelectedImage(imageType)}
                className={`aspect-square overflow-hidden rounded-2xl border bg-velmora-mist transition ${
                  selectedImage === imageType ? 'border-velmora-espresso' : 'border-velmora-stone hover:border-velmora-gold'
                }`}
                aria-label={`View ${imageType} image`}
              >
                <JewelryImage
                  imgId={`thumb-${imageType}-${product.id}-8ab1`}
                  query={imageType === 'primary' ? `[${descId}] [${titleId}]` : `[${titleId}] [${descId}]`}
                  ratio="1x1"
                  width="220"
                  alt={`${product.name} ${imageType}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-mist shadow-editorial md:order-2">
            <JewelryImage
              imgId={`detail-main-${selectedImage}-${product.id}-73de`}
              query={activeQuery}
              ratio="3x4"
              width="1200"
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-velmora-goldDark">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.14em] text-velmora-espresso md:text-7xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-taupe">
              <span className="flex text-velmora-goldDark" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>{product.rating.toFixed(1)} · {product.reviewCount} reviews</span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-lg leading-9 text-velmora-taupe">
            {product.shortDescription}
          </p>

          <div className="mt-8 border-y border-velmora-stone/70 py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Tone</p>
            <div className="flex flex-wrap gap-3">
              {variants.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVariant(item)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    variant === item
                      ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                      : 'border-velmora-stone bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <div className="flex h-14 w-full items-center justify-between rounded-full border border-velmora-stone bg-velmora-ivory px-2 text-velmora-espresso sm:w-36">
              <button
                type="button"
                className="rounded-full p-3 text-velmora-espresso transition hover:bg-velmora-mist"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold text-velmora-espresso">{quantity}</span>
              <button
                type="button"
                className="rounded-full p-3 text-velmora-espresso transition hover:bg-velmora-mist"
                aria-label="Increase quantity"
                onClick={() => setQuantity((current) => current + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, variant, quantity)}
              className="min-h-14 flex-1 rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-goldDark focus:outline-none focus:ring-2 focus:ring-velmora-espresso focus:ring-offset-2 focus:ring-offset-velmora-parchment"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-stone/70 border-y border-velmora-stone/70">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.id
              const content = item.id === 'description' ? product.description : item.id === 'care' ? product.care : product.shipping

              return (
                <div key={item.id} className="text-velmora-espresso">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.id)}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="pb-6 text-sm leading-7 text-velmora-taupe">{content}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mb-10 flex items-end justify-between gap-6 border-t border-velmora-stone/70 pt-12">
          <h2 className="font-serif text-4xl font-medium text-velmora-espresso md:text-6xl">You may also like</h2>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe transition hover:text-velmora-espresso sm:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
