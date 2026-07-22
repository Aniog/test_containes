import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Accordion } from '@/components/ui/accordion'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop"><Button variant="outline">Back to Shop</Button></Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordionItems = [
    { value: 'description', title: 'Description', content: product.fullDescription },
    { value: 'materials', title: 'Materials & Care', content: product.materials },
    { value: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-cardwhite mb-4">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={String(product.images[selectedImage].width)}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 aspect-[3/4] overflow-hidden bg-cardwhite border-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                    selectedImage === index ? 'border-gold' : 'border-borderwarm hover:border-gold'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-product uppercase text-charcoal mb-2">
              {product.name}
            </h1>
            <p id={product.descId} className="font-sans text-sm text-muted mb-4">{product.description}</p>

            {/* Price */}
            <p className="font-serif text-xl text-charcoal mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-borderwarm'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Short description */}
            <p className="font-sans text-sm text-warmgray leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            <Separator className="mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 font-sans text-xs tracking-cta uppercase border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-white'
                        : 'border-borderwarm text-charcoal hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 border border-borderwarm flex items-center justify-center hover:border-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-charcoal" />
                </button>
                <span className="font-sans text-sm text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-borderwarm flex items-center justify-center hover:border-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              className="w-full bg-gold hover:bg-gold-hover text-white h-12 text-sm tracking-cta uppercase font-sans font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              onClick={() => addItem(product, selectedVariant, quantity)}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart — ${product.price * quantity}
            </Button>

            <Separator className="mt-8 mb-6" />

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        <Separator className="my-12 md:my-16" />
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm">
                <div className="aspect-[3/4] overflow-hidden bg-cardwhite mb-3">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm tracking-product uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
                  {rp.name}
                </h3>
                <p className="font-sans text-sm text-charcoal mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
