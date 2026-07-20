import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, ShoppingBag } from 'lucide-react'
import { products } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import RelatedProducts from '@/components/product/RelatedProducts'

const materials = ['18K Gold Plated', 'Silver Tone']

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedMaterial, setSelectedMaterial] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="text-gold hover:text-gold-dark mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images.front,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-muted-text hover:text-gold transition-colors mb-6"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-[#1A1A1A]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-warm-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-gold mt-3">${product.price}</p>

            <p className="text-sm text-muted-text leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Material variant */}
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-[0.15em] text-muted-text mb-2">
                Material
              </h4>
              <div className="flex gap-2">
                {materials.map((mat, idx) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(idx)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.1em] rounded-full border transition-all duration-300 ${
                      selectedMaterial === idx
                        ? 'border-gold bg-gold text-white'
                        : 'border-warm-border text-muted-text hover:border-gold'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-[0.15em] text-muted-text mb-2">
                Quantity
              </h4>
              <div className="flex items-center border border-warm-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm hover:bg-warm transition-colors"
                >
                  &minus;
                </button>
                <span className="px-4 py-2 text-sm min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm hover:bg-warm transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-6 py-3.5 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-gold hover:bg-gold-dark text-white hover:shadow-lg'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag!' : 'Add to Cart'}
            </button>

            {/* Accordion details */}
            <ProductAccordion
              details={product.details}
              care={product.care}
              shipping={product.shipping}
            />
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  )
}