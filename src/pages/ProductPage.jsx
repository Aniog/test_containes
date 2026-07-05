import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { useStockImages } from '@/hooks/useStockImages.js'
import { products } from '@/data/products.js'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
const tones = ['Gold', 'Silver']
const accordions = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState('main')
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useStockImages([slug, selectedImage])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { id: 'main', imgId: product.imgId, largeImgId: product.imgId, label: product.name, query: `[${product.descId}] [${product.titleId}]` },
    { id: 'worn', imgId: product.hoverImgId, largeImgId: product.hoverImgId, label: `${product.name} styled`, query: `[${product.descId}] [${product.titleId}]` },
    { id: 'gift', imgId: `${product.imgId}-gift-detail`, largeImgId: `${product.imgId}-gift-detail-large`, label: `${product.name} packaging`, query: `[${product.titleId}] [product-page-gift-context]` },
  ]
  const selected = gallery.find((image) => image.id === selectedImage) || gallery[0]

  return (
    <main ref={containerRef} className="bg-[#F7F1E8] px-5 pb-20 pt-28 text-[#17110D] md:px-8 md:pb-28">
      <p id="product-page-gift-context" className="sr-only">Velmora gift box demi-fine gold jewelry packaging</p>
      <div className="mx-auto max-w-7xl">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D3A1E] hover:text-[#B9853B]">← Back to shop</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <section className="grid gap-4 md:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image.id)}
                  className={`aspect-square overflow-hidden border bg-[#E9D8BE] ${selectedImage === image.id ? 'border-[#B9853B]' : 'border-[#17110D]/10'}`}
                  aria-label={`View ${image.label}`}
                >
                  <img
                    alt={image.label}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="180"
                    src={placeholder}
                  />
                </button>
              ))}
            </div>
            <div className="relative order-1 aspect-[3/4] overflow-hidden bg-[#E9D8BE] shadow-[0_24px_70px_rgba(23,17,13,0.12)] md:order-2">
              {gallery.map((image) => (
                <img
                  key={image.id}
                  alt={image.label}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${selectedImage === image.id ? 'opacity-100' : 'opacity-0'}`}
                  data-strk-img-id={image.largeImgId}
                  data-strk-img={image.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="980"
                  src={placeholder}
                />
              ))}
            </div>
          </section>

          <section className="lg:pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.18em] text-[#17110D] md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="font-serif text-3xl text-[#17110D]">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-[#8D7463]">
                <span className="flex text-[#B9853B]" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                {product.reviews} reviews
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-[#8D7463]">{product.detail}</p>

            <div className="mt-8 border-t border-[#17110D]/10 pt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#5D3A1E]">Tone</p>
              <div className="flex gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${selectedTone === tone ? 'border-[#17110D] bg-[#17110D] text-[#FBF8F2]' : 'border-[#17110D]/15 bg-[#FBF8F2] text-[#17110D] hover:border-[#B9853B]'}`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex items-center border border-[#17110D]/15 bg-[#FBF8F2] text-[#17110D]">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="p-4 hover:bg-[#E9D8BE]">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)} className="p-4 hover:bg-[#E9D8BE]">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onAddToCart(product, quantity, selectedTone)}
                className="min-h-14 flex-1 bg-[#B9853B] px-6 text-sm font-bold uppercase tracking-[0.18em] text-[#17110D] transition hover:bg-[#5D3A1E] hover:text-[#FBF8F2]"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-9 border-t border-[#17110D]/10">
              {accordions.map((title) => (
                <div key={title} className="border-b border-[#17110D]/10">
                  <button type="button" onClick={() => setOpenAccordion(openAccordion === title ? '' : title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.2em] text-[#17110D]">
                    {title}
                    <span>{openAccordion === title ? '−' : '+'}</span>
                  </button>
                  {openAccordion === title && (
                    <p className="pb-5 text-sm leading-7 text-[#8D7463]">
                      {title === 'Description' ? product.description : title === 'Materials & Care' ? product.care : product.shipping}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-20 border-t border-[#17110D]/10 pt-14 md:mt-28">
          <div className="mb-9 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">You may also like</p>
              <h2 className="mt-3 font-serif text-4xl text-[#17110D]">Complete the ritual.</h2>
            </div>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D3A1E] hover:text-[#B9853B]">Shop all</Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
