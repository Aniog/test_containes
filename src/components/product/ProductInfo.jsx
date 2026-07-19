import { Minus, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import ProductAccordion from '@/components/product/ProductAccordion.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'

export default function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  return (
    <section className="text-velmora-espresso"><p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">{product.category}</p><h1 id={`pdp-${product.slug}-name`} className="mt-3 font-serif text-5xl uppercase leading-tight tracking-product md:text-6xl">{product.name}</h1><div className="mt-4 flex flex-wrap items-center gap-4"><p className="text-xl">{formatPrice(product.price)}</p><div className="flex items-center gap-1 text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}<span className="ml-2 text-sm text-velmora-taupe">{product.rating} ({product.reviews})</span></div></div><p id={`pdp-${product.slug}-desc`} className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p><div className="mt-8"><p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Tone</p><div className="flex gap-3">{product.variants.map((option) => <button key={option} type="button" onClick={() => setVariant(option)} className={`rounded-full border px-5 py-2 text-sm transition ${variant === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-porcelain' : 'border-velmora-line text-velmora-espresso hover:border-velmora-gold'}`}>{option}</button>)}</div></div><div className="mt-6 flex items-center gap-4"><span className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Qty</span><div className="flex items-center border border-velmora-line"><button type="button" className="p-3" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></button><span className="min-w-10 text-center">{quantity}</span><button type="button" className="p-3" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></button></div></div><button type="button" onClick={() => addItem(product, quantity, variant)} className="mt-7 w-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-porcelain">Add to Cart</button><ProductAccordion product={product} /></section>
  )
}
