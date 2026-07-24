import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-mist transition duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-mist">{content}</p> : null}
    </div>
  )
}

export default AccordionItem
