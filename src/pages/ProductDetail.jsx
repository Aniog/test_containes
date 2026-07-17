import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import Button from '@/components/common/Button.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products, placeholderSvg } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const tones = ['Gold Tone', 'Silver Tone']
const accordionItems = [
  {
    title: 'Description',
    body: 'Designed to bring a polished glow to everyday styling, this piece layers beautifully with heirloom favorites and modern essentials.',
  },
  {
    title: 'Materials & Care',
    body: '18K gold plating over a durable base, crystal detailing where shown, and nickel-safe finishing. Keep dry and store in the included pouch.',
  },
  {
    title: 'Shipping & Returns',
    body: 'Free worldwide shipping, gift-ready packaging, and 30-day returns on unworn pieces in original condition.',
  },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState(tones[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addItem } = useCart()
  const containerRef = useStrkImages([slug, selectedImage])

  const gallery = useMemo(
    () => [
      { id: `detail-${product.imgId}`, label: 'Studio detail', ratio: '3x4' },
      { id: `detail-${product.hoverImgId}`, label: 'Styled on model', ratio: '3x4' },
      { id: `detail-packaging-${product.id}`, label: 'Gift packaging', ratio: '3x4' },
    ],
    [product],
  )

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const titleId = `detail-${product.titleId}`
  const descId = `detail-${product.descId}`

  const handleAddToCart = () => {
    addItem(
      {
        ...product,
        id: `${product.id}-${selectedTone.toLowerCase().split(' ').join('-')}`,
        name: product.name,
        variant: selectedTone,
        titleId,
        descId,
      },
      quantity,
    )
  }

  return (
    <main ref={containerRef} className="bg-velmora-cream pb-20 pt-28 text-velmora-ink sm:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`shrink-0 overflow-hidden rounded-2xl border transition ${
                  selectedImage === index ? 'border-velmora-champagne' : 'border-velmora-hairline'
                }`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="h-20 w-20 bg-velmora-blush object-cover"
                  data-strk-img-id={`${image.id}-thumb`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholderSvg}
                />
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-blush shadow-editorial lg:order-2">
            <img
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={gallery[selectedImage].id}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={placeholderSvg}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-antique">{product.category}</p>
          <h1 id={titleId} className="mt-3 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-ink sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-velmora-ink">
            <p className="text-2xl font-semibold">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-champagne">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-velmora-taupe">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-taupe">
            {product.detail}
          </p>

          <div className="mt-8 border-t border-velmora-hairline pt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    selectedTone === tone
                      ? 'border-velmora-ink bg-velmora-ink text-velmora-porcelain'
                      : 'border-velmora-hairline bg-velmora-porcelain text-velmora-ink hover:border-velmora-champagne'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-velmora-hairline bg-velmora-porcelain text-velmora-ink">
              <button
                type="button"
                className="p-3 transition hover:text-velmora-antique"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                className="p-3 transition hover:text-velmora-antique"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button className="flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>

          <div className="mt-8 divide-y divide-velmora-hairline border-y border-velmora-hairline">
            {accordionItems.map((item) => (
              <div key={item.title} className="text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === item.title ? '' : item.title)}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-[0.2em] text-velmora-ink"
                >
                  {item.title}
                  <ChevronDown
                    className={`h-4 w-4 transition ${openAccordion === item.title ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === item.title && (
                  <p className="pb-5 text-sm leading-7 text-velmora-taupe">
                    {item.title === 'Description' ? product.description : item.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex items-end justify-between border-b border-velmora-hairline pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-antique">Complete the look</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink hover:text-velmora-antique sm:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
