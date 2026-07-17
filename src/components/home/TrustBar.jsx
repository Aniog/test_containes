import React from 'react'

export default function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ]

  return (
    <div className="bg-background border-b border-border py-4 overflow-hidden">
      <div className="flex items-center justify-center gap-12 md:gap-24 animate-in slide-in-from-bottom-2 duration-700">
        {items.map((item, i) => (
          <span key={i} className="text-[10px] uppercase tracking-[0.2em] whitespace-nowrap opacity-60">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
