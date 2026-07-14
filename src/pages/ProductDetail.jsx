import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { products, currency } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductAccordions from '@/components/product/ProductAccordions.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'
import StarRating from '@/components/common/StarRating.jsx'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) ?? products[0]
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(product.gallery[0])
  const containerRef = useStrkImages([selectedImage.id])
  const { addItem } = useCart()

  const relatedProducts = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 3), [product.id])

  return (
    <div ref={containerRef} className="bg-ivory px-5 pb-20 pt-32 sm:px-8 lg:px-12 xl:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-brand text-ink/55">
          <Link to="/shop" className="transition hover:text-bronze">Shop</Link>
          <span>/</span>
          <span className="text-bronze">{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          <ProductGallery product={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

          <div>
            <p className="text-xs uppercase tracking-brand text-bronze">{product.collection}</p>
            <h1 className="mt-4 font-serif text-[2.7rem] uppercase leading-none tracking-[0.22em] text-ink sm:text-[3.2rem]">{product.name}</h1>
            <div className="mt-5 flex items-center justify-between gap-4 border-b border-mist pb-6">
              <StarRating rating={product.rating} reviews={product.reviews} />
              <p className="text-lg font-semibold text-ink">{currency.format(product.price)}</p>
            </div>
            <p className="mt-6 text-sm leading-7 text-ink/75 sm:text-base">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-brand text-ink/60">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-brand transition ${selectedTone === tone ? 'border-bronze bg-bronze text-ivory' : 'border-mist bg-white text-ink hover:border-bronze hover:text-bronze'}`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-brand text-ink/60">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-mist bg-white px-2 py-2 shadow-soft">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((count) => Math.max(1, count - 1))} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center text-sm font-semibold text-ink">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((count) => count + 1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <button type="button" onClick={() => addItem(product, selectedTone, quantity)} className="mt-8 w-full rounded-full bg-champagne px-6 py-4 text-xs font-semibold uppercase tracking-brand text-obsidian transition hover:bg-bronze hover:text-ivory">
              Add to Cart
            </button>

            <ProductAccordions product={product} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-brand text-bronze">Related pieces</p>
            <h2 className="mt-3 font-serif text-4xl text-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-brand text-bronze">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
