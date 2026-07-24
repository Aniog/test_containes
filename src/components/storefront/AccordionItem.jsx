import { Minus, Plus } from 'lucide-react'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-velmora-sand">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
      >
        <span className="text-sm uppercase tracking-widest text-velmora-ink">
          {title}
        </span>
        {isOpen ? (
          <Minus className="h-4 w-4 text-velmora-gold" />
        ) : (
          <Plus className="h-4 w-4 text-velmora-gold" />
        )}
      </button>
      {isOpen ? (
        <div className="pb-5 text-sm leading-7 text-velmora-smoke">{content}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
