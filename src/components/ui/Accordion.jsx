import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionItem = ({ question, answer, isOpen, onToggle, id }) => {
  return (
    <div
      id={id}
      className="border-b border-line last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-ink group-hover:text-[#0B2545]">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-ink-muted flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180 text-[#0B2545]"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-ink-subtle leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

const Accordion = ({ items, defaultOpen = 0, className }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}

export default Accordion
