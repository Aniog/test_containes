import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { findProduct, formatPrice, products } from '../data/products'
import { getStrkImageUrl } from '../data/strkImageUrls'

const accordions = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = findProduct(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState(product.toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    { id: 'hero', ratio: '4x3', query: `[${product.descId}] [${product.nameId}]` },
    { id: 'worn', ratio: '3x4', query: `[${product.descId}] [${product.nameId}]` },
    { id: 'detail', ratio: '1x1', query: `[${product.descId}] [${product.nameId}]` },
  ].map((image) => ({
    ...image,
    thumbId: `pdp-${product.id}-thumb-${image.id}`,
    mainId: `pdp-${product.id}-main-${image.id}`,
  }))

  const handleAdd = () => {
    onAddToCart(product, { quantity, tone })
  }

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-14">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`h-24 w-24 shrink-0 overflow-hidden border bg-velmora-sand transition-colors ${selectedImage === index ? 'border-velmora-espresso' : 'border-transparent hover:border-velmora-gold'}`}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={image.thumbId}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="240"
                  src={getStrkImageUrl(image.thumbId)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-sand lg:order-2">
            <img
              alt={`${product.name} gallery image`}
              className="aspect-[4/5] h-full w-full object-cover md:aspect-[4/5]"
              data-strk-img-id={gallery[selectedImage].mainId}
              data-strk-img={gallery[selectedImage].query}
              data-strk-img-ratio={gallery[selectedImage].ratio}
              data-strk-img-width="1100"
              src={getStrkImageUrl(gallery[selectedImage].mainId)}
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">{product.category}</p>
          <h1 id={product.nameId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.16em] text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-velmora-sand pb-6">
            <p className="font-serif text-3xl text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-espresso/70">
              <span className="flex text-velmora-champagne" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>

          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-espresso/74">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso/65">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.toneOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-sand bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex w-full items-center justify-between border border-velmora-sand bg-velmora-pearl sm:w-36">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 text-velmora-espresso hover:bg-velmora-sand/50" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-bold text-velmora-espresso">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 text-velmora-espresso hover:bg-velmora-sand/50" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button type="button" onClick={handleAdd} className="min-h-14 flex-1 bg-velmora-champagne px-8 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition-colors hover:bg-velmora-espresso hover:text-velmora-ivory">
              Add to Cart
            </button>
          </div>

          <div className="mt-10 border-y border-velmora-sand">
            {accordions.map((title) => (
              <div key={title} className="border-b border-velmora-sand last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === title ? '' : title)}
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso"
                >
                  {title}
                  <span className="text-xl font-normal text-velmora-gold">{openAccordion === title ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === title ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm leading-7 text-velmora-espresso/72">
                    {title === 'Description' && product.details}
                    {title === 'Materials & Care' && `${product.material}. ${product.care}`}
                    {title === 'Shipping & Returns' && product.shipping}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-sand bg-velmora-pearl py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold hover:text-velmora-espresso sm:inline-flex">Shop all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
