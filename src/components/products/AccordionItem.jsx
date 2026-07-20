import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ content, defaultOpen = false, title }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-sandDeep/70 py-4">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-medium text-ink">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-rosewood transition ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen ? <p className="mt-3 text-sm leading-7 text-ink/75">{content}</p> : null}
    </div>
  )
}
