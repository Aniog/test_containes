import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Minus, Plus, Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'
import ProductCard from '@/components/products/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const [selectedMaterial, setSelectedMaterial] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, setCartOpen } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug, selectedMaterial])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const images = product.images?.[selectedMaterial] || product.images?.gold || []
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity)
    toast.success(`${product.name} added to cart`)
    setCartOpen(true)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <nav className="border-b border-black/5" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-xs text-current/60">
            <li><Link to="/" className="hover:text-current">Home</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link to="/shop" className="hover:text-current">Shop</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li className="text-current" aria-current="page">{product.name}</li>
          </ol>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#f5f5f0]">
              {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-[#ecece6]" />}
              <img
                alt={product.name}
                data-strk-img-id={`product-detail-${product.id}-${selectedMaterial}-${activeImage}`}
                data-strk-img={`[product-detail-name-${product.id}] [product-detail-category-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className={`h-full w-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              <span id={`product-detail-name-${product.id}`} className="hidden">
                {product.name}
              </span>
              <span id={`product-detail-category-${product.id}`} className="hidden">
                {product.category} jewelry
              </span>
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => { setActiveImage(idx); setImageLoaded(false) }}
                  className={`h-20 w-16 overflow-hidden rounded-sm border ${
                    activeImage === idx ? 'border-[#b08d57]' : 'border-black/5'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`product-detail-thumb-${product.id}-${idx}`}
                    data-strk-img={`[product-detail-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="font-serif text-2xl uppercase tracking-wide sm:text-3xl">{product.name}</h1>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#b08d57]">
                  <Star className="h-4 w-4" fill="currentColor" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-xs text-current/50">({product.reviewCount} reviews)</span>
              </div>
              <p className="mt-4 text-2xl font-medium">${product.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-current/70">{product.description}</p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-current/70">Tone</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() => { setSelectedMaterial(material); setImageLoaded(false) }}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                      selectedMaterial === material
                        ? 'border-[#b08d57] bg-[#b08d57] text-white'
                        : 'border-black/10 text-current hover:border-[#b08d57]'
                    }`}
                  >
                    {selectedMaterial === material && <Check className="h-3.5 w-3.5" />}
                    {material}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-current/70">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-black/10">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center text-current/70 hover:text-current transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center text-current/70 hover:text-current transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="mt-8 h-12 w-full rounded-sm bg-[#b08d57] text-sm font-semibold uppercase tracking-widest text-white hover:bg-[#9a7a4a]"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="description">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest">
                  Description
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-current/70">{product.description}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-current/70">{product.details}</p>
                  <p className="mt-3 text-sm leading-relaxed text-current/70">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-current/70">{product.shipping}</p>
                  <p className="mt-3 text-sm leading-relaxed text-current/70">{product.returns}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl">You May Also Like</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
