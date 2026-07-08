import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { getProductBySlug, products } from '@/data/products'
import { formatPrice } from '@/lib/cart'
import { getStockImageSource } from '@/lib/images'
import { useImageLoader } from '@/hooks/useImageLoader'

const tones = ['Gold', 'Silver']
const accordionItems = [
  { title: 'Description', key: 'detail' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useImageLoader([slug, selectedImage])

  const related = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { id: `${product.id}-front`, imageId: `thumb-${product.id}-front`, label: product.name, ratio: '3x4' },
    { id: `${product.id}-worn`, imageId: `thumb-${product.id}-worn`, label: `${product.name} styling`, ratio: '3x4' },
    { id: `${product.id}-detail`, imageId: `thumb-${product.id}-detail`, label: `${product.name} detail`, ratio: '1x1' },
  ]
  const activeGallery = gallery[selectedImage]

  const getAccordionContent = (key) => {
    if (key === 'detail') return product.detail
    if (key === 'care') return `${product.material}. ${product.care}`
    return 'Free worldwide shipping on orders over $75. Every piece is eligible for 30-day returns in unworn condition with original packaging.'
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-sable transition hover:text-velmora-champagne">← Back to shop</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:content-start">
                {gallery.map((image, index) => (
                  <button key={image.id} onClick={() => setSelectedImage(index)} className={`overflow-hidden rounded-full border p-1 transition lg:rounded-none ${selectedImage === index ? 'border-velmora-champagne' : 'border-velmora-mist hover:border-velmora-champagne'}`} aria-label={`View ${image.label}`}>
                    <img
                      alt={image.label}
                      data-strk-img-id={image.imageId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="180"
                      className="h-20 w-20 rounded-full object-cover lg:rounded-none"
                      src={getStockImageSource(image.imageId)}
                    />
                  </button>
                ))}
              </div>
              <div className="order-1 overflow-hidden bg-velmora-pearl lg:order-2">
                <img
                  alt={activeGallery.label}
                  data-strk-img-id={activeGallery.imageId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio={activeGallery.ratio}
                  data-strk-img-width="1100"
                  className="aspect-[3/4] w-full object-cover"
                  src={getStockImageSource(activeGallery.imageId)}
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">{product.category}</p>
              <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.16em] text-velmora-ink sm:text-5xl">{product.name}</h1>
              <div className="mt-5 flex items-center gap-4">
                <p className="font-serif text-3xl text-velmora-ink">{formatPrice(product.price)}</p>
                <div className="flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                  <span className="ml-2 text-sm text-velmora-sable">{product.reviews} reviews</span>
                </div>
              </div>
              <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-sable">{product.description}</p>

              <div className="mt-8 border-t border-velmora-mist pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
                <div className="mt-4 flex gap-3">
                  {tones.map((item) => (
                    <button key={item} onClick={() => setTone(item)} className={`rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${tone === item ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink' : 'border-velmora-mist text-velmora-sable hover:border-velmora-champagne hover:text-velmora-ink'}`}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-velmora-mist bg-white/60 text-velmora-ink">
                  <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                  <button onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
                <button onClick={() => onAddToCart(product, tone, quantity)} className="min-h-12 flex-1 rounded-full bg-velmora-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-ink">
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 border-t border-velmora-mist">
                {accordionItems.map((item) => {
                  const open = openAccordion === item.title
                  return (
                    <div key={item.title} className="border-b border-velmora-mist">
                      <button onClick={() => setOpenAccordion(open ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">
                        {item.title}
                        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
                      </button>
                      {open && <p className="pb-6 text-sm leading-7 text-velmora-sable">{getAccordionContent(item.key)}</p>}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl text-velmora-ink">You may also like</h2>
          <div className="mt-9 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
