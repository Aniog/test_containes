import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronLeft, ArrowRight } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductAccordion from '@/components/ProductAccordion'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedImage(0)
      setVariant(product.variants[0])
      setQuantity(1)
      setAdded(false)
    }
  }, [id, product])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-sans text-sm text-[#8C867C]">Product not found</p>
          <Link to="/shop" className="font-sans text-sm text-[#C69C6D] mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `Materials:\n${product.materials}\n\nCare:\n${product.care}` },
    { title: 'Shipping & Returns', content: `Shipping:\n${product.shipping}\n\nReturns:\n${product.returns}` },
  ]

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <div className="py-4 md:py-6">
          <Link to="/shop" className="inline-flex items-center gap-1 font-sans text-xs text-[#8C867C] hover:text-[#C69C6D] transition-colors">
            <ChevronLeft size={14} />
            Back to Shop
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 pb-12 md:pb-20">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#F0E9DF] overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-[#C69C6D]' : 'border-transparent hover:border-[#E5DDD3]'
                  }`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:pt-4">
            {product.badge && (
              <span className="inline-block bg-[#C69C6D]/10 text-[#C69C6D] font-sans text-[10px] tracking-[0.08em] uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#2D2A24] uppercase tracking-[0.08em] mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[#C69C6D] fill-[#C69C6D]' : 'text-[#E5DDD3] fill-[#E5DDD3]'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-[#8C867C]">{product.rating} / 5.0</span>
            </div>

            <p className="font-serif text-2xl font-semibold text-[#2D2A24] mb-6">
              ${product.price}
            </p>

            <p className="font-sans text-sm text-[#8C867C] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs font-medium text-[#2D2A24] tracking-[0.05em] uppercase mb-3">
                  Finish: <span className="text-[#C69C6D]">{variant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      className={`px-5 py-2.5 font-sans text-xs tracking-[0.05em] uppercase transition-all duration-200 ${
                        variant === v
                          ? 'bg-[#2D2A24] text-white'
                          : 'bg-transparent text-[#2D2A24] border border-[#E5DDD3] hover:border-[#2D2A24]'
                      }`}
                      onClick={() => setVariant(v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-8">
              <div className="flex items-center border border-[#E5DDD3]">
                <button
                  className="p-3 hover:text-[#C69C6D] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 font-sans text-sm min-w-[40px] text-center">{quantity}</span>
                <button
                  className="p-3 hover:text-[#C69C6D] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 font-sans text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-[#2D2A24] text-[#F8F4EE]'
                    : 'bg-[#C69C6D] text-white hover:bg-[#A67C4E]'
                }`}
              >
                {added ? (
                  'Added!'
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Accordion */}
            <ProductAccordion items={accordionItems} />
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="pb-16 md:pb-24">
            <div className="border-t border-[#E5DDD3] pt-10 md:pt-14">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D2A24]">
                  You May Also Like
                </h2>
                <Link
                  to="/shop"
                  className="hidden md:inline-flex items-center gap-1 font-sans text-xs tracking-[0.08em] uppercase text-[#C69C6D] hover:text-[#A67C4E] transition-colors"
                >
                  View All <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="group">
                    <div className="aspect-[4/5] bg-[#F0E9DF] overflow-hidden mb-3">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-xs md:text-sm font-semibold text-[#2D2A24] uppercase tracking-[0.1em] truncate">
                      {p.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-[#2D2A24] mt-1">
                      ${p.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}