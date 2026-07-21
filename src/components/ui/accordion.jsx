import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("divide-y divide-ink-200", className)} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <button
        ref={ref}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex flex-1 items-center justify-between w-full py-4 text-left text-sm font-medium transition-all hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-ink-400 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-ink-600 leading-relaxed">
          {props.content}
        </div>
      )}
    </div>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

export { Accordion, AccordionItem, AccordionTrigger }
