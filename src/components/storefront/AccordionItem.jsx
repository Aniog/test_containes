import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, open, onToggle, children }) => {
  return (
    <div className="border-b border-[rgba(215,195,171,0.7)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm uppercase tracking-[0.24em] text-[#241a13] transition hover:text-[#c19a6b]"
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden text-sm leading-7 text-[#6f5946]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
