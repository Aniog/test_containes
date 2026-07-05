import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]?.value || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <main className="pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl text-brand-text mb-4">Product not found</p>
          <Link to="/shop"><Button>Back to Shop</Button></Link>
        </div>
      </main>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: selectedVariant,
    })
  }

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link to="/" className="hover:text-brand-text">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-brand-text">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-text">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-brand-warm">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="product-name text-2xl md:text-3xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                <span className="text-sm font-semibold text-brand-text">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-serif text-brand-text">${product.price}</p>
            <p className="mt-4 text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-brand-text mb-3">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`h-10 rounded-full border px-4 text-xs uppercase tracking-widest transition-colors ${
                      selectedVariant === variant.value
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-border text-brand-text hover:border-brand-gold'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-brand-text mb-3">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center text-brand-text hover:text-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-brand-text w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center text-brand-text hover:text-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button className="mt-8 w-full" size="lg" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <Accordion type="single" collapsible className="mt-10" defaultValue="">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed">{product.details}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 leading-relaxed"><span className="font-semibold">Materials:</span> {product.materials}</p>
                  <p className="leading-relaxed"><span className="font-semibold">Care:</span> {product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 leading-relaxed">{product.shipping}</p>
                  <p className="leading-relaxed">{product.returns}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">You May Also Like</p>
              <h2 className="section-title">Related Products</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}