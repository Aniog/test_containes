const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-dark py-3.5">
      <div className="max-w-content mx-auto px-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {trustItems.map((item, i) => (
          <span key={item} className="text-[11px] tracking-[0.15em] uppercase text-white/70 font-medium flex items-center gap-2">
            {i > 0 && <span className="hidden md:inline text-white/20">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
