import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items }) {
  return (
    <div className="border-t border-ink/10">
      {items.map((item) => (
        <details
          key={item.id}
          className="group border-b border-ink/10"
          open={item.defaultOpen}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-ink transition-colors hover:text-gold">
            <span className="font-serif text-lg">{item.title}</span>
            <ChevronDown
              size={18}
              className="transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <div className="pb-5 text-sm leading-relaxed text-stone">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
