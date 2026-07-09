import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, Minus, Plus, ChevronRight } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/lib/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velvet-950">
        <div className="text-center">
          <h1 className="heading-lg text-velvet-50 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const variant = product.variants[selectedVariant]

  const handleAdd = () => {
    addToCart(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="bg-velvet-950 pt-24 md:pt-28">
      <div className="container-site">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-velvet-500 mb-8">
          <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold-400 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velvet-300">{product.shortName}</span>
        </div>

        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="animate-fade-in">
            <ProductGallery images={product.images} productName={product.shortName} />
          </div>

          {/* Info */}
          <div className="animate-slide-up">
            <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-3 font-medium">
              {product.material}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider text-velvet-50 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span className="text-sm text-velvet-400">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl text-gold-400 font-medium mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-velvet-300 text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase text-velvet-400 mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((v, i) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-5 py-2.5 text-sm border transition-all duration-300 rounded-sm ${
                        i === selectedVariant
                          ? 'border-gold-500 text-gold-400 bg-gold-500/10'
                          : 'border-velvet-700 text-velvet-400 hover:border-velvet-500'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-velvet-400 mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-700 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velvet-400 hover:text-velvet-200 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-velvet-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velvet-400 hover:text-velvet-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`btn-primary w-full mb-4 flex items-center justify-center gap-3 transition-all duration-300 ${
                added ? 'bg-green-600 hover:bg-green-600' : ''
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* In stock indicator */}
            {product.inStock && (
              <p className="text-xs text-velvet-500 text-center">In Stock — Ready to Ship</p>
            )}

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion title="Description" items={product.details} />
              <ProductAccordion title="Materials & Care" items={product.materialsCare} />
              <ProductAccordion title="Shipping & Returns" items={product.shippingReturns} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="section-padding">
            <div className="hairline-divider mb-14" />
            <h2 className="heading-lg text-velvet-50 text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] bg-velvet-800 rounded-sm overflow-hidden mb-4">
                    <div className="w-full h-full bg-gradient-to-b from-velvet-700 to-velvet-800 flex items-center justify-center">
                      <span className="text-velvet-500 text-xs">JEWELRY</span>
                    </div>
                  </div>
                  <p className="text-[10px] tracking-super-wide uppercase text-velvet-500 mb-1.5">
                    {rp.material}
                  </p>
                  <h3 className="text-xs tracking-wider text-velvet-100 font-medium mb-1.5">
                    {rp.name}
                  </h3>
                  <p className="text-sm text-gold-400 font-medium">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}