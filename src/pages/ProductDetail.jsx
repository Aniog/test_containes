import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ui/ProductCard'
import { toast } from 'sonner'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description + ' Each piece is carefully crafted with attention to detail, ensuring a luxurious feel and lasting beauty. Perfect for everyday wear or special occasions.',
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: '18K gold plated over sterling silver base. Hypoallergenic and nickel-free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express delivery: 2-4 business days ($12). 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-secondary rounded-sm mb-4 overflow-hidden">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`pdp-main-${product.id}`}
                data-strk-bg={`[${product.id}-name] [pdp-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                style={{ backgroundColor: '#E8E0D5' }}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 rounded-sm overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-2 ring-accent'
                      : 'ring-1 ring-border hover:ring-accent/50'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`pdp-thumb-${product.id}-${index}`}
                    data-strk-bg={`[${product.id}-name]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="200"
                    style={{ backgroundColor: '#D5CFC5' }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block text-[10px] uppercase tracking-widest text-accent mb-3">
                {product.badge}
              </span>
            )}
            <h1 id="pdp-title" className="product-name text-2xl md:text-3xl text-foreground mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="serif-heading text-2xl text-accent mb-6">${product.price}</p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-foreground mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-accent text-white'
                        : 'border border-border text-foreground hover:border-accent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-foreground mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-3 py-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>Free Shipping</span>
              <span className="w-px h-4 bg-border" />
              <span>30-Day Returns</span>
              <span className="w-px h-4 bg-border" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl mx-auto">
          {accordions.map((accordion) => (
            <div key={accordion.key} className="border-b border-border">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.key ? null : accordion.key)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm uppercase tracking-widest text-foreground">{accordion.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openAccordion === accordion.key ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === accordion.key ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {accordion.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-20">
          <h2 className="section-title">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
