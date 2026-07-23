import { ArrowLeft, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, useParams } from 'react-router-dom'
import Accordion from '@/components/products/Accordion'
import ProductCard from '@/components/products/ProductCard'
import { formatPrice, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const galleryStyles = [
  { id: 'hero', label: 'Detail', mood: 'warm close up of gold demi fine jewelry on neutral silk' },
  { id: 'worn', label: 'Worn', mood: 'gold jewelry worn by woman in soft editorial light' },
  { id: 'gift', label: 'Gift', mood: 'premium jewelry gift box with gold piece and ivory ribbon' },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const pageRef = useRef(null)
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState(galleryStyles[0])
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const dependencyKey = `${product.id}-${selectedImage.id}-${variant}`

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [dependencyKey])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const selectedMoodId = `detail-${product.id}-${selectedImage.id}-mood`

  const accordionItems = [
    { title: 'Description', content: product.detail },
    { title: 'Materials & Care', content: `${product.material} over a durable base with hypoallergenic posts or clasping. ${product.care}` },
    { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping and 30-day returns on unworn pieces in original packaging.' },
  ]

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-5 pb-16 pt-6 md:px-8 md:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="velmora-focus mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe transition hover:text-velmora-goldDeep">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Shop
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
            <div className="grid gap-4 md:grid-cols-[92px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:grid md:content-start md:overflow-visible">
                {galleryStyles.map((style) => {
                  const moodId = `detail-${product.id}-${style.id}-thumb-mood`
                  return (
                    <button key={style.id} type="button" onClick={() => setSelectedImage(style)} className={`velmora-focus aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-parchment transition md:w-full ${selectedImage.id === style.id ? 'border-velmora-gold' : 'border-velmora-mist hover:border-velmora-taupe'}`} aria-label={`View ${style.label} image`}>
                      <img
                        alt={`${product.name} ${style.label}`}
                        className="h-full w-full object-cover"
                        data-strk-img-id={`detail-${product.id}-${style.id}-thumb`}
                        data-strk-img={`[${moodId}] [${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="220"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                      <span id={moodId} className="sr-only">{style.mood}</span>
                    </button>
                  )
                })}
              </div>
              <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-editorial md:order-2">
                <img
                  alt={`${product.name} selected view`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`detail-${product.id}-${selectedImage.id}-main`}
                  data-strk-img={`[${selectedMoodId}] [${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span id={selectedMoodId} className="sr-only">{selectedImage.mood}</span>
              </div>
            </div>

            <div className="text-velmora-espresso lg:pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">{product.category}</p>
              <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-balance text-velmora-espresso md:text-7xl">{product.name}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <p className="text-xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
                <div className="flex items-center gap-2 text-sm text-velmora-charcoal">
                  <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                  </span>
                  {product.rating} · {product.reviews} reviews
                </div>
              </div>
              <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-charcoal">{product.description}</p>

              <div className="mt-8 border-y border-velmora-mist py-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">Tone</p>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((tone) => (
                    <button key={tone} type="button" onClick={() => setVariant(tone)} className={`velmora-focus rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-mist bg-velmora-linen text-velmora-espresso hover:border-velmora-gold'}`}>{tone}</button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-stretch gap-3">
                <div className="flex items-center rounded-full border border-velmora-mist bg-velmora-linen">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="velmora-focus rounded-full p-4 text-velmora-espresso transition hover:text-velmora-goldDeep" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="w-10 text-center text-sm font-bold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="velmora-focus rounded-full p-4 text-velmora-espresso transition hover:text-velmora-goldDeep" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
                <button type="button" onClick={() => onAddToCart(product, variant, quantity)} className="velmora-focus flex-1 rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-soft transition hover:bg-velmora-goldDeep hover:text-velmora-ivory">Add to Cart</button>
              </div>

              <div className="mt-8">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-mist bg-velmora-linen px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">Complete the ritual</p>
              <h2 className="font-serif text-5xl font-semibold text-velmora-espresso md:text-6xl">You may also like</h2>
            </div>
            <Link to="/shop" className="velmora-focus text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe transition hover:text-velmora-goldDeep">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} imagePrefix="related-product" compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
