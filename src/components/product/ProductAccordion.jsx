import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  {
    id: "description",
    title: "Description",
    bodyKey: "description",
  },
  {
    id: "materials",
    title: "Materials & Care",
    bodyKey: "care",
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    bodyKey: "shipping",
  },
]

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState("description")

  return (
    <div className="border-t border-line">
      {SECTIONS.map((section) => {
        const isOpen = open === section.id
        return (
          <div key={section.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : section.id)}
              className="w-full flex items-center justify-between py-5 md:py-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`accordion-${section.id}`}
            >
              <span className="font-sans text-[12px] uppercase tracking-name font-medium text-ink-primary">
                {section.title}
              </span>
              <Plus
                className={cn(
                  "h-4 w-4 text-ink-secondary transition-transform duration-300 ease-soft",
                  isOpen && "rotate-45",
                )}
                strokeWidth={1.5}
              />
            </button>
            <div
              id={`accordion-${section.id}`}
              className={cn(
                "grid transition-all duration-500 ease-soft",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-ink-secondary text-base leading-relaxed max-w-prose">
                  {product[section.bodyKey]}
                </p>
                {section.id === "materials" && (
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-secondary">
                    {product.materials.map((m) => (
                      <li key={m} className="flex items-baseline gap-2">
                        <span className="text-accent">·</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
