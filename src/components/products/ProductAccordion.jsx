import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-divider-light">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-sm tracking-widest-xl uppercase text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'text-brand-muted-light transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-sm text-brand-muted-light leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  )
}

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0)

  const items = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="border-t border-brand-divider-light">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
