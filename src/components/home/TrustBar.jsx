const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center py-5 text-center"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-cream/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
