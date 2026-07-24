const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  // Duplicate for seamless marquee on mobile; static row on desktop.
  const loop = [...items, ...items]
  return (
    <div className="border-y border-line bg-cream">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 md:px-10">
        {/* Desktop: static centered row */}
        <div className="hidden items-center justify-between py-4 md:flex">
          {items.map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-widest2 text-charcoal"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Mobile: marquee */}
        <div className="flex overflow-hidden py-4 md:hidden">
          <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
            {loop.map((t, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[11px] uppercase tracking-widest2 text-charcoal"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
