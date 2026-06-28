import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, openItem, onChange }) {
  return (
    <div className="divide-y divide-stone-200 rounded-[1.75rem] border border-stone-200 bg-stone-50">
      {items.map((item) => {
        const isOpen = openItem === item.id

        return (
          <div key={item.id} id={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm uppercase tracking-[0.24em] text-stone-900 md:px-6"
              onClick={() => onChange(isOpen ? null : item.id)}
            >
              <span>{item.label}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-stone-500 transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-stone-600 md:px-6">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
