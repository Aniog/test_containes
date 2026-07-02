const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-stone-100 text-stone-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-[11px] uppercase tracking-[0.28em] sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            {index !== 0 ? <span className="hidden h-px w-8 bg-stone-300 sm:block" /> : null}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
