import React from 'react'

export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-y border-divider bg-surface">
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-sans text-xs md:text-sm text-muted tracking-wide">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
