import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { useCart } from '@/context/CartContext'

const Product = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem, toggleDrawer } = useCart()

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-brand-accent">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant)
    }
    toggleDrawer()
  }

  return (
    <div className="bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-white">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-20 overflow-hidden rounded-xl border ${selectedImage === idx ? 'border-brand-accent' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl font-semibold uppercase tracking-wide text-brand-ink">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-brand-muted">
              <div className="flex items-center gap-1 text-brand-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium text-brand-ink">{product.rating}</span>
              </div>
              <span>·</span>
              <span>{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
              <div className="mt-2 flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium capitalize transition-colors ${
                      variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Quantity</p>
              <div className="mt-2 inline-flex items-center rounded-full border border-brand-line">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-3 text-brand-ink hover:text-brand-accent">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm text-brand-ink">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-3 text-brand-ink hover:text-brand-accent">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button className="mt-6 w-full" variant="accent" size="lg" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <Accordion defaultValue="description" className="mt-8">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p>{product.details}</p>
                  <p className="mt-2">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>{product.shipping}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-brand-ink">You may also like</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="overflow-hidden rounded-2xl bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <p className="font-serif text-sm font-medium uppercase tracking-wide text-brand-ink">{item.name}</p>
                    <p className="text-sm text-brand-muted">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
