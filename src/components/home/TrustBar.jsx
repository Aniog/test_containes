const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-velvet-950 py-3.5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {items.map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-cream-400/50 flex-shrink-0" />
              <span className="text-[10px] md:text-[11px] font-sans tracking-[0.15em] text-cream-300 whitespace-nowrap">
                {text}
              </span>
              <span className="w-1 h-1 rounded-full bg-cream-400/50 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
