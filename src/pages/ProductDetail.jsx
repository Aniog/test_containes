import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { formatPrice, products } from '@/data/products'
import { useCart } from '@/components/CartContext'
import ProductCard from '@/components/ProductCard'
import ProductImage from '@/components/ProductImage'

const tones = ['Gold', 'Silver']

const accordions = [
  {
    title: 'Description',
    content: 'Each Velmora piece is edited for warmth, comfort, and a refined everyday shine. Layer it with your existing jewelry or wear it as a single quiet statement.',
  },
  {
    title: 'Materials & Care',
    content: '18K gold plated over a durable base with hypoallergenic finishing. Keep dry, store separately, and polish gently with a soft cloth after wear.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Enjoy free worldwide shipping and 30-day returns. Orders are prepared in our signature gift-ready packaging.',
  },
]

function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addToCart } = useCart()

  const gallery = useMemo(
    () => [
      { id: 'hero', label: 'Signature angle', detail: `${product.description} warm editorial jewelry product close up` },
      { id: 'worn', label: 'Worn on model', detail: `${product.category} demi fine jewelry worn by woman neutral styling` },
      { id: 'detail', label: 'Detail finish', detail: `${product.material} texture clasp crystal detail gold jewelry macro` },
      { id: 'gift', label: 'Gift-ready packaging', detail: `${product.name} jewelry in elegant gift box warm luxury packaging` },
    ],
    [product],
  )

  const productNameId = `detail-${product.id}-name`
  const productDescId = `detail-${product.id}-desc`
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-velmora-ivory pb-16 pt-28 text-velmora-umber md:pb-24">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.08fr_0.92fr] md:px-8">
        <div className="grid gap-4 md:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => {
              const labelId = `detail-${product.id}-${image.id}-label`
              const detailId = `detail-${product.id}-${image.id}-copy`
              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square w-20 flex-none overflow-hidden border bg-velmora-pearl transition md:w-full ${activeImage === index ? 'border-velmora-antique' : 'border-velmora-linen hover:border-velmora-champagne'}`}
                  aria-label={`View ${image.label}`}
                >
                  <ProductImage
                    alt={`${product.name} ${image.label}`}
                    imgId={`detail-${product.id}-${image.id}-thumb`}
                    query={`[${detailId}] [${labelId}] [${productNameId}]`}
                    ratio="1x1"
                    width="220"
                    className="h-full w-full object-cover"
                  />
                  <span id={labelId} className="sr-only">{image.label}</span>
                  <span id={detailId} className="sr-only">{image.detail}</span>
                </button>
              )
            })}
          </div>

          <div className="relative order-1 aspect-[3/4] overflow-hidden bg-velmora-pearl md:order-2">
            {gallery.map((image, index) => {
              const labelId = `detail-${product.id}-${image.id}-label`
              const detailId = `detail-${product.id}-${image.id}-copy`
              return (
                <ProductImage
                  key={image.id}
                  alt={`${product.name} ${image.label}`}
                  imgId={`detail-${product.id}-${image.id}-main`}
                  query={`[${detailId}] [${labelId}] [${productDescId}] [${productNameId}]`}
                  ratio="3x4"
                  width="1000"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${activeImage === index ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                />
              )
            })}
          </div>
        </div>

        <aside className="self-start md:sticky md:top-28">
          <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-antique">{product.category}</p>
          <h1 id={productNameId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-luxe text-velmora-umber md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-velmora-linen pb-6">
            <p className="text-2xl font-semibold text-velmora-umber">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-velmora-champagne">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-velmora-cocoa">{product.rating} · {product.reviews} reviews</span>
            </div>
          </div>
          <p id={productDescId} className="mt-6 text-base leading-8 text-velmora-cocoa md:text-lg">
            {product.detail}
          </p>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-umber">Tone</p>
            <div className="mt-3 flex gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${selectedTone === tone ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory' : 'border-velmora-linen bg-velmora-ivory text-velmora-umber hover:border-velmora-champagne'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-umber">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-velmora-linen bg-velmora-ivory text-velmora-umber">
              <button type="button" className="p-4 transition hover:bg-velmora-pearl" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center font-semibold">{quantity}</span>
              <button type="button" className="p-4 transition hover:bg-velmora-pearl" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, { tone: selectedTone, quantity })}
            className="mt-8 w-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-obsidian shadow-glow transition hover:bg-velmora-antique hover:text-velmora-ivory"
          >
            Add to Cart
          </button>

          <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.title
              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-luxe text-velmora-umber"
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                    <p className="text-sm leading-7 text-velmora-cocoa">{item.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-antique">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-umber md:text-6xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-luxe text-velmora-antique transition hover:text-velmora-obsidian md:block">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} scope={`related-${product.id}`} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
