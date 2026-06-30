const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto flex max-w-editorial flex-col items-center justify-between gap-3 px-6 py-5 text-center md:flex-row md:px-10">
        {ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
