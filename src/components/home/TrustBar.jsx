const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-cream" aria-label="Our promises">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 md:justify-between md:px-10">
        {ITEMS.map((item, i) => (
          <span
            key={item}
            className="flex items-center gap-8 text-[10px] font-medium uppercase tracking-[0.24em] text-mocha md:text-[11px]"
          >
            {item}
            {i < ITEMS.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-gold/50 md:block" />}
          </span>
        ))}
      </div>
    </section>
  )
}
