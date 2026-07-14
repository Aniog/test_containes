const trustPoints = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-[0.26em] text-stone-600 md:gap-x-8 md:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-4">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? (
              <span className="hidden h-3 w-px bg-stone-300 md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
