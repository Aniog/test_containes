import React from 'react'

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="border-b border-vel-border-light bg-vel-surface py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-vel-muted uppercase">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              {index < items.length - 1 && (
                <span className="hidden sm:inline text-vel-border">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
