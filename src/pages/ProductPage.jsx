import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem, openCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    openCart()
  }

  return (
    <div className="bg-parchment min-h-screen">
      <div className="container-narrow pt-28 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-stone-500">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-white rounded-sm border border-stone-200 overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'w-16 h-20 md:w-20 md:h-24 rounded-sm overflow-hidden border-2 transition-colors',
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wide uppercase mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium text-stone-900">{product.rating}</span>
              </div>
              <span className="text-stone-300">|</span>
              <span className="text-sm text-stone-500">{product.reviewCount} reviews</span>
            </div>
            <p className="font-serif text-2xl text-stone-900 mb-6">${product.price}</p>
            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-stone-500 mb-3 block">Tone</label>
              <div className="flex gap-3">
                {['gold', 'silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setVariant(tone)}
                    className={cn(
                      'flex-1 py-3 text-xs tracking-widest uppercase rounded-sm border transition-all duration-300',
                      variant === tone
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 text-stone-600 hover:border-stone-400'
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-stone-500 mb-3 block">Quantity</label>
              <div className="inline-flex items-center border border-stone-200 rounded-sm">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {product.badge && (
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <Check className="w-4 h-4 text-gold" />
                <span>Gift-ready packaging available</span>
              </div>
            )}

            {/* Accordions */}
            <div className="mt-10 border-t border-stone-200">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
                { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map(item => (
                <div key={item.id} className="border-b border-stone-200 last:border-b-0">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-widest uppercase text-stone-900">{item.label}</span>
                    <ChevronDown className={cn('w-4 h-4 text-stone-400 transition-transform duration-300', openAccordion === item.id && 'rotate-180')} />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-stone-600 leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(item => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group bg-white rounded-sm border border-stone-200 overflow-hidden transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="aspect-[3/4] bg-stone-100 overflow-hidden">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-sm tracking-wide uppercase text-stone-900 mb-1 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-stone-900">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
