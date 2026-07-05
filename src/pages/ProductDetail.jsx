import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Minus, Plus, Star } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { products, getProductBySlug, getRelatedProducts, PLACEHOLDER_IMG } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'

const tones = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setSelectedImage(0)
    setQuantity(1)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl text-velmora-ink mb-4">Product Not Found</h1>
        <Button asChild className="bg-velmora-gold hover:bg-velmora-goldDark text-white rounded-none">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)
  const thumbnails = [0, 1, 2]

  return (
    <div className="bg-velmora-cream pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-velmora-taupe hover:text-velmora-gold transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar">
              {thumbnails.map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 bg-velmora-sand overflow-hidden border transition-colors strk-placeholder ${
                    selectedImage === idx
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-taupe/40'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={`thumb-${product.id}-${idx}`}
                    data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src={PLACEHOLDER_IMG}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-velmora-sand overflow-hidden strk-placeholder">
              <img
                data-strk-img-id={`main-${product.id}-${selectedImage}`}
                data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={PLACEHOLDER_IMG}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.12em] text-velmora-ink mb-3">
              {product.name}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-velmora-ink mb-4">
              {formatPrice(product.price)}
            </p>
            <StarRating
              rating={product.rating}
              reviewCount={product.reviewCount}
              size={14}
            />

            <p className="mt-6 text-velmora-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-velmora-ink mb-3">
                Tone
              </p>
              <div className="flex gap-3" role="radiogroup" aria-label="Tone">
                {tones.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedTone(tone.id)}
                    role="radio"
                    aria-checked={selectedTone === tone.id}
                    className={`h-11 px-6 rounded-full text-xs uppercase tracking-[0.15em] border transition-all ${
                      selectedTone === tone.id
                        ? 'bg-velmora-ink text-white border-velmora-ink'
                        : 'bg-transparent text-velmora-ink border-velmora-sand hover:border-velmora-ink'
                    }`}
                  >
                    {tone.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-velmora-ink mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <Button
              onClick={() => addItem(product, { tone: selectedTone, quantity })}
              className="w-full mt-8 h-14 bg-velmora-gold hover:bg-velmora-goldDark text-white rounded-none uppercase tracking-[0.2em] text-xs font-medium transition-colors"
              aria-live="polite"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            <div className="mt-6 flex items-center gap-2 text-xs text-velmora-taupe">
              <Star size={14} className="text-velmora-gold" />
              Free worldwide shipping on orders over $75
            </div>

            {/* Accordions */}
            <Accordion type="multiple" className="mt-10 border-t border-velmora-sand">
              <AccordionItem value="description" className="border-b border-velmora-sand">
                <AccordionTrigger className="text-xs uppercase tracking-[0.18em] text-velmora-ink hover:no-underline py-5">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-velmora-taupe pb-5 leading-relaxed">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-b border-velmora-sand">
                <AccordionTrigger className="text-xs uppercase tracking-[0.18em] text-velmora-ink hover:no-underline py-5">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-velmora-taupe pb-5 leading-relaxed">
                  <p className="mb-2">{product.details}</p>
                  <p>{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-b border-velmora-sand">
                <AccordionTrigger className="text-xs uppercase tracking-[0.18em] text-velmora-ink hover:no-underline py-5">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-velmora-taupe pb-5 leading-relaxed">
                  Free worldwide shipping on all orders over $75. Standard delivery
                  5–10 business days. Express options available at checkout. Returns
                  accepted within 30 days of delivery for unworn items in original
                  packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-2">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
