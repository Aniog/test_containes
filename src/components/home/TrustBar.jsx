const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-5 text-center sm:flex-row sm:gap-0 md:px-10">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center sm:flex-1 sm:justify-center"
          >
            <span className="text-[11px] uppercase tracking-widest2 text-stone">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="mx-4 hidden h-3 w-px bg-line sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
