import React from "react"

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-noir text-bone-soft border-t border-bone-soft/15">
      <div className="mx-auto max-w-page px-6 md:px-12 py-4">
        <ul className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar text-[11px] tracking-[0.24em] uppercase font-sans">
          {ITEMS.map((item, idx) => (
            <li
              key={item}
              className="flex items-center gap-4 whitespace-nowrap"
            >
              <span>{item}</span>
              {idx < ITEMS.length - 1 && (
                <span aria-hidden="true" className="h-3 w-px bg-bone-soft/30" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
