import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-hairline-dark">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 border-0 bg-transparent px-0 py-5 text-left text-sm uppercase tracking-[0.2em] text-foreground"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? <div className="pb-5 text-sm leading-7 text-muted">{children}</div> : null}
    </div>
  )
}

const ProductAccordion = ({ product }) => {
  return (
    <div className="rounded-[1.5rem] border border-hairline-dark px-6">
      <AccordionItem title="Description" defaultOpen>
        <p>{product.description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <ul className="space-y-2 pl-4">
          {product.materialsCare.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p>{product.shippingReturns}</p>
      </AccordionItem>
    </div>
  )
}

export default ProductAccordion
