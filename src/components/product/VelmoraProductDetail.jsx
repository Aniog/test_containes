import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import JewelryArt from '@/components/common/VelmoraJewelView.jsx?velmora=202606270704'
import ProductCard from '@/components/product/VelmoraProductCard.jsx?velmora=202606270704'
import { formatPrice, products } from '@/data/products'

const accordions = [
  { key: 'details', label: 'Description' },
  { key: 'care', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const ProductDetail = ({ product, onAddToCart, onSelectProduct, onNavigate }) => {
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openSections, setOpenSections] = useState(['details'])

  const related = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    { id: 'hero', label: `${product.name} hero view`, ratio: '3x4' },
    { id: 'styled', label: `${product.name} worn styling`, ratio: '3x4' },
    { id: 'detail', label: `${product.name} detail close up`, ratio: '1x1' },
  ]

  const productTitleId = `detail-${product.id}-title`
  const productDescId = `detail-${product.id}-desc`

  const toggleSection = (key) => {
    setOpenSections((current) =>
      current.includes(key) ? current.filter((section) => section !== key) : [...current, key],
    )
  }

  return (
    <main className="bg-ivory pt-24 text-espresso sm:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-20 w-16 shrink-0 overflow-hidden border bg-pearl transition lg:h-24 lg:w-full ${
                  activeImage === index ? 'border-espresso' : 'border-champagne/35 hover:border-cocoa'
                }`}
                aria-label={`Show ${image.label}`}
              >
                <JewelryArt
                  id={product.id}
                  label={image.label}
                  variant="thumb"
                  tone={variant}
                />
              </button>
            ))}
          </div>

          <div className="order-1 aspect-[3/4] overflow-hidden bg-stone lg:order-2">
            <JewelryArt
              key={gallery[activeImage].id}
              id={product.id}
              label={gallery[activeImage].label}
              variant="detail"
              tone={variant}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="mb-6 text-xs font-bold uppercase tracking-[0.26em] text-cocoa transition hover:text-espresso"
          >
            ← Back to shop
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">{product.category}</p>
          <h1 id={productTitleId} className="mt-4 font-serif text-5xl uppercase leading-[0.95] tracking-[0.14em] text-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="font-serif text-3xl text-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-sm font-semibold text-espresso">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-gold text-goldDeep" />
              ))}
              <span className="ml-2 text-taupe">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
            </div>
          </div>
          <p id={productDescId} className="mt-6 text-base leading-8 text-taupe">
            {product.description}
          </p>

          <div className="mt-8 border-y border-champagne/35 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-espresso">Tone</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.variants.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setVariant(option)}
                  className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
                    variant === option
                      ? 'border-espresso bg-espresso text-ivory'
                      : 'border-champagne/55 bg-transparent text-espresso hover:border-espresso'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-espresso">Quantity</p>
              <div className="flex items-center rounded-full border border-champagne/55 bg-pearl text-espresso">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="p-3 transition hover:text-cocoa"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="p-3 transition hover:text-cocoa"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product, variant, quantity)}
            className="mt-6 w-full rounded-full bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-goldDeep"
          >
            Add to Cart
          </button>

          <div className="mt-8 divide-y divide-champagne/35 border-y border-champagne/35">
            {accordions.map((section) => {
              const isOpen = openSections.includes(section.key)
              const body = section.key === 'details' ? product.details : section.key === 'care' ? product.care : product.shipping
              return (
                <div key={section.key}>
                  <button
                    type="button"
                    onClick={() => toggleSection(section.key)}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-espresso"
                    aria-expanded={isOpen}
                  >
                    {section.label}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-7 text-taupe">{body}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-4 py-20 text-espresso sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between border-b border-champagne/35 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">Complete the stack</p>
              <h2 className="mt-3 font-serif text-5xl">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={onAddToCart} onSelect={onSelectProduct} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
