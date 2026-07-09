const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto flex max-w-8xl flex-col items-center justify-center gap-3 px-5 py-5 text-center md:flex-row md:gap-0 md:px-8">
        {ITEMS.map((item, i) => (
          <div
            key={item}
            className="flex items-center md:px-8"
          >
            <span className="text-[11px] uppercase tracking-widest2 text-taupe md:text-xs">
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="ml-8 hidden h-3 w-px bg-sand md:ml-8 md:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
