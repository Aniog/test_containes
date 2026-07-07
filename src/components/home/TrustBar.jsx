const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-cream/15 py-4">
          {ITEMS.map((item) => (
            <p
              key={item}
              className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-sand/80 py-2 md:py-0 md:px-8 text-center"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
