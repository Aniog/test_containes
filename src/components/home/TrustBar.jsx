const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-b border-brand-line bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-xs font-medium uppercase tracking-widest text-brand-muted">
          {items.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
