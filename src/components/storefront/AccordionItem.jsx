import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, content, open, onToggle }) {
  return (
    <div className="border-b border-stone-200 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={onToggle}
      >
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--velmora-ink)]">{title}</span>
        <ChevronDown className={`h-4 w-4 text-stone-500 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? <p className="pt-4 text-sm leading-7 text-stone-600">{content}</p> : null}
    </div>
  )
}
