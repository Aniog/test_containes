const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="hairline-y bg-velmora-surface">
      <div className="page-container section-padding">
        <div className="flex items-center justify-center gap-6 md:gap-14 py-4 overflow-x-auto">
          {items.map((text, i) => (
            <div key={text} className="flex items-center gap-6 md:gap-14 flex-shrink-0">
              <span className="text-[11px] md:text-xs tracking-[0.12em] uppercase text-velmora-text-secondary whitespace-nowrap">
                {text}
              </span>
              {i < items.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-velmora-gold flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}