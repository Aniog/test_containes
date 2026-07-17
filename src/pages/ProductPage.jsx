import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === Number(id))
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-ink-900">Product not found</h1>
          <Link to="/shop" className="btn-outline mt-6 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      image: product.images[0],
      quantity,
    })
    setAddedToCart(true)
    toast(`${product.name} added to cart`)
    setTimeout(() => setAddedToCart(false), 2000)
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
          <p className="text-sm leading-relaxed">{product.material}</p>
          <p className="text-sm leading-relaxed">{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-sm leading-relaxed">
          <p>Free worldwide shipping on all orders over $50. Orders are processed within 1-2 business days and delivered within 5-10 business days.</p>
          <p>30-day return policy. Items must be unworn and in original packaging. We offer free exchanges and returns within the US.</p>
        </div>
      ),
    },
  ]

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink-400 mb-8">
          <Link to="/" className="hover:text-ink-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink-700">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <div className="aspect-[4/5] bg-ink-100/50 overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === i
                      ? 'border-ink-900'
                      : 'border-transparent hover:border-ink-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="sticky top-28">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-900 uppercase tracking-widest font-light">
                {product.name}
              </h1>
              <p className="font-serif text-2xl text-gold-700 mt-3">
                ${product.price}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-ink-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-ink-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="mt-6 text-ink-600 text-sm leading-relaxed font-light">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-ink-500 mb-3">
                  Color: <span className="text-ink-900">{selectedColor}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 text-xs uppercase tracking-widest border transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-ink-900 bg-ink-900 text-cream'
                          : 'border-ink-200 text-ink-700 hover:border-ink-400'
                      }`}
                    >
                      {color} Tone
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-ink-500 mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4 border border-ink-200 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-ink-600 hover:text-ink-900 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-ink-600 hover:text-ink-900 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`btn-primary w-full mt-8 flex items-center justify-center gap-3 ${
                  addedToCart ? 'bg-gold-600' : ''
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>

              {/* Accordions */}
              <div className="mt-10 border-t border-ink-100">
                {accordionItems.map((item) => (
                  <div key={item.id} className="border-b border-ink-100">
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === item.id ? null : item.id
                        )
                      }
                      className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-widest text-ink-700 hover:text-ink-900 transition-colors"
                    >
                      {item.title}
                      {openAccordion === item.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.id ? 'max-h-80 pb-4' : 'max-h-0'
                      }`}
                    >
                      <div className="text-ink-600 text-sm leading-relaxed pr-8">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-ink-100">
          <h3 className="text-center font-serif text-2xl text-ink-900 uppercase tracking-widest font-light mb-10">
            You May Also Like
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
              >
                <div className="aspect-[4/5] bg-ink-100/50 overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="product-name group-hover:text-gold-700 transition-colors">
                    {item.name}
                  </h4>
                  <p className="product-price">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}