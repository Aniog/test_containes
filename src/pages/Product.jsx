import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { useCart } from '@/context/CartContext'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-ink underline">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs text-brand-muted">
        <Link to="/" className="hover:text-brand-ink">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-brand-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="aspect-[3x4] overflow-hidden rounded-md bg-brand-warm">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-16 w-16 overflow-hidden rounded-md border ${
                  selectedImage === idx ? 'border-brand-ink' : 'border-brand-line'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-serif text-3xl uppercase tracking-wide text-brand-ink">{product.name}</h1>
          <p className="mt-2 text-lg text-brand-ink">${product.price}</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-brand-muted">
            <div className="flex gap-0.5 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span>{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-brand-muted">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-brand-ink">Tone</p>
            <div className="mt-2 flex gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${
                    variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-brand-ink">Quantity</p>
            <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-brand-line">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-10 w-10 items-center justify-center text-brand-muted hover:text-brand-ink">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm text-brand-ink">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="flex h-10 w-10 items-center justify-center text-brand-muted hover:text-brand-ink">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Button
            className="mt-8 w-full"
            size="lg"
            onClick={() => {
              for (let i = 0; i < quantity; i++) addItem(product, variant)
            }}
          >
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </Button>

          <Accordion type="single" collapsible className="mt-8">
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
        <section className="mt-20">
          <h2 className="font-serif text-2xl text-brand-ink">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden rounded-md bg-brand-warm">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-3 text-xs uppercase tracking-widest text-brand-ink">{item.name}</p>
                <p className="mt-1 text-sm text-brand-muted">${item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}