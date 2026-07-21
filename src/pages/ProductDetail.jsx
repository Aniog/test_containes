import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem, setDrawer } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('gold')
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm text-[#1a1a1a]/70">Product not found.</p>
        <Link to="/shop" className="mt-3 inline-flex text-sm text-[#c9a96e] hover:underline">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })
    }
    setDrawer(true)
  }

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: (
      <div>
        <p className="text-sm text-[#1a1a1a]/80">{product.details}</p>
        <p className="mt-2 text-sm text-[#1a1a1a]/80">{product.care}</p>
      </div>
    )},
    { key: 'shipping', label: 'Shipping & Returns', content: (
      <p className="text-sm text-[#1a1a1a]/80">{product.shipping}</p>
    )},
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="mb-6 text-xs text-[#1a1a1a]/60">
        <Link to="/" className="hover:text-[#c9a96e]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#c9a96e]">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-[#1a1a1a]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-[#f5f5f5]">
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              src={`https://placehold.co/800x800/f5f5f5/1a1a1a?text=${encodeURIComponent(product.name)}`}
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setSelectedImage(idx)}
                className={cn(
                  'aspect-square overflow-hidden rounded-xl border-2 bg-[#f5f5f5]',
                  selectedImage === idx ? 'border-[#c9a96e]' : 'border-transparent'
                )}
              >
                <img alt={img.alt} className="h-full w-full object-cover" src={`https://placehold.co/400x400/f5f5f5/1a1a1a?text=${encodeURIComponent(product.name)}`} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-[#1a1a1a]/60">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl tracking-wide text-[#1a1a1a]">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-[#c9a96e]">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-[#1a1a1a]/60">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-3 text-2xl font-medium text-[#1a1a1a]">${product.price}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/80">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-[#1a1a1a]/60">Tone</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['gold', 'silver'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setVariant(opt)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition',
                    variant === opt ? 'border-[#c9a96e] bg-[#c9a96e]/10 text-[#1a1a1a]' : 'border-[#f0f0f0] text-[#1a1a1a] hover:border-[#c9a96e]'
                  )}
                >
                  {variant === opt && <Check className="h-4 w-4" />}
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-[#f0f0f0]">
              <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 text-[#1a1a1a] hover:text-[#c9a96e]" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-medium text-[#1a1a1a]">{quantity}</span>
              <button type="button" onClick={() => setQuantity(q => q + 1)} className="p-2 text-[#1a1a1a] hover:text-[#c9a96e]" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button variant="accent" size="lg" className="flex-1 rounded-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>

          <div className="mt-8 space-y-2 border-t border-[#f0f0f0] pt-6">
            {accordions.map(item => (
              <div key={item.key} className="border-b border-[#f0f0f0]">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-[#1a1a1a]"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={cn('h-4 w-4 transition-transform', openAccordion === item.key ? 'rotate-180' : '')} />
                </button>
                {openAccordion === item.key && <div className="pb-4">{item.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl tracking-wide text-[#1a1a1a]">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(item => (
              <Link key={item.id} to={`/product/${item.id}`} className="group rounded-xl border border-[#f0f0f0] bg-white p-3 transition hover:shadow-lg">
                <div className="aspect-square overflow-hidden rounded-lg bg-[#f5f5f5]">
                  <img alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={`https://placehold.co/600x600/f5f5f5/1a1a1a?text=${encodeURIComponent(item.name)}`} />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-[#1a1a1a]">{item.name}</p>
                  <p className="text-sm text-[#1a1a1a]">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetail
