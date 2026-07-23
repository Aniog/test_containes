const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center divide-y divide-line px-5 py-5 text-center md:flex-row md:divide-x md:divide-y-0 md:px-8">
        {items.map((item) => (
          <div
            key={item}
            className="flex w-full items-center justify-center py-2.5 text-[11px] uppercase tracking-widest2 text-stone md:py-0"
          >
            <span className="mr-2 text-gold">—</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
