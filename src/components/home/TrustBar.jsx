const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export function TrustBar() {
  return (
    <div className="border-b border-hairline bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-4 md:px-8">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-10">
            {i > 0 && <span className="hidden md:inline-block h-3 w-px bg-hairline" />}
            <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-stone">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
