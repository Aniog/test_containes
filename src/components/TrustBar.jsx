import React from 'react'

const trustItems = [
  { icon: '🌍', text: 'Free Worldwide Shipping' },
  { icon: '↩️', text: '30-Day Returns' },
  { icon: '✨', text: '18K Gold Plated' },
  { icon: '💎', text: 'Hypoallergenic' }
]

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-xl">{item.icon}</span>
              <span className="font-sans text-sm uppercase tracking-wide text-gray-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
