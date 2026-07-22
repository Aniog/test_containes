import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef(({ items, defaultOpen }, ref) => {
  const [openItem, setOpenItem] = React.useState(defaultOpen || null)

  return (
    <div ref={ref} className="divide-y divide-taupe">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenItem(openItem === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left font-sans text-sm font-medium text-charcoal hover:text-gold transition-colors"
          >
            {item.title}
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                openItem === index && "rotate-180"
              )}
            />
          </button>
          {openItem === index && (
            <div className="pb-5 text-charcoal-light font-sans text-sm leading-relaxed animate-slide-down">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
})
Accordion.displayName = "Accordion"

export { Accordion }
