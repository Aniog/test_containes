import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useStrikingImages } from '@/hooks/useStrikingImages.js'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'
const variants = ['Gold Tone', 'Silver Tone']
const accordions = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductDetail({ onAdd }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')
  const containerRef = useStrikingImages([productId, selectedImage])

  const related = useMemo(() => products.filter((item) => item.id !== productId).slice(0, 4), [productId])

  if (!product) return <Navigate to="/shop" replace />

  const detailTitleId = `detail-${product.id}-title`
  const detailDescId = `detail-${product.id}-desc`
  const galleryImages = [
    { id: `detail-${product.id}-main-img`, ratio: '4x3', width: '900', alt: product.alt },
    { id: `detail-${product.id}-worn-img`, ratio: '3x4', width: '900', alt: `${product.name} worn close-up` },
    { id: `detail-${product.id}-gift-img`, ratio: '4x3', width: '900', alt: `${product.name} packaging detail` },
  ]

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden border bg-velmora-cream transition ${selectedImage === index ? 'border-velmora-champagne' : 'border-velmora-champagne/20'}`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`${image.id}-thumb`}
                  data-strk-img={`[${detailDescId}] [${detailTitleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="180"
                  src={placeholder}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-cream shadow-soft md:order-2">
            <img
              alt={galleryImages[selectedImage].alt}
              className="h-full w-full object-cover"
              data-strk-img-id={`${galleryImages[selectedImage].id}-large`}
              data-strk-img={`[${detailDescId}] [${detailTitleId}]`}
              data-strk-img-ratio={galleryImages[selectedImage].ratio}
              data-strk-img-width={galleryImages[selectedImage].width}
              src={placeholder}
            />
          </div>
        </div>

        <div className="md:pl-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso">Back to shop</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">{product.category}</p>
          <h1 id={detailTitleId} className="mt-3 font-serif text-5xl uppercase leading-tight tracking-[0.16em] md:text-7xl">{product.name}</h1>
          <div className="mt-5 flex items-center gap-4">
            <span className="font-serif text-4xl">${product.price}</span>
            <span className="flex items-center gap-1 text-sm text-velmora-cacao">
              <Star className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" />
              {product.rating.toFixed(1)} ({product.reviews} reviews)
            </span>
          </div>
          <p id={detailDescId} className="mt-6 text-base leading-8 text-velmora-cacao">{product.detail}</p>

          <div className="mt-8 border-y border-velmora-champagne/20 py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cacao">Tone</p>
            <div className="flex flex-wrap gap-3">
              {variants.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVariant(item)}
                  className={`rounded-full border px-5 py-3 text-sm transition ${variant === item ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-champagne/40 bg-velmora-linen text-velmora-cacao hover:border-velmora-champagne hover:text-velmora-espresso'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-stretch gap-3">
            <div className="flex border border-velmora-champagne/30 bg-velmora-linen text-velmora-espresso">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="px-4 transition hover:bg-velmora-cream" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="flex min-w-12 items-center justify-center text-sm font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)} className="px-4 transition hover:bg-velmora-cream" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
            <button
              type="button"
              onClick={() => onAdd(product, quantity, variant)}
              className="flex-1 bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-bronze hover:text-velmora-ivory"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10 divide-y divide-velmora-champagne/20 border-y border-velmora-champagne/20">
            {accordions.map((panel) => (
              <div key={panel}>
                <button type="button" onClick={() => setOpenPanel(openPanel === panel ? '' : panel)} className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl text-velmora-espresso">
                  {panel}
                  <span className="text-velmora-bronze">{openPanel === panel ? '−' : '+'}</span>
                </button>
                {openPanel === panel && <p className="pb-6 text-sm leading-7 text-velmora-cacao">{getPanelCopy(panel, product)}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} compact />)}
        </div>
      </section>
    </main>
  )
}

function getPanelCopy(panel, product) {
  if (panel === 'Description') return product.description
  if (panel === 'Materials & Care') return `${product.material}. ${product.care}`
  return 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition and packaging.'
}
