const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/10">
          {items.map((item) => (
            <div
              key={item}
              className="py-4 md:py-5 px-3 text-center text-[10px] md:text-[11px] uppercase tracking-widest2 text-ivory/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
