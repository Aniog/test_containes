import React from 'react'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-mist bg-velmora-ivory text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] md:grid md:grid-cols-4 md:overflow-visible md:px-8 lg:px-12">
        {trustItems.map((item) => (
          <div key={item} className="min-w-max snap-start text-center text-velmora-cocoa/85 md:min-w-0">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
