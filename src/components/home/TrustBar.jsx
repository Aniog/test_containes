export default function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ]

  return (
    <div className="bg-midnight-950 border-t border-b border-velvet-800/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto py-3 gap-6 text-center hide-scrollbar">
          {items.map((item) => (
            <span
              key={item}
              className="text-[11px] lg:text-xs tracking-widest uppercase text-velvet-300 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}