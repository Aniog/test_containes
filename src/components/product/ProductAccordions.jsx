import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductAccordions({ product }) {
  const [open, setOpen] = useState('Description')
  const rows = [
    { title: 'Description', body: product.description },
    { title: 'Materials & Care', body: product.care },
    { title: 'Shipping & Returns', body: product.shipping },
  ]

  return (
    <div className="mt-12 border-t border-velmora-line text-velmora-ink">
      {rows.map((row) => {
        const expanded = open === row.title
        return (
          <div key={row.title} className="border-b border-velmora-line">
            <button
              type="button"
              onClick={() => setOpen(expanded ? '' : row.title)}
              className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso"
              aria-expanded={expanded}
            >
              {row.title}
              <ChevronDown className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="pb-6 text-sm leading-7 text-velmora-muted">{row.body}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
