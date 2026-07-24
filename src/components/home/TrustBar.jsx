const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12 text-center">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="text-[11px] md:text-xs uppercase tracking-widest3 text-cream/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
