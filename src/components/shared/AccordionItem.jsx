import { Minus, Plus } from 'lucide-react'

const AccordionItem = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-sand/60 py-6">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left text-sm uppercase tracking-[0.18em] text-obsidian"
      >
        <span>{title}</span>
        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>
      {isOpen ? (
        <div className="pt-4 text-sm leading-7 text-truffle">{children}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
