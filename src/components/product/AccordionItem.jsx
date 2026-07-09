import { ChevronDown } from 'lucide-react'

function AccordionItem({ content, isOpen, onToggle, title }) {
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        type="button"
      >
        <span className="text-sm uppercase tracking-micro text-truffle">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? (
        <div className="pb-5 pr-8 text-sm leading-7 text-muted">{content}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
