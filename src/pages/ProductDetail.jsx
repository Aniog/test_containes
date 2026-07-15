import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/format'
import { getImageUrl, useStrkImages } from '@/lib/useStrkImages'

const accordionItems = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useStrkImages([product.id, activeImage])

  const gallery = useMemo(() => [
    {
      id: `${product.id}-gallery-main`,
      imgId: `${product.imgId}-gallery-main`,
      query: `[${product.descId}] [${product.titleId}]`,
      label: product.name,
    },
    {
      id: `${product.id}-gallery-model`,
      imgId: `${product.hoverImgId}-gallery-model`,
      query: `[${product.titleId}] [${product.descId}]`,
      label: `${product.name} on model`,
    },
    {
      id: `${product.id}-gallery-detail`,
      imgId: `${product.imgId}-gallery-detail`,
      query: `[${product.descId}] [product-detail-materials] [${product.titleId}]`,
      label: `${product.name} detail`,
    },
  ], [product])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="bg-velmora-parchment pb-16 pt-24 text-velmora-espresso md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-velmora-brass">
          <Link to="/shop" className="transition hover:text-velmora-espresso">Shop</Link> / {product.type}
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square w-20 flex-none overflow-hidden border bg-velmora-ivory transition ${activeImage === index ? 'border-velmora-brass' : 'border-velmora-mist hover:border-velmora-brass'}`}
                  aria-label={`View ${image.label}`}
                >
                  <img
                    alt={image.label}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="180"
                    src={getImageUrl(`${image.imgId}-thumb`)}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-ivory shadow-soft md:order-2">
              <img
                alt={gallery[activeImage].label}
                className="h-full w-full object-cover"
                data-strk-img-id={gallery[activeImage].imgId}
                data-strk-img={gallery[activeImage].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src={getImageUrl(gallery[activeImage].imgId)}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-brass">{product.material}</p>
            <h1 id={product.titleId} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-none tracking-[0.18em] text-velmora-espresso md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-velmora-espresso">
              <p className="text-xl font-bold tracking-[0.12em]">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-ink/78">
                <span className="flex text-velmora-champagne" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </span>
                <span>{product.rating.toFixed(1)} ({product.reviews})</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-ink/78">{product.description}</p>

            <div className="mt-8 border-t border-velmora-mist/70 pt-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso">Tone</p>
              <div className="mt-3 flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-mist bg-velmora-ivory text-velmora-espresso hover:border-velmora-brass'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-stretch gap-3">
              <div className="flex min-h-14 items-center border border-velmora-mist bg-velmora-ivory text-velmora-espresso">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="px-4 text-velmora-espresso hover:text-velmora-brass" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="px-4 text-velmora-espresso hover:text-velmora-brass" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onAddToCart(product, { tone, quantity })}
                className="min-h-14 flex-1 bg-velmora-champagne px-6 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-brass hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-espresso"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-mist/70 border-y border-velmora-mist/70 text-velmora-espresso">
              {accordionItems.map((item) => {
                const isOpen = openAccordion === item.title
                const content = item.key === 'shipping'
                  ? 'Free worldwide shipping on orders over $75. Returns are accepted within 30 days in unworn condition with original packaging.'
                  : product[item.key]
                return (
                  <div key={item.title}>
                    <button type="button" onClick={() => setOpenAccordion(isOpen ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso">
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                      <p id={item.title === 'Materials & Care' ? 'product-detail-materials' : undefined} className="overflow-hidden text-sm leading-7 text-velmora-ink/78">{content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-brass">Complete the edit</p>
              <h2 className="mt-3 font-serifDisplay text-4xl font-semibold text-velmora-espresso md:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden border-b border-velmora-brass pb-1 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-brass transition hover:text-velmora-espresso md:inline-flex">Shop all</Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductDetail
