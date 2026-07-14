const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row md:px-8">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-3">
            {i > 0 && <span className="hidden h-4 w-px bg-hairline sm:block" />}
            <span className="text-[11px] uppercase tracking-widest2 text-ink">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
