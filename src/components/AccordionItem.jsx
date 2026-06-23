import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-line py-5">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-[0.24em] text-brand-espresso">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-brand-mink transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-mink">{content}</p> : null}
    </div>
  )
}

export default AccordionItem
