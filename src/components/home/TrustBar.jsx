const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8 py-4">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-4 md:gap-8">
              {i > 0 && <span className="hidden md:block w-px h-4 bg-cream/20" />}
              <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-cream/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
