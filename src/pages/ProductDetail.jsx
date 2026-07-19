import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, ArrowLeft } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import QuantitySelector from '@/components/ui/QuantitySelector'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import StockImage from '@/components/ui/StockImage'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = getProductById(id)

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImageIndex(0)
    }
  }, [product])

  if (!product) {
    return (
      <div className="pt-32 text-center px-5">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Orders ship within 1–2 business days. We offer 30-day hassle-free returns on unworn pieces in original packaging.',
    },
  ]

  const imageKeys = product.images[selectedTone] || product.images[product.tone[0]]

  return (
    <div className="bg-ivory">
      <div className="pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-taupe hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                {imageKeys.map((key, index) => (
                  <button
                    key={key}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border transition-colors ${
                      activeImageIndex === index
                        ? 'border-gold'
                        : 'border-stone hover:border-taupe'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <StockImage
                      id={`${product.id}-thumb-${key}`}
                      query={`[product-${product.id}-name]`}
                      ratio="1x1"
                      width={200}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="flex-1 aspect-[4/5] bg-cream overflow-hidden">
                <StockImage
                  id={`${product.id}-main-${imageKeys[activeImageIndex]}`}
                  query={`[product-${product.id}-name] [product-${product.id}-desc]`}
                  ratio="4x3"
                  width={900}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:pl-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">
                {product.category}
              </p>
              <h1
                id={`product-${product.id}-name`}
                className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-product text-espresso"
              >
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <StarRating rating={product.rating} size={14} />
                <span className="text-sm text-taupe">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <p className="mt-5 text-2xl font-serif text-espresso">
                {formatPrice(product.price)}
              </p>
              <p
                id={`product-${product.id}-desc`}
                className="mt-5 text-taupe leading-relaxed"
              >
                {product.shortDescription}
              </p>

              {product.tone.length > 1 && (
                <div className="mt-6">
                  <span className="text-xs uppercase tracking-[0.18em] text-taupe">
                    Tone
                  </span>
                  <div className="mt-3 flex gap-3">
                    {product.tone.map((tone) => (
                      <button
                        key={tone}
                        onClick={() => setSelectedTone(tone)}
                        className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-colors ${
                          selectedTone === tone
                            ? 'border-gold text-gold'
                            : 'border-stone text-taupe hover:border-taupe'
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <span className="text-xs uppercase tracking-[0.18em] text-taupe">
                  Quantity
                </span>
                <div className="mt-3">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Button
                  className="flex-1"
                  onClick={() => addItem(product, quantity, selectedTone)}
                >
                  Add to Cart
                </Button>
                <button
                  className="px-4 border border-stone hover:border-gold hover:text-gold transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-10">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="border-t border-stone py-16 md:py-24">
        <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
