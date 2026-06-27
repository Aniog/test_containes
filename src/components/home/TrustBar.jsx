const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-ivory border-y border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/15">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="py-5 md:py-6 px-3 md:px-6 text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ivory/85"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
