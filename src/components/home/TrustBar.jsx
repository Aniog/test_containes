const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="py-5 md:py-6 text-center px-2"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ivory/85">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
