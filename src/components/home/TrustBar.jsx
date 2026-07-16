import React from 'react'

const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-3.5 text-[10px] font-sans tracking-wider uppercase">
          {items.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}