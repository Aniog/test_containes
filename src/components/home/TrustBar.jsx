const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-3 sm:gap-8 md:gap-12 lg:px-8">
        {trustItems.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-wide text-warmgray"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
