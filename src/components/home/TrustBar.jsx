export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-warm-dark text-cream/60">
      <div className="container-wide flex items-center justify-center gap-4 md:gap-12 py-3 overflow-x-auto text-[10px] md:text-xs tracking-widest uppercase font-sans">
        {items.map((item, i) => (
          <span key={i} className="whitespace-nowrap flex items-center gap-4">
            {item}
            {i < items.length - 1 && <span className="w-0.5 h-0.5 rounded-full bg-cream/20" />}
          </span>
        ))}
      </div>
    </div>
  )
}