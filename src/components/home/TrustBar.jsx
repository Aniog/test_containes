import React from 'react'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-[#1a1a1a] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && (
                <span className="hidden md:block w-px h-4 bg-[#3d3d3d]" />
              )}
              <span className="text-xs tracking-widest uppercase text-[#faf8f5]/70 font-sans">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
