import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { StarRating, Accordion } from '@/components/ui/Shared'
import { useCart } from '@/context/CartContext'
import { ChevronLeft } from 'lucide-react'
import { toast } from 'sonner'

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  const [selectedImage, setSelectedImage] = React.useState(0)
  const [selectedVariant, setSelectedVariant] = React.useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = React.useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-base mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm tracking-wide uppercase text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return (
    <main className="bg-velmora-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <Link to="/shop" className="flex items-center gap-1 text-xs text-velmora-muted hover:text-velmora-base transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden mb-4 bg-velmora-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-warm-dark'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-base tracking-wide uppercase mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>

            <p className="font-serif text-2xl text-velmora-base mb-6">${product.price}</p>

            <p className="text-velmora-muted leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                        : 'border-velmora-warm-dark text-velmora-muted hover:border-velmora-base'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-warm-dark w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 py-2 text-center hover:bg-velmora-warm/50 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 py-2 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 py-2 text-center hover:bg-velmora-warm/50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-base text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors duration-300 mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-velmora-muted-light text-center">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">
                  Each piece is carefully crafted and quality-checked before shipping. 
                  Our demi-fine jewelry is designed for everyday wear with lasting beauty.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Material:</strong> 18K gold plated over sterling silver base.
                </p>
                <p className="mt-2">
                  <strong>Care:</strong> Store in the provided pouch when not wearing. 
                  Avoid contact with perfumes, lotions, and water. 
                  Clean gently with a soft cloth.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  <strong>Shipping:</strong> Free worldwide shipping on all orders. 
                  Standard delivery takes 5-10 business days. Express shipping available at checkout.
                </p>
                <p className="mt-2">
                  <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn 
                  and in original packaging. Refunds processed within 5 business days.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-velmora-warm">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-base text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-velmora-warm mb-3">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-wide uppercase text-velmora-base group-hover:text-velmora-gold transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
