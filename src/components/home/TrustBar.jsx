export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-velmora-charcoal text-white py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto hide-scrollbar">
          {items.map((item) => (
            <span
              key={item}
              className="text-[11px] md:text-xs tracking-widest uppercase font-sans whitespace-nowrap opacity-90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
