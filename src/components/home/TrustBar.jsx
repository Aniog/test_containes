import React from 'react'

const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-sand/70 bg-velmora-ivory text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-semibold uppercase tracking-widest text-velmora-smoke no-scrollbar sm:justify-center sm:px-6 lg:px-8">
        {items.map((item) => <span key={item} className="shrink-0 after:ml-8 after:text-velmora-sand after:content-['·'] last:after:hidden">{item}</span>)}
      </div>
    </div>
  )
}
