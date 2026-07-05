import { useState } from "react"

const sections = [
  { id: "description", title: "Description" },
  { id: "materials", title: "Materials & Care" },
  { id: "shipping", title: "Shipping & Returns" },
]

export default function ProductAccordion({ description, materials, shipping }) {
  const [open, setOpen] = useState("description")

  const content = {
    description,
    materials,
    shipping,
  }

  return (
    <div className="mt-8 rounded-xl border border-brand-line bg-white divide-y divide-brand-line">
      {sections.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => setOpen((current) => (current === section.id ? "" : section.id))}
            className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-brand-ink"
          >
            {section.title}
            <span className="text-brand-subtle">{open === section.id ? "−" : "+"}</span>
          </button>
          {open === section.id && (
            <div className="px-5 pb-4 text-sm text-brand-muted leading-relaxed">
              {content[section.id]}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
