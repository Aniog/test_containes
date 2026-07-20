import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const related = product ? getRelatedProducts(product.id) : []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [id, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-50">
        <div className="text-center">
          <p className="text-dark-400 text-lg mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-dark-900 underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="bg-white pt-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-dark-400 hover:text-dark-900 transition-colors mb-8"
        >
          <ChevronLeft className="h-3 w-3" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-dark-50 overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 bg-dark-50 overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-dark-900' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[pdp-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">
              {product.category}
            </span>
            <h1 id={`pdp-name-${product.id}`} className="font-serif text-3xl md:text-4xl text-dark-900 mt-2 leading-tight tracking-wider uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-dark-200'}`} />
                ))}
              </div>
              <span className="text-xs text-dark-400">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-serif text-dark-900 mt-4">${product.price}</p>

            <div className="w-full h-px bg-dark-100 my-6" />

            <p id={`pdp-desc-${product.id}`} className="text-sm text-dark-500 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase text-dark-500">Finish</span>
              <div className="flex gap-3 mt-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'bg-dark-900 text-cream-50'
                        : 'bg-dark-50 text-dark-600 hover:bg-dark-100'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase text-dark-500">Quantity</span>
              <div className="flex items-center border border-dark-200 mt-2 w-fit">
                <button
                  className="px-4 py-2.5 text-dark-500 hover:text-dark-900 transition-colors text-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-5 py-2.5 text-sm text-dark-900 min-w-[40px] text-center">{quantity}</span>
                <button
                  className="px-4 py-2.5 text-dark-500 hover:text-dark-900 transition-colors text-sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant="accent"
              size="lg"
              className="w-full mt-8"
              onClick={handleAddToCart}
            >
              {added ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" /> Added to Cart
                </span>
              ) : (
                `Add to Cart — $${product.price}`
              )}
            </Button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion>
                <AccordionItem defaultOpen>
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>
                    {product.details}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                  <AccordionTrigger>Materials & Care</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    Free worldwide shipping on all orders. Orders are processed within 1-2 business days. 
                    We offer a 30-day return policy for unworn items in original packaging. 
                    Please allow 5-10 business days for refunds to process after we receive your return.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 pt-12 border-t border-dark-100">
            <h2 className="font-serif text-2xl text-dark-900 mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(rp => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[4/5] bg-dark-50 overflow-hidden">
                    <img
                      data-strk-img-id={`${rp.imgId}-related`}
                      data-strk-img={`[related-name-${rp.id}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 id={`related-name-${rp.id}`} className="text-xs tracking-widest uppercase text-dark-900 mt-3 font-medium">
                    {rp.name}
                  </h3>
                  <p className="text-sm text-dark-500 mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}