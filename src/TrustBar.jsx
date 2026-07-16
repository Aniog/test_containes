export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-velmora-charcoal py-3.5 overflow-hidden">
      <div className="flex items-center justify-center space-x-8 md:space-x-14">
        {items.map((text, i) => (
          <div key={i} className="flex items-center space-x-2">
            <span className="w-1 h-1 rounded-full bg-velmora-gold flex-shrink-0" />
            <span className="font-sans text-[11px] md:text-xs tracking-wider text-velmora-mist whitespace-nowrap">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}