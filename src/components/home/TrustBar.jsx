const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-linen bg-velmora-cream text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] md:justify-center md:px-8">
        {items.map((item, index) => (
          <span key={item} className="flex shrink-0 snap-start items-center gap-6 text-velmora-sage">
            <span>{item}</span>
            {index < items.length - 1 && <span className="h-1 w-1 rounded-full bg-velmora-champagne" />}
          </span>
        ))}
      </div>
    </div>
  )
}
