const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian border-b border-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center">
              <span
                className="font-manrope text-[9px] tracking-[0.2em] uppercase py-3 px-4 md:px-6 whitespace-nowrap"
                style={{ color: 'rgba(250,247,242,0.70)' }}
              >
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span style={{ color: '#3A3530' }} className="hidden md:block">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
