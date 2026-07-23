import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function ProductAccordions({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-mist/70 rounded-[1.75rem] border border-mist/70 bg-porcelain/75">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm uppercase tracking-[0.22em] text-ink">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-ink/60 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-ink/72">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordions
