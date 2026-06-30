import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AccordionItem = ({ title, open, onToggle, children }) => (
  <div className="border-b border-stone-200 py-5">
    <button
      type="button"
      className="flex w-full items-center justify-between gap-4 text-left"
      onClick={onToggle}
    >
      <span className="text-sm uppercase tracking-[0.28em] text-stone-900">{title}</span>
      <ChevronDown
        size={18}
        className={cn('text-stone-500 transition-transform duration-300', open && 'rotate-180')}
      />
    </button>
    {open ? <div className="mt-4 text-sm leading-7 text-stone-600">{children}</div> : null}
  </div>
)

export default AccordionItem
