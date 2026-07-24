import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-charcoal-100/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-serif text-lg text-charcoal tracking-wide">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-charcoal-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 text-charcoal-500 body-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  )
}

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0)

  const items = [
    { title: 'Description', content: product.longDescription },
    { title: 'Materials & Care', content: (
      <div>
        <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
        <p><strong>Care Instructions:</strong> {product.care}</p>
      </div>
    )},
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="border-t border-charcoal-100/50">
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
