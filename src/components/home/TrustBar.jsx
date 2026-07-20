import React from 'react'

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ]

  return (
    <section className="bg-background border-b border-base/5 py-5 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex-1 min-w-fit text-center">
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-medium opacity-60">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
