import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { toast } from 'sonner'
import { productImages } from '@/components/ui/ProductCard'

const accordionData = [
  {
    title: 'Description',
    content:
      'Each Velmora piece is designed with intention — balancing modern minimalism with timeless elegance. Our demi-fine collection features 18K gold-plated metals, hand-set crystals, and hypoallergenic materials for sensitive skin.',
  },
  {
    title: 'Materials & Care',
    content:
      '18K gold plated over brass • Hypoallergenic • Lead and nickel free • Avoid water, perfume, and lotions • Store separately in a soft pouch • Clean with a dry cloth',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping on orders over $100. Orders ship within 1–2 business days. 30-day return policy for unworn items in original packaging. Please allow 5–7 business days for refund processing.',
  },
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-velmora-gold"
      >
        <span className="text-xs tracking-wider uppercase text-velmora-600 font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-velmora-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-600 leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('gold')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-800">Product not found</h1>
          <Link to="/shop" className="text-velmora-gold text-sm mt-4 inline-block hover:underline">
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  const mainImages = product.images || []
  const currentSrc = productImages[mainImages[selectedImage]] || ''

  return (
    <div className="pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-velmora-400 mb-6 hidden md:block">
          <Link to="/" className="hover:text-velmora-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-600 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-50 overflow-hidden">
              <img
                src={currentSrc}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {mainImages.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 bg-velmora-50 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-200'
                  }`}
                >
                  <img
                    src={productImages[img] || ''}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            <h1 className="text-product text-2xl md:text-3xl text-velmora-800 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-700 mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-600 leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-velmora-500 mb-3">
                Finish: <span className="text-velmora-800 font-medium">{variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-3 text-xs tracking-wider uppercase border transition-all duration-200 ${
                    variant === 'gold'
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-velmora-200 text-velmora-600 hover:border-velmora-400'
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-3 text-xs tracking-wider uppercase border transition-all duration-200 ${
                    variant === 'silver'
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-velmora-200 text-velmora-600 hover:border-velmora-400'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-wider uppercase text-velmora-500">
                  Quantity
                </span>
                <div className="flex items-center border border-velmora-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-3 text-velmora-500 hover:text-velmora-800 disabled:opacity-30 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-12 text-center text-sm text-velmora-800 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-velmora-500 hover:text-velmora-800 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn-primary w-full text-center"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              {accordionData.map((section) => (
                <Accordion key={section.title} title={section.title}>
                  {section.content}
                </Accordion>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-800 font-light">
              You May Also Like
            </h2>
            <div className="w-10 h-[1px] bg-velmora-gold mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}