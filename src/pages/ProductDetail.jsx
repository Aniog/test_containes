import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useCartActions } from '@/context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug || p.id === slug)
  const { addItem, toggleCart } = useCartActions()

  const [activeImage, setActiveImage] = useState('front')
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'Gold'
  )
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velvet-900 mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-outline text-xs">
            Browse Collection
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem(product.id, product, selectedVariant, quantity)
    toggleCart(true)
  }

  const imageKeys = Object.keys(product.images)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const accordionItems = [
    {
      key: 'description',
      label: 'DESCRIPTION',
      content: (
        <p className="font-sans text-sm text-velvet-600 leading-relaxed">
          {product.description}
        </p>
      ),
    },
    {
      key: 'materials',
      label: 'MATERIALS & CARE',
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-1">
              MATERIALS
            </p>
            <p className="font-sans text-sm text-velvet-600 leading-relaxed">
              {product.materials}
            </p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-1">
              CARE
            </p>
            <p className="font-sans text-sm text-velvet-600 leading-relaxed">
              {product.care}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: 'shipping',
      label: 'SHIPPING & RETURNS',
      content: (
        <p className="font-sans text-sm text-velvet-600 leading-relaxed">
          Free worldwide shipping on all orders. Dispatched within 1-2 business
          days. 30-day returns on unworn items.
        </p>
      ),
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-6">
        <nav className="flex items-center gap-2 text-[10px] font-sans tracking-[0.15em] text-velvet-400 uppercase">
          <Link to="/" className="hover:text-velvet-700 transition-colors">
            Home
          </Link>
          <ChevronRight size={10} strokeWidth={1} />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-velvet-700 transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight size={10} strokeWidth={1} />
          <span className="text-velvet-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="flex gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {imageKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveImage(key)}
                  className={`w-16 md:w-20 aspect-[3/4] flex items-center justify-center transition-all duration-300 ${
                    activeImage === key
                      ? 'ring-1 ring-velvet-950 ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: product.images[key].hex }}
                  aria-label={product.images[key].label}
                >
                  <span className="text-[8px] font-sans tracking-wider text-cream-50/60 text-center leading-tight px-1">
                    {product.images[key].label}
                  </span>
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div
              className="flex-1 aspect-[3/4] flex items-center justify-center transition-colors duration-500"
              style={{ backgroundColor: product.images[activeImage].hex }}
            >
              <span className="font-sans text-xs tracking-[0.2em] text-cream-50/50">
                {product.images[activeImage].label}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {product.tag && (
              <span className="inline-flex self-start bg-velvet-950 text-cream-50 text-[9px] font-sans font-medium tracking-[0.2em] px-2.5 py-1">
                {product.tag}
              </span>
            )}

            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] text-velvet-500 uppercase mb-2">
                {product.category === 'huggies'
                  ? 'HUGGIES'
                  : product.category.toUpperCase()}
              </p>
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-velvet-950 font-medium">
                {product.name}
              </h1>
            </div>

            <StarRating
              rating={product.rating}
              count={product.reviewCount}
              size={16}
            />

            <p className="font-sans text-xl font-medium text-velvet-900">
              ${product.price}
            </p>

            <p className="font-sans text-sm text-velvet-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-2">
                  FINISH
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 font-sans text-xs tracking-wider border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-velvet-950 bg-velvet-950 text-cream-50'
                          : 'border-velvet-200 text-velvet-600 hover:border-velvet-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] text-velvet-500 uppercase mb-2">
                QUANTITY
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velvet-200 text-velvet-600 hover:border-velvet-950 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1} />
                </button>
                <span className="font-sans text-sm tabular-nums w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velvet-200 text-velvet-600 hover:border-velvet-950 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-sm tracking-widest mt-2"
            >
              ADD TO CART
            </button>

            {/* Accordions */}
            <div className="mt-4 divide-y divide-velvet-200">
              {accordionItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.key ? null : item.key
                      )
                    }
                    className="w-full flex items-center justify-between py-4 text-left font-sans text-[11px] tracking-[0.18em] text-velvet-700 uppercase hover:text-velvet-950 transition-colors"
                  >
                    {item.label}
                    <span
                      className={`text-velvet-400 transition-transform duration-300 ${
                        openAccordion === item.key ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-5 animate-fade-in">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-2">
            Complete Your Collection
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-velvet-950 font-medium tracking-tight">
            You May Also Like
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  )
}
