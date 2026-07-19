import React from "react"

const items = ["Free Worldwide Shipping", "30-Day Returns", "18K Gold Plated", "Hypoallergenic"]

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe scrollbar-hide sm:px-8 md:justify-center md:gap-10">
        {items.map((item, index) => (
          <div key={item} className="flex shrink-0 snap-center items-center gap-8">
            <span>{item}</span>
            {index < items.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne md:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}
