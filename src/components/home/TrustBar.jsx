const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-[11px] uppercase tracking-[0.34em] text-stone-600 sm:px-8 lg:px-12">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            <span>{item}</span>
            {index !== trustItems.length - 1 && <span className="hidden h-px w-8 bg-stone-300 sm:block" />}
          </div>
        ))}
      </div>
    </div>
  )
}
