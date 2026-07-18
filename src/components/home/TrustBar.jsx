const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-ivory border-y border-ink-soft">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-center">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="text-[11px] md:text-xs uppercase tracking-widest2 text-muted-dark flex items-center justify-center"
            >
              <span className="text-gold mr-2">✦</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
