import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  return (
    <details className="group border-t border-velmora-ink/10 py-5 text-velmora-ink" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink marker:hidden">
        {title}
        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
      </summary>
      <div className="pt-4 text-sm leading-7 text-velmora-ink/70">{children}</div>
    </details>
  )
}
