const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const TrustBar = () => {
  return (
    <section className="border-y border-stone-200/70 bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-center md:gap-6">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center justify-center gap-6">
              <p className="text-[11px] uppercase tracking-[0.32em] text-stone-700">{item}</p>
              {index < trustItems.length - 1 ? (
                <span className="hidden h-3 w-px bg-stone-300 md:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
