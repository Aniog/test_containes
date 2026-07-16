import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import QuantityControl from '../components/common/QuantityControl.jsx'
import StarRating from '../components/common/StarRating.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import { getImageSource } from '../data/imageSources.js'
import { products } from '../data/products.js'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-stone py-5 text-velmora-espresso">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-sm font-bold uppercase tracking-nav text-velmora-espresso"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pt-4 text-sm leading-7 text-velmora-muted">{children}</div>}
    </div>
  )
}

const ProductDetailPage = ({ onAddToCart }) => {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [tone, setTone] = useState('Gold')
  const [activeImage, setActiveImage] = useState('primary')

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { key: 'primary', id: product.imageId, label: `${product.name} product image` },
    { key: 'worn', id: product.hoverImageId, label: `${product.name} worn image` },
    { key: 'detail', id: `detail-${product.id}-4c19fa`, label: `${product.name} detail image` },
  ]
  const selected = gallery.find((image) => image.key === activeImage) || gallery[0]
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[6rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setActiveImage(image.key)}
                className={`aspect-square w-24 shrink-0 overflow-hidden rounded-2xl border bg-velmora-blush transition ${
                  activeImage === image.key ? 'border-velmora-champagne ring-2 ring-velmora-champagne' : 'border-velmora-stone hover:border-velmora-champagne'
                }`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  src={getImageSource(image.id)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-blush shadow-soft lg:order-2">
            <img
              alt={selected.label}
              className="h-full w-full object-cover"
              src={getImageSource(selected.id)}
            />
          </div>
        </div>

        <div className="lg:pl-6">
          <div className="border-b border-velmora-stone pb-8">
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-bronze">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-luxury text-velmora-espresso md:text-7xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-5">
              <p className="font-serif text-4xl font-semibold text-velmora-espresso">${product.price}</p>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p id={product.descId} className="mt-6 text-lg leading-8 text-velmora-muted">
              {product.description}
            </p>
            <p id={`detail-copy-${product.id}`} className="mt-4 text-sm leading-7 text-velmora-muted">
              {product.details}
            </p>
          </div>

          <div className="space-y-7 border-b border-velmora-stone py-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-nav text-velmora-bronze">Tone</p>
              <div className="flex flex-wrap gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${
                      tone === option
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                        : 'border-velmora-stone bg-velmora-porcelain text-velmora-espresso hover:border-velmora-champagne'
                    }`}
                  >
                    {option} Tone
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-nav text-velmora-bronze">Quantity</p>
              <QuantityControl
                value={quantity}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                onIncrease={() => setQuantity((current) => current + 1)}
                label={product.name}
              />
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, tone)}
              className="w-full rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-nav text-velmora-espresso shadow-glow transition hover:bg-velmora-espresso hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
            >
              Add to Cart — ${product.price * quantity}
            </button>
          </div>

          <div>
            <AccordionItem title="Description" defaultOpen>{product.details}</AccordionItem>
            <AccordionItem title="Materials & Care">{product.material}. {product.care}</AccordionItem>
            <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-bronze">Complete the edit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-espresso md:text-6xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-nav text-velmora-bronze transition hover:text-velmora-espresso md:block">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage
