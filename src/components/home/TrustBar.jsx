const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-y border-divider bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 md:py-4">
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-cream-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
