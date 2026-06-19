import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProductAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-[#E5DDD3]">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            className="w-full flex items-center justify-between py-4 font-sans text-sm font-medium text-[#2D2A24] tracking-[0.05em] uppercase group"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            {item.title}
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform duration-300 text-[#8C867C]',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-80 pb-4' : 'max-h-0'
            )}
          >
            <p className="font-sans text-sm text-[#8C867C] leading-relaxed whitespace-pre-line">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}