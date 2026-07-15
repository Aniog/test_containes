const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-content mx-auto px-6 md:px-10 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-center"
            >
              <span className="w-1 h-1 rounded-full bg-gold hidden md:block" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream/90">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
