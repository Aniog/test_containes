import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, ShieldCheck, Truck } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import RatingStars from '@/components/products/RatingStars'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/cart'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/images'

const variants = ['Gold', 'Silver']

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openPanels, setOpenPanels] = useState(['Description'])

  const related = useMemo(() => products.filter((item) => item.id !== product?.id).slice(0, 4), [product])

  if (!product) return <Navigate to="/shop" replace />

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const materialId = `detail-${product.id}-material`
  const gallery = [
    { id: 'main', label: 'Main editorial image', query: `[${descId}] [${titleId}] [${materialId}]`, imageId: `detail-main-${product.id}-main-c7fe` },
    { id: 'model', label: 'Styled on model', query: `[${materialId}] [${titleId}] [${descId}]`, imageId: `detail-main-${product.id}-model-c7fe` },
    { id: 'detail', label: 'Close detail', query: `[${titleId}] [${materialId}] [${descId}]`, imageId: `detail-main-${product.id}-detail-c7fe` },
  ]

  const handleAdd = () => {
    onAddToCart(product, variant, quantity)
  }

  const togglePanel = (panel) => {
    setOpenPanels((current) =>
      current.includes(panel) ? current.filter((item) => item !== panel) : [...current, panel],
    )
  }

  return (
    <main className="bg-velmora-pearl pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`aspect-square w-20 shrink-0 overflow-hidden rounded-2xl border bg-velmora-linen transition ${
                  selectedImage === index ? 'border-velmora-champagne' : 'border-velmora-mist hover:border-velmora-cocoa'
                }`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`detail-thumb-${product.id}-${image.id}-b541`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="180"
                  src={getStrkImageUrl(strkImgConfig, image.imageId)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.25rem] bg-velmora-linen shadow-card lg:order-2">
            <img
              key={gallery[selectedImage].id}
              alt={`${product.name} ${gallery[selectedImage].label}`}
              className="aspect-[4/5] h-full w-full object-cover animate-fade-in"
              data-strk-img-id={`detail-main-${product.id}-${gallery[selectedImage].id}-c7fe`}
              data-strk-img={gallery[selectedImage].query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={getStrkImageUrl(strkImgConfig, gallery[selectedImage].imageId)}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p id={materialId} className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">{product.material}</p>
          <h1 id={titleId} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-[0.16em] text-velmora-ink sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-velmora-mist py-5">
            <p className="text-2xl font-bold text-velmora-ink">{formatPrice(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-cocoa/82">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-cocoa">Tone</p>
            <div className="flex gap-3">
              {variants.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVariant(item)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                    variant === item
                      ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                      : 'border-velmora-mist bg-white text-velmora-cocoa hover:border-velmora-champagne hover:text-velmora-ink'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-mist bg-white text-velmora-ink">
              <button type="button" className="p-4 hover:text-velmora-champagne" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-bold">{quantity}</span>
              <button type="button" className="p-4 hover:text-velmora-champagne" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button type="button" onClick={handleAdd} className="min-h-14 flex-1 rounded-full bg-velmora-ink px-6 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-pearl shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-champagne hover:text-velmora-ink">
              Add to Cart
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-velmora-linen px-4 py-3 text-sm font-semibold text-velmora-cocoa">
              <Truck className="h-5 w-5 text-velmora-champagne" /> Free worldwide shipping
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-velmora-linen px-4 py-3 text-sm font-semibold text-velmora-cocoa">
              <ShieldCheck className="h-5 w-5 text-velmora-champagne" /> Hypoallergenic finish
            </div>
          </div>

          <div className="mt-8 divide-y divide-velmora-mist border-y border-velmora-mist">
            <Accordion title="Description" openPanels={openPanels} togglePanel={togglePanel}>{product.details}</Accordion>
            <Accordion title="Materials & Care" openPanels={openPanels} togglePanel={togglePanel}>{product.care}</Accordion>
            <Accordion title="Shipping & Returns" openPanels={openPanels} togglePanel={togglePanel}>{product.shipping}</Accordion>
          </div>
        </div>
      </section>

      <section className="bg-velmora-linen py-14 text-velmora-ink sm:py-20 lg:py-20">
        <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink hover:text-velmora-champagne sm:block">Shop all</Link>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

function Accordion({ title, children, openPanels, togglePanel }) {
  const isOpen = openPanels.includes(title)
  return (
    <div className="py-5 text-velmora-ink">
      <button type="button" onClick={() => togglePanel(title)} className="flex w-full items-center justify-between text-left text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink">
        {title}
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="mt-4 text-sm leading-7 text-velmora-cocoa/82">{children}</p>}
    </div>
  )
}
