const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center py-4 md:py-5 text-center"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
