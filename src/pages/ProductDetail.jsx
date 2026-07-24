import { useState, useEffect, useRef } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Heart, Truck, RefreshCcw, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import VariantSelector from '@/components/product/VariantSelector'
import QuantitySelector from '@/components/product/QuantitySelector'
import AccordionInfo from '@/components/product/AccordionInfo'
import ProductCard from '@/components/shop/ProductCard'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'
import { Separator } from '@/components/ui/Separator'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = product ? getRelatedProducts(product) : []
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background pb-20 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs uppercase tracking-wider text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <div className="flex flex-col">
            <div className="mb-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {product.category}
              </p>
              <h1 id={`gallery-${product.id}-title`} className="font-serif text-3xl uppercase tracking-[0.12em] text-foreground sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p id={`gallery-${product.id}-desc`} className="sr-only" aria-hidden="true">{product.imageQuery}</p>

              <div className="mt-4 flex items-center gap-4">
                <span className="font-serif text-2xl text-foreground">${product.price}</span>
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>
            </div>

            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {product.shortDescription}
            </p>

            <VariantSelector
              variants={product.variants}
              selected={selectedVariant}
              onSelect={setSelectedVariant}
            />

            <Separator className="my-6" />

            <div className="mb-6 flex items-center gap-4">
              <QuantitySelector quantity={quantity} onChange={setQuantity} />
              <span className="text-sm text-muted-foreground">
                {product.inStock ? 'In stock — ships within 24 hours' : 'Out of stock'}
              </span>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1"
                size="lg"
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </Button>
              <Button variant="outline" size="icon-lg" aria-label="Add to wishlist">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div className="text-center">
                <Truck className="mx-auto mb-2 h-5 w-5 text-accent" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCcw className="mx-auto mb-2 h-5 w-5 text-accent" />
                <p className="text-xs text-muted-foreground">30-Day Returns</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto mb-2 h-5 w-5 text-accent" />
                <p className="text-xs text-muted-foreground">2-Year Warranty</p>
              </div>
            </div>

            <div className="mt-10">
              <AccordionInfo product={product} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl text-foreground sm:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
