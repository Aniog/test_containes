const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-2 text-center md:text-left">
          {items.map((item) => (
            <span
              key={item}
              className="text-[11px] uppercase tracking-[0.2em] text-ivory/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
