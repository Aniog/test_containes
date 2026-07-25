import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import ProductCard from '../components/product/ProductCard.jsx'
import ProductImage from '../components/product/ProductImage.jsx'
import useStrkImages from '../hooks/useStrkImages.js'
import { findProduct, products } from '../data/products.js'

const tones = ['Gold', 'Silver']

const accordionContent = (product) => [
  { title: 'Description', body: product.detail },
  { title: 'Materials & Care', body: product.care },
  { title: 'Shipping & Returns', body: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition, with gift-ready packaging included.' },
]

export default function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams()
  const product = findProduct(id)
  const pageRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openSection, setOpenSection] = useState('Description')
  const gallery = [0, 1, 2]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  useStrkImages(pageRef, [id, activeImage])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((imageNumber) => (
              <button
                key={imageNumber}
                type="button"
                onClick={() => setActiveImage(imageNumber)}
                className={`aspect-square w-24 shrink-0 overflow-hidden border bg-velmora-sand transition ${activeImage === imageNumber ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-gold'}`}
                aria-label={`View ${product.name} image ${imageNumber + 1}`}
              >
                <ProductImage
                  product={product}
                  scope={`detail-thumb-${imageNumber}`}
                  variant={`thumb-${imageNumber}`}
                  ratio="1x1"
                  width="220"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-sand shadow-soft lg:order-2">
            <ProductImage
              product={product}
              scope={`detail-main-${activeImage}`}
              variant={`main-${activeImage}`}
              ratio="3x4"
              width="1100"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-goldDeep">{product.category}</p>
          <h1 className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.16em] sm:text-6xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-y border-velmora-line py-4">
            <p className="font-serif text-3xl">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-taupe">
              <span className="flex gap-0.5 text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </span>
              <span>{product.rating} · {product.reviewCount} reviews</span>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Tone</p>
              <div className="flex gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${selectedTone === tone ? 'border-velmora-espresso bg-velmora-espresso text-white' : 'border-velmora-line bg-velmora-porcelain text-velmora-espresso hover:border-velmora-gold'}`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Quantity</p>
              <div className="inline-flex items-center border border-velmora-line bg-velmora-porcelain text-velmora-espresso">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 transition hover:bg-velmora-sand" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-12 text-center font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 transition hover:bg-velmora-sand" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, { variant: selectedTone, quantity })}
              className="w-full bg-velmora-gold px-7 py-5 text-xs font-bold uppercase tracking-[0.28em] text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-goldDeep"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-9 border-t border-velmora-line">
            {accordionContent(product).map((section) => {
              const isOpen = openSection === section.title
              return (
                <div key={section.title} className="border-b border-velmora-line">
                  <button type="button" onClick={() => setOpenSection(isOpen ? '' : section.title)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.2em] text-velmora-espresso">
                    {section.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden text-sm leading-7 text-velmora-taupe">{section.body}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-velmora-porcelain px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-goldDeep">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl leading-none">You may also like</h2>
            </div>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-goldDeep transition hover:text-velmora-espresso">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} scope="detail-related" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
