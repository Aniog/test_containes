import React from 'react'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-base py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && (
                <span className="hidden md:block w-px h-4 bg-velmora-gold/30" />
              )}
              <span className="font-sans text-xs tracking-wider text-velmora-gold-light/90">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
