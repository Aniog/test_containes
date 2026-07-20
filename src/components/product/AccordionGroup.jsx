import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionGroup({ product }) {
  const sections = [
    { title: 'Description', content: product.longDescription },
    { title: 'Materials & Care', content: `${product.material}, nickel-safe, and hypoallergenic. ${product.care}` },
    { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping and considered packaging. Returns are accepted within 30 days of delivery in original condition.' },
  ]
  const [open, setOpen] = useState('Description')

  return (
    <div className="mt-8 border-y border-velmora-sand text-velmora-ink">
      {sections.map((section) => (
        <div key={section.title} className="border-b border-velmora-sand last:border-b-0">
          <button
            type="button"
            onClick={() => setOpen(open === section.title ? '' : section.title)}
            className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-ink"
          >
            {section.title}
            <ChevronDown className={`h-4 w-4 transition ${open === section.title ? 'rotate-180' : ''}`} />
          </button>
          <div className={`grid transition-all duration-300 ${open === section.title ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <p className="overflow-hidden pb-5 text-sm leading-7 text-velmora-taupe">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
