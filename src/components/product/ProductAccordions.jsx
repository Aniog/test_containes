import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const accordionItems = [
  {
    key: 'description',
    label: 'Description',
    content:
      'Layer-friendly, skin-flattering silhouettes with an elevated finish designed for everyday wear and gifting.',
  },
  {
    key: 'materials',
    label: 'Materials & Care',
    content:
      '18K gold plating over brass or sterling-tone alloy, nickel-free, hypoallergenic, and best stored in the pouch provided. Avoid direct contact with water, perfume, and lotions.',
  },
  {
    key: 'shipping',
    label: 'Shipping & Returns',
    content:
      'Complimentary worldwide shipping on qualifying orders, dispatched in 1–2 business days, with 30-day returns for unworn pieces in original packaging.',
  },
]

export default function ProductAccordions() {
  const [openKey, setOpenKey] = useState('description')

  return (
    <div className="space-y-4">
      {accordionItems.map((item) => {
        const isOpen = openKey === item.key

        return (
          <div
            key={item.key}
            className="overflow-hidden rounded-[1.5rem] border border-velmora-sand/50 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? '' : item.key)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-stone-700">{item.label}</span>
              <ChevronDown className={cn('h-4 w-4 text-stone-500 transition', isOpen && 'rotate-180')} />
            </button>
            {isOpen ? <div className="px-5 pb-5 text-sm leading-7 text-stone-600">{item.content}</div> : null}
          </div>
        )
      })}
    </div>
  )
}
