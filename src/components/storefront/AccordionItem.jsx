import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, content, open, onToggle }) {
  return (
    <div className="border-b border-[#d9c7b7] py-5 text-[#241d1f]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.32em] text-[#6d5a57]">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-[#241d1f] transition ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5a4745]">{content}</p> : null}
    </div>
  )
}
