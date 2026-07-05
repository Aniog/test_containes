import { ChevronDown } from 'lucide-react'

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-line/80 py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm uppercase tracking-[0.28em] text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-mute transition duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen ? (
        <div className="pt-4 text-sm leading-7 text-velmora-mute">{content}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
