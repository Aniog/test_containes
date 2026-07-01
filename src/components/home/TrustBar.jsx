import React from "react"

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between divide-y md:divide-y-0 md:divide-x divide-ivory/10">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex-1 w-full md:w-auto text-center py-4 md:py-5 text-[11px] uppercase tracking-[0.22em] text-ivory/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
