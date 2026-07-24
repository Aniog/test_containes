const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section
      aria-label="Promises"
      className="border-y border-line-light bg-paper"
    >
      <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 md:px-8">
        {ITEMS.map((label, i) => (
          <div key={label} className="flex items-center gap-8">
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-ink/80 md:text-[11px]">
              {label}
            </span>
            {i < ITEMS.length - 1 && (
              <span aria-hidden className="hidden text-ink/20 md:inline">
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
