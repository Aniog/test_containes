import { ChevronDown } from 'lucide-react'

function AccordionItem({ title, children, defaultOpen = false }) {
  return (
    <details
      className="group border-b border-hairline py-5 text-umber"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium uppercase tracking-[0.24em] text-umber marker:content-none">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 text-taupe transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="pt-4 text-sm leading-7 text-taupe">{children}</div>
    </details>
  )
}

export default AccordionItem
