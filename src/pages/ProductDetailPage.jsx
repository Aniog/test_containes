import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx?velmora=20260724'
import { formatPrice, products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

const accordionLabels = ['Description', 'Materials & Care', 'Shipping & Returns']

function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) ?? products[0]
  const [selectedImage, setSelectedImage] = useState('detailOne')
  const [selectedTone, setSelectedTone] = useState(product.toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState('Description')

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`

  const gallery = useMemo(
    () => [
      { key: 'detailOne', label: 'Studio detail', id: product.imageIds.detailOne, ratio: '3x2' },
      { key: 'primary', label: 'Product front', id: product.imageIds.primary, ratio: '4x3' },
      { key: 'detailTwo', label: 'On model', id: product.imageIds.detailTwo, ratio: '3x2' },
    ],
    [product]
  )

  const activeImage = gallery.find((image) => image.key === selectedImage) ?? gallery[0]
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    const imageSrc = getStrkImageUrl(`detail-main-${product.id}-${activeImage.key}`)
    onAddToCart(product, { quantity, tone: selectedTone, imageSrc })
  }

  const getAccordionText = (label) => {
    if (label === 'Description') return product.description
    if (label === 'Materials & Care') return `${product.material}. ${product.care}`
    return product.shipping
  }

  return (
    <main className="bg-velmora-porcelain pt-24 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[90px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setSelectedImage(image.key)}
                className={`aspect-square w-20 shrink-0 overflow-hidden rounded-2xl border bg-velmora-champagne p-0 transition lg:w-full ${
                  selectedImage === image.key ? 'border-velmora-gold' : 'border-velmora-cocoa/10 hover:border-velmora-gold/60'
                }`}
                aria-label={`Show ${image.label}`}
              >
                <img
                  data-strk-img-id={`thumb-${product.id}-${image.key}`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="240"
                  src={getStrkImageUrl(`thumb-${product.id}-${image.key}`)}
                  alt={image.label}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.25rem] bg-velmora-champagne shadow-[0_28px_80px_rgba(33,23,19,0.12)] lg:order-2">
            <img
              data-strk-img-id={`detail-main-${product.id}-${activeImage.key}`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio={activeImage.ratio}
              data-strk-img-width="1200"
              src={getStrkImageUrl(`detail-main-${product.id}-${activeImage.key}`)}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.16em] text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="font-serif text-3xl text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-velmora-cocoa/75">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-cocoa">
            {product.description}
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-cocoa">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.toneOptions.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.22em] transition ${
                    selectedTone === tone
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
                      : 'border-velmora-cocoa/15 bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-cocoa/15 bg-velmora-ivory text-velmora-espresso">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="bg-transparent p-4 text-velmora-espresso transition hover:text-velmora-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="bg-transparent p-4 text-velmora-espresso transition hover:text-velmora-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="min-h-14 flex-1 rounded-full bg-velmora-gold px-7 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-softgold"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-cocoa/10 border-y border-velmora-cocoa/10 text-velmora-espresso">
            {accordionLabels.map((label) => (
              <div key={label}>
                <button
                  type="button"
                  onClick={() => setOpenSection((current) => (current === label ? '' : label))}
                  className="flex w-full items-center justify-between bg-transparent px-0 py-5 text-left text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-espresso"
                >
                  {label}
                  <ChevronDown className={`h-4 w-4 transition ${openSection === label ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSection === label ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm leading-7 text-velmora-cocoa">{getAccordionText(label)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-cocoa underline decoration-velmora-gold/45 underline-offset-8 transition hover:text-velmora-gold sm:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage
