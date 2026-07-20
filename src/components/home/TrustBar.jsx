const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="py-5 md:py-6 text-center text-[11px] md:text-xs tracking-[0.2em] uppercase text-cream/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
