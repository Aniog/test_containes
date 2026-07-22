import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { products } from '@/data/products'
import { Accordion } from '@/components/ui/Accordion'
import { StarRating } from '@/components/ui/StarRating'
import { useCart } from '@/context/CartContext'
import { ProductCard } from '@/components/ui/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  const galleryRef = useRef(null)

  useEffect(() => {
    if (!galleryRef.current) return
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current)
  }, [productId])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 text-gold hover:underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Express available at checkout. 30-day hassle-free returns on unworn items.',
    },
  ]

  const handleAddToCart = () => {
    addToCart(product, selectedTone, quantity)
  }

  return (
    <div className="bg-cream pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div ref={galleryRef} className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-blush">
              <img
                data-strk-img-id={`${product.imageId}-main`}
                data-strk-img={`[product-detail-name] [product-detail-category] velmora ${product.name} gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square overflow-hidden bg-blush ${
                    activeImage === i ? 'ring-1 ring-gold' : ''
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imageId}-thumb-${i}`}
                    data-strk-img={`[product-detail-name] [product-detail-category] velmora ${product.name} detail shot ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center lg:py-8">
            <p
              id="product-detail-category"
              className="text-[10px] uppercase tracking-[0.25em] text-warm-gray"
            >
              {product.category}
            </p>
            <h1
              id="product-detail-name"
              className="mt-2 font-serif text-3xl font-medium uppercase tracking-widest md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="mt-5 font-serif text-3xl font-light text-gold">
              ${product.price}
            </p>
            <p className="mt-6 leading-relaxed text-warm-gray">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-espresso">
                Metal Tone
              </label>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-widest transition-all ${
                      selectedTone === tone
                        ? 'border-espresso bg-espresso text-white'
                        : 'border-hairline bg-white text-espresso hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and add to cart */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center border border-hairline bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-4 hover:bg-blush"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-4 hover:bg-blush"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gold py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-espresso"
              >
                Add to Cart — ${product.price * quantity}
              </button>
              <button
                className="border border-hairline bg-white p-4 text-espresso transition-colors hover:bg-blush"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Trust icons */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-hairline py-6">
              <div className="text-center">
                <Truck className="mx-auto h-5 w-5 text-gold" />
                <p className="mt-2 text-[10px] uppercase tracking-wider text-warm-gray">
                  Free Shipping
                </p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto h-5 w-5 text-gold" />
                <p className="mt-2 text-[10px] uppercase tracking-wider text-warm-gray">
                  30-Day Returns
                </p>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto h-5 w-5 text-gold" />
                <p className="mt-2 text-[10px] uppercase tracking-wider text-warm-gray">
                  2-Year Warranty
                </p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-hairline pt-16">
            <h2 className="mb-10 text-center font-serif text-3xl font-light md:text-4xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
              {related.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
