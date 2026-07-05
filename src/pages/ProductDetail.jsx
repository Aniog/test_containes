import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem, openCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedMaterial, setSelectedMaterial] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velvet-50 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-xs uppercase tracking-widest hover:text-gold-light transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedMaterial)
    }
    setAdded(true)
    setTimeout(() => {
      openCart()
      setAdded(false)
    }, 500)
  }

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p className="text-velvet-50/70 text-sm leading-relaxed">{product.materials}</p>
          <p className="text-velvet-50/70 text-sm leading-relaxed">{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2 text-sm text-velvet-50/70 leading-relaxed">
          <p>Free worldwide shipping on all orders. Estimated delivery 5-10 business days.</p>
          <p>30-day return policy for unworn items in original packaging. Full refund or exchange.</p>
          <p>All orders are tracked and insured.</p>
        </div>
      ),
    },
  ]

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-velvet-200/60 font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet-50/80">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velvet-600 rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      'w-20 h-20 bg-velvet-600 rounded-sm overflow-hidden border-2 transition-all',
                      selectedImage === i
                        ? 'border-gold opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    )}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:pt-8">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < Math.floor(product.rating)
                      ? 'text-gold fill-gold'
                      : 'text-velvet-400/40'
                  )}
                />
              ))}
              <span className="text-xs text-velvet-200/60 ml-2 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velvet-50 mb-3">
              {product.name}
            </h1>
            <p className="text-gold text-2xl font-sans mb-6">${product.price}</p>

            <p className="text-velvet-50/70 text-sm leading-relaxed mb-8 font-sans font-light">
              {product.description}
            </p>

            {/* Material Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-velvet-200 mb-3 font-sans">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={cn(
                      'px-6 py-3 text-xs uppercase tracking-wider rounded-sm border transition-all duration-300 font-sans',
                      selectedMaterial === material
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-velvet-400/40 text-velvet-200 hover:border-velvet-200/60'
                    )}
                  >
                    {material} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-velvet-200 mb-3 font-sans">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velvet-400/40 rounded-sm flex items-center justify-center text-velvet-200 hover:text-velvet-50 hover:border-velvet-200 transition-all"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <span className="text-lg text-velvet-50 w-8 text-center font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velvet-400/40 rounded-sm flex items-center justify-center text-velvet-200 hover:text-velvet-50 hover:border-velvet-200 transition-all"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={cn(
                'w-full bg-gold text-velvet font-medium uppercase tracking-widest text-xs py-5 rounded-sm transition-all duration-300 flex items-center justify-center gap-3',
                added ? 'opacity-70 scale-[0.98]' : 'hover:bg-gold-light'
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Adding to Cart...' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velvet-400/20">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velvet-400/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest text-velvet-50/80 font-sans">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-velvet-200/60 transition-transform duration-300',
                        openAccordion === item.id && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordion === item.id ? 'max-h-96 pb-5' : 'max-h-0'
                    )}
                  >
                    <div className="text-velvet-50/70 text-sm leading-relaxed font-sans font-light">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-velvet-400/20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl text-velvet-50">You May Also Like</h2>
              <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velvet-600 rounded-sm overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs uppercase tracking-widest text-velvet-50/80 group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gold text-sm mt-1 font-sans">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}