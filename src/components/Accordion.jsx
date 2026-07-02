import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-t border-cream-muted">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-cream-muted">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={16} className="text-stone" />
              ) : (
                <Plus size={16} className="text-stone" />
              )}
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
              )}
            >
              <p className="font-sans text-sm text-stone leading-relaxed">{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
