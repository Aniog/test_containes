import { useState } from 'react'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { toast } from 'sonner'

const variants = ['Gold', 'Silver']

export default function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  const handleAdd = () => {
    addItem(product, selectedVariant.toLowerCase(), quantity)
    toast.success(`${product.name} added to cart`)
  }

  const accordionItems = [
    {
      id: 'desc',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.details.materials}\n\nCare: ${product.details.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. Delivery typically takes 5-10 business days. We offer 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1
          id={`pdp-${product.id}-name`}
          className="font-serif text-2xl md:text-3xl tracking-widest-xl uppercase text-charcoal-950"
        >
          {product.name}
        </h1>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xl font-medium text-charcoal-800">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            <span className="text-sm text-charcoal-600">{product.rating}</span>
            <span className="text-sm text-charcoal-400">({product.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-charcoal-600 leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      <div>
        <span className="text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
          Metal Tone
        </span>
        <div className="flex gap-3">
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2 text-xs tracking-widest uppercase rounded-full border transition-all ${
                selectedVariant === v
                  ? 'bg-charcoal-950 text-white border-charcoal-950'
                  : 'bg-transparent text-charcoal-700 border-charcoal-200 hover:border-charcoal-400'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <span className="text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
          Quantity
        </span>
        <div className="inline-flex items-center border border-charcoal-200 rounded-full">
          <button
            className="px-3 py-2 hover:text-gold-600 transition-colors"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-sm w-8 text-center">{quantity}</span>
          <button
            className="px-3 py-2 hover:text-gold-600 transition-colors"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className="w-full bg-charcoal-950 text-white py-4 text-xs tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-charcoal-800 transition-colors"
      >
        Add to Cart — ${product.price * quantity}
      </button>

      {/* Accordions */}
      <div className="border-t border-charcoal-100 pt-2">
        {accordionItems.map((item) => (
          <div key={item.id} className="border-b border-charcoal-100">
            <button
              onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-charcoal-800">{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
                  openAccordion === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openAccordion === item.id && (
              <div className="pb-4 text-sm text-charcoal-600 leading-relaxed whitespace-pre-line">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
