import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '../components/products/ProductCard.jsx'
import ProductImage from '../components/products/ProductImage.jsx'
import { formatPrice, getProductById, products } from '../data/products.js'

const accordionItems = [
  { key: 'details', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openAccordion, setOpenAccordion] = useState('details')
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedTone)
  }

  return (
    <main className="bg-stone-50 pt-28 text-stone-950">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-14 lg:gap-16">
        <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
            {['primary', 'secondary'].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setActiveImage(mode)}
                className={`aspect-[3/4] min-w-20 overflow-hidden border bg-amber-50 p-0 transition ${
                  activeImage === mode ? 'border-amber-700' : 'border-amber-200'
                }`}
                aria-label={`View ${mode} image`}
              >
                <ProductImage
                  product={product}
                  mode={mode}
                  instance={`thumb-${mode}`}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover"
                  width="220"
                />
              </button>
            ))}
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden bg-amber-200 shadow-2xl md:order-2">
            {['primary', 'secondary'].map((mode) => (
              <ProductImage
                key={mode}
                product={product}
                mode={mode}
                instance={`gallery-${mode}`}
                className={`absolute inset-0 transition duration-500 ${activeImage === mode ? 'opacity-100' : 'opacity-0'}`}
                imgClassName="h-full w-full object-cover"
                ratio="3x4"
                width="1100"
              />
            ))}
          </div>
        </div>

        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            {product.category}
          </p>
          <h1 className="mt-4 font-serif text-5xl uppercase leading-tight tracking-[0.16em] text-stone-950 md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-y border-amber-200 py-4">
            <p className="font-serif text-4xl text-stone-950">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-stone-700">
              <span className="flex text-amber-700" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating} ({product.reviews})
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-stone-700">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-stone-500">
              Tone
            </p>
            <div className="flex flex-wrap gap-3">
              {product.tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    selectedTone === tone
                      ? 'border-stone-950 bg-stone-950 text-stone-50'
                      : 'border-amber-200 bg-amber-50 text-stone-950 hover:border-amber-700'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-stretch gap-3">
            <div className="flex min-h-14 items-center border border-amber-200 bg-amber-50 text-stone-950">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="bg-transparent px-4 py-4 text-stone-950 hover:text-amber-700"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="bg-transparent px-4 py-4 text-stone-950 hover:text-amber-700"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="min-h-14 flex-1 bg-amber-700 px-6 text-xs font-bold uppercase tracking-[0.26em] text-stone-50 transition hover:bg-stone-950"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 border-t border-amber-200">
            {accordionItems.map((item) => (
              <div key={item.key} className="border-b border-amber-200">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                  className="flex w-full items-center justify-between bg-transparent py-5 text-left font-serif text-2xl text-stone-950"
                >
                  {item.title}
                  <span className="font-sans text-xl">{openAccordion === item.key ? '−' : '+'}</span>
                </button>
                {openAccordion === item.key && (
                  <p className="pb-5 text-sm leading-7 text-stone-700">
                    {product[item.key]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-amber-200 bg-amber-50 py-14 text-stone-950 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Complete the ritual
              </p>
              <h2 className="mt-3 font-serif text-5xl text-stone-950 md:text-6xl">
                You may also like
              </h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-stone-700 hover:text-amber-700 md:block">
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
