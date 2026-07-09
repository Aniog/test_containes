export function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ]

  return (
    <div className="border-b border-velmora-stone bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-velmora-charcoal"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
