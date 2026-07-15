import { Minus, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import { formatPrice, getRelatedProducts } from '@/data/products'
import ProductCard from '@/components/store/ProductCard'
import { StockImage } from '@/components/store/StockImage'

const accordions = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductPage({ product, onAddToCart, onOpenProduct, onOpenCollection }) {
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('studio')
  const [openAccordion, setOpenAccordion] = useState('Description')
  const relatedProducts = getRelatedProducts(product.slug)

  const copyByAccordion = {
    Description: product.details,
    'Materials & Care': product.care,
    'Shipping & Returns': product.shipping,
  }

  const addConfiguredProduct = () => {
    onAddToCart(product, quantity, selectedTone)
  }

  const imageTitleId = `detail-${product.id}-title`
  const imageDescId = `detail-${product.id}-desc`
  const styledContextId = `detail-${product.id}-styled-context`

  return (
    <main className="bg-velmora-ivory text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-36">
        <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {['studio', 'styled', 'detail'].map((imageType) => (
              <button
                key={imageType}
                type="button"
                onClick={() => setActiveImage(imageType)}
                className={`h-20 w-20 flex-none overflow-hidden border bg-velmora-cocoa p-0 transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${activeImage === imageType ? 'border-velmora-champagne' : 'border-velmora-taupe/30'}`}
                aria-label={`Show ${imageType} image`}
              >
                <StockImage
                  id={`thumb-${product.id}-${imageType}-p11`}
                  query={`[${imageDescId}] [${imageTitleId}]`}
                  ratio="1x1"
                  width="240"
                  alt={`${product.name} ${imageType}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-cocoa shadow-editorial md:order-2">
            <p id={styledContextId} className="sr-only">{product.name} worn close up by woman in warm editorial light</p>
            <StockImage
              id={`detail-main-${product.id}-${activeImage}-m83`}
              query={activeImage === 'styled' ? `[${styledContextId}] [${imageTitleId}]` : `[${imageDescId}] [${imageTitleId}]`}
              ratio="3x4"
              width="1200"
              alt={product.name}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
          </div>
        </div>

        <div className="md:sticky md:top-28 md:self-start">
          <button
            type="button"
            onClick={onOpenCollection}
            className="mb-6 bg-transparent p-0 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
          >
            Back to shop
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{product.category}</p>
          <h1 id={imageTitleId} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-[0.12em] text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-y border-velmora-taupe/25 py-4">
            <p className="text-2xl font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-cocoa/80">
              <span className="flex text-velmora-champagne" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id={imageDescId} className="mt-6 text-base leading-8 text-velmora-cocoa/80">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Tone</p>
            <div className="flex gap-3">
              {product.tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${selectedTone === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-taupe/50 bg-transparent text-velmora-espresso hover:border-velmora-champagne'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[9rem_1fr]">
            <div className="inline-flex h-14 items-center justify-between rounded-full border border-velmora-taupe/40 text-velmora-espresso">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="bg-transparent px-4 py-3 text-velmora-espresso hover:bg-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-bold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="bg-transparent px-4 py-3 text-velmora-espresso hover:bg-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={addConfiguredProduct}
              className="h-14 rounded-full bg-velmora-espresso px-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-cocoa focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-9 divide-y divide-velmora-taupe/25 border-y border-velmora-taupe/25">
            {accordions.map((item) => (
              <div key={item}>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === item ? '' : item)}
                  className="flex w-full items-center justify-between bg-transparent px-0 py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                  aria-expanded={openAccordion === item}
                >
                  {item}
                  <span>{openAccordion === item ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === item ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm leading-7 text-velmora-cocoa/80">{copyByAccordion[item]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-taupe/25 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">You may also like</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-espresso md:text-5xl">Complete the layer</h2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} onAdd={onAddToCart} onOpen={onOpenProduct} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
