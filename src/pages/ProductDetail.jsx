import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-nav font-sans">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const product = products.find((p) => p.slug === slug)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [slug])

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant('Gold')
    setQuantity(1)
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline text-sm">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted mb-6 font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-base">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-surface-warm overflow-hidden mb-3">
              <img
                data-strk-img-id={`pdp-${product.slug}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-surface-warm overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.slug}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry ${i === 0 ? 'front' : 'worn'}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src={product.images[i]}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-product leading-tight">
              {product.name}
            </h1>
            <p id={product.descId} className="text-sm text-muted mt-1 hidden">{product.description}</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}`} />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviews})</span>
            </div>

            <p className="font-serif text-2xl mt-4">${product.price}</p>

            <p className="text-sm text-muted mt-4 leading-relaxed">{product.description}. Crafted with care using premium materials for lasting shine and comfort.</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-nav font-sans mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-nav font-sans border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-divider text-muted hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-nav font-sans mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-divider hover:border-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-divider hover:border-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-white py-3.5 text-xs uppercase tracking-nav font-sans transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}. Each piece is meticulously crafted with 18K gold plating over sterling silver, ensuring a luxurious feel and lasting durability. Perfect for both everyday wear and special occasions.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over 925 Sterling Silver</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Tarnish-resistant coating</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with perfume, lotions, and water</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Orders ship within 1–2 business days</li>
                  <li>30-day hassle-free returns</li>
                  <li>Gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl tracking-product uppercase text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[4/5] bg-surface-warm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.slug}-1`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-product">{p.name}</h3>
                <p className="text-sm font-sans mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
