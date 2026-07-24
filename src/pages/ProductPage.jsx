import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageLoader from '@/components/storefront/ImageLoader'
import ProductCard from '@/components/storefront/ProductCard'
import { products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strk-images'
import { formatPrice, getProductById } from '@/lib/utils'

const accordions = [
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Materials & Care',
    key: 'care',
  },
  {
    title: 'Shipping & Returns',
    key: 'shipping',
  },
]

const ProductPage = ({ onAddToCart }) => {
  const { productId } = useParams()
  const product = getProductById(products, productId)
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [activeImage, setActiveImage] = useState('primary')

  const related = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    {
      id: 'primary',
      imgId: `${product.imgId}-detail`,
      query: `[detail-desc-${product.id}] [detail-title-${product.id}]`,
      alt: `${product.name} primary product view`,
      src: getStrkImageUrl(`${product.imgId}-detail`),
    },
    {
      id: 'hover',
      imgId: `${product.hoverImgId}-detail`,
      query: `[detail-title-${product.id}] [detail-desc-${product.id}]`,
      alt: `${product.name} styled detail view`,
      src: getStrkImageUrl(`${product.hoverImgId}-detail`),
    },
    {
      id: 'worn',
      imgId: `product-${product.id}-worn-detail-9f2d31`,
      query: `[detail-material-${product.id}] [detail-title-${product.id}]`,
      alt: `${product.name} worn by model`,
      src: getStrkImageUrl(`product-${product.id}-worn-detail-9f2d31`),
    },
  ]

  const activeGalleryImage = gallery.find((image) => image.id === activeImage) || gallery[0]

  const getAccordionContent = (key) => {
    if (key === 'description') return product.longDescription
    if (key === 'care') return `${product.material}. ${product.care}`
    return 'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and returned in original packaging.'
  }

  return (
    <ImageLoader className="bg-velmora-cream pt-24 text-velmora-ink" refreshKey={`${product.id}-${activeImage}`}>
      <main className="velmora-container py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <section className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(image.id)}
                  className={`aspect-square min-w-20 overflow-hidden border bg-velmora-linen transition ${
                    activeImage === image.id ? 'border-velmora-gold' : 'border-velmora-linen hover:border-velmora-gold/70'
                  }`}
                  aria-label={`Show ${image.alt}`}
                >
                  <img
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="180"
                    src={getStrkImageUrl(`${image.imgId}-thumb`) || image.src}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-linen shadow-velvet lg:order-2">
              <img
                alt={activeGalleryImage.alt}
                className="h-full w-full object-cover"
                data-strk-img-id={activeGalleryImage.imgId}
                data-strk-img={activeGalleryImage.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src={activeGalleryImage.src}
              />
            </div>
          </section>

          <section className="lg:sticky lg:top-28 lg:self-start">
            <p id={`detail-material-${product.id}`} className="text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">
              {product.category} · {product.material}
            </p>
            <h1 id={`detail-title-${product.id}`} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-none tracking-product text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-serifDisplay text-3xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-mauve">
                <span className="flex text-velmora-goldDark" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                {product.rating} ({product.reviews} reviews)
              </div>
            </div>
            <p id={`detail-desc-${product.id}`} className="mt-6 max-w-xl text-base leading-8 text-velmora-mauve">
              {product.description}
            </p>

            <div className="mt-8 border-y border-velmora-linen py-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
                      selectedTone === tone
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-porcelain'
                        : 'border-velmora-linen bg-velmora-porcelain text-velmora-ink hover:border-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-[150px_1fr]">
                <div className="flex items-center justify-between rounded-full border border-velmora-linen bg-velmora-porcelain px-2 py-1 text-velmora-ink">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full p-3 transition hover:bg-velmora-cream"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full p-3 transition hover:bg-velmora-cream"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart(product, quantity, selectedTone)}
                  className="premium-button w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="divide-y divide-velmora-linen border-b border-velmora-linen">
              {accordions.map((item) => {
                const isOpen = openAccordion === item.key
                return (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : item.key)}
                      className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-luxury text-velmora-ink"
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="pb-5 text-sm leading-7 text-velmora-mauve">{getAccordionContent(item.key)}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        <section className="py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">Complete the ritual</p>
              <h2 className="mt-2 font-serifDisplay text-4xl font-semibold text-velmora-ink sm:text-5xl">
                You may also like
              </h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} context={`related-${product.id}`} />
            ))}
          </div>
        </section>
      </main>
    </ImageLoader>
  )
}

export default ProductPage
