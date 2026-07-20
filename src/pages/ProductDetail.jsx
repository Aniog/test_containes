import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/storefront/ProductCard.jsx'
import { products } from '../data/products.js'

const placeholder = '/velmora-placeholder.svg'
const tones = ['Gold', 'Silver']

function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const gallery = [
    { id: product.imgId, label: product.name, ratio: '4x3', query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.hoverImgId}-detail`, label: `${product.name} styled`, ratio: '4x3', query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.imgId}-macro`, label: `${product.name} detail`, ratio: '1x1', query: `[${product.descId}] [${product.titleId}]` },
  ]

  return (
    <main className="bg-porcelain pt-24 text-espresso sm:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button key={image.id} type="button" onClick={() => setSelectedImage(index)} className={`aspect-square min-w-20 overflow-hidden border bg-blush transition ${selectedImage === index ? 'border-champagne' : 'border-mist hover:border-champagne'}`} aria-label={`View ${image.label}`}>
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholder}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-blush shadow-soft lg:order-2">
            <img
              alt={gallery[selectedImage].label}
              className="h-full w-full object-cover"
              data-strk-img-id={`detail-${gallery[selectedImage].id}`}
              data-strk-img={gallery[selectedImage].query}
              data-strk-img-ratio={gallery[selectedImage].ratio}
              data-strk-img-width="1100"
              src={placeholder}
            />
          </div>
        </div>

        <div className="lg:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-dark">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serif text-5xl uppercase leading-tight tracking-product text-espresso sm:text-6xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="font-serif text-4xl text-espresso">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-mocha">
              <div className="flex text-champagne-dark">
                {[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-mocha">{product.description}</p>

          <div className="mt-8 border-t border-mist pt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-espresso">Tone</p>
            <div className="flex gap-3">
              {tones.map((option) => (
                <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${tone === option ? 'border-espresso bg-espresso text-pearl' : 'border-mist bg-pearl text-espresso hover:border-champagne'}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="inline-flex items-center border border-mist bg-pearl">
              <button type="button" className="px-4 py-4 text-espresso transition hover:bg-blush" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="min-w-10 text-center text-sm font-bold text-espresso">{quantity}</span>
              <button type="button" className="px-4 py-4 text-espresso transition hover:bg-blush" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, tone, quantity)}
              className="flex-1 bg-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-pearl transition hover:bg-champagne-dark"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 border-t border-mist">
            <Accordion title="Description" open={openAccordion === 'Description'} onToggle={() => setOpenAccordion(openAccordion === 'Description' ? '' : 'Description')}>
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care" open={openAccordion === 'Materials & Care'} onToggle={() => setOpenAccordion(openAccordion === 'Materials & Care' ? '' : 'Materials & Care')}>
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns" open={openAccordion === 'Shipping & Returns'} onToggle={() => setOpenAccordion(openAccordion === 'Shipping & Returns' ? '' : 'Shipping & Returns')}>
              {product.shipping}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-dark">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl text-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-espresso transition hover:text-champagne-dark sm:inline">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
        </div>
      </section>
    </main>
  )
}

function Accordion({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-mist text-espresso">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-espresso">
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden text-sm leading-7 text-mocha">{children}</div>
      </div>
    </div>
  )
}

export default ProductDetail
