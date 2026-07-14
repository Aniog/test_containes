const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  // Duplicate for seamless marquee on mobile; static row on desktop.
  const row = [...items, ...items]
  return (
    <div className="bg-ink text-ivory border-y border-ivory/10 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        {/* Desktop static */}
        <div className="hidden md:grid grid-cols-4 divide-x divide-ivory/15">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-widest2 text-ivory/85"
            >
              <span className="w-1 h-1 rounded-full bg-champagne" />
              {t}
            </div>
          ))}
        </div>
        {/* Mobile marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex marquee-track whitespace-nowrap py-4">
            {row.map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-6 text-[11px] uppercase tracking-widest2 text-ivory/85"
              >
                <span className="w-1 h-1 rounded-full bg-champagne" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
