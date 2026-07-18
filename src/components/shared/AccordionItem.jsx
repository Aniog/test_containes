import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm uppercase tracking-[0.28em] text-stone-800">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-stone-500 transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen ? <p className="pb-5 text-sm leading-7 text-stone-600">{content}</p> : null}
    </div>
  )
}

export default AccordionItem
