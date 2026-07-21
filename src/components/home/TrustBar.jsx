import React from "react"

const items = [
  { id: "shipping", label: "Free Worldwide Shipping" },
  { id: "returns", label: "30-Day Returns" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "hypo", label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="bg-bone border-y border-line"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 gap-x-8 py-4 md:py-5">
          {items.map((it, i) => (
            <li
              key={it.id}
              className="flex items-center gap-3 text-[10px] md:text-[11px] tracking-widest2 uppercase text-ink/80"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block w-px h-3 bg-line mr-2 -ml-4"
                />
              )}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-champagne" />
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
