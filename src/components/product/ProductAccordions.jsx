import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AccordionItem({ content, isOpen, onToggle, title }) {
  return (
    <div className="border-b border-stone-800/80 py-6">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={onToggle}
        type="button"
      >
        <span className="text-xs uppercase tracking-[0.24em] text-stone-200">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-stone-400 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? (
        <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-300">{content}</p>
      ) : null}
    </div>
  )
}

function ProductAccordions({ product }) {
  const [openKey, setOpenKey] = useState('description')

  const items = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materials },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <section className="section-shell pt-12">
      <div className="rounded-[2rem] border border-stone-800/80 bg-stone-950/40 px-6 py-3 sm:px-8">
        {items.map((item) => (
          <AccordionItem
            content={item.content}
            isOpen={openKey === item.key}
            key={item.key}
            onToggle={() => setOpenKey((current) => (current === item.key ? '' : item.key))}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductAccordions
