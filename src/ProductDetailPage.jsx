import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import products from './data'
import { useCart } from './CartContext'
import ProductCard from './ProductCard'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCart()

  const related = products
    .filter((p) => p.id !== product?.id)
    .slice(0, 3)

  useEffect(() => {
    if (product) {
      setSelectedImage(0)
      setSelectedColor(0)
      setQuantity(1)
      setAdded(false)
    }
  }, [product?.id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [product?.id, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[selectedColor],
      quantity,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-14">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 font-sans text-xs text-velmora-taupe hover:text-velmora-charcoal transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-blush overflow-hidden mb-4">
              <div
                className="w-full h-full"
                data-strk-img-id={`pdp-${product.id}-${selectedImage}`}
                data-strk-img={`[pdp-product-name] ${product.images[selectedImage]?.query || 'gold jewelry'}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-velmora-blush overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`${img.query}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-2">
              {product.category}
            </span>
            <h1
              id="pdp-product-name"
              className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-charcoal mb-3"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-2xl text-velmora-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-mist'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-velmora-taupe">
                  ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-velmora-taupe leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wide uppercase text-velmora-charcoal mb-3">
                Finish: <span className="text-velmora-taupe capitalize">{product.colors[selectedColor]} Tone</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(i)}
                    className={`px-5 py-2.5 border text-xs font-sans tracking-wide uppercase transition-all ${
                      i === selectedColor
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-mist text-velmora-taupe hover:border-velmora-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wide uppercase text-velmora-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-mist w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm font-medium text-velmora-charcoal min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-3"
            >
              <ShoppingBag size={16} className="mr-2" />
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-mist/30 pt-6 mt-4">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-mist/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? '' : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-wide uppercase text-velmora-charcoal">
                      {acc.label}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={14} className="text-velmora-taupe" />
                    ) : (
                      <ChevronDown size={14} className="text-velmora-taupe" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-taupe leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-velmora-mist/30 pt-16">
          <h2 className="font-serif text-2xl text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}