import React from 'react'

const trustItems = [
  { label: 'Free Worldwide Shipping' },
  { label: '30-Day Returns' },
  { label: '18K Gold Plated' },
  { label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-beige border-y border-taupe">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 py-3 md:py-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gold" />
              <span className="text-xs md:text-sm text-charcoal/70 tracking-wider uppercase font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}