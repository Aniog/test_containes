const TRUST_ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-velvet-950 text-velvet-400">
      <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {TRUST_ITEMS.map((text, i) => (
          <div key={text} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold-500/60" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.08em] uppercase font-medium">{text}</span>
            {i < TRUST_ITEMS.length - 1 && (
              <span className="hidden md:block w-px h-3 bg-velvet-700 ml-4" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
