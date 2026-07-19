import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ProductAccordion({ product }) {
  const sections = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.' },
  ]
  const [open, setOpen] = useState('Description')
  return <div className="mt-8 border-t border-velmora-line">{sections.map((section) => <div key={section.title} className="border-b border-velmora-line"><button type="button" onClick={() => setOpen(open === section.title ? '' : section.title)} className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-luxury text-velmora-espresso"><span>{section.title}</span><ChevronDown className={`h-4 w-4 transition ${open === section.title ? 'rotate-180' : ''}`} /></button>{open === section.title && <p className="pb-5 text-sm leading-7 text-velmora-taupe">{section.content}</p>}</div>)}</div>
}
