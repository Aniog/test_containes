import { ChevronDown, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { money, products } from '../data/products'
import { getStrkImageUrl } from '../lib/strkImageUrl'
import { useStrkImages } from '../lib/useStrkImages'
import ProductCard from '../components/store/ProductCard'
import Stars from '../components/store/Stars'

const tones = ['Gold', 'Silver']

const Accordions = ({ product }) => {
  const [open, setOpen] = useState('Description')
  const rows = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on every order. 30-day returns on unworn pieces in original packaging.' },
  ]

  return (
    <div className="mt-8 divide-y divide-velmora-hairline border-y border-velmora-hairline text-velmora-ink">
      {rows.map((row) => {
        const active = open === row.title
        return (
          <div key={row.title}>
            <button
              type="button"
              onClick={() => setOpen(active ? '' : row.title)}
              className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-widest text-velmora-ink"
            >
              {row.title}
              <ChevronDown className={`h-4 w-4 text-velmora-brass transition ${active ? 'rotate-180' : ''}`} />
            </button>
            {active && <p className="pb-6 text-sm leading-7 text-velmora-smoke">{row.content}</p>}
          </div>
        )
      })}
    </div>
  )
}

const ProductDetailPage = ({ onAddToCart }) => {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const imageRef = useStrkImages([product.id, selectedImage])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])

  return (
    <main ref={imageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-16">
        <div className="grid self-start gap-4 md:grid-cols-[88px_1fr] md:items-start">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {product.imageIds.map((imageId, index) => (
              <button
                key={imageId}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`min-w-20 overflow-hidden rounded-2xl border bg-velmora-linen transition ${
                  selectedImage === index ? 'border-velmora-brass' : 'border-velmora-hairline hover:border-velmora-brass/60'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={getStrkImageUrl(`${imageId}-thumb`) || getStrkImageUrl(imageId)}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.25rem] bg-velmora-linen shadow-soft md:order-2">
            <img
              src={getStrkImageUrl(`${product.imageIds[selectedImage]}-detail-main`) || getStrkImageUrl(product.imageIds[selectedImage])}
              alt={product.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-widestLuxury text-velmora-brass">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-widestLuxury text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-2xl font-semibold text-velmora-ink">{money(product.price)}</p>
            <Stars rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={product.descId} className="mt-6 text-lg leading-8 text-velmora-smoke">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-velmora-smoke">Tone</p>
            <div className="flex gap-3">
              {tones.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTone(item)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold uppercase tracking-widest transition ${
                    tone === item
                      ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl'
                      : 'border-velmora-hairline bg-velmora-pearl text-velmora-ink hover:border-velmora-brass'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[150px_1fr]">
            <div className="flex items-center justify-between rounded-full border border-velmora-hairline bg-velmora-pearl px-3 text-velmora-ink">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-ink transition hover:text-velmora-brass" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold text-velmora-ink">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-ink transition hover:text-velmora-brass" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, { tone, quantity })}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-espresso px-7 py-4 text-sm font-bold uppercase tracking-widest text-velmora-pearl shadow-soft transition hover:bg-velmora-brass"
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </button>
          </div>

          <Accordions product={product} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widestLuxury text-velmora-brass">Complete the layer</p>
            <h2 className="font-serif text-4xl font-medium text-velmora-ink md:text-6xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-widest text-velmora-ink transition hover:text-velmora-brass md:block">Shop all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage
