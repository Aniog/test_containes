import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import Stars from '@/components/product/Stars.jsx'
import { formatPrice, products } from '@/data/products.js'
import { imagePlaceholder, loadStrikinglyImages } from '@/lib/imageHelpers.js'

const galleryLabels = ['Editorial still life', 'Worn close up', 'Giftable detail', 'Warm texture']
const tones = ['Gold', 'Silver']
const accordions = [
  {
    title: 'Description',
    content:
      'Every Velmora piece is designed to bring polish to the everyday: luminous enough for occasions, easy enough for morning coffee, and refined enough to keep in rotation.',
  },
  {
    title: 'Materials & Care',
    content:
      'Demi-fine 18K gold plating over durable base metals with hypoallergenic finishing. Keep away from water, lotions, and perfume, then store in the included pouch.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Enjoy free worldwide shipping on every order. If your piece is not quite right, return it within 30 days in its original condition.',
  },
]

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const { addToCart } = useCart()
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const gallery = useMemo(
    () =>
      galleryLabels.map((label, index) => ({
        id: `${product.id}-gallery-${index}`,
        label,
        titleId: `detail-${product.id}-${index}-title`,
        descId: `detail-${product.id}-${index}-desc`,
      })),
    [product.id],
  )

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      loadStrikinglyImages(containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [product.id, selectedImage])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                type="button"
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 w-20 flex-none overflow-hidden border bg-velmora-champagne transition ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-espresso/10 hover:border-velmora-gold/60'}`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${image.id}-91c`}
                  data-strk-img={`[${image.descId}] [${image.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="220"
                  src={imagePlaceholder}
                />
              </button>
            ))}
          </div>
          <div className="order-1 relative min-h-[520px] overflow-hidden bg-velmora-champagne lg:order-2 lg:min-h-[720px]">
            <img
              alt={`${product.name} ${gallery[selectedImage].label}`}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id={`detail-main-${gallery[selectedImage].id}-d8b`}
              data-strk-img={`[${gallery[selectedImage].descId}] [${gallery[selectedImage].titleId}] [detail-product-desc] [detail-product-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={imagePlaceholder}
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">{product.category}</p>
          <h1 id="detail-product-title" className="mt-4 font-serif text-5xl uppercase leading-tight tracking-[0.18em] text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <p className="font-serif text-3xl text-velmora-espresso">{formatPrice(product.price)}</p>
            <Stars rating={product.rating} reviews={product.reviews} />
          </div>
          <p id="detail-product-desc" className="mt-6 max-w-xl text-base leading-8 text-velmora-mocha">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-espresso/10 py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Tone</p>
            <div className="flex gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${selectedTone === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-cream' : 'border-velmora-espresso/15 bg-velmora-cream text-velmora-espresso hover:border-velmora-gold'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-velmora-espresso/15 bg-velmora-cream text-velmora-espresso">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 transition hover:text-velmora-gold" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center text-sm font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 transition hover:text-velmora-gold" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addToCart(product, quantity, selectedTone)}
              className="min-h-12 flex-1 rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.26em] text-velmora-cream transition hover:bg-velmora-espresso"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-espresso/10 border-t border-velmora-espresso/10">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.title
              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-7 text-velmora-mocha">{item.title === 'Description' ? product.details : item.title === 'Materials & Care' ? product.care : item.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="hidden">
          {gallery.map((image) => (
            <div key={image.id}>
              <p id={image.titleId}>{product.name}</p>
              <p id={image.descId}>{image.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-5xl text-velmora-espresso">You may also like</h2>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold">
            View all
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
