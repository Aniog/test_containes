const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-ink-soft border-y border-ink-soft">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink">
          {items.map((item) => (
            <div
              key={item}
              className="py-4 md:py-5 text-center"
            >
              <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest text-cream/90 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
