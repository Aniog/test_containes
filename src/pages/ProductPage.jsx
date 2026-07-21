import { ChevronDown, Minus, Plus } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import ProductImage from '../components/product/ProductImage'
import Rating from '../components/product/Rating'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useStrkImages } from '../hooks/useStrkImages'

const accordions = [
  {
    title: 'Description',
    body: 'A refined demi-fine piece designed to bring warm polish into everyday moments, from morning routines to evening plans.',
  },
  {
    title: 'Materials & Care',
    body: '18K gold plated finish over a durable base with hypoallergenic posts or chain details. Keep dry, store separately, and polish gently with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    body: 'Free worldwide shipping, gift-ready packaging, and 30-day returns on unworn pieces in original condition.',
  },
]

export default function ProductPage({ products, onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const [activeImage, setActiveImage] = useState('hero')
  const pageRef = useRef(null)

  const related = useMemo(() => (product ? getRelatedProducts(product) : []), [product])
  useStrkImages(pageRef, [slug, activeImage])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [
    { id: 'hero', label: 'Editorial' },
    { id: 'detail', label: 'Detail' },
    { id: 'worn', label: 'Worn' },
  ]

  return (
    <main ref={pageRef} className="min-h-screen bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image.id)}
                className={`h-24 min-w-24 overflow-hidden border bg-velmora-mist transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${
                  activeImage === image.id ? 'border-velmora-champagne' : 'border-velmora-mist'
                }`}
                aria-label={`View ${image.label} image`}
              >
                <ProductImage
                  product={product}
                  variant={`thumb-${image.id}`}
                  ratio="1x1"
                  width="240"
                  className="h-full w-full object-cover"
                  titleId="detail-product-title"
                  descId="detail-product-desc"
                  querySuffix={image.label}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-mist shadow-editorial lg:order-2">
            <ProductImage
              product={product}
              variant={`gallery-${activeImage}`}
              ratio="3x4"
              width="1100"
              className="h-full w-full object-cover"
              titleId="detail-product-title"
              descId="detail-product-desc"
              querySuffix={activeImage}
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">{product.category}</p>
          <h1 id="detail-product-title" className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.16em] text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-velmora-mist pb-6">
            <p className="text-2xl font-bold text-velmora-espresso">${product.price}</p>
            <Rating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id="detail-product-desc" className="mt-6 text-base leading-8 text-velmora-umber">
            {product.longDescription}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-umber">Tone</p>
            <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Select tone">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${
                    tone === option
                      ? 'border-velmora-oxblood bg-velmora-oxblood text-velmora-cream'
                      : 'border-velmora-mist bg-velmora-cream text-velmora-espresso hover:border-velmora-champagne'
                  }`}
                  aria-checked={tone === option}
                  role="radio"
                >
                  {option} Tone
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[150px_1fr]">
            <div className="flex min-h-14 items-center justify-between border border-velmora-mist bg-velmora-cream text-velmora-espresso">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-champagne" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold text-velmora-espresso">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-champagne" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, tone)}
              className="min-h-14 bg-velmora-oxblood px-6 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-9 border-y border-velmora-mist">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.title
              return (
                <div key={item.title} className="border-b border-velmora-mist last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-inset focus:ring-velmora-champagne"
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-7 text-velmora-umber">{item.body}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mb-8 flex items-end justify-between border-t border-velmora-mist pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">Complete the ritual</p>
            <h2 id="related-title" className="mt-3 font-serif text-4xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-oxblood underline decoration-velmora-champagne underline-offset-8 sm:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact contextQuery="[related-title] complementary gold jewelry" />
          ))}
        </div>
      </section>
    </main>
  )
}
