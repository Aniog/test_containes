import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  return (
    <div className="divide-y divide-velmora-line border-y border-velmora-line">
      {items.map((item) => (
        <details key={item.title} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm uppercase tracking-[0.24em] text-velmora-ink">
            <span>{item.title}</span>
            <ChevronDown className="h-4 w-4 shrink-0 transition duration-300 group-open:rotate-180" />
          </summary>
          <div className="pt-4 text-sm leading-7 text-velmora-olive">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
