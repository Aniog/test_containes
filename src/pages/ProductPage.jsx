import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { formatPrice } from '../utils/format'
import { StarRating } from '../components/storefront/StarRating'
import { ProductCard } from '../components/storefront/ProductCard'
import { useStore } from '../context/StoreContext'
import { StoreImage } from '../components/storefront/StoreImage'

function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm uppercase tracking-[0.28em] text-velmora-espresso">{title}</span>
        <ChevronDown className={`h-4 w-4 text-velmora-taupe transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden text-sm leading-7 text-velmora-taupe">{children}</div>
      </div>
    </div>
  )
}

export function ProductPage() {
  const { productId } = useParams()
  const { addToCart } = useStore()
  const product = products.find((entry) => entry.id === productId)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openSection, setOpenSection] = useState('Description')

  const relatedProducts = useMemo(() => {
    const sameCategory = products.filter(
      (entry) => entry.id !== productId && entry.category === product?.category,
    )

    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3)
    }

    const fallback = products.filter((entry) => entry.id !== productId)
    return [...sameCategory, ...fallback.filter((entry) => entry.category !== product?.category)].slice(0, 3)
  }, [product?.category, productId])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionContent = {
    Description: product.details,
    'Materials & Care': product.care,
    'Shipping & Returns': product.shipping,
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div className="grid gap-4 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
            {product.imageIds.map((imageId, index) => {
              const thumbTitleId = `${product.id}-thumb-title-${index}`
              const thumbDescId = `${product.id}-thumb-desc-${index}`

              return (
                <button
                  key={imageId}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[1.5rem] border ${
                    selectedImage === index
                      ? 'border-velmora-espresso'
                      : 'border-velmora-line'
                  } bg-white`}
                >
                  <StoreImage
                    id={`${imageId}-thumb`}
                    alt={`${product.shortName} thumbnail ${index + 1}`}
                    query={`[${thumbDescId}] [${thumbTitleId}]`}
                    ratio="1x1"
                    width="220"
                    className="aspect-square h-20 w-20 object-cover sm:h-24 sm:w-24 lg:h-full lg:w-full"
                  />
                  <span id={thumbTitleId} className="sr-only">
                    {product.shortName}
                  </span>
                  <span id={thumbDescId} className="sr-only">
                    {index === 0 ? product.description : `${product.shortName} alternate angle`}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="order-1 overflow-hidden rounded-[2.5rem] border border-velmora-line bg-white shadow-[0_24px_60px_rgba(38,27,23,0.08)] lg:order-2">
            <StoreImage
              id={`${product.imageIds[selectedImage]}-detail`}
              alt={product.shortName}
              query={`[product-description] [product-title]`}
              ratio="3x4"
              width="1200"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-velmora-line bg-white p-6 text-velmora-espresso shadow-[0_18px_50px_rgba(38,27,23,0.05)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">{product.category}</p>
          <h1 id="product-title" className="mt-4 font-display text-4xl uppercase tracking-[0.22em] text-velmora-espresso sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl text-velmora-espresso">{formatPrice(product.price)}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id="product-description" className="mt-6 text-base leading-8 text-velmora-taupe">
            {product.description}
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
                      selectedTone === tone
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                        : 'border-velmora-line bg-velmora-champagne/35 text-velmora-espresso hover:border-velmora-espresso'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-velmora-line bg-velmora-champagne/35 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full px-4 py-2 text-velmora-espresso transition hover:bg-white"
                >
                  −
                </button>
                <span className="min-w-10 text-center text-sm text-velmora-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full px-4 py-2 text-velmora-espresso transition hover:bg-white"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, selectedTone, quantity)}
              className="w-full rounded-full border border-velmora-espresso bg-velmora-espresso px-6 py-4 text-sm uppercase tracking-[0.26em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-10">
            {Object.entries(accordionContent).map(([title, content]) => (
              <AccordionItem
                key={title}
                title={title}
                isOpen={openSection === title}
                onToggle={() =>
                  setOpenSection((current) => (current === title ? '' : title))
                }
              >
                {content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">You may also like</p>
            <h2 className="mt-3 font-display text-4xl text-velmora-espresso">A few more pieces to pair with it</h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-sm uppercase tracking-[0.24em] text-velmora-espresso underline underline-offset-4 md:inline-block"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  )
}
