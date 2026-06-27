import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('Gold')
  const [mainImage, setMainImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center text-velmora-warm-gray">
        <h2 className="font-serif text-2xl">Product not found</h2>
        <Link to="/shop" className="mt-4 text-sm underline">Back to Shop</Link>
      </div>
    )
  }

  const thumbnails = [
    product.image,
    product.hoverImage || product.image,
    product.image,
    product.hoverImage || product.image,
  ]

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const accordions = [
    { id: 'desc', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: product.materials + ' ' + product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="bg-velmora-ivory pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-velmora-cream">
              <img
                src={thumbnails[mainImage]}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23D4C9B8' width='1' height='1'/%3E%3C/svg%3E`
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`aspect-square overflow-hidden bg-velmora-cream ${
                    mainImage === idx ? 'ring-1 ring-velmora-espresso' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-1 flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-taupe">({product.reviews} reviews)</span>
            </div>
            <h1 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-espresso md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-2xl font-light text-velmora-warm-gray md:text-3xl">
              ${product.price}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-velmora-warm-gray">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
                Tone
              </span>
              <div className="mt-3 flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-wider transition-all ${
                      variant === v
                        ? 'border-velmora-espresso bg-velmora-espresso text-white'
                        : 'border-velmora-sand/60 text-velmora-warm-gray hover:border-velmora-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center gap-4 rounded-full border border-velmora-sand/60 px-4 py-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-8 w-8 items-center justify-center text-velmora-warm-gray transition-colors hover:text-velmora-espresso"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-[1.5rem] text-center text-sm font-medium text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-8 w-8 items-center justify-center text-velmora-warm-gray transition-colors hover:text-velmora-espresso"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full rounded-full bg-velmora-espresso py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-velmora-charcoal"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-t border-velmora-sand/30">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-velmora-warm-gray transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-velmora-warm-gray">{acc.content}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-velmora-sand/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-velmora-sand/30 bg-velmora-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl font-light tracking-wide text-velmora-espresso md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
