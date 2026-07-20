import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronDown, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'

export default function ProductPage() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [productId])

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-velmora-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl tracking-wide mb-2">Product Not Found</h1>
          <Link to="/shop" className="text-xs uppercase tracking-widest text-velmora-gold underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem(product, tone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>Free worldwide shipping on all orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available at checkout.</p>
          <p>We accept returns within 30 days of delivery. Items must be unworn and in original packaging. Free return shipping on all orders.</p>
        </div>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-velmora-stone/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-xs text-velmora-warmgray">
            <Link to="/" className="transition-colors hover:text-velmora-ink">Home</Link>
            <span>/</span>
            <Link to="/shop" className="transition-colors hover:text-velmora-ink">Shop</Link>
            <span>/</span>
            <span className="text-velmora-ink capitalize">{product.name.toLowerCase()}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-velmora-sand mb-4">
              <img
                data-strk-img-id={product.images[selectedImage].id}
                data-strk-img={product.images[selectedImage].query}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={String(product.images[selectedImage].width)}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] w-20 overflow-hidden bg-velmora-sand border-2 transition-colors ${
                    selectedImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-warmgray">({product.reviews} reviews)</span>
            </div>

            <h1
              id="product-detail-name"
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velmora-ink mb-2"
            >
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-velmora-gold mb-6">
              ${product.price}
            </p>

            <p className="text-sm leading-relaxed text-velmora-warmgray mb-8">
              {product.description}
            </p>

            {/* Tone Selector */}
            <div className="mb-6">
              <span className="block text-[11px] uppercase tracking-widest text-velmora-ink font-medium mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-widest border transition-all ${
                      tone === t
                        ? 'border-velmora-ink bg-velmora-ink text-white'
                        : 'border-velmora-stone text-velmora-warmgray hover:border-velmora-ink'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="block text-[11px] uppercase tracking-widest text-velmora-ink font-medium mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-velmora-stone/50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 transition-colors hover:bg-velmora-sand"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-[3rem] text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 transition-colors hover:bg-velmora-sand"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                added
                  ? 'bg-velmora-gold text-white'
                  : 'bg-velmora-ink text-white hover:bg-velmora-charcoal'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-velmora-warmgray">
              <span>Free Shipping</span>
              <span>30-Day Returns</span>
              <span>Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-stone/30">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-stone/30">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? '' : acc.key)
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest font-medium text-velmora-ink">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-velmora-warmgray transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-velmora ${
                      openAccordion === acc.key ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm leading-relaxed text-velmora-warmgray">
                      {acc.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-velmora-stone/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
                You May Also Like
              </h2>
              <Link
                to="/shop"
                className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-warmgray transition-colors hover:text-velmora-ink"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
