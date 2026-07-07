import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-line-dark py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="text-sm uppercase tracking-[0.28em] text-ivory">
          {title}
        </span>
        {isOpen ? <Minus className="h-4 w-4 text-gold" /> : <Plus className="h-4 w-4 text-gold" />}
      </button>
      {isOpen ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-mist sm:text-base">
          {content}
        </p>
      ) : null}
    </div>
  )
}

export default AccordionItem
