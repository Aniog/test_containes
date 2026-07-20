import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const accordionItems = [
  { title: 'Description', content: 'Designed with a quiet-luxury sensibility: polished proportions, subtle shine, and a silhouette that layers beautifully with pieces you already own.' },
  { title: 'Materials & Care', content: '18K gold-plated brass with hypoallergenic posts or chains. Keep away from water, fragrance, and lotions. Store in the included Velmora pouch.' },
  { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition and packaging.' },
]

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedTone, setSelectedTone] = useState(product.toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.imgId)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addItem } = useCart()
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [product.id, activeImage])

  const gallery = useMemo(() => [
    { id: product.imgId, label: 'Editorial product view' },
    { id: product.hoverImgId, label: 'Styled on model' },
    { id: `${product.id}-detail-warm-lit-f35e8b`, label: 'Close detail view' },
  ], [product])

  useEffect(() => {
    setSelectedTone(product.toneOptions[0])
    setQuantity(1)
    setActiveImage(product.imgId)
  }, [product])


  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:pb-24 md:pt-12">
        <div className="grid gap-4 md:grid-cols-[86px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
            {gallery.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image.id)}
                className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-cream transition ${activeImage === image.id ? 'border-velmora-champagne' : 'border-velmora-linen hover:border-velmora-bronze'}`}
                aria-label={image.label}
              >
                <ProductImage product={product} imgId={`thumb-${image.id}`} ratio="1x1" width="240" />
              </button>
            ))}
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden border border-velmora-linen bg-velmora-cream shadow-soft md:order-2">
            {gallery
              .filter((image) => image.id === activeImage)
              .map((image) => (
                <ProductImage key={image.id} product={product} imgId={image.id} width="1100" />
              ))}
          </div>
        </div>

        <aside className="md:sticky md:top-28 md:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.18em] text-velmora-espresso md:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="font-serif text-3xl text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-champagne" aria-label="Rated 5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-mocha">128 Reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-mocha">{product.description}</p>

          <div className="mt-8 border-t border-velmora-linen pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Tone</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.toneOptions.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition ${selectedTone === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-cream' : 'border-velmora-linen bg-velmora-cream text-velmora-espresso hover:border-velmora-bronze'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-cream text-velmora-espresso">
              <button type="button" className="p-4 transition hover:text-velmora-bronze" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
              <button type="button" className="p-4 transition hover:text-velmora-bronze" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, { tone: selectedTone, quantity })}
              className="min-h-14 flex-1 rounded-full bg-velmora-champagne px-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-cream"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
            {accordionItems.map((item) => (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === item.title ? '' : item.title)}
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso"
                >
                  {item.title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === item.title && <p className="pb-5 text-sm leading-7 text-velmora-mocha">{item.content}</p>}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="border-t border-velmora-linen bg-velmora-cream px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">You may also like</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-espresso">Layer with these</h2>
            </div>
            <Link to="/shop" className="hidden border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso md:block">Shop all</Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {relatedProducts.map((item) => <ProductCard key={item.id} product={item} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
