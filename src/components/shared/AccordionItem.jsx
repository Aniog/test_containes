import { ChevronDown } from 'lucide-react'

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-overline text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-taupe transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-taupe">{content}</p>
      )}
    </div>
  )
}

export default AccordionItem
