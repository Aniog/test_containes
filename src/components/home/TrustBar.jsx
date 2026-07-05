const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream/85">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/15 border-x border-cream/15">
          {items.map((label) => (
            <div
              key={label}
              className="px-3 py-4 md:py-5 text-center text-[10px] md:text-[11px] uppercase tracking-widest2"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
