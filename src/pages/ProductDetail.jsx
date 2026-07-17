import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const accordions = [
  { key: 'description', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const [selectedTone, setSelectedTone] = useState(product.toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('main')
  const [openAccordion, setOpenAccordion] = useState('description')
  const detailRef = useRef(null)
  const { addToCart } = useCart()
  useStrkImages(detailRef, [product.id, activeImage])

  const activeImageId = activeImage === 'main' ? product.imgId : product.altImgId
  const activeAlt = activeImage === 'main' ? product.name : `${product.name} styled on model`

  const accordionText = useMemo(
    () => ({
      description: product.detail,
      care: product.care,
      shipping: product.shipping,
    }),
    [product],
  )

  return (
    <main ref={detailRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-32">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {['main', 'alt'].map((imageType) => (
              <button
                key={imageType}
                type="button"
                className={`aspect-square flex-1 overflow-hidden border bg-velmora-cacao transition lg:flex-none ${
                  activeImage === imageType ? 'border-velmora-gold' : 'border-velmora-sand/70'
                }`}
                aria-label={`Show ${imageType === 'main' ? 'main' : 'styled'} image`}
                onClick={() => setActiveImage(imageType)}
              >
                <img
                  alt={imageType === 'main' ? product.name : `${product.name} alternate view`}
                  className="h-full w-full object-cover opacity-90"
                  data-strk-img-id={`thumb-${imageType}-${product.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden bg-velmora-cacao lg:order-2">
            <img
              alt={activeAlt}
              className="aspect-[4/5] h-full w-full object-cover opacity-95"
              data-strk-img-id={`detail-${activeImageId}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-[0.14em] text-velmora-espresso sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-velmora-sand/70 pb-6">
            <p className="font-serif text-3xl text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-cacao/75">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </span>
              {product.rating} ({product.reviews} reviews)
            </div>
          </div>

          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-cacao/80">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.toneOptions.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    selectedTone === tone
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
                      : 'border-velmora-sand bg-velmora-porcelain text-velmora-espresso hover:border-velmora-gold'
                  }`}
                  onClick={() => setSelectedTone(tone)}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-porcelain text-velmora-espresso">
              <button type="button" className="p-4 transition hover:text-velmora-bronze" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                <Minus size={16} />
              </button>
              <span className="min-w-10 text-center font-semibold">{quantity}</span>
              <button type="button" className="p-4 transition hover:text-velmora-bronze" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>
                <Plus size={16} />
              </button>
            </div>
            <button
              type="button"
              className="min-h-14 flex-1 rounded-full bg-velmora-gold px-7 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-bronze hover:text-velmora-porcelain"
              onClick={() => addToCart(product, { tone: selectedTone, quantity })}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 border-y border-velmora-sand/70">
            {accordions.map((accordion) => {
              const isOpen = openAccordion === accordion.key
              return (
                <div key={accordion.key} className="border-b border-velmora-sand/70 last:border-b-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.2em] text-velmora-espresso"
                    onClick={() => setOpenAccordion(isOpen ? '' : accordion.key)}
                  >
                    {accordion.title}
                    <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-7 text-velmora-cacao/75">{accordionText[accordion.key]}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-velmora-porcelain py-16 text-velmora-espresso lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between gap-5 border-b border-velmora-sand/70 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-espresso">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso sm:block">
              Shop all
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
