import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ content, isOpen, onToggle, title }) => {
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm uppercase tracking-caps text-ink">{title}</span>
        <ChevronDown className={`h-4 w-4 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen ? <div className="pt-4 text-sm leading-7 text-muted">{content}</div> : null}
    </div>
  )
}

export default AccordionItem
