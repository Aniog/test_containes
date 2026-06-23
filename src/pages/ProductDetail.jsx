import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductImage from '../components/product/ProductImage.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import { getProductById, products } from '../data/products.js'

const tones = ['Gold', 'Silver']
const accordionItems = [
  {
    title: 'Description',
    content:
      'A refined demi-fine piece designed for daily wear, gifting, and soft statement moments. Style alone or layer with your favorite Velmora signatures.',
  },
  {
    title: 'Materials & Care',
    content:
      'Finished in luminous plating over a durable base, hypoallergenic, and nickel-safe. Keep dry, store in the pouch, and polish gently with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Enjoy free worldwide shipping, careful gift-ready packaging, and 30-day returns on unworn pieces in original condition.',
  },
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('main')
  const [openAccordion, setOpenAccordion] = useState('Description')

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedTone)
  }

  return (
    <main className="bg-velmora-parchment pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-4 md:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {['main', 'hover'].map((variant) => (
              <button
                key={variant}
                type="button"
                onClick={() => setActiveImage(variant)}
                className={`aspect-square w-20 overflow-hidden border bg-velmora-champagne ${activeImage === variant ? 'border-velmora-gold' : 'border-velmora-oyster'}`}
                aria-label={`View ${variant} product image`}
              >
                <ProductImage product={product} variant={variant} className="h-full w-full object-cover" ratio="1x1" width="200" />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] self-start overflow-hidden border border-velmora-oyster bg-velmora-champagne shadow-soft md:order-2">
            <ProductImage product={product} variant={activeImage} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="md:pl-6 lg:pl-12">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">{product.category}</p>
          <h1 className="mt-4 font-serifDisplay text-5xl uppercase leading-none tracking-[0.16em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-bark">
              <span className="flex text-velmora-goldDeep" aria-label={`${product.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-velmora-bark">{product.detail}</p>

          <div className="mt-8 border-y border-velmora-oyster py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${selectedTone === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-pearl' : 'border-velmora-oyster bg-velmora-pearl text-velmora-ink hover:border-velmora-gold'}`}
                >
                  {tone} tone
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Quantity</p>
              <div className="inline-flex items-center border border-velmora-oyster bg-velmora-pearl text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="p-3 transition hover:bg-velmora-champagne"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 px-4 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="p-3 transition hover:bg-velmora-champagne"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-7 w-full bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-pearl"
          >
            Add to Cart
          </button>

          <div className="mt-8 border-t border-velmora-oyster">
            {accordionItems.map((item) => {
              const open = openAccordion === item.title
              return (
                <div key={item.title} className="border-b border-velmora-oyster">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(open ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && <p className="pb-5 text-sm leading-7 text-velmora-bark">{item.content}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 border-t border-velmora-oyster pt-12">
          <h2 className="font-serifDisplay text-5xl text-velmora-ink">You may also like</h2>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-goldDeep hover:underline md:inline">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}
